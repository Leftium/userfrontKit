<script context="module">
    import { browser } from '$app/env';

    import Userfront from '$lib/UserfrontSvelte'

    export function load({ session }) {
        if (browser) {
            const isLoggedIn = !!Userfront.tokens.accessToken;
            if (false) {  // Always false to prevent infinite redirect loop.
                return {
                    status: 302,
                    redirect: '/login'
                };
            }
        }

        console.log('load@DASHBOARD2');
        console.log(JSON.stringify(Userfront.tokens.accessToken, null, 4));

        return {};
    }

</script>

<script>
    import { onMount } from 'svelte';

    console.log('script@DASHBOARD2');
    console.log(JSON.stringify(Userfront.tokens.accessToken, null, 4));

    onMount( () => {
        console.log('onMount@DASHBOARD2');
        console.log(JSON.stringify(Userfront.tokens.accessToken, null, 4));
    });
</script>


<h1>Dashboard2</h1>

Userfront.tokens.accessToken:
<pre>
    {JSON.stringify(Userfront.tokens.accessToken, null, 4)}
</pre>

