export const getPreferences = (userId) => {
  return fetch(`/api/user/v1/preferences/${userId}`, {
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
    }
  })
  .then(data => data.json())
  .catch(() => {

  })
}

export const setPreferences = (userId, prefDiff) => {
  return fetch(`/api/user/v1/preferences/${userId}`, {
    method: 'PATCH',
    credentials: 'same-origin',
    body: prefDiff,
    headers: {
      'Accept': 'application/json',
    }
  })
  .then(data => data.json())
  .catch(() => {

  })
}
