import { collectProteinData } from "./collectData.js";
import { calculateAminoAcidComposition, saveSequencesToFile } from "./utils.js";

(async () => {
  const proteinData = await collectProteinData();

  // Separate sequences
  const uniProtSequences = proteinData.map((protein) => protein.sequence);
  const pdbSequences = proteinData
    .filter((protein) => protein.pdbData)
    .map((protein) => protein.pdbData.structure);

  // Save sequences to files
  saveSequencesToFile(uniProtSequences, "uniprot_sequences.txt");
  saveSequencesToFile(pdbSequences, "pdb_sequences.txt");

  // Calculate and display amino acid compositions
  proteinData.forEach((protein) => {
    const composition = calculateAminoAcidComposition(protein.sequence);
    console.log(`Protein: ${protein.name} (${protein.uniProtId})`);
    console.log("Amino Acid Composition:", composition);
  });
})();
