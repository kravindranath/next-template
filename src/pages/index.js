import axios from 'axios';

import Navigation from 'src/ui/Navigation';
import Layout from 'src/ui/Layout/Layout';
import { MAIN_NAVIGATION } from 'src/constants/navigation';

const EMPTY_OBJ = {};

function HomePage(_props){
    const props = _props || EMPTY_OBJ;
    const section = props.section || '';
    const results = props.results || [];
    const heading = (section === 'shared') ? "Most Shared" : "Most Viewed";
    return (
        <div>
            <Navigation links={MAIN_NAVIGATION} />
            <Layout>
                Test
            </Layout>
        </div>
    );
}
export async function getServerSideProps(context) {

    const { query, req, res } = { ...context };
    const section = query.section || '';

    let apiData = {}
    await axios.get(`http://localhost:3000/api/mostPopular?section=${section}`).then((res)=>{
        apiData = res.data;
    }).catch((err)=>{
        apiData = err;
    });
    
    return {
        props: { ...apiData, section  }
    };
}

export default HomePage;
