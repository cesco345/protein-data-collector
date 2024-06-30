import fetch from "node-fetch";

export async function fetchPDBData(pdbId) {
  const url = `https://data.rcsb.org/rest/v1/core/entry/${pdbId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`PDB request failed: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching PDB data:", error);
    return null;
  }
}
