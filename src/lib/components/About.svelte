<script lang="ts">
	import Seal from './Seal.svelte';
	import { CONTACT } from '$lib/site';

	const highlights: string[] = [
		'Atendimento pessoal, do primeiro contato à entrega',
		'Trâmite 100% extrajudicial — mais rápido e mais barato',
		'Trânsito conhecido nos cartórios e órgãos da região'
	];
</script>

<section id="sobre" class="py-20 md:py-28">
	<div class="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2 md:px-8">
		<div>
			<p class="registry-label text-brass">Quem assina</p>
			<h2 class="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.6rem]">
				Três décadas cuidando do patrimônio de famílias da região
			</h2>
			<p class="mt-5 text-lg leading-relaxed text-stone">
				A {CONTACT.name} nasceu em {CONTACT.city} com um propósito simples: descomplicar a
				documentação imobiliária. Em mais de {CONTACT.yearsOfExperience} anos, ajudamos
				centenas de proprietários a converter imóveis irregulares em patrimônio seguro e
				valorizado.
			</p>

			<ul class="mt-8 space-y-4">
				{#each highlights as item (item)}
					<li class="flex items-start gap-3 border-t border-line pt-4">
						<svg class="mt-1 h-4 w-4 shrink-0 text-brass" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
							<path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<span class="text-base text-ink">{item}</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Retrato emoldurado como prova de arquivo; trocar por foto real depois. -->
		<figure class="relative">
			<div
				class="aspect-[4/5] overflow-hidden border border-line bg-ledger-soft p-3"
			>
				<div
					class="flex h-full w-full flex-col items-center justify-center gap-3 border border-dashed border-ledger/25 text-ledger/40"
				>
					<svg class="h-14 w-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1">
						<circle cx="12" cy="8" r="4" />
						<path d="M4 21c0-4 4-6 8-6s8 2 8 6" stroke-linecap="round" />
					</svg>
					<span class="registry-label">Foto da equipe</span>
				</div>
			</div>
			<Seal class="absolute -bottom-6 -left-6 hidden w-24 rotate-[8deg] text-brass sm:block" />
			<figcaption class="registry-label mt-4 text-stone">
				{CONTACT.city} · {CONTACT.state}
			</figcaption>
		</figure>
	</div>
</section>
