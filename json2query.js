/**
 * json对象转换为查询字符串
 * @param {json} json json对象
 */
export function json2query(json) {
  if (!json) {
    return '';
  }
  return cleanArray(Object.keys(json).map(key => {
    if (json[key] === undefined) {
      return '';
    }
    return encodeURIComponent(key) + '=' +
      encodeURIComponent(json[key]);
  })).join('&');
}

function cleanArray(actual) {
  const newArray = [];
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}
