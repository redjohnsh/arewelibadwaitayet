<script lang="ts">
	import type { PreparedApp } from '$lib/apps';
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { plausible } from '$lib/plausible';
	import Badge from './ui/badge/badge.svelte';

	let { app }: { app: PreparedApp } = $props();
</script>

<a
	href={`https://flathub.org/apps/${app.id}`}
	target="_blank"
	rel="noopener noreferrer"
	class="transition-opacity hover:opacity-80"
	onclick={() => {
		plausible.trackEvent('app_click', {
			props: {
				app_id: app.id,
				app_name: app.name.target,
				app_language: app.lang.target,
				app_description: app.desc.target
			}
		});
	}}
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
						<div class="absolute top-2 right-2 flex gap-1">
							{#if app.circle}
								<Tooltip.Provider>
									<Tooltip.Root>
										<Tooltip.Trigger>
											<img
												src="https://circle.gnome.org/assets/favicon.svg"
												alt="GNOME Circle"
												class="size-5"
											/>
										</Tooltip.Trigger>
										<Tooltip.Content>
											<p>GNOME Circle</p>
										</Tooltip.Content>
									</Tooltip.Root>
								</Tooltip.Provider>
							{/if}
							<Badge variant="secondary" class="h-5 rounded-full px-1.5 text-xs"
								>{app.lang.target}</Badge
							>
						</div>
					</div>
					<p class="text-muted-foreground line-clamp-1 text-sm text-pretty">
						{app.desc.target}
					</p>
				</div>
			</div>
		</Card.Content>
	</Card.Root>
</a>
