# Audio Files Setup

The `/audio` directory contains 104 MP3 files for Dr. Yasir Qadhi's Seerah lecture series.

## ⚠️ IMPORTANT: Audio Files Not in Git Repository
The audio files total approximately 3.5GB and range from 30-70MB each. Due to GitHub's file size limitations and bandwidth considerations, these files are NOT included in the Git repository.

## Deployment Instructions for Vercel

### Step 1: Deploy the Code
1. Connect this GitHub repository to Vercel
2. Deploy the application (it will work but audio won't play yet)

### Step 2: Add Audio Files
Since the audio files are too large for Git, you have several options:

#### Option A: Use External Storage (Recommended)
1. Upload all audio files to a cloud storage service (AWS S3, Google Cloud Storage, Cloudflare R2, etc.)
2. Update the URLs in `src/data/seerah-structure.ts` to point to your cloud storage
3. Redeploy the application

#### Option B: Direct Upload to Vercel
1. After deployment, use Vercel's file system to upload the audio files
2. Place them in the `/audio` directory
3. Note: This may have bandwidth limitations

#### Option C: Use a CDN
1. Upload files to a CDN service
2. Update audio URLs in the code
3. Benefits: Better performance, lower costs

## Required Audio Files

The application expects 104 MP3 files in the `/audio` directory. These files are from Dr. Yasir Qadhi's Seerah lecture series, numbered from 001 to 104.

### File Naming Convention
Files should maintain their original names, for example:
- `001 Seerah of Prophet Muhammed 1 - Specialities of Prophet Muhammed - Yasir Qadhi  April 2011.mp3`
- `002 Seerah of Prophet Muhammed 2 - Specialities of Prophet Muhammed Part 2 - Yasir Qadhi  May 2011.mp3`
- ... and so on through lecture 104

## Total Size
- Number of files: 104
- Total size: ~3.5GB
- Individual file sizes: 30-70MB each

## Alternative Solution
If you cannot host the audio files, you could:
1. Embed YouTube/SoundCloud players instead
2. Link to external hosting where the lectures are already available
3. Use a podcast hosting service

## Note for Developers
The audio file paths are defined in `/src/data/seerah-structure.ts`. If you change the hosting location, update the paths there.