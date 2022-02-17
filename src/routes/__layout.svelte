<script>
    import { page } from '$app/stores';
    import { browser } from '$app/env';

    import Userfront, { config } from '$lib/UserfrontSvelte'


    // Initialize Userfront.
    config('5nxgg68b', {
        signup:        'mrnmra',
        login:         'dnrlnr',
        passwordReset: 'omakml',
        logout:        'adamdl',
    });

    if (browser) {
        window.uf = Userfront;
    }



</script>

<header>
    <nav>
        <li class:active={$page.url.pathname === '/'}><a href='/'>Home</a></li>
        <li class:active={$page.url.pathname === '/login'}><a href='/login'>Login</a></li>
        <li class:active={$page.url.pathname === '/reset'}><a href='/reset'>Reset</a></li>
        <li class:active={$page.url.pathname === '/dashboard'}><a href='/dashboard'>Dashboard</a></li>
        <li class:active={$page.url.pathname === '/dashboard2'}><a href='/dashboard2'>Dashboard2</a></li>
    </nav>
</header>

<main>
    <slot />
</main>

<style>
    .active {
        font-weight: bold;
    }
</style>

