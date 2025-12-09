import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// CONFIGURAÇÕES DO SEU PROJETO
const SUPABASE_URL = "https://rcwdvxbjqqtnkyriaciy.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_oQYvlgNxggrXE7EF_jajkw_pNACRETj";

// Criar cliente
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);