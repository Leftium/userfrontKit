<script>
    import { onMount } from 'svelte';

    import Userfront from '$lib/UserfrontSvelte'
    import { LoginForm } from '$lib/UserfrontSvelte'

    console.log('script@LOGIN');
    console.log(Userfront.tokens.accessToken);

    onMount( () => {
        console.log('onMount@LOGIN');
        console.log(Userfront.tokens.accessToken);
    });
</script>

<LoginForm />
