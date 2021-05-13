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
        <Container maxW="container.lg">
          <Todos />
        </Container>
      </ChakraProvider>
    </>
  );
};

export default withConnect(App);
