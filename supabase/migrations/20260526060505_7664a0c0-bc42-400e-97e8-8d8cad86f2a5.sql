CREATE POLICY "Service role can read signups"
ON public.signups
FOR SELECT
USING (auth.role() = 'service_role');