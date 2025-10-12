
/**
 * Fetch a single show by ID from the provided API.
 * Endpoint: https://podcast-api.netlify.app/id/<ID>
 * Returns the show object or null if not found.
 */
export async function fetchShowById(id) {
  try {
    const res = await fetch(`https://podcast-api.netlify.app/id/${id}`);
    if (!res.ok) {
      console.warn('fetchShowById non-ok', res.status);
      return null;
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error('fetchShowById error', err);
    throw err;
  }
}
