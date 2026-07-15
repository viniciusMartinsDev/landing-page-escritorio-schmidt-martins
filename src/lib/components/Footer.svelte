<script lang="ts">
	import WhatsappIcon from './icons/WhatsappIcon.svelte';
	import InstagramIcon from './icons/InstagramIcon.svelte';
	import {
		CONTACT,
		NAV_LINKS,
		instagramUrl,
		telUrl,
		whatsappUrl,
		DEFAULT_WHATSAPP_MESSAGE
	} from '$lib/site';

	const year = new Date().getFullYear();
</script>

<footer id="contato" class="border-t border-line bg-paper">
	<div class="mx-auto max-w-6xl px-5 py-16 md:px-8">
		<div class="grid gap-10 md:grid-cols-3">
			<div>
				<div class="font-display text-lg font-semibold text-ink">
					Schmidt <span class="text-brass">&amp;</span> Martins
				</div>
				<p class="registry-label mt-2 text-stone/80">{CONTACT.slogan}</p>
				<p class="mt-4 max-w-xs text-sm leading-relaxed text-stone">
					Despachantes imobiliários em {CONTACT.city} - {CONTACT.state}. Há mais de
					{CONTACT.yearsOfExperience} anos regularizando imóveis com segurança.
				</p>
			</div>

			<nav aria-label="Navegação do rodapé">
				<h3 class="registry-label text-stone">Navegação</h3>
				<ul class="mt-4 space-y-2.5">
					{#each NAV_LINKS as link (link.href)}
						<li>
							<a href={link.href} class="text-sm text-ink transition-colors hover:text-ledger">
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<div>
				<h3 class="registry-label text-stone">Contato</h3>
				<ul class="mt-4 space-y-3">
					<li>
						<a
							href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2.5 text-sm text-ink transition-colors hover:text-ledger"
						>
							<WhatsappIcon class="h-5 w-5 text-ledger" />
							{CONTACT.phoneDisplay}
						</a>
					</li>
					<li>
						<a
							href={instagramUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2.5 text-sm text-ink transition-colors hover:text-ledger"
						>
							<InstagramIcon class="h-5 w-5 text-ledger" />
							@{CONTACT.instagramHandle}
						</a>
					</li>
					<li>
						<a
							href={telUrl}
							class="inline-flex items-center gap-2.5 text-sm text-ink transition-colors hover:text-ledger"
						>
							<svg class="h-5 w-5 text-ledger" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<path
									d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							Ligar agora
						</a>
					</li>
				</ul>
			</div>
		</div>

		<div
			class="registry-label mt-12 flex flex-col gap-2 border-t border-line pt-6 text-stone sm:flex-row sm:items-center sm:justify-between"
		>
			<span>© {year} {CONTACT.name}</span>
			<span>{CONTACT.city} · {CONTACT.state}</span>
		</div>
	</div>
</footer>
