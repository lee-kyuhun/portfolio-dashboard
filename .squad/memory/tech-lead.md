# Tech Lead Agent Memory -- PJ006 Portfolio Dashboard

## 사용한 스킬
- 별도 스킬 로드 없음 (정적 사이트 설계로 API/크롤러 스킬 불필요)

## 작업 이력

### 2026-02-23: Tech Spec v1.0 작성
- PRD v1.0 (승인 완료) + UI Specs v1.0 (승인 완료) + Designer Memory 기반으로 작업
- 기존 코드 전수 분석: 11개 파일 (5 컴포넌트, 1 타입, 1 데이터 유틸, 1 JSON, 3 앱 파일)
- Cloudflare Pages 배포 전략 조사 (next-on-pages deprecated 확인 -> Static Export 결정)
- 출력 파일:
  - `.squad/03_architecture/Tech_Spec.md` -- 전체 기술 설계 (A~G 섹션)

## 주요 의사결정

| # | 결정 | 이유 |
|---|------|------|
| T-01 | 추가 패키지 없음 (아이콘, 애니메이션, 상태관리 모두 미도입) | 필요한 아이콘 4개뿐, Tailwind transition 충분, useState 충분 |
| T-02 | 프로필 데이터를 `src/data/profile.json` 별도 파일로 분리 | 프로젝트와 프로필은 성격/업데이트 주기가 다른 데이터 |
| T-03 | Profile 인터페이스를 `project.ts`에 함께 정의 | 별도 파일 만들 만큼 타입이 많지 않음 |
| T-04 | `output: 'export'` Static Export 배포 전략 | next-on-pages deprecated, OpenNext은 SSR용, 정적 사이트에 Static Export가 최적 |
| T-05 | getGradient/statusColor를 `lib/utils.ts`로 추출 | ProjectCard와 ProjectDetail 간 코드 공유 필요 |
| T-06 | ProjectDetail 하위 컴포넌트 분리 안 함 | 재사용 가능성 없음, 불필요한 파일 증식 방지 |
| T-07 | techStack을 필수 필드로 지정 (빈 배열 허용) | 포트폴리오 사이트 특성상 기술 스택이 핵심 정보 |

## 다음 담당자에게 인수인계

### Frontend Lead에게
- Tech Spec의 Phase 1~6 순서대로 구현할 것
- Phase 1(데이터 계층)을 반드시 먼저 완료 후 컴포넌트 작업 시작
- `lib/utils.ts` 신규 생성 필요 -- ProjectCard.tsx의 getGradient/statusColor를 이동
- ProjectCard 변경 시 `next/link` 임포트 추가, `<a>` -> `<Link>` 교체
- projects.json 실제 데이터는 사이트 오너에게 확인 필요 (TBD-1)
- profile.json 실제 데이터도 사이트 오너에게 확인 필요 (TBD-2)
- `next.config.mjs`에 `output: 'export'` 추가 시점은 Phase 6 (빌드 준비 단계)

### DevOps에게
- Cloudflare Pages 빌드 설정: build command `npm run build`, output dir `out`
- Node.js 18 이상 필요 (환경 변수 `NODE_VERSION=18`)
- Static Export이므로 Workers/Functions 설정 불필요

### 미해결 질문
1. projects.json 실제 데이터 내용 (사이트 오너 입력 대기)
2. profile.json 실제 데이터 내용 (사이트 오너 입력 대기)
3. P1-2 썸네일 이미지 전환 시점 (미정)
4. 커스텀 404 페이지 필요 여부 (미정, 현재 Next.js 기본 사용)
