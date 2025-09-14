<script lang="ts">
	import type { PreparedApp } from '$lib/apps';
	import type { List } from 'swisslist';
	import AppCard from './app-card.svelte';
	import AppCardSkeleton from './app-card-skeleton.svelte';

	let {
		apps,
		loading = false
	}: {
		apps: List<PreparedApp>;
		loading?: boolean;
	} = $props();
</script>

<div>
	<h2 class="text-2xl font-bold">Editors Choice</h2>

	<div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#if loading}
			{#each Array(6) as _, i (i)}
				<AppCardSkeleton />
			{/each}
		{:else}
			{#each apps as app (app.id)}
				<AppCard {app} />
			{/each}
		{/if}
	</div>
</div>
