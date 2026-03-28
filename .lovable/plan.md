

## Plan: Partner & Investor Contact Forms with Lovable Email

### What You'll Get
Contact forms on the Partner and Investor pages that:
- Collect name, email, and message from inquiries
- Store submissions in your database
- Send a branded confirmation email to the person who submitted (via your existing notify.artsupplytracker.com email system)
- Replace the current static mailto links

**Note:** Outbound emails will come from `noreply@notify.artsupplytracker.com` (your verified sender domain). Lovable's email system doesn't support multiple sender subdomains, so we can't send from `partner@` or `investor@` — but the email content will be clearly branded for each audience.

### Steps

1. **Create database table** — `contact_submissions` with fields: id, name, email, message, inquiry_type (partner/investor), created_at. RLS policy allowing anonymous inserts.

2. **Create two email templates**
   - `partner-inquiry-confirmation.tsx` — branded confirmation for partner inquiries
   - `investor-inquiry-confirmation.tsx` — branded confirmation for investor inquiries
   - Both styled with your wine/teal brand colors
   - Register both in `registry.ts`

3. **Add contact forms to pages**
   - Replace the mailto links on Partners and Investors pages with inline contact forms (name, email, message, submit button)
   - On submit: insert into `contact_submissions`, then invoke `send-transactional-email` with the appropriate template

4. **Deploy edge functions** — Redeploy `send-transactional-email` with the new templates

### Technical Details
- Templates go in `supabase/functions/_shared/transactional-email-templates/`
- Forms use `supabase.functions.invoke('send-transactional-email', ...)` — no new edge functions needed
- Idempotency keys derived from submission UUID + template name
- Emails from: `artsupplytracker <noreply@notify.artsupplytracker.com>`
- Update `investors@artsupplytracker.com` reference to use singular `investor@` per your preference (in display text)

