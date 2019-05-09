export const postUser = async (url, body) => {
  const response = await fetch( url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type' : 'application/json'
    }
  })
  if (!response.ok) {
    throw new Error('Failed to post user data')
  }
  return response.json();
}