import { SiteConfig } from './types/site-config-types';

const siteConfig: SiteConfig = {
  siteName: 'Blessington No.1 School',
  darkMode: false,
  theme: {
    color: {
      primary: {
        light: 'red',
        dark: 'black',
      },
      secondary: {
        light: 'orange',
        dark: 'yellow',
      },
    },
  },
  layout: {
    container: 'xl'
  }
};

export default siteConfig;
