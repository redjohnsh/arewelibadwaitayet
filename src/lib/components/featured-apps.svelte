<script lang="ts">
	import type { PreparedApp } from '$lib/apps';
	import { plausible } from '$lib/plausible';
	import { ShuffleIcon } from '@lucide/svelte';
	import type { List } from 'swisslist';
	import AppCard from './app-card.svelte';
	import { Button } from './ui/button';

	let { apps, count = 3 }: { apps: List<PreparedApp>; count?: number } = $props();

	let featured = $state(apps.reverse().take(count)); // Show the most recently added apps

	function shuffle() {
		featured = apps.shuffle().take(count);

		plausible.trackEvent('shuffle_featured_apps', {
			props: {
				featured_apps_count: count,
				featured_apps: featured
					.map((app) => app.id)
					.toArray()
					.join(',')
			}
		});
	}
</script>

<div>
	<div class="flex items-center justify-between gap-4">
		<h2 class="text-2xl font-bold">Featured Apps</h2>
		<Button variant="outline" onclick={shuffle}>
			<ShuffleIcon />
			Shuffle
		</Button>
	</div>

	<div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each featured as app (app.id)}
			<AppCard {app} />
		{/each}
	</div>
</div>
