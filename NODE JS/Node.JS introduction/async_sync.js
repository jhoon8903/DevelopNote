async function main() {
  function first() {
    console.log('set time out이 실행되었습니다.');
  }

  console.log('코드가 실행되었습니다.');
  settimeout(first, 1000); //1초 뒤에 first 함수를 실행해라.
  console.log('코드가 종료되었습니다.');
}
main();
