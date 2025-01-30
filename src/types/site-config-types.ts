import { MaxWidthOption } from "@/components/layout/Container/Container";

export type SiteMode = {
  light: string;
  dark: string;
};

export type SiteConfig = {
  siteName: string;
  darkMode: boolean;
  theme: {
    color: {
      primary: SiteMode;
      secondary: SiteMode;
    };
  },
  layout: {
    container?: MaxWidthOption,
}
};
