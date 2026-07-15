<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<svg
	class={className}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="1.5"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	<path d="M11 17l-2 2a1.5 1.5 0 0 1-2-2l4-4" />
	<path d="M13 19l1 1a1.5 1.5 0 0 0 2-2l-1-1" />
	<path d="M2 8l3-3 5 3 4-1 5 4v5l-3 1" />
	<path d="M22 8l-3-3-4 2" />
</svg>
