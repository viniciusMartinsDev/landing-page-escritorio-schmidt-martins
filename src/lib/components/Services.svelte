<script lang="ts">
	import { SERVICES } from '$lib/site';

	const pad = (n: number): string => String(n + 1).padStart(2, '0');
</script>

<section id="servicos" class="py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-5 md:px-8">
		<div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<div class="max-w-xl">
				<p class="registry-label text-brass">Índice de serviços</p>
				<h2 class="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.6rem]">
					Cada etapa da documentação, resolvida
				</h2>
			</div>
			<p class="max-w-sm text-stone">
				Da lavratura da escritura ao registro na matrícula — um interlocutor só, do começo ao fim.
			</p>
		</div>

		<!-- Índice em tabela de livro-razão: hairlines compartilhadas, sem cantos. -->
		<div
			class="mt-12 grid border-t border-l border-line sm:grid-cols-2 lg:grid-cols-3"
		>
			{#each SERVICES as service, i (service.title)}
				<article class="group relative border-r border-b border-line bg-paper-raised p-7">
					<div class="flex items-start justify-between">
						<span
							class="flex h-11 w-11 items-center justify-center rounded-full border border-ledger/25 text-ledger transition-colors group-hover:bg-ledger group-hover:text-paper-raised"
						>
							<service.icon class="h-5 w-5" />
						</span>
						<span class="registry-label text-stone/70">{pad(i)}</span>
					</div>
					<h3 class="mt-6 font-display text-xl font-semibold text-ink">{service.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-stone">{service.description}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
