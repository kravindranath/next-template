import { useSelector, useDispatch } from 'react-redux'

import Navigation from 'src/ui/Navigation';
import Layout from 'src/ui/Layout/Layout';
import { MAIN_NAVIGATION } from 'src/constants/navigation';

import { clearName, updateName } from 'src/store/reducers/homepage'

const EMPTY_OBJ = {};

function HomePage(_props){
    const props = _props || EMPTY_OBJ;
    
    const name = useSelector((state) => state.name)
    const dispatch = useDispatch();

    return (
        <div>
            <Navigation links={MAIN_NAVIGATION} />
            <Layout>
                <input type="text" value={name} onChange={(event) => dispatch(updateName(event.target.value))} />
                <button onClick={() => dispatch(clearName())}>
                    Clear name
                </button>
            </Layout>
        </div>
    );
}

export default HomePage;
