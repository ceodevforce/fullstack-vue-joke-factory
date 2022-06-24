const { RestDataSource } = require('apollo-datasource-rest')
const { createClient } = require('@supabase/supabase-js')

class Supasbase extends RestDataSource {
    constructor() {
        super()
        this.baseURL = "https://lksywyvtqrqviyffglej.supabase.co";
    }
}