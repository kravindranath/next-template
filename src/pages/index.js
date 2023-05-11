import { useSelector, useDispatch } from "react-redux";

import Navigation from "src/ui/Navigation";
import Layout from "src/ui/Layout/Layout";
import { MAIN_NAVIGATION } from "src/constants/navigation";

import { dashboardInitAction, dashboardSuccessAction } from "src/store/actions/dashboard"
import { useEffect } from "react";

const EMPTY_OBJ = {};

function Home(_props) {
  const props = _props || EMPTY_OBJ;

  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(dashboardInitAction());
  },[dispatch])
  

  return (
    <div>
      <Navigation links={MAIN_NAVIGATION} />
      <Layout>
        <button type="button" onClick={(event) => dispatch(dashboardSuccessAction())}
        >Load Data</button>
        <button onClick={() => dispatch(dashboardInit())}>Clear data</button>
      </Layout>
    </div>
  );
}

export default Home;
