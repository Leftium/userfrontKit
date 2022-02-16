import Core from "@userfront/core";

import { config } from './Userfront.svelte'

import SignupForm        from './SignupForm.svelte';
import LoginForm         from './LoginForm.svelte';
import PasswordResetForm from './PasswordResetForm.svelte';
import LogoutButton      from './LogoutButton.svelte';

export {
    config,

    SignupForm,
    LoginForm,
    PasswordResetForm,
    LogoutButton
}

let Userfront = Core;

export default Userfront;
