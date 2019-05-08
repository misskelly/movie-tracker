export const fetchMovies = async (url) => {
  const response = await fetch(url);
  if(!response.ok) {
    throw Error("Failed to fetch movies")
  }
  return await response.json();
}