// Fonte única de conteúdo do site. Todos os componentes leem daqui para evitar
// duplicação de NAP (nome/endereço/telefone), serviços e textos institucionais.

import type { Component } from "svelte";
import ScaleIcon from "./components/icons/ScaleIcon.svelte";
import DeedIcon from "./components/icons/DeedIcon.svelte";
import InheritanceIcon from "./components/icons/InheritanceIcon.svelte";
import DivideIcon from "./components/icons/DivideIcon.svelte";
import ContractIcon from "./components/icons/ContractIcon.svelte";
import BuildingIcon from "./components/icons/BuildingIcon.svelte";
import GrowthIcon from "./components/icons/GrowthIcon.svelte";
import HandshakeIcon from "./components/icons/HandshakeIcon.svelte";
import BankIcon from "./components/icons/BankIcon.svelte";

/** Dados de contato e presença digital da empresa. */
export const CONTACT = {
  name: "Schmidt e Martins Despachantes Imobiliários",
  shortName: "Schmidt & Martins",
  city: "Santo Antônio da Platina",
  state: "PR",
  yearsOfExperience: 30,
  slogan: "Quem não registra não é dono",
  phoneDisplay: "(43) 99609-2982",
  whatsappNumber: "5543996092982",
  instagramHandle: "despachantesimobiliarios.sap",
  // Coordenadas do pin oficial da empresa no Google Maps.
  mapsLatitude: -23.2999007,
  mapsLongitude: -50.0841253,
} as const;

/** URL do WhatsApp com mensagem pré-preenchida. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** URL do perfil no Instagram. */
export const instagramUrl = `https://instagram.com/${CONTACT.instagramHandle}`;

/**
 * URL de embed do Google Maps (sem API key) apontando para o escritório.
 *
 * @example
 * <iframe src={mapsEmbedUrl()} title="Mapa" />
 */
export function mapsEmbedUrl(): string {
  const query = `${CONTACT.name}@${CONTACT.mapsLatitude},${CONTACT.mapsLongitude}`;
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=17&output=embed`;
}

/** URL para abrir a localização do escritório no Google Maps. */
export const mapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${CONTACT.mapsLatitude},${CONTACT.mapsLongitude}`;

/** URL de discagem telefônica. */
export const telUrl = `tel:+${CONTACT.whatsappNumber}`;

/** Mensagem padrão usada nos CTAs principais de WhatsApp. */
export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site e gostaria de saber mais sobre a regularização do meu imóvel.";

export type Service = {
  title: string;
  description: string;
  icon: Component;
};

export const SERVICES: Service[] = [
  {
    title: "Regularização extrajudicial",
    description:
      "Colocamos seu imóvel em conformidade sem processo judicial, de forma mais rápida e econômica.",
    icon: ScaleIcon,
  },
  {
    title: "Escrituras públicas",
    description: "Acompanhamento de escrituras de compra, venda, permuta e doação em cartório.",
    icon: DeedIcon,
  },
  {
    title: "Inventário extrajudicial",
    description:
      "Partilha de bens de herança em cartório e regularização de partilha, com agilidade e segurança para toda a família.",
    icon: InheritanceIcon,
  },
  {
    title: "Desmembramento e divisão",
    description:
      "Regularização de desmembramento, com toda a documentação averbada. Desmembramento, unificação e divisão de lotes com toda a documentação regularizada.",
    icon: DivideIcon,
  },
  {
    title: "Contratos imobiliários",
    description:
      "Elaboração de contratos de compra, venda, permuta e demais negócios imobiliários com respaldo jurídico.",
    icon: ContractIcon,
  },
  {
    title: "Registro de construções",
    description:
      "Averbação e registro de construções irregulares para regularizar sua área construída.",
    icon: BuildingIcon,
  },
];

export type Benefit = {
  title: string;
  description: string;
  highlight: string;
  icon: Component;
};

export const BENEFITS: Benefit[] = [
  {
    highlight: "+30 a 50%",
    title: "Valorização do imóvel",
    description:
      "Um imóvel regularizado pode valer de 30% a 50% mais no mercado do que um sem documentação.",
    icon: GrowthIcon,
  },
  {
    highlight: "Venda ágil",
    title: "Negociação mais rápida",
    description:
      "Documentação em dia elimina travas na negociação e justifica o preço pedido ao comprador.",
    icon: HandshakeIcon,
  },
  {
    highlight: "Crédito liberado",
    title: "Acesso a financiamento",
    description:
      "Só imóveis regularizados são aceitos por bancos, abrindo prazos longos e juros melhores.",
    icon: BankIcon,
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Contato",
    description: "Você fala com a gente pelo WhatsApp e conta a situação do seu imóvel.",
  },
  {
    number: "02",
    title: "Análise",
    description: "Avaliamos a documentação e apresentamos o caminho e os custos com clareza.",
  },
  {
    number: "03",
    title: "Regularização",
    description: "Cuidamos de todo o trâmite em cartórios e órgãos, mantendo você informado.",
  },
  {
    number: "04",
    title: "Documento em mãos",
    description: "Você recebe seu imóvel 100% regularizado, pronto para vender ou financiar.",
  },
];

export type NavLink = {
  label: string;
  href: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Sobre", href: "#sobre" },
  { label: "Como funciona", href: "#processo" },
  { label: "Contato", href: "#contato" },
];
