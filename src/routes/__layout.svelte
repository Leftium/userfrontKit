<script context='module'>
    import '../global.css'

    import { page } from '$app/stores';
    import { config } from '$lib/UserfrontSvelte'

    // Configure Userfront(Svelte).
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

<style>
nav {
  list-style: none;
  background-color: #DC322F;
  text-align: center;
  padding: 0;
  margin: 0;
}
li {
  font-family: 'Oswald', sans-serif;
  font-size: 1.2em;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #888;
}

a {
  text-decoration: none;
  color: #fff;
  display: block;
  transition: .3s background-color;
}

a:hover {
  background-color: #fff;
  color: #DC322F;
}

li.active a {
  background-color: #fff;
  color: #DC322F;
  cursor: default;
}

@media screen and (min-width: 600px) {
  li {
    width: 120px;
    border-bottom: none;
    height: 50px;
    line-height: 50px;
    font-size: 1.4em;
  }
  /* Option 1 - Display Inline */
  li {
    display: inline-block;
    margin-right: -4px;
  }
}
main {
    margin: 16px;
}
</style>
