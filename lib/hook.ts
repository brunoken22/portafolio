export async function fetchApiAuth(api: any) {
  try {
    const option = api[1] || {};
    if (api[0]) {
      const response = await fetch(
        process.env.NEXT_PUBLIC_PORT + api[0],
        option
      );
      const data = await response.json();
      if (data) {
        return data;
      }
    }
  } catch (e: any) {
    return e.message;
  }
}

export async function SubirLikes(like: any) {
  const api = '/api/like';
  const header = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(like),
  };

  const data = await fetchApiAuth(like.id ? [api, header] : null);

  return data;
}
export async function QuitarLike(like: any) {
  const api = '/api/like';
  const header = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(like),
  };

  const dataMod = await fetchApiAuth(like.like ? [api, header] : null);
  return dataMod;
}

export function mensaje(data: any) {
  const api = '/api/mensaje';
  const header = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  const dataMod = fetchApiAuth(data ? [api, header] : null);
  return dataMod;
}
