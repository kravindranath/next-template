import axios from "axios";
import COMMON from "src/utils/api/config";
import { parseMostPopular } from "src/utils/api/parsers/mostPopular";

const EMPTY_OBJ = {};

export default async function mostViewedHandler({ query: { section } }, res) {
    let apiData = {};
    const url = COMMON.API.mostPopular[section] || COMMON.API.mostPopular.viewed;

    await axios.get(url).then((res)=>{
        apiData = res.data;
    }).catch((err)=>{
        apiData = err;
    });

    let filteredApiData = {
        size: apiData.num_results || 0,
        results: parseMostPopular(apiData.results || [])
    }

    res.status(200).json(filteredApiData || EMPTY_OBJ);
}