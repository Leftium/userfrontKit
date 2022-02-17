<script context="module">
    import Userfront from '$lib/UserfrontSvelte'

    import { browser } from '$app/env'

    export function load({ session }) {
        let loggedIn = !!Userfront.tokens.accessToken;

        if (browser && !loggedIn) {
            return {
                status: 302,
                redirect: '/login'
            };
        }

        return {};
    }
</script>

<h1>Dashboard</h1>
