# Videos Directory

This directory contains video assets for the CreativeAssetsSection component.

## Quick Start - Add Your Video

### Option 1: Use a Sample Video (Recommended for Testing)

1. **Download a free stock video:**
   - Visit: https://www.pexels.com/videos/ or https://pixabay.com/videos/
   - Search for: "file organization", "digital workspace", or "creative workflow"
   - Download a video (preferably MP4 format)
   - Rename it to: `creative-assets-demo.mp4`
   - Place it in this directory: `SuperSideClone/client/public/videos/`

2. **Or use this direct link:**
   ```bash
   # In your terminal, navigate to this directory and run:
   curl -o creative-assets-demo.mp4 "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=165&oauth2_token_id=57447761"
   ```

### Option 2: Use Your Own Video

1. **Place your video file here:**
   ```
   SuperSideClone/client/public/videos/creative-assets-demo.mp4
   ```

2. **Video Requirements:**
   - **Format:** MP4 (H.264 codec)
   - **Recommended Resolution:** 1920x1080 (Full HD) or 1280x720 (HD)
   - **Aspect Ratio:** 4:3 or 16:9
   - **Duration:** 10-30 seconds (for looping background)
   - **File Size:** Under 10MB (optimize for web)
   - **Audio:** Not required (video plays muted)

### Option 3: Use a CDN URL

If you have a video hosted online, update the video source in:
`SuperSideClone/client/src/components/CreativeAssetsSection.tsx`

Replace the video source:
```tsx
<source
  src="YOUR_CDN_URL_HERE.mp4"
  type="video/mp4"
/>
```

## Video Optimization

### Compress Your Video with FFmpeg:

```bash
# Install FFmpeg: https://ffmpeg.org/download.html

# Compress video to web-friendly size:
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -vf scale=1280:720 -c:a aac -b:a 128k creative-assets-demo.mp4

# For even smaller file size (lower quality):
ffmpeg -i input.mp4 -c:v libx264 -crf 32 -preset slow -vf scale=854:480 -an creative-assets-demo.mp4
```

### Online Compression Tools:
- https://www.freeconvert.com/video-compressor
- https://www.videosmaller.com/
- https://cloudconvert.com/mp4-converter

## Troubleshooting

### Video Not Playing?

1. **Check file location:**
   ```
   SuperSideClone/client/public/videos/creative-assets-demo.mp4
   ```

2. **Check file name:** Must be exactly `creative-assets-demo.mp4`

3. **Check browser console:** Open DevTools (F12) and look for errors

4. **Fallback image:** If video fails, component will show an image instead

### Video Too Large?

- Use the FFmpeg commands above to compress
- Target file size: 3-5 MB for optimal performance
- Consider using a CDN like Cloudinary or Vimeo

## Current Status

- ❌ `creative-assets-demo.mp4` - NOT YET ADDED
- ✅ Fallback image working: `/generated_images/Brand_identity_system_8af1f13b.png`
- ✅ Component ready at: `src/components/CreativeAssetsSection.tsx`

## Need Help?

The video element in the component has:
- ✅ Autoplay
- ✅ Looping
- ✅ Muted (required for autoplay)
- ✅ Poster image (shows while loading)
- ✅ Fallback to image if video fails
- ✅ Multiple source formats support

Once you add the video file, refresh your browser and it should play automatically!