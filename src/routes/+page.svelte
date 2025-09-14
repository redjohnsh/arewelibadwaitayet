<script lang="ts">
	import { Lang } from '$lib/apps';
	import type { PageData } from './$types';
	import AppCard from '$lib/components/app-card.svelte';
	import fuzzysort from 'fuzzysort';
	import { List } from 'swisslist';
	import EditorsChoice from '$lib/components/editors-choice.svelte';
	import EmptyState from '$lib/components/empty-state.svelte';
	import ExploreNewApps from '$lib/components/explore-new-apps.svelte';
	import LangSelect from '$lib/components/lang-select.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import * as Pagination from '$lib/components/ui/pagination';
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import { plausible } from '$lib/plausible';
	import { BrushCleaningIcon, LayoutGridIcon, LayoutListIcon, SearchIcon } from '@lucide/svelte';
	import { debounce } from 'throttle-debounce';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	// Extract the serializable app data from the loader
	const { appList: rawAppList, editorsChoice: rawEditorsChoice } = data;

	// Client-side: Create List with fuzzy search preparation
	const appList = $derived(
		List.from(rawAppList).map((app) => ({
			...app,
			name: fuzzysort.prepare(app.name),
			desc: fuzzysort.prepare(app.desc),
			lang: fuzzysort.prepare(app.lang)
		}))
	);

	// Track if we're in the browser (after hydration) and loading state
	let isClient = $state(false);
	let isEditorsChoiceLoading = $state(true);

	const editorsChoice = $derived.by(() => {
		const baseList = List.from(rawEditorsChoice);
		// Only shuffle after hydration to avoid SSR/client mismatch
		const shuffledList = isClient ? baseList.shuffle() : baseList;

		return shuffledList.take(6).map((app) => ({
			...app,
			name: fuzzysort.prepare(app.name),
			desc: fuzzysort.prepare(app.desc),
			lang: fuzzysort.prepare(app.lang)
		}));
	});

	const PER_PAGE = 24;

	let currentPage = $state(1);

	let search = $state('');
	let selectedLang = $state<Lang[]>([]);
	let selectedView = $state<'group' | 'list'>('list');
	let inputRef = $state<HTMLInputElement>(null!);

	// Set client flag after hydration with loading delay
	$effect(() => {
		isClient = true;
		// Simulate loading with random delay between 500-2000ms for realistic feel
		const randomDelay = Math.floor(Math.random() * 1500) + 500; // 500-2000ms
		const timer = setTimeout(() => {
			isEditorsChoiceLoading = false;
		}, randomDelay);

		return () => clearTimeout(timer);
	});

	$effect(() => {
		const controller = new AbortController();

		document.addEventListener(
			'keydown',
			(ev) => {
				if (ev.key.toLowerCase() === 'k' && (ev.metaKey || ev.ctrlKey)) {
					if (document.activeElement !== inputRef) {
						ev.preventDefault();
						ev.stopPropagation();
						inputRef?.focus();
					}
				}
			},
			controller
		);

		return () => controller.abort();
	});

	const trackSearch = debounce(500, (search: string) => {
		if (!search.trim().length) return;
		plausible.trackEvent('search', {
			props: {
				search_term: search
			}
		});
	});

	$effect(() => {
		trackSearch(search);
	});

	// Reset pagination when search or filters change
	$effect(() => {
		// Reset to page 1 when search or language filters change
		search;
		selectedLang;
		currentPage = 1;
	});

	const filtered = $derived.by(() => {
		let arr = appList.clone();

		if (selectedLang.length) {
			arr = arr.filter((app) => selectedLang.includes(app.lang.target as Lang));
		}

		if (!search.trim().length) {
			return arr.sort((app1, app2) => app1.name.target.localeCompare(app2.name.target));
		}

		return List.from(
			fuzzysort
				.go(search, arr.toArray(), { keys: ['name', 'desc', 'lang'] })
				.map((result) => result.obj)
		);
	});

	const grouped = $derived.by(() => {
		return Object.entries(filtered.groupBy((item) => item.lang.target as Lang));
	});

	const paginated = $derived.by(() => {
		return filtered.drop((currentPage - 1) * PER_PAGE).take(PER_PAGE);
	});

	function clearFilters() {
		search = '';
		selectedLang = [];
		currentPage = 1;

		plausible.trackEvent('clear_filters');
	}
