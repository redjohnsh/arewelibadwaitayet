<script lang="ts">
	import { SearchX } from '@lucide/svelte';

	let { search = '', selectedLang = [] } = $props<{
		search?: string;
		selectedLang?: string[];
	}>();
</script>

<div class="text-center">
	<SearchX class="text-primary mx-auto size-8" />
	<h3 class="text-foreground mt-2 text-sm font-semibold">No applications found</h3>
	<p class="text-muted-foreground mt-1 text-sm">
		{#if search}
			No applications match "{search}"
			{#if selectedLang.length}
				in {new Intl.ListFormat('en', { style: 'long', type: 'disjunction' }).format(selectedLang)}
			{/if}
		{:else if selectedLang.length}
			No applications found for {new Intl.ListFormat('en', {
				style: 'long',
				type: 'disjunction'
			}).format(selectedLang)}
		{:else}
			Try adjusting your search or filters to find what you're looking for.
		{/if}
	</p>
</div>
