import { ref } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";

const useSupabaseUser = () => {
    const loading = ref(false);
    const newUser = ref(null);
    const existingUser = ref(null);
    const error = ref(null);
    const user = ref(null);

    const router = useRouter();

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

    const userSignOut = async() => {
        let { error } = await supabase.auth.signOut();
        if (error) {
            throw new Error(error);
        }
        user.value = null;

    }


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
        userSignOut,
    }
}

export default useSupabaseUser;