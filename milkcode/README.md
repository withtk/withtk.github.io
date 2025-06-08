
### 1.로컬 실행
```
npm run dev
```

### 2.main 병합 전 빌드
```
npm run build
```

### 3.Build flow
1. 빌드되는 디렉토리 삭제 및 하위 삭제
2. 같은 이름의 디렉토리 생성
3. 그 안에 빌드파일 넣기

실행전 TARGET_DIR_NAME(move_build_Files.js) 변경할 것.



### vite.config.js
base : '/'  for dev

github.io에 배포할 때
1. '/milk'로 수정
2. npm run build:prod

다른 서버에 배포할 때
1. '/'로 수정
2. npm run build:dev
3. dist 디렉토리로 경로설정
