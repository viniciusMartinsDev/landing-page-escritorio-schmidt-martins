<script lang="ts">
	// Motivo de planta cadastral: divisas de lote com cotas e marcos de canto.
	// Puro ornamento estrutural do hero — decorativo, escondido de leitores de tela.
	let { class: className = '' }: { class?: string } = $props();
</script>

<svg
	class={className}
	viewBox="0 0 480 360"
	fill="none"
	stroke="currentColor"
	aria-hidden="true"
	preserveAspectRatio="xMidYMid meet"
>
	<!-- Divisa do lote -->
	<path
		d="M60 300 L60 120 L210 60 L400 110 L410 250 L230 320 Z"
		stroke-width="1.4"
		stroke-linejoin="round"
	/>
	<!-- Subdivisão interna (desmembramento) -->
	<path d="M210 60 L230 320 M60 210 L222 190" stroke-width="0.8" stroke-dasharray="4 5" />

	<!-- Marcos de canto -->
	{#each [[60, 300], [60, 120], [210, 60], [400, 110], [410, 250], [230, 320]] as [cx, cy] (`${cx}-${cy}`)}
		<circle {cx} {cy} r="3.4" stroke-width="1.2" />
		<circle {cx} {cy} r="0.8" fill="currentColor" stroke="none" />
	{/each}

	<!-- Linha de cota com tiques -->
	<path d="M60 335 L410 335 M60 330 L60 340 M410 330 L410 340" stroke-width="0.8" />
	<text
		x="235"
		y="331"
		fill="currentColor"
		stroke="none"
		font-family="var(--font-mono)"
		font-size="9"
		letter-spacing="1"
		text-anchor="middle">L O T E</text
	>

	<!-- Rosa dos ventos simplificada -->
	<g transform="translate(430 320)" stroke-width="1">
		<path d="M0 -14 L0 14 M-14 0 L14 0" />
		<path d="M0 -14 L4 -6 L-4 -6 Z" fill="currentColor" stroke="none" />
		<text x="0" y="-16" fill="currentColor" stroke="none" font-family="var(--font-mono)" font-size="7" text-anchor="middle">N</text>
	</g>
</svg>
