import { Provider as ReduxProvider } from "react-redux";
import store from "./redux";

import Main from './screens';

const App = () => {
  return (
    <>
      <ReduxProvider store={store}>
        <Main />
      </ReduxProvider>
    </>
  );
};

export default App;
