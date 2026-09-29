import { describe, expect, it } from "vitest";
import { CONTACT, mapsEmbedUrl, mapsPlaceUrl } from "./site";

describe("mapsEmbedUrl", () => {
  it("aponta para as coordenadas do escritório em modo embed", () => {
    const url = new URL(mapsEmbedUrl());
    expect(url.searchParams.get("output")).toBe("embed");
    expect(url.searchParams.get("q")).toBe(
      `${CONTACT.name}@${CONTACT.mapsLatitude},${CONTACT.mapsLongitude}`,
    );
  });
});

describe("mapsPlaceUrl", () => {
  it("abre a busca do Google Maps nas coordenadas do escritório", () => {
    const url = new URL(mapsPlaceUrl);
    expect(url.hostname).toBe("www.google.com");
    expect(url.searchParams.get("query")).toBe(`${CONTACT.mapsLatitude},${CONTACT.mapsLongitude}`);
  });
});
