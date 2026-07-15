<script lang="ts">
	import { CONTACT } from '$lib/site';

	// Selo de registro — elemento-assinatura do site. Materializa o mote
	// "Quem não registra não é dono": é o carimbo que torna a posse oficial.
	let { class: className = '' }: { class?: string } = $props();
</script>

<svg
	class={className}
	viewBox="0 0 200 200"
	role="img"
	aria-label="Selo {CONTACT.shortName} — registrado há mais de {CONTACT.yearsOfExperience} anos"
	fill="none"
>
	<defs>
		<path id="seal-top" d="M 30,100 A 70,70 0 0 1 170,100" />
		<path id="seal-bottom" d="M 32,100 A 68,68 0 0 0 168,100" />
	</defs>

	<circle cx="100" cy="100" r="94" stroke="currentColor" stroke-width="1.2" opacity="0.55" />
	<circle cx="100" cy="100" r="86" stroke="currentColor" stroke-width="2.4" />
	<circle cx="100" cy="100" r="58" stroke="currentColor" stroke-width="1" opacity="0.55" />

	<!-- Pontos de encerramento nas laterais, entre os arcos de texto -->
	<circle cx="18" cy="100" r="1.6" fill="currentColor" />
	<circle cx="182" cy="100" r="1.6" fill="currentColor" />

	<text
		fill="currentColor"
		font-family="var(--font-display)"
		font-size="15.5"
		letter-spacing="2.4"
		font-weight="600"
	>
		<textPath href="#seal-top" startOffset="50%" text-anchor="middle"
			>SCHMIDT &amp; MARTINS</textPath
		>
	</text>

	<text
		fill="currentColor"
		font-family="var(--font-mono)"
		font-size="8.4"
		letter-spacing="3.4"
	>
		<textPath href="#seal-bottom" startOffset="50%" text-anchor="middle"
			>DESPACHANTES · SAP-PR</textPath
		>
	</text>

	<!-- Núcleo: glifo de imóvel + carimbo "REGISTRADO" -->
	<g transform="translate(100 92)" stroke="currentColor">
		<path
			d="M -14,4 L 0,-9 L 14,4 M -10,1 L -10,14 L 10,14 L 10,1"
			stroke-width="1.6"
			stroke-linejoin="round"
			stroke-linecap="round"
		/>
	</g>
	<text
		x="100"
		y="128"
		fill="currentColor"
		font-family="var(--font-mono)"
		font-size="7.6"
		letter-spacing="2.6"
		text-anchor="middle">REGISTRADO</text
	>
	<text
		x="100"
		y="140"
		fill="currentColor"
		font-family="var(--font-display)"
		font-size="9"
		font-style="italic"
		text-anchor="middle">+{CONTACT.yearsOfExperience} anos</text
	>
</svg>
