<script>
    import { onMount } from 'svelte';

    import Userfront from '$lib/UserfrontSvelte'
    import { PasswordResetForm } from '$lib/UserfrontSvelte'

    console.log('script@RESET');
    console.log(Userfront.tokens.accessToken);

    onMount( () => {
        console.log('onMount@RESET');
        console.log(Userfront.tokens.accessToken);
    });
</script>

<PasswordResetForm />
