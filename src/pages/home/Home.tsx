import Layout from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container/Container';
import { Typography } from '@/components/common/Typography/Typography';

const Home = () => {
  return (
    <Layout pageTitle="Home">
      <Container>
        <Typography variant={'h1'}>Testing ...</Typography>
      </Container>
    </Layout>
  );
};

export default Home;
