import Todos from '../Todos';
import { Helmet } from 'react-helmet';
import { ChakraProvider } from '@chakra-ui/react';
import { withConnect } from './withConnect';
import { Props } from './types';

const App = ({ title }: Props) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ChakraProvider>
        <Todos />
      </ChakraProvider>
    </>
  );
};

export default withConnect(App);
