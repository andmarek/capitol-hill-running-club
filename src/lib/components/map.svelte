<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import type { Map } from "maplibre-gl";
    import "maplibre-gl/dist/maplibre-gl.css";
    // MapLibre finds its worker next to its own module, which Vite moves when bundling.
    import workerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?url";

    export let latitude: number;
    export let longitude: number;

    let map: Map | undefined;
    let mapElement: HTMLElement;

    onMount(async () => {
        const { Map, Marker, NavigationControl, Popup, setWorkerUrl } =
            await import("maplibre-gl");
        setWorkerUrl(workerUrl);

        map = new Map({
            container: mapElement,
            style: "https://tiles.openfreemap.org/styles/bright",
            center: [longitude, latitude],
            zoom: 16,
        });
        map.addControl(new NavigationControl({ showCompass: false }));

        const markerElement = document.createElement("div");
        markerElement.innerHTML = '<div class="marker-inner"></div>';
        const tooltip = new Popup({
            closeButton: false,
            closeOnClick: false,
            offset: 18,
            className: "custom-tooltip",
        }).setText("Meeting Point");
        const marker = new Marker({ element: markerElement })
            .setLngLat([longitude, latitude])
            .addTo(map);
        markerElement.addEventListener("mouseenter", () =>
            tooltip.setLngLat(marker.getLngLat()).addTo(map!),
        );
        markerElement.addEventListener("mouseleave", () => tooltip.remove());
    });

    onDestroy(() => map?.remove());
</script>

<div
    bind:this={mapElement}
    class="w-full h-[400px] rounded-lg overflow-hidden"
></div>

<style>
    :global(.marker-inner) {
        width: 30px;
        height: 30px;
        background-color: #4caf50;
        border: 2px solid white;
        border-radius: 50%;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        transition: all 0.3s ease;
    }
    :global(.marker-inner:hover) {
        transform: scale(1.1);
        background-color: #45a049;
    }
    :global(.custom-tooltip .maplibregl-popup-content) {
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 4px;
        padding: 5px 8px;
        color: white;
        font-size: 12px;
        font-weight: bold;
    }
    :global(.custom-tooltip .maplibregl-popup-tip) {
        display: none;
    }
</style>
