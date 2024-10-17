<script>
    import "../app.css";
    import { dev } from "$app/environment";

    import { inject } from "@vercel/analytics";
    import "$lib/styles/fonts.css";

    inject({ mode: dev ? "development" : "production" });

    import Navbar from "$lib/components/navbar.svelte";
</script>

<div class="app">
    <Navbar />
    <main>
        <slot />
    </main>
</div>
