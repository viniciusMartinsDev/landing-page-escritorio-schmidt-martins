<script lang="ts">
	import Seal from './Seal.svelte';
	import { CONTACT, mapsEmbedUrl, mapsPlaceUrl } from '$lib/site';

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
				Três décadas cuidando do seu patrimônio
			</h2>
			<p class="mt-5 text-lg leading-relaxed text-stone">
				A {CONTACT.name} nasceu em {CONTACT.city} com um propósito simples: descomplicar a
				documentação imobiliária. Ajudamos centenas de proprietários a converter imóveis irregulares em patrimônio seguro e
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

		<!-- Mapa emoldurado como prova de arquivo; substitui o antigo placeholder da foto da equipe. -->
		<figure class="relative">
			<div
				class="aspect-[4/5] overflow-hidden border border-line bg-ledger-soft p-3"
			>
				<iframe
					src={mapsEmbedUrl()}
					title="Localização da {CONTACT.shortName} no mapa"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					class="h-full w-full border-0"
				></iframe>
			</div>
			<Seal class="absolute -bottom-6 -left-6 hidden w-24 rotate-[8deg] text-brass sm:block" />
			<figcaption class="registry-label mt-4 text-stone">
				{CONTACT.city} · {CONTACT.state} ·
				<a
					href={mapsPlaceUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="text-ink underline-offset-4 transition-colors hover:text-ledger hover:underline"
				>
					Abrir no Google Maps ↗
				</a>
			</figcaption>
		</figure>
	</div>
</section>
