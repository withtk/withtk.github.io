# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



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