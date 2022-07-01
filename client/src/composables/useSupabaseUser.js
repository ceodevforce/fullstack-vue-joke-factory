import { ref } from "vue";
import { supabase } from "../supabase";


const useSupabaseUser = () => {
    const loading = ref(false);
    const newUser = ref(null);
    const existingUser = ref(null);
    const error = ref(null);
    const user = ref(null);

    const userSignUp = async(email, password) => {
        let { user, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });
        if (error) {
            throw new Error(error);
        }
        newUser.value = user;
        return newUser;
    }

    const userSignIn = async(email, password) => {
        let { user, error } = await supabase.auth.signIn({
            email: email,
            password: password,
        });
        if (error) {
            throw new Error(error);
        }
        console.log(user);
        existingUser.value = user;
        return existingUser;
    }


    const userMagicLink = async(email) => {
        let { user, error } = await supabase.auth.magicLink({
            email: email,
        });
        if (error) {
            throw new Error(error);
        }
        newUser.value = user;
        return newUser;
    }

    const userSignOut = async() => {}


    // User is signed in
    user.value = supabase.auth.user();
    //TODO: Implement magic link (Later)
    const userSignThirdParty = async(provider) => {}

    return {
        loading,
        error,
        user,
        newUser,
        existingUser,
        userSignUp,
        userSignIn,
        userMagicLink,
    }
}

export default useSupabaseUser;