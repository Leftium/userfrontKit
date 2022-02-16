import Core from "@userfront/core";

import { userfrontId, toolIds } from './Userfront.svelte'

import SignupForm        from './SignupForm.svelte';
import LoginForm         from './LoginForm.svelte';
import PasswordResetForm from './PasswordResetForm.svelte';
import LogoutButton      from './LogoutButton.svelte';

export {
    userfrontId,
    toolIds,

    SignupForm,
    LoginForm,
    PasswordResetForm,
    LogoutButton
}

let Userfront = Core;

export default Userfront;
