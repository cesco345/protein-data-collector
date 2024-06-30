import fetch from "node-fetch";

export async function fetchUniProtData(query) {
  const base = "https://rest.uniprot.org/uniprotkb/search";
  const url = `${base}?query=${encodeURIComponent(query)}&format=json`;

  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`UniProt request failed: ${response.status}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching UniProt data:", error);
    return [];
  }
}
