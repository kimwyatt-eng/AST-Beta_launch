---
name: Blog review mode default
description: Blog page defaults to review mode (drafts visible) during editing sessions
type: preference
---
The `/blog` page should default to Review Mode ON so drafts are always visible while editing. Only turn it off when explicitly toggled by the user or via `?preview=0`.

**How to apply:** In `src/pages/Blog.tsx`, `previewMode` defaults to `true` when no localStorage value exists.
