<script lang="ts">
	import type { PreparedApp } from '$lib/apps';
	import type { List } from 'swisslist';
	import AppCard from './app-card.svelte';

	let { apps }: { apps: List<PreparedApp> } = $props();
</script>

<div>
	<h2 class="text-2xl font-bold">Editors Choice</h2>

	<div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each apps as app (app.id)}
			<AppCard {app} />
		{/each}
	</div>
</div>
