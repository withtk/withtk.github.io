const permissions = [
  '읽기', // 4
  '쓰기', // 2
  '실행', // 1
  '수정', // 8
  '삭제', // 16
  '목록', // 32
  '검색', // 64
  '생성', // 128
  '변경', // 256
  '관리', // 512
];

function hit() {
  const idValue = document.getElementById('perNumber').value;
  const perNumber = Number(idValue);
  if (Number.isNaN(perNumber)) return (document.getElementById('result').innerText = '숫자만 적어주세요.');

  console.log('--func--perNumber: ', perNumber);

  const userPermissions = interpretPermissions(perNumber);
  console.log(userPermissions); // 343 ["읽기", "쓰기", "수정", "검색", "변경", "관리"]

  document.getElementById('result').innerText = userPermissions;
}

function interpretPermissions(num) {
  let newArr = [];
  let max = 0;
  permissions.map((item, i) => {
    const power = 2 ** i;
    max += power;
    if (num & power) newArr.push(permissions[i]);
  });
  if (num > max) return '해당되지 않는 숫자입니다.' + num + ' | ' + max;
  return newArr.length < 1 ? '권한이 없습니다.' : newArr;
}
