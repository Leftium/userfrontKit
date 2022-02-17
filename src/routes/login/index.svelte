<script>
    import { onMount } from 'svelte';

    import Userfront from '$lib/UserfrontSvelte'
    import { LoginForm } from '$lib/UserfrontSvelte'

    console.log('script@LOGIN');
    console.log(JSON.stringify(Userfront.tokens.accessToken, null, 4));

    onMount( () => {
        console.log('onMount@LOGIN');
        console.log(JSON.stringify(Userfront.tokens.accessToken, null, 4));
    });
</script>

<LoginForm />

Userfront.tokens.accessToken:
<pre>
    {JSON.stringify(Userfront.tokens.accessToken, null, 4)}
</pre>

