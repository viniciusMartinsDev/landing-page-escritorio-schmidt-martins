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
	<path d="M4 21V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v15" />
	<path d="M15 10h4a1 1 0 0 1 1 1v10M3 21h18" />
	<path d="M8 8h3M8 12h3M8 16h3" />
</svg>
