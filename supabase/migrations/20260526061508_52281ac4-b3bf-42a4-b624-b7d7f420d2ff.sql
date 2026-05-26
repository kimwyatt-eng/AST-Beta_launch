DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON public.contact_submissions;

CREATE POLICY "Service role can insert contact submissions"
ON public.contact_submissions
FOR INSERT
TO public
WITH CHECK (auth.role() = 'service_role');