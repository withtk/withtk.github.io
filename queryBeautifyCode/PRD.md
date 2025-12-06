# SQL Beautifier (React Ver.) 제품 요구사항 정의서 (PRD)

## 1. 프로젝트 개요 (Project Overview)
**프로젝트명:** SQL Beautifier (React Version)  
**목적:** 복잡한 SQL 쿼리를 선택한 DB 방언에 맞춰 포맷팅하고, 쿼리 작성 시 스니펫 추천 기능을 제공하여 생산성을 높이는 웹 도구.  
**타겟 유저:** 개발자, 데이터 분석가, DBA.

## 2. 핵심 목표 (Key Objectives)
1.  **심플하고 직관적인 디자인:** 불필요한 장식을 배제하고 기능에 집중할 수 있는 깔끔한 UI (Ant Design 활용).
2.  **생산성 향상:** 자동 완성(Snippet) 및 강력한 포맷팅 기능 제공.
3.  **사용자 맞춤 설정:** 스니펫 사용 여부 및 포맷팅 규칙(개행 등) 커스터마이징 지원.
4.  **반응형 웹:** 데스크탑 및 모바일 환경 완벽 지원.

## 3. 상세 기능 요구사항 (Functional Requirements)

### 3.1 상단 컨트롤 (Top Control Bar)
*   **SQL Dialect 선택:**
    *   Dropdown 메뉴로 DB 종류 선택 (Oracle, MySQL, MSSQL, PostgreSQL, SQLite 등).
    *   선택된 Dialect에 따라 포맷팅 로직 및 추천 스니펫 데이터 변경.

### 3.2 입력 및 편집 (Input & Editor)
*   **쿼리 입력창:**
    *   사용자가 SQL을 입력하는 텍스트 영역.
    *   **스니펫 추천 (Snippet Recommendation):**
        *   사용자가 입력하는 키워드에 맞춰 해당 Dialect에 맞는 SQL 구문 추천 (예: `sel` 입력 시 `SELECT * FROM ...` 추천).
        *   설정 메뉴에서 On/Off 가능.
*   **Beautify 실행:** 버튼 클릭 또는 단축키로 포맷팅 수행.

### 3.3 설정 메뉴 (Settings Menu)
*   **위치:** 우측 상단에 작은 아이콘 또는 버튼으로 배치 (클릭 시 팝오버/모달 형태).
*   **기능:**
    1.  **Snippet On/Off:** 자동 완성 추천 기능 활성화/비활성화 토글.
    2.  **개행 설정 (Newline Customization):**
        *   콤마(`,`) 앞/뒤 개행 여부.
        *   주요 키워드(SELECT, FROM 등) 기준 개행 여부 등 `sql-formatter` 옵션 제어.

### 3.4 결과 출력 (Output)
*   **포맷팅 결과:** 읽기 쉽게 정렬된 SQL 코드 표시.
*   **복사 기능:** 원클릭 복사 버튼 제공.

## 4. 기술 스택 (Tech Stack)
*   **Framework:** React (Vite)
*   **UI Library:** **Ant Design (antd)** - 심플하고 통일성 있는 디자인 구축.
*   **Language:** TypeScript.
*   **Core Library:**
    *   `sql-formatter`: SQL 포맷팅.
    *   Code Editor Library (예: `react-codemirror` 또는 `monaco-editor`): 스니펫 및 자동완성 구현 용이성 고려.

## 5. UI/UX 디자인 가이드 (Design Guidelines)
*   **컨셉:** Simple, Clean, Professional.
*   **레이아웃:**
    *   **Header:** 로고, Dialect Selector, Settings 버튼.
    *   **Body:** (좌) 입력 에디터 / (우) 결과 뷰어 (모바일은 상/하 배치).
*   **Ant Design 테마:** 기본 Ant Design의 깔끔한 스타일을 유지하되, 가독성을 위해 폰트 사이즈 및 여백 조정.

## 6. 개발 마일스톤
1.  **프로젝트 셋업:** Vite + React + TS + Ant Design 설치.
2.  **기본 UI 구현:** Antd Layout 컴포넌트를 활용한 반응형 구조 잡기.
3.  **기능 구현 1 (Formatting):** Dialect 선택 및 `sql-formatter` 연동.
4.  **기능 구현 2 (Editor & Snippet):** 코드 에디터 라이브러리 도입 및 스니펫 로직 구현.
5.  **기능 구현 3 (Settings):** 설정 상태 관리(Context/Store) 및 포맷팅 옵션 연결.
