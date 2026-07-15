<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { CONTACT } from '$lib/site';

	let { children } = $props();

	const title = `${CONTACT.name} | Regularização de Imóveis em ${CONTACT.city} - ${CONTACT.state}`;
	const description = `Há mais de ${CONTACT.yearsOfExperience} anos regularizando imóveis em ${CONTACT.city} e região: escrituras, inventário, desmembramento e mais. Fale no WhatsApp.`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="theme-color" content="#23402e" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:locale" content="pt_BR" />
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
