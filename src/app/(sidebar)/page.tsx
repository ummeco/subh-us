import {
  Breadcrumb,
  BreadcrumbHome,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/components/breadcrumbs";
import { ContentLink } from "@/components/content-link";
import { PageSection } from "@/components/page-section";
import { SidebarLayoutContent } from "@/components/sidebar-layout";
import { getModules, type Module } from "@/data/lessons";
import { BookIcon } from "@/icons/book-icon";
import { ClockIcon } from "@/icons/clock-icon";
import { LessonsIcon } from "@/icons/lessons-icon";
import { PlayIcon } from "@/icons/play-icon";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seerah of Prophet Muhammad ﷺ - Dr. Yasir Qadhi",
  description:
    "A comprehensive 104-lecture series on the life and times of Prophet Muhammad ﷺ by Dr. Yasir Qadhi.",
};

function formatDuration(seconds: number): string {
  let h = Math.floor(seconds / 3600);
  let m = Math.floor((seconds % 3600) / 60);

  return h > 0 ? (m > 0 ? `${h} hr ${m} min` : `${h} hr`) : `${m} min`;
}

export default async function Page() {
  let modules = await getModules();
  let lessons = modules.flatMap(({ lessons }) => lessons);
  let duration = lessons.reduce(
    (sum, { video, audio }) => sum + (video?.duration ?? audio?.duration ?? 3600),
    0,
  );

  return (
    <SidebarLayoutContent
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbHome />
          <BreadcrumbSeparator />
          <Breadcrumb>Overview</Breadcrumb>
        </Breadcrumbs>
      }
    >
      <div className="relative mx-auto max-w-7xl">
        <div className="absolute -inset-x-2 top-0 -z-10 h-80 overflow-hidden rounded-t-2xl sm:h-88 md:h-112 lg:-inset-x-4 lg:h-128">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-green-800/30 to-emerald-950/40" />
          <div className="absolute inset-0 rounded-t-2xl outline-1 -outline-offset-1 outline-emerald-950/10 dark:outline-emerald-400/10" />
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="relative">
            <div className="px-4 pt-48 pb-12 lg:py-24">
              <h1 className="text-4xl font-bold text-emerald-900 dark:text-emerald-400">Seerah of Prophet Muhammad ﷺ</h1>
              <p className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-300">By Dr. Yasir Qadhi</p>
              <p className="mt-7 max-w-lg text-base/7 text-pretty text-gray-600 dark:text-gray-400">
                A comprehensive 104-lecture series covering the blessed life of Prophet Muhammad ﷺ from before his birth through the immediate aftermath of his passing.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm/7 font-semibold text-gray-950 sm:gap-3 dark:text-white">
                <div className="flex items-center gap-1.5">
                  <BookIcon className="stroke-emerald-700/60 dark:stroke-emerald-400/60" />
                  {modules.length} sections
                </div>
                <span className="hidden text-gray-950/25 sm:inline dark:text-white/25">
                  &middot;
                </span>
                <div className="flex items-center gap-1.5">
                  <LessonsIcon className="stroke-emerald-700/60 dark:stroke-emerald-400/60" />
                  {lessons.length} lectures
                </div>
                <span className="hidden text-gray-950/25 sm:inline dark:text-white/25">
                  &middot;
                </span>
                <div className="flex items-center gap-1.5">
                  <ClockIcon className="stroke-emerald-700/60 dark:stroke-emerald-400/60" />
                  {formatDuration(duration)}
                </div>
              </div>
              <div className="mt-10">
                <Link
                  href={`/${modules[0].lessons[0].id}`}
                  className="inline-flex items-center gap-x-2 rounded-full bg-emerald-700 px-4 py-2 text-sm/7 font-semibold text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 transition-colors"
                >
                  <PlayIcon className="fill-white" />
                  Start the course
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-16 pb-10 sm:px-4">
              {modules.map((module: Module, index: number) => (
                <PageSection
                  key={module.id}
                  id={module.id}
                  title={`Section ${index + 1}`}
                >
                  <div className="max-w-2xl">
                    <h2 className="text-2xl/7 font-medium tracking-tight text-pretty text-gray-950 dark:text-white">
                      {module.title}
                    </h2>
                    <p className="mt-4 text-base/7 text-gray-700 sm:text-sm/7 dark:text-gray-400">
                      {module.description}
                    </p>

                    <ol className="mt-6 space-y-4">
                      {module.lessons.map((lesson) => (
                        <li key={lesson.id}>
                          <ContentLink
                            title={lesson.title}
                            description={lesson.description}
                            href={`/${lesson.id}`}
                            type={lesson.audio ? "audio" : "article"}
                            duration={lesson.video?.duration || lesson.audio?.duration}
                          />
                        </li>
                      ))}
                    </ol>
                  </div>
                </PageSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarLayoutContent>
  );
}
