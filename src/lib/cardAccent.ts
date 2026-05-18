// Rotating card accent: violet-dominant, cyan/magenta sprinkled for hierarchy.
// Order chosen so adjacent cards in a grid don't repeat a color.
const ACCENTS = ["violet", "cyan", "violet", "magenta", "violet", "cyan", "magenta"] as const;

export type CardAccent = (typeof ACCENTS)[number];

export const cardAccent = (i: number): CardAccent => ACCENTS[i % ACCENTS.length];
export const panelClass = (i: number) => `ast-panel card-${cardAccent(i)}`;
export const titleClass = (i: number) => `title-${cardAccent(i)}`;
