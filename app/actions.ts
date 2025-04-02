"use server";

import { cookies } from "next/headers";
import { defaultCountry, ICountry } from "@/i18next";

export async function create(lang: ICountry) {
  const cookieStore = await cookies();
  cookieStore.set("lang", JSON.stringify(lang));
  return;
}
export async function read() {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("lang");
  const lang = JSON.parse(
    langCookie?.value ?? JSON.stringify(defaultCountry)
  ) as ICountry;
  return lang;
}
