<script lang="ts">
	import { SearchX } from '@lucide/svelte';

	let {
		search = '',
		selectedLang = [],
		selectedCategories = []
	} = $props<{
		search?: string;
		selectedLang?: string[];
		selectedCategories?: string[];
	}>();
</script>

<div class="border-t border-dashed py-12 text-center">
	<SearchX class="text-primary mx-auto size-8" />
	<h3 class="text-foreground mt-2 text-sm font-semibold">No applications found</h3>
	<p class="text-muted-foreground mt-1 text-sm">
		{#if search}
			No applications match "{search}"
			{#if selectedLang.length || selectedCategories.length}
				in
				{#if selectedLang.length}
					{new Intl.ListFormat('en', { style: 'long', type: 'disjunction' }).format(selectedLang)}
				{/if}
				{#if selectedLang.length && selectedCategories.length}
					and
				{/if}
				{#if selectedCategories.length}
					{new Intl.ListFormat('en', { style: 'long', type: 'disjunction' }).format(
						selectedCategories
					)}
				{/if}
			{/if}
		{:else if selectedLang.length || selectedCategories.length}
			No applications found for
			{#if selectedLang.length}
				{new Intl.ListFormat('en', {
					style: 'long',
					type: 'disjunction'
				}).format(selectedLang)}
			{/if}
			{#if selectedLang.length && selectedCategories.length}
				and
			{/if}
			{#if selectedCategories.length}
				{new Intl.ListFormat('en', {
					style: 'long',
					type: 'disjunction'
				}).format(selectedCategories)}
			{/if}
		{:else}
			Try adjusting your search or filters to find what you're looking for.
		{/if}
	</p>
</div>
