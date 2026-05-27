import type { ProductImage } from "@/lib/product/product-data";

export const LOCAL_PRODUCT_IMAGE_DISPLAY_PATH = "/permanent-t-rex-fruit-1.webp";
export const LOCAL_PRODUCT_IMAGE_SOCIAL_PATH = "/permanent-t-rex-fruit-1.png";

export function mapImagesToDisplayAsset(images: ProductImage[]): ProductImage[] {
  return images.map((image) => ({
    ...image,
    url: LOCAL_PRODUCT_IMAGE_DISPLAY_PATH,
  }));
}

export function mapImagesToSocialAsset(images: ProductImage[]): ProductImage[] {
  return images.map((image) => ({
    ...image,
    url: LOCAL_PRODUCT_IMAGE_SOCIAL_PATH,
  }));
}
