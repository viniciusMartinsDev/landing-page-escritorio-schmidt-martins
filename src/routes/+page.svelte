<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import StatsBar from '$lib/components/StatsBar.svelte';
	import Services from '$lib/components/Services.svelte';
	import Benefits from '$lib/components/Benefits.svelte';
	import About from '$lib/components/About.svelte';
	import Process from '$lib/components/Process.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WhatsappIcon from '$lib/components/icons/WhatsappIcon.svelte';
	import { whatsappUrl, DEFAULT_WHATSAPP_MESSAGE } from '$lib/site';
</script>

<Header />

<main>
	<Hero />
	<StatsBar />
	<Services />
	<Benefits />
	<About />
	<Process />
	<CtaBanner />
</main>

<Footer />

<!-- Botão flutuante de WhatsApp para conversão em qualquer ponto da página. -->
<a
	href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
	target="_blank"
	rel="noopener noreferrer"
	aria-label="Falar no WhatsApp"
	class="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:outline-none"
>
	<WhatsappIcon class="h-7 w-7" />
</a>
