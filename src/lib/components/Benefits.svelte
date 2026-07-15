<script lang="ts">
	import WhatsappButton from './WhatsappButton.svelte';
	import { BENEFITS } from '$lib/site';
</script>

<section id="beneficios" class="bg-ledger-deep py-20 text-paper-raised md:py-28">
	<div class="mx-auto max-w-6xl px-5 md:px-8">
		<div class="max-w-2xl">
			<p class="registry-label text-brass">Por que regularizar</p>
			<h2 class="mt-3 font-display text-3xl font-semibold tracking-tight md:text-[2.6rem]">
				O papel muda o valor do imóvel
			</h2>
			<p class="mt-4 text-lg text-paper-raised/60">
				Um imóvel sem documentação vale menos, trava na hora da venda e não é aceito pelos
				bancos. Regularizar reverte os três de uma vez.
			</p>
		</div>

		<div class="mt-14 grid gap-px border-t border-white/10 md:grid-cols-3">
			{#each BENEFITS as benefit, i (benefit.title)}
				<div class="border-white/10 pt-8 md:pr-8 {i > 0 ? 'md:border-l md:pl-8' : ''}">
					<div class="flex items-center gap-3 text-brass">
						<benefit.icon class="h-6 w-6" />
						<span class="font-display text-2xl font-semibold">{benefit.highlight}</span>
					</div>
					<h3 class="mt-4 text-base font-semibold text-paper-raised">{benefit.title}</h3>
					<p class="mt-2 text-sm leading-relaxed text-paper-raised/55">{benefit.description}</p>
				</div>
			{/each}
		</div>

		<div class="mt-14">
			<WhatsappButton
				label="Quero regularizar meu imóvel"
				variant="light"
				size="lg"
				message="Olá! Quero saber quanto custa e quanto tempo leva para regularizar meu imóvel."
			/>
		</div>
	</div>
</section>
