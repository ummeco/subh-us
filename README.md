# Seerah of Prophet Muhammad ﷺ - Course Website

A comprehensive online learning platform for Dr. Yasir Qadhi's 104-lecture series on the life and times of Prophet Muhammad ﷺ.

## Overview

This website provides an organized, easy-to-navigate interface for studying the Seerah (biography) of Prophet Muhammad ﷺ. The lectures are categorized into thematic sections covering the entire life of the Prophet from before his birth through the immediate aftermath of his passing.

## Features

- **104 Audio Lectures**: Complete series by Dr. Yasir Qadhi
- **Organized Sections**: Lectures grouped into 21 thematic sections
- **Dark Theme**: Beautiful dark green and emerald color scheme
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Progress Tracking**: Keep track of completed lectures
- **Audio Player**: Built-in audio playback for each lecture

## Lecture Sections

1. Introduction & Foundation
2. Birth & Early Life
3. Revelation & Early Prophethood
4. Meccan Trials & Perseverance
5. Al-Isra wal-Mi'raj
6. The Hijrah
7. Establishing the Muslim Community
8. The Battle of Badr
9. Between Badr and Uhud
10. The Battle of Uhud
11. Trials & Tribulations
12. The Battle of Khandaq (Ahzab)
13. The Treaty of Hudaybiyyah
14. Khaybar & Expansion
15. Mu'tah & Path to Conquest
16. The Conquest of Makkah
17. Hunayn & Ta'if
18. The Battle of Tabuk
19. The Year of Delegations
20. Final Period
21. After the Prophet ﷺ

## Technology Stack

- **Framework**: Next.js 15.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Headless UI
- **Content**: MDX support for rich content

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ummeco/subh-us.git
cd subh-us
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # Reusable React components
│   ├── data/         # Course data and structure
│   └── icons/        # Custom SVG icons
├── audio/            # Audio lecture files (104 MP3 files)
├── out/              # Static build output (for deployment)
└── public/           # Static assets
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run format` - Format code with Prettier

## Audio Files

The audio lectures are stored in the `/audio` directory. Each file is named with its lecture number and title for easy identification.

## Customization

### Theme Colors

The dark green and emerald theme can be customized in `src/app/globals.css`. The color variables are defined using CSS custom properties for easy modification.

### Content Structure

The lecture organization is defined in `src/data/seerah-structure.ts`. You can modify sections, add descriptions, or reorganize lectures as needed.

## License

This project uses the Tailwind Plus template license. The audio content belongs to Dr. Yasir Qadhi.

## Credits

- **Lecturer**: Dr. Yasir Qadhi
- **Original Template**: Compass by Tailwind Plus
- **Development**: Custom implementation for Seerah course

---

May this platform be a means of beneficial knowledge and guidance for all who seek to learn about the blessed life of Prophet Muhammad ﷺ.