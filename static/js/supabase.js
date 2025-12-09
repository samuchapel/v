
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

// 🔧 Configurações do seu projeto
const SUPABASE_URL = "https://rcwdvxbjqqtnkyriaciy.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjd2R2eGJqcXF0bmt5cmlhY2l5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUyOTc1ODUsImV4cCI6MjA4MDg3MzU4NX0.eg1zeu6M5-4AiS5LcwX6-4RUxuKi1xAGsMuTO7vzTjI";


export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

