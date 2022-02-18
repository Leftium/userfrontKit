<script>
import Userfront from '$lib/UserfrontSvelte'


// Example of calling an endpoint with a JWT

async function getInfo() {
  let headers = {};

  if (Userfront.tokens.accessToken) {
    headers.Authorization = `Bearer ${Userfront.tokens.accessToken}`;
  }

  const res = await window.fetch('/api/decode-jwt', { headers });

  console.log(res);

  return {
    status: res.status,
    json: await res.json()
  }
}

let res=getInfo();

</script>

<div>
  <p>This page shows how to protect a Svelte endpoint with the Userfront token.</p>

  <p>The results of calling the API are rendered below. The token is only sent when logged in.</p>

    {#await res then res}
    <h3>Response Status</h3>
    {res.status}

    <h3>Response JSON</h3>
    <pre>{JSON.stringify(res.json, null, 4)}</pre>

  {/await}

  Open API endpoint <a target=_blank href='/api/decode-jwt'>/api/decode-jwt</a> in new window.

</div>

<style>
  div {
    font-family: sans-serif;
  }
</style>