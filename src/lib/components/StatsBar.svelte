<script lang="ts">
	import { CONTACT } from '$lib/site';

	type Stat = { value: string; label: string };

	const stats: Stat[] = [
		{ value: `${CONTACT.yearsOfExperience}+`, label: 'anos de registro' },
		{ value: '30–50%', label: 'de valorização' },
		{ value: '100%', label: 'extrajudicial' },
		{ value: 'SAP·PR', label: 'e toda a região' }
	];
</script>

<section class="bg-ledger text-paper-raised">
	<div class="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
		{#each stats as stat, i (stat.label)}
			<div
				class="border-white/10 px-5 py-8 md:py-10 {i % 2 === 1 ? 'border-l' : ''} {i >= 2
					? 'border-t md:border-t-0'
					: ''} {i > 0 ? 'md:border-l' : ''}"
			>
				<div class="font-display text-3xl font-semibold md:text-4xl">{stat.value}</div>
				<div class="registry-label mt-2 text-brass">{stat.label}</div>
			</div>
		{/each}
	</div>
</section>
