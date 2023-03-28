import './index.css';
import HeaderNavigation from "./components/shared/HeaderNavigation";
import Loader from "./components/shared/Loader";
import Router from "./routes/Router";
import {useSelector} from "react-redux";

function App() {
    const {isLoading} = useSelector(state => state.loading)
  return (
    <>
      <HeaderNavigation/>
      <Router/>
        {isLoading && <Loader/>}
    </>
  );
}

export default App;
