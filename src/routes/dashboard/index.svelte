<script context="module">
    import Userfront, { LogoutButton } from '$lib/UserfrontSvelte'

    import { browser } from '$app/env'

    let user = null;

    export function load({ session }) {
        let loggedIn = !!Userfront.tokens.accessToken;
        user = Userfront.user;

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

<div>
    <h3>{ user.name }</h3>
    <img src='{user.image}' />
</div>

<LogoutButton />

<pre><code>{JSON.stringify(user, null, 4)}</code></pre>
