# Task Manager - Next.js 클론 프로젝트

이 프로젝트는 Next.js를 사용한 태스크 관리 애플리케이션입니다.

- 따라한 YouTube 링크: https://www.youtube.com/watch?v=OHvfgaDl-yY

## 사용된 기술 스택

- Frontend: Next.js, React
- Backend: Next.js API Routes
- Database: MongoDB with Prisma ORM
- Authentication: Clerk
- Styling: Tailwind CSS, Styled-components

## 프로젝트 구조

- `app/`: Next.js 13+의 App Router 구조를 따르는 메인 애플리케이션 코드
- `api/`: 서버리스 API 라우트
- `components/`: 재사용 가능한 React 컴포넌트
- `context/`: 전역 상태 관리를 위한 Context
- `providers/`: 애플리케이션에 필요한 다양한 Provider 컴포넌트
- `utils/`: 유틸리티 함수 및 상수

## 시작하기

1. 저장소 클론
2. 의존성 설치: `npm install`
3. 환경 변수 설정: `.env` 파일 생성 및 필요한 환경 변수 설정
4. 개발 서버 실행: `npm run dev`
5. 브라우저에서 `http://localhost:3000` 접속