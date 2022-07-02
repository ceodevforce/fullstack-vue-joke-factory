import { ref } from "vue";

const useFoo = () => {
    const loading = ref(false);
    const foo = ref("");

    const makeFoo = async() => {
        loading.value = true;
        foo.value = "foo";
    }
    const example = async() => {}

    return {
        loading,
        foo,
        makeFoo
    }
}

export default useFoo;