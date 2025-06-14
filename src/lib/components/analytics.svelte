<script lang="ts">
	import { plausible } from '$lib/plausible';
	import { enableAutoPageviews } from 'plausible-client';
	import { onMount } from 'svelte';

	onMount(() => {
		enableAutoPageviews(plausible);
	});
</script>
