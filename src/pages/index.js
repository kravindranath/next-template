import { useSelector, useDispatch } from "react-redux";

import Navigation from "src/ui/Navigation";
import Layout from "src/ui/Layout/Layout";
import { MAIN_NAVIGATION } from "src/constants/navigation";

import {
  dashboardInitAction,
  dashboardSuccessAction,
} from "src/store/actions/dashboard";
import { getDashboardData } from "src/store/selectors/dashboard";
import { useEffect } from "react";

const EMPTY_OBJ = {};

function Home(_props) {
  const props = _props || EMPTY_OBJ;

  const dashboardData = useSelector((state) => state.dashboard.data);
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
        <button
          type="button"
          onClick={(event) => dispatch(dashboardSuccessAction())}
        >
          Load Data
        </button>
        <button
          className="ml-10"
          onClick={() => dispatch(dashboardInitAction())}
        >
          Clear data
        </button>
        <p>{countryString}</p>
      </Layout>
    </div>
  );
}

export default Home;
