<script lang="ts">
	import { Lang } from '$lib/apps';
	import * as Select from './ui/select';

	let { value = $bindable() }: { value: Lang[] } = $props();

	let placeholder = $derived.by(() => {
		if (value.length === 0) {
			return 'All languages';
		}

		if (value.length < 3) {
			return new Intl.ListFormat('en', { style: 'long' }).format(value);
		}

		return `${value.length} languages`;
	});
</script>

<Select.Root type="multiple" bind:value>
	<Select.Trigger class="plausible-event-name=lang_select w-full md:w-auto"
		>{placeholder}</Select.Trigger
	>
	<Select.Content>
		{#each Object.values(Lang) as lang (lang)}
			<Select.Item value={lang}>{lang}</Select.Item>
		{/each}
	</Select.Content>
</Select.Root>
