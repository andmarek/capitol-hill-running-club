<script lang="ts">
    import { slide } from "svelte/transition";

    let activeItem: number | null = null;

    function toggleItem(item: number): void {
        activeItem = activeItem === item ? null : item;
    }
</script>

<svelte:head>
    <title>About Capitol Hill Running Club</title>
    <meta
        name="description"
        content="Learn about the Capitol Hill Running Club in Seattle"
    />
</svelte:head>

<main class="bg-cream-light flex-1 font-mono">
    <section class="w-full py-12 md:py-24 lg:py-32">
        <div class="container px-4 md:px-6 max-w-3xl mx-auto">
            <h1
                class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-text-dark mb-6"
            >
                Our History
            </h1>
            <p class="text-text-light text-lg mb-8">
                Capitol Hill Running club is a community forged from the
                previously-existing Fleet Feet running group. Since Fleet Feet
                has closed (rip), we have decided to start our own,
                unaffiliated, running club, in order to keep the community alive
                and thriving.
            </p>
            <p class="text-text-light text-lg mb-8">
                We will still be hosting our runs near Fleet Feet, about 150ft
                away, at the Southern entrance of Cal Anderson Park. The group
                meets at 6:00pm every Tuesday and Thursday, and 9:00am every
                Saturday
            </p>
        </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32 bg-cream-medium">
        <div class="container px-4 md:px-6 max-w-3xl mx-auto">
            <h2 class="text-3xl font-semibold text-text-dark mb-6">
                Frequently Asked Questions
            </h2>
            <div class="space-y-4">
                {#each ["Do I need to be an experienced runner to join?", "What is the vibe?", "Where do the runs typically start?", "What should I bring to a run?", "How long are the typical runs?"] as question, i}
                    <div class="border-b border-accent">
                        <button
                            on:click={() => toggleItem(i)}
                            class="flex justify-between items-center w-full py-4 text-left text-text-dark font-medium focus:outline-none"
                        >
                            {question}
                            <svg
                                class="w-4 h-4 transition-transform {activeItem ===
                                i
                                    ? 'rotate-180'
                                    : ''}"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </button>
                        {#if activeItem === i}
                            <div
                                transition:slide={{ duration: 300 }}
                                class="pb-4 text-text-light"
                            >
                                {#if i === 0}
                                    Not at all! We welcome runners of all
                                    levels, including beginners. Our runs
                                    typically have multiple pace groups to
                                    accommodate everyone.
                                {:else if i === 1}
                                    The vibe is chill! There is usually around
                                    20-30 people that come on Tuesdays and up to
                                    100 people that come on Thursdays. We run in
                                    all weather, and most people are there to
                                    have fun, get fit, and chit chat. There will
                                    be folks who run all paces (think 12 min /
                                    mile to 7 min / mile). We also go to Stoup
                                    Brewery on Thursdays.
                                {:else if i === 2}
                                    We almost always meet at Cal Anderson park!
                                    Check our Strava club or Instagram for the
                                    most up-to-date information.
                                {:else if i === 3}
                                    Comfortable running shoes,
                                    weather-appropriate clothing, and a great
                                    attitude.
                                {:else if i === 4}
                                    Our Wednesday runs are 10k (6 miles in
                                    American units), and our Thursday runs are
                                    5k (3 miles in American units). Click here
                                    for the routes on Strava.
                                {/if}
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </section>
</main>
