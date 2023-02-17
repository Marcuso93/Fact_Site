import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://myaxtgovtwjuwezjuqam.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15YXh0Z292dHdqdXdlemp1cWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM1ODUwMjUsImV4cCI6MTk4OTE2MTAyNX0.CtzH-7LmTR0R2u9BhhZWAQDQ3kIiwkxcFj1kY14zPV4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
