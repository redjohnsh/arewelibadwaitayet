<script lang="ts">
	import { page } from '$app/state';
	import { env } from '$env/dynamic/public';

	const GA_ID = env.PUBLIC_GA_ID;

	$effect(() => {
		if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
			window.gtag('config', GA_ID, {
				page_title: document.title,
				page_path: page.url.pathname + page.url.search,
				page_location: page.url.href
			});
		}
	});
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id={GA_ID}"></script>
	{@html `<script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        
        gtag('config', '${GA_ID}');
        
        </script>`}
</svelte:head>
