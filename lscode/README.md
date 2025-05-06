
### 1.로컬 실행
```
npm run dev
```

### 2.main 병합 전 빌드
```
npm run build
```
"build": "node ./node/pg_generator.js && vue-tsc -b && vite build && node ./node/move_build_files.js"

### 3.Build flow
1. 신규로 추가된 디렉토리를 찾아서 동적으로 링크 만들기
2. 빌드되는 디렉토리 삭제 및 하위 삭제
3. 같은 이름의 디렉토리 생성
4. 그 안에 빌드파일 넣기

ls빌드는 새로운 디렉토리가 생겼을때만 실행.
