<script context=module>
// Userfront configuration.
let tenantId = null;
export const toolIds  = {}

export function config(_tenantId, _toolIds) {
    tenantId = _tenantId;
    if (_toolIds) {
        Object.assign(toolIds, _toolIds);
    }
}

let didInit = false;
</script>


<script>
import AnyMod from "@anymod/core";
import Core from "@userfront/core";

import { onMount } from 'svelte';
import { browser } from '$app/env';


// Props passed to Svelte component.
export let toolId=null;

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

console.log({didInit});
if (browser && !didInit) {
    didInit = true;

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

    Core.init(tenantId);

    registerUrlChangedEventListener();
    if (typeof window === "object") {
        window.addEventListener("urlchanged", render);
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

