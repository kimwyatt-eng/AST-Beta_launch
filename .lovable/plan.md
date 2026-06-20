## Plan: Replace HeroSlideshow with Static Hero Image

### What we'll do
1. **Create Lovable Asset** from the uploaded `ast_homescreen_image.png` (via CLI) so it serves from CDN.
2. **Update `src/pages/Index.tsx`**:
   - Remove the `HeroSlideshow` import.
   - Replace the `lg:col-span-3` slideshow container with an `<img>` tag using the new asset URL.
   - Keep the existing 5-column hero grid so the image sits in the right 3 columns alongside the hero text.
   - Add appropriate alt text (`"ArtSupplyTracker — Organized to Create"`) and retain natural proportions (`object-contain`) per project image display constraints.
3. **Delete `src/components/HeroSlideshow.tsx`** since it will no longer be referenced anywhere.
4. **Clean up unused MVP assets** — verify the 9 `mvp-*.png` files in `src/assets/` are only referenced by `HeroSlideshow.tsx`, then remove them to keep the repo lean.

### Layout note
The hero remains a 2-column text / 3-column image split on large screens. The uploaded image is wide, so it will fill the right column cleanly with the same rounded corners and background treatment as the slideshow had.