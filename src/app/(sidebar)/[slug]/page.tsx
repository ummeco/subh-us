import {
  Breadcrumb,
  BreadcrumbHome,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/components/breadcrumbs";
import { NextPageLink } from "@/components/next-page-link";
import { SidebarLayoutContent } from "@/components/sidebar-layout";
import TableOfContents from "@/components/table-of-contents";
import { Video } from "@/components/video-player";
import { getLesson } from "@/data/lessons";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { getModules } = await import("@/data/lessons");
  const modules = getModules();
  const slugs = modules.flatMap(module => 
    module.lessons.map(lesson => ({ slug: lesson.id }))
  );
  return slugs;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  let lesson = await getLesson((await params).slug);

  return {
    title: `${lesson?.title} - Seerah of Prophet Muhammad ﷺ`,
    description: lesson?.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  let slug = (await params).slug;
  let lesson = await getLesson(slug);

  if (!lesson) {
    notFound();
  }

  return (
    <SidebarLayoutContent
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbHome />
          <BreadcrumbSeparator className="max-md:hidden" />
          <Breadcrumb href={`/#${lesson.module.id}`} className="max-md:hidden">
            {lesson.module.title}
          </Breadcrumb>
          <BreadcrumbSeparator />
          <Breadcrumb>{lesson.title}</Breadcrumb>
        </Breadcrumbs>
      }
    >
      <div className="mx-auto max-w-7xl">
        <div className="-mx-2 sm:-mx-4">
          {lesson.video && (
            <Video
              id="video"
              src={lesson.video.url}
              poster={lesson.video.thumbnail}
            />
          )}
          {lesson.audio && (
            <div className="bg-surface-elevated rounded-lg p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Audio Lecture</h2>
              <audio controls className="w-full">
                <source src={lesson.audio.url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
        </div>
        <div className="mx-auto flex max-w-2xl gap-x-10 py-10 sm:py-14 lg:max-w-5xl">
          <div className="w-full flex-1">
            <div id="content" className="prose">
              <h1>{lesson.title}</h1>
              <p className="lead">{lesson.description}</p>
              <div className="mt-8">
                <h3>About this Lecture</h3>
                <p>This is part of Dr. Yasir Qadhi's comprehensive Seerah series covering the life and times of Prophet Muhammad ﷺ.</p>
                <p>Listen to the audio lecture above to learn about this important period in Islamic history.</p>
              </div>
            </div>
            <div className="mt-16 border-t border-gray-200 pt-8 dark:border-white/10">
              {lesson.next ? (
                <NextPageLink
                  title={lesson.next.title}
                  description={lesson.next.description}
                  href={`/${lesson.next.id}`}
                />
              ) : (
                <NextPageLink
                  title="Interviews"
                  description="Explore interviews with industry experts and thought leaders."
                  href="/interviews"
                />
              )}
            </div>
          </div>
          <div className="hidden w-66 lg:block">
            <TableOfContents contentId="content" />
          </div>
        </div>
      </div>
    </SidebarLayoutContent>
  );
}
