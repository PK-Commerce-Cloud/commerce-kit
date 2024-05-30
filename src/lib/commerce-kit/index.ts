import {
  ShopperBaskets,
  ShopperContexts,
  ShopperCustomers,
  ShopperExperience,
  ShopperGiftCertificates,
  ShopperOrders,
  ShopperProducts,
  ShopperPromotions,
  ShopperSearch,
  ShopperSeo,
  ShopperLogin,
} from "commerce-sdk-isomorphic";

import { cookies } from "next/headers";

export function getToken() {
  return cookies().get("cnx_access_token");
}

export function createClient() {
  const access_token = getToken()?.value;

  const config: any = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    parameters: {
      clientId: process.env.CLIENT_ID,
      organizationId: process.env.ORG_ID,
      shortCode: process.env.SHORT_CODE,
      siteId: process.env.SITE_ID,
    },
    throwOnBadResponse: true,
  };

  return {
    shopperBaskets: new ShopperBaskets(config),
    shopperContexts: new ShopperContexts(config),
    shopperCustomers: new ShopperCustomers(config),
    shopperExperience: new ShopperExperience(config),
    shopperGiftCertificates: new ShopperGiftCertificates(config),
    shopperLogin: new ShopperLogin(config),
    shopperOrders: new ShopperOrders(config),
    shopperProducts: new ShopperProducts(config),
    shopperPromotions: new ShopperPromotions(config),
    shopperSearch: new ShopperSearch(config),
    shopperSeo: new ShopperSeo(config),
  };
}
