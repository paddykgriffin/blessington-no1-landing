import siteConfig from '@/site-config';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div>
        &copy; {year} Copyright - {siteConfig.siteName}
      </div>
      {/* <FooterNav /> */}
    </footer>
  );
};

export default Footer;
