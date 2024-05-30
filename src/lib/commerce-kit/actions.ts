"use server";

import { ShopperLogin, helpers } from "commerce-sdk-isomorphic";
import { cookies } from "next/headers";

export async function guestLogin() {
  const access_token = cookies().get("access_token");

  if (access_token) {
    return {
      access_token: access_token,
    };
  }

  const shopperLogin = new ShopperLogin({
    parameters: {
      clientId: process.env.CLIENT_ID!,
      organizationId: process.env.ORG_ID!,
      shortCode: process.env.SHORT_CODE!,
      siteId: process.env.SITE_ID!,
    },
  });

  const token = await helpers.loginGuestUser(shopperLogin, {
    redirectURI: "http://localhost:3000/callback",
  });

  /* Save cookie */
  cookies().set("access_token", token.access_token);
  cookies().set("refresh_token", token.refresh_token);
  cookies().set(
    "customer",
    JSON.stringify({
      usid: token.usid,
      customerId: token.customer_id,
    })
  );

  /* Return token */
  return token;
}
