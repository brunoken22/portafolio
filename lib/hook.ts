import { LikesRequestType, NodemailRequestType } from "@/components/V2/types";

export async function fetchApiAuth(api: [string, {}]) {
  try {
    const option = api[1] || {};
    if (api[0]) {
      const response = await fetch(process.env.NEXT_PUBLIC_PORT + api[0], {
        ...option,
        next: { revalidate: 3600 },
      });
      const data = await response.json();
      return data;
    }
  } catch (e: any) {
    return e.message;
  }
}
export async function SubirLikes(like: LikesRequestType) {
  const api = "/api/like";
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(like),
  };
  const data = await fetchApiAuth([api, header]);

  return data;
}
export async function QuitarLike(like: LikesRequestType) {
  const api = "/api/like";
  const header = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(like),
  };

  const dataMod = await fetchApiAuth([api, header]);
  return dataMod;
}
export async function mensaje(data: NodemailRequestType) {
  const api = "/api/mensaje";
  const header = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const dataMod = await fetchApiAuth([api, header]);
  return dataMod;
}
