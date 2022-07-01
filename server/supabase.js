const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = "https://lksywyvtqrqviyffglej.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxrc3l3eXZ0cXJxdml5ZmZnbGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI0OTI5OTIsImV4cCI6MTk2ODA2ODk5Mn0.mnSPS9_6FT7e8c3VO4iv6nNCzEwJdz2Ud4XD9n7MeGM";

const supabase = createClient(supabaseUrl, supabaseKey)


module.exports = supabase