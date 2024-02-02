export function formatString(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll(/[-_[\]{}()*+?.;:!,/^$|#]/g, "")
    .replaceAll(" ", "%20%");
}

/**
 *
 * @param {date} dateString
 * @returns date in fr format (DD/MM/YYYY)
 */
export function formatDateString(dateString) {
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  return new Date(dateString).toLocaleDateString("fr-FR", options);
}

/**
 *Fonction pour supprimer les points dans une phrase.
 * @param {string} e - Phrase qui va être traitée.
 */
export function replaceAll(e) {
  return e.replaceAll(".", "");
}
