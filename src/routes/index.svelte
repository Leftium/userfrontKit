<script>
    import { onMount } from 'svelte';

    import Userfront from '$lib/UserfrontSvelte'
    import { SignupForm } from '$lib/UserfrontSvelte'

    console.log('script@HOME');
    console.log(Userfront.tokens.accessToken);

    onMount( () => {
        console.log('onMount@HOME');
        console.log(Userfront.tokens.accessToken);
    });
</script>

<SignupForm />

