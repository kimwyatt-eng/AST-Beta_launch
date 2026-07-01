-- Lock down SECURITY DEFINER functions to service_role only
DO $$
DECLARE
  fn text;
  sigs text[] := ARRAY[
    'public.enqueue_email(text, jsonb)',
    'public.delete_email(text, bigint)',
    'public.read_email_batch(text, integer, integer)',
    'public.move_to_dlq(text, text, bigint, jsonb)',
    'public.email_queue_dispatch()',
    'public.email_queue_wake()'
  ];
BEGIN
  FOREACH fn IN ARRAY sigs LOOP
    EXECUTE format('REVOKE ALL ON FUNCTION %s FROM PUBLIC', fn);
    EXECUTE format('REVOKE ALL ON FUNCTION %s FROM anon', fn);
    EXECUTE format('REVOKE ALL ON FUNCTION %s FROM authenticated', fn);
    EXECUTE format('GRANT EXECUTE ON FUNCTION %s TO service_role', fn);
  END LOOP;
END $$;