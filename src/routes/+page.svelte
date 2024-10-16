<script>
    import Button from "$lib/ui/button.svelte";
    import { MapPin, Calendar, Users, Instagram } from "lucide-svelte";
</script>

<div class="flex flex-col min-h-screen bg-stone-50">
    <header
        class="px-4 lg:px-6 h-16 flex items-center border-b border-stone-200"
    >
        <div class="container mx-auto flex justify-between items-center">
            <a class="flex items-center justify-center" href="#">
                <MapPin class="h-6 w-6 text-stone-600" />
                <span class="ml-2 text-lg font-semibold text-stone-800"
                    >Capitol Hill Running Club</span
                >
            </a>
            <nav class="flex gap-4 sm:gap-6">
                <a
                    class="text-sm font-medium text-stone-600 hover:text-stone-800"
                    href="#">About</a
                >
                <a
                    class="text-sm font-medium text-stone-600 hover:text-stone-800"
                    href="#">Events</a
                >
                <a
                    class="text-sm font-medium text-stone-600 hover:text-stone-800"
                    href="https://www.strava.com"
                    target="_blank"
                    rel="noopener noreferrer">Strava</a
                >
                <a
                    class="text-sm font-medium text-stone-600 hover:text-stone-800"
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Instagram class="h-5 w-5" />
                </a>
            </nav>
        </div>
    </header>
    <main class="flex-1">
        <section class="w-full py-12 md:py-24 lg:py-32 bg-stone-100">
            <div class="container mx-auto px-4 md:px-6 max-w-4xl">
                <div class="flex flex-col items-center space-y-4 text-center">
                    <h1
                        class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-stone-800"
                    >
                        Capitol Hill Running Club
                    </h1>
                    <p class="mx-auto max-w-[600px] text-stone-600 md:text-xl">
                        Explore Seattle's vibrant Capitol Hill neighborhood on
                        foot with our welcoming community of runners.
                    </p>
                </div>
            </div>
        </section>
        <section class="w-full py-12 md:py-24 lg:py-32">
            <div class="container mx-auto px-4 md:px-6 max-w-6xl">
                <div class="grid gap-10 sm:grid-cols-3">
                    <div class="flex flex-col items-center space-y-2 p-4">
                        <Calendar class="h-10 w-10 text-stone-600" />
                        <h2 class="text-xl font-semibold text-stone-800">
                            Weekly Runs
                        </h2>
                        <p class="text-sm text-stone-600 text-center">
                            Join us every Saturday morning and Wednesday evening
                            for group runs.
                        </p>
                    </div>
                    <div class="flex flex-col items-center space-y-2 p-4">
                        <Users class="h-10 w-10 text-stone-600" />
                        <h2 class="text-xl font-semibold text-stone-800">
                            All Levels
                        </h2>
                        <p class="text-sm text-stone-600 text-center">
                            From beginners to seasoned runners, everyone is
                            welcome to participate.
                        </p>
                    </div>
                    <div class="flex flex-col items-center space-y-2 p-4">
                        <MapPin class="h-10 w-10 text-stone-600" />
                        <h2 class="text-xl font-semibold text-stone-800">
                            Scenic Routes
                        </h2>
                        <p class="text-sm text-stone-600 text-center">
                            Discover the beautiful streets, parks, and hidden
                            gems of Capitol Hill.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="w-full py-12 md:py-24 lg:py-32 bg-stone-100">
            <div class="container mx-auto px-4 md:px-6 max-w-4xl">
                <div class="flex flex-col items-center space-y-4 text-center">
                    <h2
                        class="text-3xl font-semibold tracking-tighter sm:text-4xl text-stone-800"
                    >
                        Join Us On A Run
                    </h2>
                    <p class="mx-auto max-w-[600px] text-stone-600 md:text-xl">
                        Check our Strava club for upcoming runs and routes, or
                        follow us on Instagram for the latest updates and
                        community highlights.
                    </p>
                    <div class="flex space-x-4">
                        <Button
                            href="https://www.strava.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline"
                            class="bg-stone-100 text-stone-800 border-stone-300 hover:bg-stone-200"
                        >
                            Strava Club
                        </Button>
                        <Button
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline"
                            class="bg-stone-100 text-stone-800 border-stone-300 hover:bg-stone-200"
                        >
                            Instagram
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer class="py-6 border-t border-stone-200">
        <div
            class="container mx-auto px-4 md:px-6 flex justify-between items-center"
        >
            <p class="text-xs text-stone-600">
                © 2024 Capitol Hill Running Club
            </p>
            <nav class="flex gap-4 sm:gap-6">
                <a class="text-xs text-stone-600 hover:underline" href="#"
                    >Privacy Policy</a
                >
                <a class="text-xs text-stone-600 hover:underline" href="#"
                    >Contact Us</a
                >
            </nav>
        </div>
    </footer>
</div>
