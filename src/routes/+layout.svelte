<script>
    import "../app.css";
    import "$lib/styles/fonts.css";
    import Navbar from "$lib/components/navbar.svelte";
    import { dev } from "$app/environment";
    import { inject } from "@vercel/analytics";

    inject({ mode: dev ? "development" : "production" });
</script>

<div class="app">
    <Navbar />
    <main>
        <slot />
    </main>
</div>
