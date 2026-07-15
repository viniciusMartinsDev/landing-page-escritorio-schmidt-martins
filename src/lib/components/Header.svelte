<script lang="ts">
	import WhatsappButton from './WhatsappButton.svelte';
	import { NAV_LINKS } from '$lib/site';

	let menuOpen = $state(false);

	function closeMenu(): void {
		menuOpen = false;
	}
</script>

<header class="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
		<a href="#topo" class="group flex items-center gap-2.5" onclick={closeMenu}>
			<span
				class="flex h-8 w-8 items-center justify-center rounded-full border border-ledger text-ledger"
			>
				<svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.6">
					<path d="M4 10l8-6 8 6M6 9v10h12V9M10 19v-6h4v6" stroke-linejoin="round" />
				</svg>
			</span>
			<span class="font-display text-lg font-semibold tracking-tight text-ink">
				Schmidt <span class="text-brass">&amp;</span> Martins
			</span>
		</a>

		<nav class="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
			{#each NAV_LINKS as link (link.href)}
				<a
					href={link.href}
					class="registry-label text-stone transition-colors hover:text-ledger"
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="hidden md:block">
			<WhatsappButton label="WhatsApp" size="sm" />
		</div>

		<button
			type="button"
			class="flex h-10 w-10 items-center justify-center rounded-[var(--radius-doc)] text-ledger md:hidden"
			aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8">
				{#if menuOpen}
					<path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
				{:else}
					<path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
				{/if}
			</svg>
		</button>
	</div>

	{#if menuOpen}
		<nav class="border-t border-line bg-paper px-5 pb-6 md:hidden" aria-label="Navegação mobile">
			<ul class="flex flex-col divide-y divide-line">
				{#each NAV_LINKS as link (link.href)}
					<li>
						<a
							href={link.href}
							class="registry-label block py-4 text-ink"
							onclick={closeMenu}
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
			<div class="mt-4">
				<WhatsappButton label="Falar no WhatsApp" class="w-full" />
			</div>
		</nav>
	{/if}
</header>
