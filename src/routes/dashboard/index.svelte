<script context="module">
    export function load({ session }) {
        if (!session.user) {
            return {
                status: 302,
                redirect: '/login'
            };
        }

        return {};
    }
</script>

<h1>Dashboard</h1>
