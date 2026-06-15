"use client";

import Image, { type ImageProps } from "next/image";
import { useTheme } from "./ThemeProvider";

type ThemedImageProps = Omit<ImageProps, "src"> & {
  dark: string;
  light: string;
};

export default function ThemedImage({ dark, light, alt, ...rest }: ThemedImageProps) {
  const { theme } = useTheme();
  return <Image src={theme === "light" ? light : dark} alt={alt} {...rest} />;
}
