"use server";
import { mensaje } from "@/lib/hook";

export async function contactMessage(current: unknown, queryData: FormData) {
  try {
    const data = queryData;
    const response = await mensaje({
      name: data.get("name") as string,
      email: data.get("email") as string,
      message: `${data.get("subject")}\n\n${data.get("message")}`,
    });
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
