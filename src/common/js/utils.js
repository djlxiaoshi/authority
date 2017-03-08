/**
 * Created by JohnLi on 2017/3/8.
 */
export function deepClone (obj) {
  let str;
  let newobj = obj.constructor === Array ? [] : {};
  if (typeof obj !== 'object') {
    return;
  } else if (window.JSON) {
    // 系列化对象
    str = JSON.stringify(obj);
    // 还原
    newobj = JSON.parse(str);
  } else {
    for (let i in obj) {
      newobj[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
    }
  }
  return newobj;
}
