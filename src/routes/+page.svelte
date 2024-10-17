<script>
    import Button from "$lib/ui/button.svelte";
    import { MapPin, Calendar, Users, Instagram } from "lucide-svelte";
</script>

<div class="flex flex-col min-h-screen bg-cream-light font-mono">
    <main class="flex-1">
        <section class="w-full py-20 md:py-32">
            <div class="container px-4 md:px-6 max-w-3xl mx-auto">
                <div class="flex flex-col items-center space-y-6 text-center">
                    <h1
                        class="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-text-dark"
                    >
                        Capitol Hill Running Club
                    </h1>
                    <p class="text-text-light text-lg md:text-xl">
                        A Seattle-based running club for <strong
                            ><em>all</em></strong
                        > members of the community.
                    </p>
                    <div class="flex space-x-4">
                        <Button
                            className="bg-[#FC4C02] text-cream-light hover:bg-[#E34402] transition-colors px-6 py-3 rounded-md"
                            href="https://www.strava.com/clubs/1312020"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Strava
                        </Button>
                        <Button
                            className="bg-[#E1306C] text-cream-light hover:bg-[#C13584] transition-colors px-6 py-3 rounded-md cursor-not-allowed"
                        >
                            <span class="flex flex-col items-center">
                                <span class="flex items-center">
                                    <Instagram class="w-4 h-4 mr-2" /> Instagram
                                </span>
                                <span class="text-xs mt-1">Coming Oct 20</span>
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
        <section class="w-full py-20 bg-cream-medium">
            <div class="container px-4 md:px-6 max-w-4xl mx-auto">
                <div class="grid gap-12 sm:grid-cols-3">
                    <div
                        class="flex flex-col items-center space-y-2 text-center"
                    >
                        <Calendar class="h-8 w-8 text-text-light" />
                        <h2 class="text-xl font-semibold text-text-dark">
                            Weekly Runs
                        </h2>
                        <p class="text-text-light">
                            Join us every <strong>Tuesday</strong> and
                            <strong>Thursday</strong> for group runs at
                            <strong>6:00pm PST. </strong> Also
                            <strong>Saturdays at 9:00am PST! </strong>
                        </p>
                    </div>
                    <div
                        class="flex flex-col items-center space-y-2 text-center"
                    >
                        <Users class="h-8 w-8 text-text-light" />
                        <h2 class="text-xl font-semibold text-text-dark">
                            All Paces
                        </h2>
                        <p class="text-text-light">
                            From beginners to seasoned runners, <strong
                                >we have folks running at all levels</strong
                            >.
                        </p>
                    </div>
                    <div
                        class="flex flex-col items-center space-y-2 text-center"
                    >
                        <MapPin class="h-8 w-8 text-text-light" />
                        <h2 class="text-xl font-semibold text-text-dark">
                            Cal Anderson Park
                        </h2>
                        <p class="text-text-light">
                            We're hosting our runs at the south-western corner
                            of Cal Anderson park.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="w-full py-20">
            <div class="container px-4 md:px-6 max-w-3xl mx-auto">
                <div class="flex flex-col items-center space-y-6 text-center">
                    <h2 class="text-3xl font-semibold text-text-dark">
                        Join Us On A Run
                    </h2>
                    <p class="text-text-light text-lg">
                        Check our Strava club or Instagram for updates and
                        community highlights!
                    </p>
                </div>
            </div>
        </section>
    </main>
    <footer class="py-6 px-4 md:px-6 border-t border-cream-dark"></footer>
</div>
