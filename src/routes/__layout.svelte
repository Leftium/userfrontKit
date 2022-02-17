<script context='module'>
    import { page } from '$app/stores';
    import Userfront, { config } from '$lib/UserfrontSvelte'

    // Initialize Userfront.
    Userfront.init('5nxgg68b');
    config('5nxgg68b', {
        signup:        'mrnmra',
        login:         'dnrlnr',
        passwordReset: 'omakml',
        logout:        'adamdl',
    });

</script>

<header>
    <nav>
        <li class:active={$page.url.pathname === '/'}><a href='/'>Home</a></li>
        <li class:active={$page.url.pathname === '/login'}><a href='/login'>Login</a></li>
        <li class:active={$page.url.pathname === '/reset'}><a href='/reset'>Reset</a></li>
        <li class:active={$page.url.pathname === '/dashboard'}><a href='/dashboard'>Dashboard</a></li>
    </nav>
</header>

<main>
    <slot />
</main>

<hr/>

<pre>
    Userfront.tokens.accessToken: {Userfront.tokens.accessToken}
</pre>

<style>
    .active {
        font-weight: bold;
    }
</style>
