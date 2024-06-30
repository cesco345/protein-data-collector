import { fetchUniProtData } from './fetchUniProt.js';
import { fetchPDBData } from './fetchPDB.js';

export async function collectProteinData() {
  const query = "(reviewed:true) AND (organism_id:9606)";
  const proteins = await fetchUniProtData(query);

  const proteinData = await Promise.all(
    proteins.map(async (protein) => {
      const pdbId = protein.structures?.[0]?.pdb_id; // Adjust based on available data
      const pdbData = pdbId ? await fetchPDBData(pdbId) : null;

      return {
        uniProtId: protein.primaryAccession,
        name: protein.proteinDescription.recommendedName.fullName.value,
        sequence: protein.sequence.value,
        pdbData,
      };
    })
  );

  return proteinData;
}
