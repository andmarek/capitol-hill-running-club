<script>
    import "../app.css";
    import "$lib/styles/fonts.css";
    import Navbar from "$lib/components/navbar.svelte";
</script>

<div class="app">
    <Navbar />
    <main>
        <slot />
    </main>
</div>
