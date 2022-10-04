<script>
    import "../app.scss";
    import '$lib/hypernav/hyper-nav.min.scss'
    import '$lib/hypernav/themes/userfrontkit/variables.min.scss'

    import Fa from 'svelte-fa'
    import { faBars, faXmark, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

    /** @type {import('./$types').PageData} */
    export let data;

    let path = '', major = '', minor = ''

    /** @type {{ [key: string]: string }} */
    const MODES = {
        toolkit: 'Toolkit',
        custom: 'Custom',
        progressive: 'Progressive',
    }

    const PAGES =  {
        signup: 'Sign Up',
        login: 'Log In',
        reset: 'Reset',
        dashboard: 'Dashboard',
    }

    let title = ''

    $: {
        path =  data.routeId || '';

        if (['', 'login', 'reset', 'dashboard'].includes(path)) {
            path = 'toolkit/' + path
        }

        [major, minor] = path.split('/')
        minor = minor || 'signup'
        path = `${major}/${minor}`


        // @ts-ignore
        title = `${PAGES[minor]} (${MODES[major]})`

        console.log({path, major, minor})

    }


</script>

<!-- Required to force invalidation of layout: -->
<pre style='display:none'>
    {data.url}
</pre>

<div class='container'>
    {#key data.url}
        <nav class="hn-menu hn-top">

            <!-- The hamburger menu state. -->
            <input type="checkbox" class="hn-input-state hn-input-state-nav" id="cb">

            <div class="hn-nav">
                <div class="hn-section hn-section-brand">
                    <!-- Navigation content that is visible regardless of device size comes here. -->

                    <div class="hn-item">
                        <a class="hn-link" href="#none">
                            <span class="hn-content">
                                {@html title}
                            </span>
                        </a>
                    </div>

                    <div class="hn-spacer hn-hide-desktop" />

                    <!-- The actual input element for the hamburger. Note that the element is hidden on desktop. -->
                    <label for="cb" class="hn-item hn-input hn-input-nav hn-hide-desktop">
                        <span class="hn-icon">
                            <span class="hn-input-default">
                                <!-- Content that is visible when the input state element is in its default state. -->
                                <Fa icon={faBars} />
                            </span>
                            <span class="hn-input-active">
                                <!-- Content that is visible when the input state element is in its activated state. -->
                                <Fa icon={faXmark} />
                            </span>
                        </span>
                    </label>
                </div>

                <div class="hn-section hn-section-body">
                    <!-- Navigation content that is hidden behind a menu toggle on mobile devices comes here. -->

                    <div class="hn-expand">
                        <!-- A checkbox that controls the dropdown menu. -->
                        <input type="radio" name="hn-mode" class="hn-input-state" id="hn-toolkit" checked={major=='toolkit'}>

                        <!-- A label that controls the checkbox above. Note the matching ids. -->
                        <label class="hn-item hn-input" for="hn-toolkit" class:hn-active-child={major=='toolkit'}>
                            <span class="hn-link">
                                <span class="hn-content">
                                    Toolkit <br class='hn-hide-mobile'/>Components
                                </span>
                            </span>
                            <span class="hn-input">
                                <span class="hn-input-default">
                                    <!-- Content that is visible when the checkbox is not checked. -->
                                    <Fa icon={faChevronDown} />
                                </span>
                                <span class="hn-input-active">
                                    <!-- Content that is visible when the checkbox is checked. -->
                                    <Fa icon={faChevronUp} />
                                </span>
                            </span>
                        </label>

                        <div class="hn-expand-body" >
                            <div class="hn-item" class:hn-active={path=='toolkit/signup'}>
                                <a class="hn-link" href="/">
                                    <span class="hn-content">
                                        Sign Up
                                    </span>
                                </a>
                            </div>
                            <div class="hn-item" class:hn-active={path=='toolkit/login'}>
                                <a class="hn-link" href="/login">
                                    <span class="hn-content">
                                        Log In
                                    </span>
                                </a>
                            </div>
                            <div class="hn-item" class:hn-active={path=='toolkit/reset'}>
                                <a class="hn-link" href="/reset">
                                    <span class="hn-content">
                                        Reset
                                    </span>
                                </a>
                            </div>
                            <div class="hn-item" class:hn-active={path=='toolkit/dashboard'}>
                                <a class="hn-link" href="/dashboard">
                                    <span class="hn-content">
                                        Dashboard
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="hn-expand">
                        <!-- A checkbox that controls the dropdown menu. -->
                        <input type="radio" name="hn-mode" class="hn-input-state" id="hn-custom" checked={major=='custom'}>

                        <!-- A label that controls the checkbox above. Note the matching ids. -->
                        <label class="hn-item hn-input" for="hn-custom" class:hn-active-child={major=='custom'}>
                            <span class="hn-link">
                                <span class="hn-content">
                                    Custom <br class='hn-hide-mobile'/>Components
                                </span>
                            </span>
                            <span class="hn-input">
                                <span class="hn-input-default">
                                    <!-- Content that is visible when the checkbox is not checked. -->
                                    <Fa icon={faChevronDown} />
                                </span>
                                <span class="hn-input-active">
                                    <!-- Content that is visible when the checkbox is checked. -->
                                    <Fa icon={faChevronUp} />
                                </span>
                            </span>
                        </label>

                        <div class="hn-expand-body" >
                            <div class="hn-item" class:hn-active={path=='custom/signup'}>
                                <a class="hn-link" href="/custom/">
                                    <span class="hn-content">
                                        Sign Up
                                    </span>
                                </a>
                            </div>
                            <div class="hn-item" class:hn-active={path=='custom/login'}>
                                <a class="hn-link" href="/custom/login">
                                    <span class="hn-content">
                                        Log In
                                    </span>
                                </a>
                            </div>
                            <div class="hn-item" class:hn-active={path=='custom/reset'}>
                                <a class="hn-link" href="/custom/reset">
                                    <span class="hn-content">
                                        Reset
                                    </span>
                                </a>
                            </div>
                            <div class="hn-item" class:hn-active={path=='custom/dashboard'}>
                                <a class="hn-link" href="/custom/dashboard">
                                    <span class="hn-content">
                                        Dashboard
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="hn-expand">
                        <!-- A checkbox that controls the dropdown menu. -->
                        <input type="radio" name="hn-mode" class="hn-input-state" id="hn-progressive" checked={major=='progressive'}>

                        <!-- A label that controls the checkbox above. Note the matching ids. -->
                        <label class="hn-item hn-input" for="hn-progressive" class:hn-active-child={major=='progressive'}>
                            <span class="hn-link">
                                <span class="hn-content">
                                    Progressive <br class=hn-hide-mobile />Components
                                </span>
                            </span>
                            <span class="hn-input">
                                <span class="hn-input-default">
                                    <!-- Content that is visible when the checkbox is not checked. -->
                                    <Fa icon={faChevronDown} />
                                </span>
                                <span class="hn-input-active">
                                    <!-- Content that is visible when the checkbox is checked. -->
                                    <Fa icon={faChevronUp} />
                                </span>
                            </span>
                        </label>

                        <div class="hn-expand-body" >
                            <div class="hn-item" class:hn-active={path=='progressive/signup'}>
                                <a class="hn-link" href="/progressive/">
                                    <span class="hn-content">
                                        Sign Up
                                    </span>
                                </a>
                            </div>
                            <div class="hn-item" class:hn-active={path=='progressive/login'}>
                                <a class="hn-link" href="/progressive/login">
                                    <span class="hn-content">
                                        Log In
                                    </span>
                                </a>
                            </div>
                            <div class="hn-item" class:hn-active={path=='progressive/reset'}>
                                <a class="hn-link" href="/progressive/reset">
                                    <span class="hn-content">
                                        Reset
                                    </span>
                                </a>
                            </div>
                            <div class="hn-item" class:hn-active={path=='progressive/dashboard'}>
                                <a class="hn-link" href="/progressive/dashboard">
                                    <span class="hn-content">
                                        Dashboard
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </nav>
    {/key}

    <div class='content'>
        <slot></slot>
    </div>


</div>



<div style="position: relative;"><div style="position: absolute; bottom: 0px; width: 100%; background-color: black; opacity: 0; z-index: 2147483647; pointer-events: none;"></div></div>

<style>
    .container {
        max-width: 960px;
        margin: auto;
    }

    nav {
        box-shadow: 8px 8px 8px -8px black;

    }

    .content {
        margin: 8px;
    }



    .hn-expand label {
        z-index: 2000;
    }

    .hn-content {
        user-select: none !important;
    }

    @media (min-width: 768px) {
        .hn-section-brand {
            min-width: 400px;
        }

        .hn-expand .hn-input .hn-input {
            display: none;
        }

        .hn-expand > .hn-input-state:not(.hn-hide-desktop):checked ~ .hn-expand-body {
            visibility: hidden;
        }

        .hn-top .hn-nav:not(.hn-mode-content) .hn-expand:not(.hn-no-hover):hover>.hn-expand-body, .hn-top .hn-nav:not(.hn-mode-content) .hn-expand>.hn-expand-body:focus-within {
            visibility: visible;
        }

        .hn-section,
        .hn-expand {
            min-width: 200px;
            flex-grow: 0;
            flex-shrink: 1;
        }

        .hn-section-brand {
            flex-grow: 1;
            box-shadow: 8px 8px 8px -8px black;
            position:static;
            z-index: 3000;
            background-color: #F6F6F6;
        }

        .hn-expand-body .hn-item:first-child {
            box-shadow: inset 0 8px 8px -8px black;
        }

        .hn-section-brand .hn-item {
            background-color: #F6F6F6;
        }

        .hn-section-brand .hn-item {
            margin: auto;
            text-align: center;
        }
    }


    .hn-expand > .hn-input-state ~ label span
    {
        background-color: lightgray;
        color: white;
    }

    .hn-expand > .hn-input-state ~ label.hn-active-child span
    {
        background-color: #5e72e4;
        font-weight: bold;
    }

    div.hn-item.hn-active {
        font-weight: 900;
    }
</style>