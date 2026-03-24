

# Rebrand "Sign Up for Updates" to "Beta Signup"

This is a copy/messaging update across two files. The underlying signup mechanism (name + email stored in `signups` table, confirmation email via Resend) stays exactly the same -- it already does what you need. No database or backend changes required.

## Changes

### 1. Update Hero CTA Button (Index.tsx)
- Change "Sign Up for Updates" to "Join the Beta"

### 2. Update SignupForm Component (SignupForm.tsx)
- Heading: "Stay in the Loop" → "Join the Beta"
- Subtitle: reword to emphasize beta testing -- "Be among the first artists to try ArtSupplyTracker. Sign up for early access and updates."
- Button text: "Sign Up" → "Join Beta" / "Joining…"
- Success message: "You're in!" → "Welcome to the Beta!" with copy mentioning they'll get early access and updates
- Privacy line stays as-is
- Toast message updated to match beta language

### 3. Update Welcome Email in signup Edge Function (signup/index.ts)
- Subject: "Welcome to ArtSupplyTracker!" → "Welcome to the ArtSupplyTracker Beta!"
- Email body: reword to confirm beta access and mention they'll receive updates on how to use the app before launch

### Files Modified
- `src/pages/Index.tsx` -- hero CTA text
- `src/components/SignupForm.tsx` -- form copy, button text, success state
- `supabase/functions/signup/index.ts` -- welcome email subject and body copy

