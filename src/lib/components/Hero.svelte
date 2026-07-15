<script lang="ts">
	import WhatsappButton from './WhatsappButton.svelte';
	import Seal from './Seal.svelte';
	import CadastralField from './CadastralField.svelte';
	import { CONTACT } from '$lib/site';
</script>

<section id="topo" class="relative overflow-hidden">
	<CadastralField
		class="pointer-events-none absolute -top-10 -right-24 hidden h-[540px] w-[640px] text-ledger/[0.09] lg:block"
	/>

	<div class="mx-auto max-w-6xl px-5 pt-32 pb-16 md:px-8 md:pt-40 md:pb-24">
		<div class="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
			<div>
				<p class="registry-label flex items-center gap-3 text-brass">
					<span class="h-px w-8 bg-brass"></span>
					Matrícula · Escritura · Inventário
				</p>

				<h1
					class="mt-6 font-display text-[2.6rem] leading-[1.05] font-semibold tracking-tight text-ink sm:text-6xl md:text-[4.2rem]"
				>
					Sem registro,<br />
					<span class="text-ledger italic">não há dono.</span>
				</h1>

				<p class="mt-7 max-w-xl text-lg leading-relaxed text-stone">
					Transformamos posse em propriedade. Há mais de {CONTACT.yearsOfExperience} anos
					cuidamos de escrituras, inventários e regularização em {CONTACT.city} — do
					primeiro documento ao carimbo final na matrícula.
				</p>

				<div class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
					<WhatsappButton label="Falar com um despachante" size="lg" />
					<a
						href="#servicos"
						class="registry-label inline-flex items-center gap-2 self-start px-1 py-4 text-ink transition-colors hover:text-ledger sm:self-auto"
					>
						Ver serviços
						<span aria-hidden="true">↓</span>
					</a>
				</div>
			</div>

			<!-- Selo estampado sobre o "documento" -->
			<div class="relative flex justify-center lg:justify-end">
				<div
					class="relative w-64 max-w-full rotate-[-7deg] sm:w-72 lg:w-[21rem]"
					aria-hidden="false"
				>
					<Seal class="w-full text-ledger drop-shadow-sm" />
				</div>
			</div>
		</div>
	</div>

	<div class="mx-auto max-w-6xl px-5 md:px-8">
		<div class="ledger-rule"></div>
	</div>
</section>
