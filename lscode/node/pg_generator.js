import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { PROJECT_TYPE } from '../src/util/constants.js';

console.log('------------page_list_생성--start--------------');
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const parentDir = path.join(__dirname, '..', '..');   // root 디렉토리
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
  const saveFileName = path.join(__dirname, 'page_list.json');

  // 기존 데이터 읽기
  let existingData = [];
  try {
    if (fs.existsSync(saveFileName)) {
      existingData = JSON.parse(fs.readFileSync(saveFileName, 'utf8'));
    }
  } catch (e) {
    console.error('Error reading existing JSON:', e);
  }

  // 새로운 데이터 구성 (라벨 대신 키값을 저장)
  const saveData = arr.map(name => {
    const existingEntry = existingData.find(item => item.name === name);

    // 기존에 'vueJS' 등으로 저장되어 있을 경우를 위해 역매칭 또는 기본값 설정
    let defaultTypeKey = 'OTHER';
    if (existingEntry && existingEntry.type) {
      // 이미 키값(대문자)일 경우
      if (PROJECT_TYPE[existingEntry.type]) {
        defaultTypeKey = existingEntry.type;
      } else {
        // 라벨값일 경우 키값으로 변환 시도
        const foundKey = Object.keys(PROJECT_TYPE).find(key => PROJECT_TYPE[key] === existingEntry.type);
        if (foundKey) defaultTypeKey = foundKey;
      }
    }

    try {
      const folderPath = path.join(parentDir, name);
      const stats = fs.statSync(folderPath);
      if (stats.isDirectory()) {
        const content = fs.readdirSync(folderPath);
        const filteredContent = content.filter(f => !f.startsWith('.'));

        if (filteredContent.length <= 1 && (filteredContent.length === 0 || filteredContent.includes('index.html'))) {
          // 신규 감지 시 WEB_PAGE 키 할당
          if (defaultTypeKey === 'OTHER') defaultTypeKey = 'WEB_PAGE';
        }
      }
    } catch (e) { }

    return {
      name: name,
      type: defaultTypeKey,
      tag: existingEntry ? (existingEntry.tag || null) : null,
      desc: existingEntry ? (existingEntry.desc || '') : '',
      spec: (existingEntry && existingEntry.spec && existingEntry.spec.length > 0)
        ? existingEntry.spec
        : []
    };
  });

  fs.writeFileSync(saveFileName, JSON.stringify(saveData, null, 2));
}

// Version Bumping Logic
const packageJsonPath = path.join(__dirname, '..', 'package.json');
try {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const versionParts = packageJson.version.split('.').map(Number);
  versionParts[2] += 1;
  const newVersion = versionParts.join('.');
  packageJson.version = newVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');
  console.log(`Version bumped to ${newVersion}`);
} catch (error) {
  console.error('Error bumping version:', error);
}
