# protein-data-collector
This setup fetches protein data from UniProt and PDB and logs the combined data to the console and saves it in a text file for further AI training and validation. Adjust the query and data handling as needed for your specific use case. You can also integrate the amino acid composition calculation into your project.


File Format: The sequences are saved in a FASTA-like format (each sequence preceded by >). You can modify this to meet your AI model's input format.
File Names: Two files are created:
uniprot_sequences.txt for UniProt sequences.
pdb_sequences.txt for PDB sequences.
