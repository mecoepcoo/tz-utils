/**
 * 传入一个构造函数，获取一个单例的构造函数
 * @param {function} fn 构造函数
 */
export function getSingle(fn) {
  let result;
  return function () {
    return result || ( result = fn.apply(this, arguments) );
  };
}
