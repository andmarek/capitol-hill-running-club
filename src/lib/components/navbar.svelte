<script>
    import { MapPin, Instagram } from "lucide-svelte";
</script>

<header class="px-4 lg:px-6 h-16 flex items-center bg-cream-light">
    <a class="flex items-center justify-center" href="/about">
        <MapPin class="h-6 w-6 text-text-light" />
        <span class="ml-2 text-lg font-semibold text-text-dark"
            >Capitol Hill, Seattle</span
        >
    </a>
    <nav class="ml-auto flex gap-6">
        <a
            class="text-sm font-medium text-text-light hover:text-text-dark transition-colors"
            href="/about">About</a
        >
        <a
            class="text-sm font-medium text-text-light hover:text-text-dark transition-colors"
            href="/events">Events</a
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
