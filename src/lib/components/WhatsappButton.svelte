<script lang="ts">
	import WhatsappIcon from './icons/WhatsappIcon.svelte';
	import { whatsappUrl, DEFAULT_WHATSAPP_MESSAGE } from '$lib/site';

	type Variant = 'primary' | 'light' | 'ghost';

	let {
		label = 'Falar no WhatsApp',
		message = DEFAULT_WHATSAPP_MESSAGE,
		variant = 'primary',
		size = 'md',
		class: className = ''
	}: {
		label?: string;
		message?: string;
		variant?: Variant;
		size?: 'sm' | 'md' | 'lg';
		class?: string;
	} = $props();

	const variants: Record<Variant, string> = {
		primary: 'bg-ledger text-paper-raised hover:bg-ledger-deep',
		light: 'bg-paper-raised text-ledger hover:bg-white',
		ghost: 'border border-current/40 text-current hover:bg-current/10'
	};

	const sizes = {
		sm: 'px-4 py-2 text-sm gap-1.5',
		md: 'px-5 py-3 text-sm gap-2',
		lg: 'px-7 py-4 text-base gap-2.5'
	};
</script>

<a
	href={whatsappUrl(message)}
	target="_blank"
	rel="noopener noreferrer"
	class="inline-flex items-center justify-center rounded-[var(--radius-doc)] font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:outline-none {variants[
		variant
	]} {sizes[size]} {className}"
>
	<WhatsappIcon class="h-5 w-5 shrink-0" />
	<span>{label}</span>
</a>
