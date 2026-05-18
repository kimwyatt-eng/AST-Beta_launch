// Rotating card accent: violet-dominant, cyan/magenta sprinkled.
// The sequence is reshuffled on every page load so cards land on different
// colors each visit, while guaranteeing no two adjacent cards repeat.

export type CardAccent = "violet" | "cyan" | "magenta";

const POOL: CardAccent[] = ["violet", "violet", "violet", "cyan", "cyan", "magenta", "magenta"];

function shuffleNoAdjacent(pool: CardAccent[]): CardAccent[] {
  for (let attempt = 0; attempt < 50; attempt++) {
    const arr = [...pool];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    const ok = arr.every((v, i) => i === 0 || v !== arr[i - 1]);
    if (ok) return arr;
  }
  return pool;
}

const SEQUENCE = shuffleNoAdjacent(POOL);
const OFFSET = Math.floor(Math.random() * SEQUENCE.length);

export const cardAccent = (i: number): CardAccent =>
  SEQUENCE[(i + OFFSET) % SEQUENCE.length];

export const panelClass = (i: number) => `ast-panel card-${cardAccent(i)}`;
export const titleClass = (i: number) => `title-${cardAccent(i)}`;
