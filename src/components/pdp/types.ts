import type { Locale } from "@/lib/i18n/config";
import type { LocalizedProductData } from "@/lib/product/product-data";

export type ProductPageLabels = {
  nav: {
    backToShop: string;
    brand: string;
    orderStatus: string;
    support247: string;
    currency: string;
    signIn: string;
    menu: string;
  };
  product: {
    aboutThisItem: string;
    stockIn: string;
    stockOut: string;
    quantity: string;
    details: {
      category: string;
      rarity: string;
      game: string;
      delivery: string;
      condition: string;
    };
    sections: {
      trust: string;
      details: string;
      tags: string;
      imageGallery: string;
    };
    gallery: {
      secret: string;
      thumbnails: string;
    };
  };
  footer: {
    marketplaceNote: string;
    support: string;
    resources: string;
    legal: string;
    blogs: string;
    affiliates: string;
    claimOrder: string;
    tutorial: string;
    terms: string;
    needHelp: string;
    helpDescription: string;
    chatCta: string;
    copyright: string;
  };
};

export type ProductPageViewModel = {
  locale: Locale;
  product: LocalizedProductData;
  labels: ProductPageLabels;
};
