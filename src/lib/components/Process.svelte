<script lang="ts">
	import { PROCESS_STEPS } from '$lib/site';
</script>

<section id="processo" class="border-y border-line bg-paper-raised py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-5 md:px-8">
		<div class="max-w-2xl">
			<p class="registry-label text-brass">Protocolo</p>
			<h2 class="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-[2.6rem]">
				Do primeiro contato ao carimbo final
			</h2>
			<p class="mt-4 text-lg text-stone">
				Quatro etapas, cada uma acompanhada de perto — sem que você precise sair de sua casa.
			</p>
		</div>

		<ol class="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
			{#each PROCESS_STEPS as step (step.number)}
				<li class="border-t-2 border-ledger pt-5">
					<div class="registry-label text-brass">Etapa {step.number}</div>
					<h3 class="mt-3 font-display text-xl font-semibold text-ink">{step.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-stone">{step.description}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>
