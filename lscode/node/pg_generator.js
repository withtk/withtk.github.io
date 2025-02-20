import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

console.log('------------page_list_생성--start--------------');
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// console.log('현재폴더: ', __dirname);

const parentDir = path.join(__dirname, '..', '..');   // lscode 디렉토리
fs.readdir(parentDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const newArr = [];
  files.forEach((name) => {
    if (!name.includes('.')) newArr.push(name);   // file은 제거. 폴더만
  });
  console.log('pageList :', newArr);
  mkJsonFile(newArr);
});

function mkJsonFile(arr) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  // const savePath = path.join(__dirname, "path1", "path2");
  const saveFileName = path.join(__dirname, 'page_list.json');
  const saveData = arr;

  // const saveData = {name:"abc",age:30};
  //   const saveData = ["a", "aa",  "b", "bb" , "cc", "dd"];
  // if (!fs.existsSync(savePath)) {
  //   fs.mkdirSync(savePath, {recursive:true});
  // }
  fs.writeFileSync(saveFileName, JSON.stringify(saveData));

  // const readData = fs.readFileSync(saveFileName);
  // console.log("readData : ");
  // console.log(JSON.parse(readData.toString()));
}
