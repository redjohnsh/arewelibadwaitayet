<script lang="ts">
	import Analytics from '$lib/components/analytics.svelte';
	import { plausible } from '$lib/plausible';
	import '../app.css';

	let { children } = $props();

	let year = new Date().getFullYear();
</script>

<Analytics />

<div class="flex min-h-[100dvh] flex-col">
	<main class="container mx-auto max-w-6xl flex-1 px-4 py-8 md:px-6 md:py-12 lg:px-8">
		{@render children()}
	</main>

	<footer class="bg-background border-t">
		<div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
			<p class="text-muted-foreground mt-8 text-center text-sm/6 md:order-1 md:mt-0">
				&copy; {year}
				<a
					class="hover:text-accent-foreground"
					href="https://github.com/redjohnsh/arewelibadwaitayet"
					rel="noopener noreferrer"
					target="_blank"
					onclick={() => plausible.trackEvent('footer_github_link')}>arewelibadwaitayet</a
				> - Contributions welcome!
			</p>
		</div>
	</footer>
</div>
