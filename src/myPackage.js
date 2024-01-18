// @ts-check 
// 타입스크립트한테 자바스크립트 파일에 있는 걸 타입스크립트 파일처럼 타입을 체크해달라고 하는 것
// 이때 타입스크립트가 검사함으로써 발생하는 에러는 js파일이기 때문에 타입스크립트 파일처럼 고치면 안되고 JSDoc를 사용해야 함
// JSDoc Reference : JSDoc 주석을 사용하여 자바스크립트 파일에서 타입 정보를 제공할 수 있음
/**
 * Initializes the project
 * parameter 타입을 {} 내에 적어주고 이름을 타입 뒤에 적어줌 
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * return 타입을 적음
 * @returns boolean
 */
export function init(config) {
  return true;
}

/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}