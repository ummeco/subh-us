import { seerahSections } from './seerah-structure'

export type Module = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  video: {
    thumbnail: string;
    duration: number;
    url: string;
  } | null;
  audio?: {
    url: string;
    duration?: number;
  };
};

export function getModules(): Module[] {
  return lessons;
}

export async function getLesson(
  slug: string,
): Promise<(Lesson & { module: Module; next: Lesson | null }) | null> {
  let module = lessons.find(({ lessons }) =>
    lessons.some(({ id }) => id === slug),
  );

  if (!module) {
    return null;
  }

  let index = module.lessons.findIndex(({ id }) => id === slug);

  return {
    ...module.lessons[index],
    module,
    next: index < module.lessons.length - 1 ? module.lessons[index + 1] : null,
  };
}

export async function getLessonContent(_slug: string) {
  // For now, return a dynamic component that shows lecture info
  // In production, you'd have actual MDX content for each lecture
  return null;
}

// Convert Seerah sections to Module format
const lessons: Module[] = seerahSections.map(section => ({
  id: section.id,
  title: section.title,
  description: section.description,
  lessons: section.lectures.map(lecture => ({
    id: `lecture-${lecture.id}`,
    title: `${lecture.id}. ${lecture.title}`,
    description: lecture.description || section.description,
    video: null, // No video for audio lectures
    audio: {
      url: `https://raw.githubusercontent.com/ummeco/subh-us/main/public/audio/${encodeURIComponent(lecture.audioFile)}`,
      duration: lecture.duration ? parseInt(lecture.duration) : 3600 // Default 60 minutes
    }
  }))
}));

// Add a comprehensive introduction module at the beginning
const introductionModule: Module = {
  id: "welcome",
  title: "Welcome to the Seerah Course",
  description: "An introduction to studying the life of Prophet Muhammad ﷺ with Dr. Yasir Qadhi",
  lessons: [
    {
      id: "course-overview",
      title: "Course Overview",
      description: "Understanding the structure and approach of this comprehensive Seerah series",
      video: null,
      audio: undefined
    },
    {
      id: "importance-of-seerah",
      title: "Why Study the Seerah?",
      description: "The spiritual and practical benefits of studying the Prophet's life",
      video: null,
      audio: undefined
    }
  ]
};

// Export the final lessons array with introduction
export default [introductionModule, ...lessons];