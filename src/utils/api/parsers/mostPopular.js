import _pick from "lodash/pick";

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
  "media",
];

const parseMostPopular = ((data) => {
  const parsedData = data.map((item) => _pick(item, fieldsArr));
  return parsedData;
});

export default parseMostPopular;
