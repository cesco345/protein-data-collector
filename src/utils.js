import fs from "fs";

export function calculateAminoAcidComposition(sequence) {
  const composition = {};
  const total = sequence.length;

  for (const aa of sequence) {
    composition[aa] = (composition[aa] || 0) + 1;
  }

  for (const aa in composition) {
    composition[aa] = (composition[aa] / total) * 100;
  }

  return composition;
}

export function saveSequencesToFile(sequences, filename) {
  const formattedSequences = sequences.map((seq) => `>${seq}`).join("\n");
  fs.writeFileSync(filename, formattedSequences);
  console.log(`Sequences saved to ${filename}`);
}
