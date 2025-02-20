/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://acfwndperemrfozumknm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjZnduZHBlcmVtcmZvenVta25tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwMTE4MDgsImV4cCI6MjA1NTU4NzgwOH0.Xaz1aHiTMVShm407SgXM-m5vLeySkVIbppwlYURBtAk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
