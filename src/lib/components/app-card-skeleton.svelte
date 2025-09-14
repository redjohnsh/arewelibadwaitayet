<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
</script>

<div class="transition-opacity">
	<Card.Root class="relative h-full">
		<Card.Content>
			<div class="flex items-center gap-4">
				<!-- Icon skeleton -->
				<Skeleton class="size-12 rounded" />
				<div class="flex-1">
					<div class="flex items-center gap-2">
						<!-- Title skeleton -->
						<Skeleton class="h-6 w-32" />
						<div class="absolute top-2 right-2 flex gap-1">
							<!-- Badge skeleton -->
							<Skeleton class="h-5 w-12 rounded-full" />
						</div>
					</div>
					<!-- Description skeleton -->
					<Skeleton class="mt-1 h-4 w-full" />
				</div>
			</div>
		</Card.Content>
	</Card.Root>
</div>
