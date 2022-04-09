import _get from 'lodash/get';
import _pick from 'lodash/pick';

const fieldsArr = [
  "url",
  "id",
  "published_date",
  "section",
  "subsection",
  "byline",
  "type",
  "title",
  "abstract",
  "media"
];

export function parseMostPopular(data){
    const parsedData = data.map((item, key)=>{
        return _pick(item, fieldsArr);
    })
    return parsedData;
}

/*
{
    "uri": "nyt://article/6e09248e-0914-572d-9b9f-a2710855cf6d",
    "url": "https://www.nytimes.com/2021/05/19/business/media/nikole-hannah-jones-unc.html",
    "id": 100000007771831,
    "asset_id": 100000007771831,
    "source": "New York Times",
    "published_date": "2021-05-19",
    "updated": "2021abstract-05-20 23:10:51",
    "section": "Business",
    "subsection": "Media",
    "nytdsection": "business",
    "adx_keywords": "Colleges and Universities;Tenure;Journalism Schools;Writing and Writers;Race and Ethnicity;News and News Media;Hannah-Jones,  Nikole;University of North Carolina;New York Times",
    "column": null,
    "byline": "By Katie Robertson",
    "type": "Article",
    "title": "Nikole Hannah-Jones Denied Tenure at University of North Carolina",
    "abstract": "Her hiring brought a backlash from conservatives concerned about her involvement in The Times Magazine’s 1619 Project, which examined the legacy of slavery in America.",
    "des_facet": [
        "Colleges and Universities",
        "Tenure",
        "Journalism Schools",
        "Writing and Writers",
        "Race and Ethnicity",
        "News and News Media"
    ],
    "org_facet": [
        "University of North Carolina",
        "New York Times"
    ],
    "per_facet": [
        "Hannah-Jones,  Nikole"
    ],
    "geo_facet": [],
    "media": [
        {
            "type": "image",
            "subtype": "photo",
            "caption": "Nikole Hannah-Jones will start her position teaching journalism at the University of North Carolina in July.",
            "copyright": "James Estrin/The New York Times",
            "approved_for_syndication": 1,
            "media-metadata": [
                {
                    "url": "https://static01.nyt.com/images/2021/05/19/business/19HannahJones-01/19HannahJones-01-thumbStandard.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75
                },
                {
                    "url": "https://static01.nyt.com/images/2021/05/19/business/19HannahJones-01/19HannahJones-01-mediumThreeByTwo210.jpg",
                    "format": "mediumThreeByTwo210",
                    "height": 140,
                    "width": 210
                },
                {
                    "url": "https://static01.nyt.com/images/2021/05/19/business/19HannahJones-01/19HannahJones-01-mediumThreeByTwo440.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440
                }
            ]
        }
    ],
    "eta_id": 0
}
*/

