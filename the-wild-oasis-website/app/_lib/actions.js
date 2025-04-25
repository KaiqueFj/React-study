"use server";

import { signIn } from "./auth";

export const metadata = {
  title: "Login",
};

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}
