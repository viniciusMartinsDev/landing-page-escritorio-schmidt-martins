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
	<path d="M3 10l9-6 9 6" />
	<path d="M4 10h16M5 10v8M19 10v8M9 10v8M15 10v8M3 21h18" />
</svg>
