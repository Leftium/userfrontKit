<script context="module">
    import { browser } from '$app/env';

    import Userfront from '$lib/UserfrontSvelte'
    import { LogoutButton } from '$lib/UserfrontSvelte'

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

        console.log('load@DASHBOARD');
        console.log(Userfront.tokens.accessToken);

        return {};
    }

</script>

<script>
    import { onMount } from 'svelte';

    console.log('script@DASHBOARD');
    console.log(Userfront.tokens.accessToken);

    onMount( () => {
        console.log('onMount@DASHBOARD');
        console.log(Userfront.tokens.accessToken);
    });
</script>


<h1>Dashboard</h1>

<LogoutButton />
