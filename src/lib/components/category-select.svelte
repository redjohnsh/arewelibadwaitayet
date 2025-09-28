<script lang="ts">
	import { plausible } from '$lib/plausible';
	import { tick } from 'svelte';
	import CheckIcon from '@lucide/svelte/icons/check';
	import ChevronsUpDownIcon from '@lucide/svelte/icons/chevrons-up-down';
	import * as Command from './ui/command';
	import * as Popover from './ui/popover';
	import { Button } from './ui/button';
	import { cn } from '$lib/utils';

	let { value = $bindable(), categories = [] }: { value: string[]; categories: string[] } =
		$props();

	let open = $state(false);
	let searchValue = $state('');
	let triggerRef = $state<HTMLButtonElement>(null!);

	// Filter categories based on search
	const filteredCategories = $derived.by(() => {
		if (!searchValue.trim()) {
			return categories.sort();
		}
		return categories
			.filter((category) => category.toLowerCase().includes(searchValue.toLowerCase()))
			.sort();
	});

	let placeholder = $derived.by(() => {
		if (value.length === 0) {
			return 'All categories';
		}

		if (value.length < 3) {
			return new Intl.ListFormat('en', { style: 'long' }).format(value);
		}

		return `${value.length} categories`;
	});

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger() {
		open = false;
		searchValue = '';
		tick().then(() => {
			triggerRef.focus();
		});
	}

	function toggleCategory(category: string) {
		if (value.includes(category)) {
			value = value.filter((c) => c !== category);
		} else {
			value = [...value, category];
		}

		plausible.trackEvent('category_select', {
			props: {
				selected_categories: value.join(',')
			}
		});
	}
</script>

<Popover.Root bind:open>
	<Popover.Trigger bind:ref={triggerRef}>
		{@const props = {}}
		{#snippet child({ props: triggerProps })}
			<Button
				{...triggerProps}
				variant="outline"
				class="w-full justify-between md:w-auto"
				role="combobox"
				aria-expanded={open}
			>
				{placeholder}
				<ChevronsUpDownIcon class="ml-2 size-4 shrink-0 opacity-50" />
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class="w-[300px] p-0">
		<Command.Root>
			<Command.Input placeholder="Search categories..." bind:value={searchValue} />
			<Command.List>
				<Command.Empty>No categories found.</Command.Empty>
				<Command.Group>
					{#each filteredCategories as category (category)}
						<Command.Item value={category} onSelect={() => toggleCategory(category)}>
							<CheckIcon
								class={cn('mr-2 size-4', value.includes(category) ? 'opacity-100' : 'opacity-0')}
							/>
							{category}
						</Command.Item>
					{/each}
				</Command.Group>
			</Command.List>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
