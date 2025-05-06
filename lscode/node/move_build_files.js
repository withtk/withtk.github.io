import { promises as fs, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const TARGET_DIR_NAME = 'ls' // 반드시 ../../dir 경로에 있어야 함.
console.log(`----------${TARGET_DIR_NAME}---start----------`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const parentDir = path.join(__dirname, '..', '..', 'ls');

async function removeDirectory(_parentDirPath) {
  if (!existsSync(_parentDirPath)) {
    console.log('----디렉토리 없음!!----');
    return;
  }

  try {
    const entries = await fs.readdir(_parentDirPath, { withFileTypes: true });
    // console.log('directory :', _parentDirPath, entries);  // 상세

    for (const entry of entries) {
      console.log(`${_parentDirPath} / ${entry.name}`);
      const entryPath = path.join(_parentDirPath, entry.name);
      if (entry.isDirectory()) await removeDirectory(entryPath);
      else await fs.unlink(entryPath);
    }

    await fs.rmdir(_parentDirPath);
    console.log(`삭제완료 : ${_parentDirPath}와 하위 모든 디렉토리, 파일이 성공적으로 삭제되었습니다.`);
  } catch (err) {
    console.error('디렉토리 삭제 중 오류 발생:', err);
  }
}

async function createDirectoryIfNotExists(dirPath) {
  try {
    await fs.access(dirPath);
    console.log(`${dirPath} 폴더가 이미 존재합니다.`);
  } catch {
    await fs.mkdir(dirPath, { recursive: true });
    console.log(`폴더생성 : ${dirPath} 폴더가 생성되었습니다.`);
  }
}

async function moveDirectory(source, destination) {
  try {
    // 대상 디렉토리 생성
    await fs.mkdir(destination, { recursive: true });

    // 소스 디렉토리의 모든 항목 읽기
    const entries = await fs.readdir(source, { withFileTypes: true });

    for (const entry of entries) {
      const srcPath = path.join(source, entry.name);
      const destPath = path.join(destination, entry.name);

      if (entry.isDirectory()) {
        // 재귀적으로 하위 디렉토리 이동
        await moveDirectory(srcPath, destPath);
      } else {
        // 파일 이동
        await fs.rename(srcPath, destPath);
      }
    }

    // 원본 디렉토리 삭제
    await fs.rmdir(source);
    console.log(`이동완료 : ${source}에서 ${destination}으로 모든 항목이 이동되었습니다.`);
  } catch (err) {
    console.error('디렉토리 이동 중 오류 발생:', err);
  }
}

////////////----실행----////////////////////

const tobeDelDir = path.join(__dirname, '..', '..', TARGET_DIR_NAME); ///////// 삭제할 폴더명과 경로는 직접 기입!!!!!!
await removeDirectory(tobeDelDir);

const destinationDir = path.join(__dirname, '..', '..' , TARGET_DIR_NAME); ///////// 삭제할 폴더명과 경로는 직접 기입!!!!!!
await createDirectoryIfNotExists(destinationDir);

const sourceDir = path.join(__dirname, '..', 'dist'); ///////// 삭제할 폴더명과 경로는 직접 기입!!!!!!
await moveDirectory(sourceDir, destinationDir);

console.log(`----------${TARGET_DIR_NAME}---end----------`);
