<script>
    import { onMount } from 'svelte';

    import Userfront from '$lib/UserfrontSvelte'
    import { PasswordResetForm } from '$lib/UserfrontSvelte'

    console.log('script@RESET');
    console.log(JSON.stringify(Userfront.tokens.accessToken, null, 4));

    onMount( () => {
        console.log('onMount@RESET');
        console.log(JSON.stringify(Userfront.tokens.accessToken, null, 4));
    });
</script>

<PasswordResetForm />

Userfront.tokens.accessToken:
<pre>
    {JSON.stringify(Userfront.tokens.accessToken, null, 4)}
</pre>

