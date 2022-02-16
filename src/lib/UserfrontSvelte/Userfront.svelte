<script context=module>
import { writable } from 'svelte/store'

// Configure Userfront via Svelte stores.
export const userfrontId = writable('');
export const toolIds     = writable({});

</script>


<script>
import AnyMod from "@anymod/core";
import Core from "@userfront/core";

import { onMount } from 'svelte';

// Props passed to Svelte component.
export let toolId=null;

Core.init($userfrontId);

const {
  Singleton,
  alias,
  render,
  processPage,
  addScript1ToDocument,
  createOrReturnPage,
  checkPageAndUpdate,
  executeCallbacks,
  logErrorsAndTips,
} = AnyMod;

const { registerUrlChangedEventListener, addInitCallback } = Core;
alias.setAlias("Userfront");

Singleton.Opts.api = true;

/**
 * The order of operations is:
 *  1. Userfront.init() is called
 *  2. Callback is fired that adds Script1 to document and sets Singleton.isScript1Loading = true
 *  3. Userfront.build() is called
 *  4. componentDidMount() is called
 *  5. mountTools() is called
 *  6a. If Script1 hasn't loaded yet, wait for it to load
 *  6b. If Script1 has loaded, continue
 *  7. runAnyModSetup() is called
 */

// Callback to fire whenever Userfront.init is called
addInitCallback(({ tenantId }) => {
  Singleton.External.project = tenantId;
  addScript1ToDocument(
    "https://cdn.userfront.com/toolkit/page/",
    tenantId,
    runAnyModSetup
  );
});

registerUrlChangedEventListener();
if (typeof window === "object") {
    window.addEventListener("urlchanged", render);
}



async function runAnyModSetup() {
  if (Singleton.isScript1Loading) return;
  const page = await createOrReturnPage();
  const updatedPage = await checkPageAndUpdate(page);
  await processPage(updatedPage);
  executeCallbacks();
  logErrorsAndTips();
}

async function mountTools() {
  try {
    runAnyModSetup();
  } catch (err) {
    let message = err && err.message ? err.message : "Problem loading page";
    console.warn(message, err);
  }
}

onMount(async () => {
    window.addEventListener("urlchanged", render);
    await mountTools();
});
</script>

<div>
    <div id={`userfront-${toolId}`}></div>
</div>
