# Designer Agent Memory -- PJ006 Portfolio Dashboard

## 사용한 스킬
- 별도 스킬 로드 없음 (기존 디자인 시스템 분석 + PRD 기반 스펙 작성으로 충분)

## 작업 이력

### 2026-02-23: UI Specs v1.0 작성
- PRD v1.0 (승인 완료) 기반으로 작업
- 기존 코드 5개 컴포넌트 + globals.css + tailwind.config.ts 전수 분석
- 출력 파일:
  - `.squad/02_design/UI_Specs.md` -- 전체 UI 스펙
  - `.squad/02_design/Design_Brief.md` -- PM->Designer 인수인계 맥락

## 주요 의사결정

| # | 결정 | 이유 |
|---|------|------|
| D-01 | 기존 Neumorphism 토큰/그림자 100% 유지 | PRD 명시 + 기존 코드와 일관성 |
| D-02 | ProfileSection을 Header 내부 통합이 아닌 별도 카드로 배치 | Header는 변경 없이 유지, 프로필은 독립적 정보 블록 |
| D-03 | 기술 스택 태그를 기존 카테고리 태그와 동일한 nm-pressed 스타일로 통일 | 새 스타일 도입 없이 일관성 유지 |
| D-04 | 카드 내 techStack 최대 4개 표시 + "+N" 처리 | 카드 공간 제한, 상세 페이지에서 전체 표시 |
| D-05 | 카드 링크를 외부 -> 내부 라우팅으로 변경 | 상세 페이지(P1-1) 도입에 따른 자연스러운 전환 |
| D-06 | 상세 페이지 max-w-3xl (메인 max-w-5xl보다 좁게) | 읽기 집중형 레이아웃, 텍스트 가독성 |
| D-07 | 신규 컴포넌트 2개만 추가 (ProfileSection, ProjectDetail) | 최소한의 변경으로 PRD 요구사항 충족 |

## 다음 담당자에게 인수인계

### Tech Lead에게
- UI Specs의 컴포넌트 계층 구조(섹션 C) 참고하여 Tech Spec 작성
- ProfileSection 데이터 소스 결정 필요 (profile.json 별도 파일 제안)
- ProjectCard의 링크를 Next.js Link 컴포넌트로 변경 필요
- /projects/[id] 동적 라우트 구조 설계 필요

### Frontend Lead에게
- 구현 우선순위는 UI Specs 섹션 F 참고
- 기존 컴포넌트 변경은 ProjectCard 1개뿐 (나머지 4개는 변경 없음)
- 모든 신규 요소는 기존 Tailwind 토큰만 사용 (tailwind.config.ts 변경 불필요)

### 미해결 질문
1. 프로필 데이터 저장 위치 (Tech Lead 결정 사항)
2. P1-2 썸네일 이미지 -- 스크린샷 준비 시점 미정, 현재는 이니셜 그래디언트 유지
