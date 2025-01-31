import Layout from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container/Container';
import { Typography } from '@/components/common/Typography/Typography';
import { MdEmail, MdPhone } from 'react-icons/md';
import { Button } from '@/components/common/Button/Button';

import logo from '@/assets/logo.png';

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Container maxWidth="xl">
        <Typography variant={'h1'} className="text-white font-medium tracking-wide text-wrap  text-[28px] md:text-4xl">
          Welcome to Blessington No.1 School
        </Typography>

        <img src={logo} alt="" className="mx-auto my-6" />

        <Typography variant={'h2'} className="text-white font-medium mb-0 text-wrap text-[24px] md:text-3xl">
          New Website Coming Soon If you have any queries see below
        </Typography>

        <div className="grid justify-center md:grid-flow-col  gap-4 md:gap-10 py-6 text-center">
          <div className="flex items-center justify-center">
            <MdPhone className="h-8 w-8 md:h-12 md:-12 text-white" />
            <Button href="tel:045900879" className="font-extralight text-[20px] md:text-lg hover:text-amber-500 ">
              (045) 900 879
            </Button>
          </div>

          <div className="flex items-center justify-center">
            <MdEmail className="h-8 w-8 md:h-12 md:-12 text-white" />
            <Button
              href="mailto:blessington1ns@gmail.com"
              className="font-extralight text-[20px] md:text-lg hover:text-amber-500"
            >
              blessington1ns@gmail.com
            </Button>
          </div>
        </div>

        <Typography variant={'body1'} className="text-white font-extralight mb-10 leading-8">
          Blessington Demesne, Blessington, Co. Wicklow W91 YX06
        </Typography>

        <Button
          target="_blank"
          variant={'contained'}
          href=" https://maps.app.goo.gl/ZFJ3Z8zHjbUnY6Fa7"
          className="font-extralight text-lg hover:text-white bg-white/30 px-8 py-2 md:px-10 md:py-4 inline-bloc h-auto rounded-3xl hover:bg-secondary"
        >
          Find us on google maps
        </Button>
      </Container>
    </Layout>
  );
};

export default Home;
