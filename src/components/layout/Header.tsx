//import HeaderNav from '../navigation/HeaderNav';
import siteConfig from '@/site-config';

const Header = () => {
  return (
    <header>
      <div> {siteConfig.siteName}</div>
      <div>{/* <HeaderNav /> */}</div>
    </header>
  );
};

export default Header;
