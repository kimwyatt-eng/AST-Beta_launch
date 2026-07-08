---
name: Blog review mode default
description: Blog page defaults to review mode OFF; public visitors must never see the draft/review UI
type: preference
---
The `/blog` page must default to Review Mode OFF. Public visitors should never see the "Review mode" status bar or draft posts. Enable review only via `?preview=1` (persisted to localStorage). `?preview=0` clears it.

**How to apply:** In `src/pages/Blog.tsx`, `previewMode` defaults to `false` when no localStorage value exists, and the review-mode bar renders only when `previewMode` is true.
