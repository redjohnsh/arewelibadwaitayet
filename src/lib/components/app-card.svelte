<script lang="ts">
	import type { PreparedApp } from '$lib/apps';
	import * as Card from '$lib/components/ui/card/index.js';
	import { trackEvent } from '$lib/utils';
	import Badge from './ui/badge/badge.svelte';

	let { app }: { app: PreparedApp } = $props();

	function handleClick() {
		trackEvent('app_click', {
			app_id: app.id,
			app_name: app.name.target,
			app_language: app.lang.target,
			app_description: app.desc.target
		});
	}
</script>

<a
	href={`https://flathub.org/apps/${app.id}`}
	target="_blank"
	rel="noopener noreferrer"
	class="plausible-event-name=app_click transition-opacity hover:opacity-80"
	onclick={handleClick}
>
	<Card.Root class="relative h-full">
		<Card.Content>
			<div class="flex items-center gap-4">
				<img
					alt={`${app.name.target} logo`}
					class="size-12"
					loading="lazy"
					src={`https://dl.flathub.org/repo/appstream/x86_64/icons/128x128/${app.id}.png`}
				/>
				<div class="flex-1">
					<div class="flex items-center gap-2">
						<h2 class="text-lg font-bold">{app.name.target}</h2>
						<Badge variant="secondary" class="absolute top-2 right-2 rounded-full text-xs"
							>{app.lang.target}</Badge
						>
					</div>
					<p class="text-muted-foreground line-clamp-1 text-sm text-pretty">
						{app.desc.target}
					</p>
				</div>
			</div>
		</Card.Content>
	</Card.Root>
</a>
