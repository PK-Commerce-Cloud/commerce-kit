"use server";

import { ShopperLogin, helpers } from "commerce-sdk-isomorphic";
import { cookies } from "next/headers";

export async function guestLogin() {
  const access_token = cookies().get("cnx_access_token");

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
  cookies().set("cnx_access_token", token.access_token, {
    maxAge: token.expires_in,
  });
  cookies().set("cnx_refresh_token", token.refresh_token, {
    maxAge: token.refresh_token_expires_in,
  });
  cookies().set(
    "cnx_customer",
    JSON.stringify({
      usid: token.usid,
      customerId: token.customer_id,
    }),
    { maxAge: token.refresh_token_expires_in }
  );

  /* Return token */
  return token;
}
