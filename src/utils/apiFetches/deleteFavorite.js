export const deleteFavorite = async (userId, movieId) => {
  const url = `http://localhost:3000/api/users/${userId}/favorites/${movieId}`
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'}
  })
    if (!response.ok) {
      throw new Error('Something went wrong')
    }
  return response.json()
}