<script lang="ts">
    import { onMount } from "svelte";
    import { browser } from "$app/environment";
    import type { Map as LeafletMap, LatLngExpression } from "leaflet";

    export let latitude: number;
    export let longitude: number;

    let map: LeafletMap;
    let mapElement: HTMLElement;

    let L: any; // This will hold the Leaflet library

    onMount(async () => {
        if (browser) {
            const leaflet = await import("leaflet");
            L = leaflet.default;
            initMap();
        }
    });
    function initMap() {
        map = L.map(mapElement, {
            zoomControl: true,
            scrollWheelZoom: true,
        }).setView([latitude, longitude], 17);

        L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
            {
                subdomains: "abcd",
                maxZoom: 20,
            },
        ).addTo(map);

        L.control
            .zoom({
                position: "bottomright",
            })
            .addTo(map);

        addMarker();
    }

    function addMarker() {
        if (map) {
            const markerIcon = L.divIcon({
                className: "custom-marker",
                html: '<div class="marker-inner"></div>',
                iconSize: [30, 30],
                iconAnchor: [15, 15],
            });

            L.marker([latitude, longitude] as LatLngExpression, {
                icon: markerIcon,
            })
                .addTo(map)
                .bindTooltip("Meeting Point", {
                    permanent: false,
                    direction: "top",
                    offset: [0, -10],
                    opacity: 0.9,
                    className: "custom-tooltip",
                });
        }
    }
</script>

<div
    bind:this={mapElement}
    class="w-full h-[400px] rounded-lg overflow-hidden"
></div>

<style>
    :global(.custom-marker) {
        background: none;
        border: none;
    }
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
    :global(.custom-tooltip) {
        background-color: rgba(0, 0, 0, 0.8);
        border: none;
        border-radius: 4px;
        padding: 5px 8px;
        color: white;
        font-size: 12px;
        font-weight: bold;
    }
</style>
