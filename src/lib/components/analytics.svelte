<script lang="ts">
	import plausible from '$lib/plausible';

	$effect(() => {
		plausible.trackPageview();
	});
</script>
