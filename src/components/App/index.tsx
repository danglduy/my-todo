import Todos from '../Todos';
import { withConnect } from './withConnect';

const App = () => {
  return (
    <>
      <Todos />
    </>
  );
};

export default withConnect(App);
