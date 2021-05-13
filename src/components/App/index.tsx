import Todos from '../Todos';
import { Helmet } from 'react-helmet';
import { ChakraProvider, Container } from '@chakra-ui/react';
import { withConnect } from './withConnect';
import { Props } from './types';

const App = ({ title }: Props) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ChakraProvider>
        <Container
          backgroundColor="#F6A89E"
          height="100vh"
          minWidth="100vw"
          padding="20"
          centerContent
        >
          <Todos />
        </Container>
      </ChakraProvider>
    </>
  );
};

export default withConnect(App);
