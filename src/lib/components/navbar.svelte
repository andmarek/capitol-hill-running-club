<script>
    import { MapPin, Instagram } from "lucide-svelte";
</script>

<header class="px-4 lg:px-6 h-16 flex items-center bg-cream-light">
    <div class="flex items-center">
        <a class="flex items-center justify-center" href="/">
            <img
                src="images/water-tower.svg"
                alt="Capitol Hill Running Club Logo"
                class="h-20 w-auto mr-2"
            />
        </a>
    </div>
    <nav class="ml-auto flex gap-6 font-mono">
        <a
            class="text-sm font-medium text-text-light hover:text-text-dark transition-colors"
            href="/">Home</a
        >
        <a
            class="text-sm font-medium text-text-light hover:text-text-dark transition-colors"
            href="/about">About</a
        >
        <a
            class="text-sm font-medium text-text-light hover:text-text-dark transition-colors"
            href="https://www.strava.com"
            target="_blank"
            rel="noopener noreferrer">Strava</a
        >
        <a
            class="text-text-light hover:text-text-dark transition-colors"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Instagram class="h-5 w-5" />
        </a>
    </nav>
</header>