</script>

<div class="mx-auto mb-20 flex max-w-4xl flex-col text-center">
	<h1 class="mt-12 text-6xl font-extrabold text-balance">
		Discover the best Adwaita apps in one place
	</h1>
	<h2 class="text-muted-foreground mt-8 text-xl text-balance">
		A curated selection of Linux apps built on Libadwaita. Explore the latest and most exciting apps
		seamlessly integrating with your GNOME system.
	</h2>
</div>

<EditorsChoice apps={editorsChoice} loading={isEditorsChoiceLoading} />

<div class="mt-12">
	<ExploreNewApps apps={appList} count={6} />
</div>

<div class="mt-12">
	<h2 class="mb-6 text-2xl font-bold">All Apps</h2>

	<div class="gap-2 md:flex md:items-center">
		<div class="flex flex-1 items-center gap-2">
			<div class="relative w-full md:max-w-2xl">
				<Input
					bind:value={search}
					class="peer ps-9"
					placeholder="Search apps... (try fuzzy search like 'audi play' for Audio Player)"
					type="search"
					bind:ref={inputRef}
				/>
				<div
					class="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50"
				>
					<SearchIcon class="size-4" aria-hidden="true" />
				</div>
			</div>
			<Button variant="outline" size="icon" onclick={clearFilters}>
				<BrushCleaningIcon />
			</Button>
		</div>
		<div class="mt-4 flex shrink-0 items-center gap-2 md:mt-0">
			<LangSelect bind:value={selectedLang} />

			<ToggleGroup.Root
				type="single"
				variant="outline"
				bind:value={selectedView}
				onValueChange={(value) => {
					plausible.trackEvent('view_change', {
						props: {
							view: value
						}
					});
				}}
			>
				<ToggleGroup.Item value="list">
					<LayoutListIcon />
				</ToggleGroup.Item>
				<ToggleGroup.Item value="group">
					<LayoutGridIcon />
				</ToggleGroup.Item>
			</ToggleGroup.Root>
		</div>
	</div>

	<div class="text-muted-foreground mt-4 text-sm">
		Showing {filtered.size} of {appList.size} apps
	</div>

	{#if filtered.size}
		{#if selectedView === 'list'}
			<div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each paginated as app (app.id)}
					<AppCard {app} />
				{/each}
			</div>

			{#if paginated.size < filtered.size}
				<Pagination.Root
					class="mt-12"
					count={filtered.size}
					perPage={PER_PAGE}
					bind:page={currentPage}
				>
					{#snippet children({ pages, currentPage })}
						<Pagination.Content>
							<Pagination.Item>
								<Pagination.PrevButton />
							</Pagination.Item>
							{#each pages as page (page.key)}
								{#if page.type === 'ellipsis'}
									<Pagination.Item>
										<Pagination.Ellipsis />
									</Pagination.Item>
								{:else}
									<Pagination.Item>
										<Pagination.Link
											{page}
											isActive={currentPage === page.value}
											onclick={() => {
												plausible.trackEvent('paginate', {
													props: {
														page: page.value
													}
												});
											}}
										>
											{page.value}
										</Pagination.Link>
									</Pagination.Item>
								{/if}
							{/each}
							<Pagination.Item>
								<Pagination.NextButton />
							</Pagination.Item>
						</Pagination.Content>
					{/snippet}
				</Pagination.Root>
			{/if}
		{:else}
			<div class="mt-6">
				{#each grouped.toSorted(([lang], [lang2]) => lang.localeCompare(lang2)) as [lang, apps]}
					<div class="mt-12 mb-4 flex flex-col gap-1 first-of-type:mt-0">
						<h2
							class="bg-background/80 sticky top-0 z-10 flex items-center gap-2 py-2 text-2xl font-bold backdrop-blur-lg"
						>
							{lang} <span class="text-muted-foreground text-sm">({apps.size} apps)</span>
						</h2>
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
							{#each apps as app (app.id)}
								<AppCard {app} />
							{/each}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	{:else}
		<div class="mt-12">
			<EmptyState {search} {selectedLang} />
		</div>
	{/if}
</div>
