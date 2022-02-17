<script>
    import { onMount } from 'svelte';

    import Userfront from '$lib/UserfrontSvelte'
    import { SignupForm } from '$lib/UserfrontSvelte'

    console.log('script@HOME');
    console.log(JSON.stringify(Userfront.tokens.accessToken, null, 4));

    onMount( () => {
        console.log('onMount@HOME');
        console.log(JSON.stringify(Userfront.tokens.accessToken, null, 4));
    });
</script>

<SignupForm />

Userfront.tokens.accessToken:
<pre>
    {JSON.stringify(Userfront.tokens.accessToken, null, 4)}
</pre>

