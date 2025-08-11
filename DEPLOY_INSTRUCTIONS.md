# Deployment Instructions

## Audio Files Setup

The audio files are too large for Vercel deployment (7GB total). You need to host them separately:

### Option 1: Use a CDN (Recommended)
1. Upload all audio files to a CDN service like:
   - Cloudflare R2
   - AWS S3 + CloudFront
   - Bunny CDN
   - Google Cloud Storage

2. Update the audio URLs in `src/data/seerah-structure.ts` to point to the CDN URLs

### Option 2: Use a separate file hosting service
1. Upload to services like:
   - Dropbox
   - Google Drive (with public links)
   - OneDrive

2. Update the audio URLs accordingly

### Option 3: Use Git LFS
1. Install Git LFS: `git lfs install`
2. Track MP3 files: `git lfs track "*.mp3"`
3. Add and commit the files
4. Note: This still may exceed Vercel's limits

## Current Status
- The repository has been cleaned to remove the large Git history
- Audio files are present locally but ignored by Git
- The application expects audio files at `/audio/[filename].mp3`

## To Deploy:
1. Choose an audio hosting solution above
2. Update the audio URLs in the codebase
3. Push to GitHub
4. Deploy to Vercel