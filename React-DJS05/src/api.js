/**
 * api.js
 * Small wrapper around the podcast API endpoints.
 */

/**
 * Fetch preview list of shows
 * @returns {Promise<Array>}
 */
export async function fetchPreviews() {
  const res = await fetch('https://podcast-api.netlify.app');
  if (!res.ok) throw new Error('Failed to fetch previews');
  return res.json();
}

/**
 * Fetch show by id
 * @param {string|number} id
 * @returns {Promise<Object>}
 */
export async function fetchShowById(id) {
  const res = await fetch(`https://podcast-api.netlify.app/id/${id}`);
  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error('Failed to fetch show');
  }
  return res.json();
}

/**
 * Fetch genre by id (not always necessary but included)
 * @param {string|number} id
 * @returns {Promise<Object>}
 */
export async function fetchGenreById(id) {
  const res = await fetch(`https://podcast-api.netlify.app/genre/${id}`);
  if (!res.ok) throw new Error('Failed to fetch genre');
  return res.json();
}
