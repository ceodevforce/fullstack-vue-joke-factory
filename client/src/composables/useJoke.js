//TODO: Add category to the joke

import { ref } from "vue";
import { supabase } from "../supabase";
const useJoke = () => {
    const loading = ref(false);
    const joke = ref("");
    const jokes = ref([]);

    const getJokes = async() => {
        try {
            loading.value = true;
            const { data, error } = await supabase.from('joke').select('*')
            if (error) {
                throw new Error(error);
            }
            console.log(data);
            jokes.value = data;
        } catch (error) {
            console.log(error);
        }
    };
    const addJoke = async(joke) => {
        const { question, punchline } = joke;

        try {
            const { data, error } = await supabase.from('joke').insert([{
                question: question,
                punchline: punchline,
            }])
            if (error) {
                throw new Error("Error adding joke");
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    const updateJoke = async(joke) => {}
    const deleteJoke = async(id) => {}

    return {
        loading,
        joke,
        jokes,
        getJokes,
        addJoke,
    };
};

export default useJoke;