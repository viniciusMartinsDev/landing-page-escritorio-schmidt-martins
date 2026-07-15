<script lang="ts">
	import WhatsappButton from './WhatsappButton.svelte';
	import Seal from './Seal.svelte';
</script>

<section class="py-20 md:py-28">
	<div class="mx-auto max-w-6xl px-5 md:px-8">
		<div class="relative overflow-hidden border border-line bg-ledger px-8 py-16 text-paper-raised md:px-16 md:py-20">
			<Seal
				class="pointer-events-none absolute -right-10 -bottom-12 w-64 rotate-[10deg] text-paper-raised/[0.07]"
			/>
			<div class="relative max-w-2xl">
				<p class="registry-label text-brass">Sem compromisso</p>
				<h2 class="mt-4 font-display text-3xl font-semibold tracking-tight md:text-[2.6rem]">
					Seu imóvel merece estar no seu nome
				</h2>
				<p class="mt-4 text-lg text-paper-raised/65">
					Fale agora com um despachante e receba uma avaliação da situação do seu imóvel — o
					que falta, quanto custa e quanto tempo leva.
				</p>
				<div class="mt-9">
					<WhatsappButton label="Falar no WhatsApp agora" variant="light" size="lg" />
				</div>
			</div>
		</div>
	</div>
</section>
