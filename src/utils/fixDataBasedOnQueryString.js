import QueryString from 'query-string';
import variants from 'config/variants';

export default (data, queryString) => {
  if (!queryString) {
    return data;
  }

  const queryData = QueryString.parse(queryString);
  const variantName = queryData['variant'];
  const variantData = variants.get(variantName);
  if (!variantData) {
    return data;
  }

  return data.mergeDeep(variantData);
};
