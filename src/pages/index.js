import { useSelector, useDispatch } from "react-redux";

import Navigation from "src/components/Navigation";
import Layout from "src/components/Layout/Layout";
import { MAIN_NAVIGATION } from "src/constants/navigation";

import {
  dashboardInitAction,
  dashboardSuccessAction,
  dashboardClearAction,
} from "src/store/actions/dashboard";
import { useEffect } from "react";

const EMPTY_OBJ = {};

function Home(_props) {
  const props = _props || EMPTY_OBJ;

  const isLoading = useSelector((state) => state.dashboard.isLoading);
  const dashboardData = useSelector((state) => state.dashboard.location);
  const dispatch = useDispatch();

  const { name, country } = { ...dashboardData };

  const countryString = name && country ? name + "-" + country : "";

  useEffect(() => {
    dispatch(dashboardInitAction());
  }, [dispatch]);

  return (
    <div>
      <Navigation links={MAIN_NAVIGATION} />
      <Layout>
        {isLoading && <div className="p-10">Loading...</div>}
        <button
          type="button"
          onClick={(event) => dispatch(dashboardSuccessAction())}
        >
          Load Data
        </button>
        <button
          className="ml-10"
          onClick={() => dispatch(dashboardClearAction())}
        >
          Clear data
        </button>
        <p>{countryString}</p>
      </Layout>
    </div>
  );
}

export default Home;
