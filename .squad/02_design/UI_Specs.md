# UI Specs: PJ006 Portfolio Dashboard

> 버전: v1.0 | 작성일: 2026-02-23 | 상태: ✅ 승인 완료 | 작성자: Designer Agent

---

## A. 디자인 시스템

### A-1. 디자인 결정

기존 Neumorphism 스타일을 **그대로 유지**한다. 새로운 디자인 언어를 도입하지 않는다.
변경은 최소화하며, 신규 요소(프로필 섹션, 기술 스택 태그, 상세 페이지)도 동일한 그림자/색상 시스템 위에 구축한다.

### A-2. 색상 토큰

기존 토큰을 그대로 사용한다. 추가 토큰은 없다.

| 토큰 | 값 | 용도 |
|------|----|------|
| nm-bg | #e8eaf0 | 배경, 컴포넌트 배경 |
| nm-text | #4a5568 | 본문 텍스트 |
| nm-muted | #9aa5b4 | 보조 텍스트, 플레이스홀더 |
| nm-accent | #6366f1 | 강조색 (링크, 활성 필터, 밑줄) |
| nm-shadow-dark | #c5c8d0 | Neumorphism 어두운 그림자 |
| nm-shadow-light | #ffffff | Neumorphism 밝은 그림자 |

**상태 배지 색상** (기존 유지):
| 상태 | 배경 | 텍스트 |
|------|------|--------|
| 운영중 | green-100 | green-700 |
| 개발중 | yellow-100 | yellow-700 |
| 계획중 | blue-100 | blue-700 |
| 중단 | gray-100 | gray-500 |

### A-3. 그림자 시스템

기존 4단계 Neumorphism 그림자를 그대로 사용한다.

| 토큰 | 값 | 용도 |
|------|----|------|
| nm-flat | 6px 6px 12px dark, -6px -6px 12px light | 일반 볼록 요소 (버튼, 필터 칩) |
| nm-card | 10px 10px 20px dark, -10px -10px 20px light | 카드, 큰 컨테이너 |
| nm-pressed | inset 4px 4px 8px dark, inset -4px -4px 8px light | 눌린 상태 (활성 필터, 태그) |
| nm-input | inset 3px 3px 6px dark, inset -3px -3px 6px light | 입력 필드 |

### A-4. 타이포그래피

폰트: Geist Sans (Variable Font, weight 100-900)

| 요소 | 크기 | 굵기 | 색상 |
|------|------|------|------|
| 페이지 제목 (h1) | text-5xl (3rem) | font-extrabold (800) | nm-text |
| 프로필 이름 | text-3xl (1.875rem) | font-bold (700) | nm-text |
| 프로필 소개 | text-lg (1.125rem) | font-normal (400) | nm-muted |
| 카드 제목 (h3) | text-base (1rem) | font-semibold (600) | nm-text |
| 카드 설명 | text-sm (0.875rem) | font-normal (400) | nm-muted |
| 태그/뱃지 | text-xs (0.75rem) | font-medium (500) | nm-muted 또는 커스텀 |
| 본문 텍스트 | text-base (1rem) | font-normal (400) | nm-text |
| 보조 텍스트 | text-sm (0.875rem) | font-normal (400) | nm-muted |

### A-5. 간격 시스템

Tailwind 기본 4px 단위 스케일을 사용한다. 주요 간격 규칙:

| 용도 | 값 |
|------|----|
| 페이지 좌우 패딩 | px-4 (16px) |
| 페이지 최대 너비 | max-w-5xl (1024px) |
| 섹션 간 간격 | py-8 ~ py-16 |
| 카드 그리드 갭 | gap-6 (24px) |
| 카드 내부 패딩 | p-4 (16px) |
| 태그 간 간격 | gap-1.5 (6px) |
| 태그 내부 패딩 | px-2 py-0.5 |
| 컴포넌트 모서리 | rounded-2xl (카드), rounded-xl (버튼/입력), rounded-full (뱃지) |

### A-6. 그래디언트 팔레트 (카드 썸네일)

기존 6개 그래디언트를 유지한다. ID 해시 기반으로 자동 배정.

| # | 그래디언트 |
|---|-----------|
| 1 | indigo-200 to purple-200 |
| 2 | sky-200 to cyan-200 |
| 3 | amber-200 to orange-200 |
| 4 | emerald-200 to teal-200 |
| 5 | rose-200 to pink-200 |
| 6 | violet-200 to fuchsia-200 |

---

## B. 화면 목록 및 상세 스펙

### S-01: 메인 페이지 (`/`)

**목적:** 방문자가 30초 안에 개발자와 프로젝트 전체를 파악하는 단일 랜딩 페이지.

**전체 레이아웃 (위에서 아래):**

```
[Header]
[ProfileSection]     ← 신규
[SearchFilter]
[ProjectGrid]
[Footer]
```

**최대 너비:** max-w-5xl (1024px), 좌우 px-4, 가운데 정렬

---

#### S-01-A: Header (기존 유지)

- 변경 없음
- 구성: 페이지 제목 "My Projects" + 억센트 밑줄 + 부제목
- 간격: py-16, 텍스트 가운데 정렬

---

#### S-01-B: ProfileSection (P0-5, 신규)

**목적:** 방문자가 사이트 오너가 누구인지 즉시 파악할 수 있게 한다.

**위치:** Header와 SearchFilter 사이

**레이아웃:**
- Neumorphism 카드 컨테이너 (shadow-nm-flat, rounded-2xl, bg-nm-bg)
- 내부: 가로 배치 (flex)
  - 좌측: 이니셜 아바타 (원형, 56x56px, bg-nm-accent, 텍스트 흰색 font-bold text-xl)
  - 우측: 텍스트 블록
    - 이름: text-xl font-bold nm-text
    - 소개: text-sm nm-muted, 1줄
    - 링크 아이콘 행: GitHub, Email 등 아이콘(또는 텍스트 레이블). 간격 gap-3
      - 각 링크: text-sm nm-muted, hover 시 nm-accent 색상 전환

**간격:**
- 카드 패딩: p-5
- 아바타와 텍스트 사이: gap-4
- 이름과 소개 사이: mt-0.5
- 소개와 링크 사이: mt-2
- 섹션 하단 마진: mb-6

**상태:**
- links 객체에 값이 없는 키는 해당 링크를 숨김
- 모든 링크가 없으면 링크 행 자체를 숨김

---

#### S-01-C: SearchFilter (기존 유지)

- 변경 없음
- 구성: 검색 입력 필드 (좌) + 카테고리 필터 버튼 그룹 (우)
- 반응형: 모바일에서 세로 스택 (flex-col), 태블릿 이상에서 가로 배치 (flex-row)
- 활성 필터: shadow-nm-pressed + nm-accent 텍스트
- 비활성 필터: shadow-nm-flat, hover 시 shadow-nm-card

---

#### S-01-D: ProjectGrid + ProjectCard (기존 + P0-8 변경)

**ProjectGrid:**
- 변경 없음. 기존 그리드 레이아웃 유지
- 그리드: sm:grid-cols-2, lg:grid-cols-3, gap-6
- 빈 상태: "검색 결과가 없습니다." 텍스트 (기존 유지)

**ProjectCard 변경 사항 (P0-8: 기술 스택 태그 추가):**

기존 카드 구조:
```
[그래디언트 썸네일 영역]
[p-4 영역]
  [제목 ---- 상태 뱃지]
  [설명 (2줄 제한)]
  [카테고리 태그]
```

변경 후:
```
[그래디언트 썸네일 영역]
[p-4 영역]
  [제목 ---- 상태 뱃지]
  [설명 (2줄 제한)]
  [카테고리 태그]
  [기술 스택 태그 행]     ← 추가
```

**기술 스택 태그 행 스펙:**
- 위치: 카테고리 태그 아래, mt-2
- 레이아웃: flex flex-wrap gap-1.5
- 각 태그: text-xs, nm-muted 텍스트, bg-nm-bg, shadow-nm-pressed, rounded-lg, px-2 py-0.5
  - 기존 카테고리 태그와 동일한 Neumorphism pressed 스타일
- 최대 표시 개수: 4개. 초과 시 "+N" 태그 표시 (동일 스타일)
- techStack 배열이 비어있거나 없으면 이 행을 숨김

**카드 링크 변경 (P1-1 연동):**
- 기존: `<a href={project.url} target="_blank">` (외부 링크)
- 변경: `<Link href={/projects/${project.id}}>` (내부 상세 페이지로 이동)
- 외부 URL 링크는 상세 페이지에서 제공

---

#### S-01-E: Footer (기존 유지)

- 변경 없음
- 구성: 저작권 텍스트, py-8, 가운데 정렬, text-sm nm-muted

---

### S-02: 프로젝트 상세 페이지 (`/projects/[id]`)

**목적:** 개별 프로젝트의 기술 스택, 핵심 기능, 기간, 외부 링크를 상세히 보여준다.

**전체 레이아웃:**

```
[뒤로가기 내비게이션]
[프로젝트 헤더 카드]
[프로젝트 상세 카드]
[Footer]
```

**최대 너비:** max-w-3xl (768px), 좌우 px-4, 가운데 정렬

---

#### S-02-A: 뒤로가기 내비게이션

- 위치: 페이지 최상단
- 구성: "<-" 아이콘(또는 텍스트) + "모든 프로젝트" 텍스트
- 스타일: text-sm nm-muted, hover 시 nm-accent
- 간격: py-6
- 링크 대상: `/` (메인 페이지)

---

#### S-02-B: 프로젝트 헤더 카드

- Neumorphism 카드 (shadow-nm-card, rounded-2xl, bg-nm-bg)
- 상단: 그래디언트 썸네일 영역 (카드와 동일 그래디언트, aspect-video, 이니셜 표시)
- 하단 (p-6):
  - 제목 행: 프로젝트 제목 (text-2xl font-bold nm-text) + 상태 뱃지 (기존 스타일)
  - 설명: text-base nm-muted, mt-2
  - 기간: text-sm nm-muted, mt-1. period 값이 없으면 숨김
  - 카테고리 + 기술 스택 태그 행: mt-4
    - 카테고리: 기존 pressed 스타일 태그
    - 기술 스택: 동일 pressed 스타일, 전체 표시 (카드처럼 4개 제한 없음)

---

#### S-02-C: 프로젝트 상세 카드

- Neumorphism 카드 (shadow-nm-flat, rounded-2xl, bg-nm-bg)
- 간격: mt-6, p-6

**내부 섹션들:**

1. **핵심 기능 (Highlights)** — highlights 배열이 있을 때만 표시
   - 소제목: "핵심 기능" (text-lg font-semibold nm-text)
   - 목록: ul 스타일, 각 항목 앞에 nm-accent 색상 불릿
   - 각 항목: text-sm nm-text
   - highlights가 없으면 이 섹션 전체 숨김

2. **링크** — mt-6
   - 소제목: "링크" (text-lg font-semibold nm-text)
   - 링크 목록 (flex flex-col gap-2):
     - 서비스 URL: "서비스 바로가기" 텍스트 + 외부 링크 아이콘. shadow-nm-flat 버튼 스타일, rounded-xl, px-4 py-2.5
     - GitHub URL: "GitHub 저장소" 텍스트 + 외부 링크 아이콘. 동일 버튼 스타일
     - 각 링크: text-sm nm-text, hover 시 shadow-nm-card + nm-accent 텍스트
     - githubUrl이 없으면 해당 링크만 숨김
     - url이 없으면 해당 링크만 숨김

---

#### S-02-D: Footer

- 메인 페이지와 동일한 Footer 컴포넌트 재사용

---

## C. 컴포넌트 목록

### 기존 컴포넌트 (5개)

| 컴포넌트 | 파일 | 변경 사항 |
|---------|------|-----------|
| Header | Header.tsx | 변경 없음 |
| ProjectGrid | ProjectGrid.tsx | 변경 없음 (데이터 타입 확장은 자동 반영) |
| ProjectCard | ProjectCard.tsx | 기술 스택 태그 행 추가, 링크를 내부 라우팅으로 변경 |
| SearchFilter | SearchFilter.tsx | 변경 없음 |
| Footer | Footer.tsx | 변경 없음 |

### 신규 컴포넌트 (2개)

| 컴포넌트 | 설명 | 위치 |
|---------|------|------|
| ProfileSection | 개발자 프로필 카드 (이름, 소개, 링크) | 메인 페이지 Header 아래 |
| ProjectDetail | 프로젝트 상세 페이지 콘텐츠 (헤더 카드 + 상세 카드) | /projects/[id] 페이지 |

### 컴포넌트 계층 구조

```
메인 페이지 (/)
  Layout
    Header
    ProfileSection          ← 신규
    ProjectGrid
      SearchFilter
      ProjectCard[]         ← 수정 (techStack 태그 추가)
    Footer

상세 페이지 (/projects/[id])
  Layout
    ProjectDetail           ← 신규
      BackNavigation (인라인 또는 분리)
      ProjectHeaderCard
      ProjectInfoCard
    Footer
```

---

## D. 반응형 기준 (P1-4)

### Breakpoint 정의

| 이름 | Tailwind 접두사 | 최소 너비 | 대상 기기 |
|------|----------------|-----------|-----------|
| Mobile | (기본) | 0px ~ | 스마트폰 (375px 기준) |
| Tablet | sm: | 640px ~ | 태블릿, 작은 노트북 |
| Desktop | lg: | 1024px ~ | 데스크톱 |

### 각 breakpoint 주요 레이아웃 변화

#### 메인 페이지

| 요소 | Mobile (기본) | Tablet (sm:) | Desktop (lg:) |
|------|--------------|-------------|---------------|
| 프로젝트 그리드 | 1열 | 2열 | 3열 |
| 검색/필터 | 세로 스택 | 가로 배치 | 가로 배치 |
| ProfileSection | 세로 스택 (아바타 위, 텍스트 아래) | 가로 배치 | 가로 배치 |
| Header 제목 | text-3xl | text-4xl | text-5xl |
| 페이지 좌우 패딩 | px-4 | px-4 | px-4 (max-w-5xl로 제어) |

#### 상세 페이지

| 요소 | Mobile (기본) | Tablet (sm:) | Desktop (lg:) |
|------|--------------|-------------|---------------|
| 최대 너비 | 전체 너비 | max-w-3xl | max-w-3xl |
| 링크 버튼 | 세로 스택 (전체 너비) | 가로 배치 | 가로 배치 |
| 태그 행 | flex-wrap | flex-wrap | flex-wrap |

---

## E. 인터랙션 및 상태 (P1-5)

### E-1. 카드 호버

| 속성 | 기본 | 호버 |
|------|------|------|
| 그림자 | shadow-nm-flat | shadow-nm-card |
| 전환 시간 | - | duration-300 |
| 전환 속성 | - | transition-shadow |
| 커서 | - | pointer (링크이므로 자동) |

추가 효과 없음. 기존 그림자 전환만으로 충분히 시각적 피드백을 준다.

### E-2. 필터 버튼

| 속성 | 비활성 | 활성 | 호버 (비활성 시) |
|------|--------|------|-----------------|
| 그림자 | shadow-nm-flat | shadow-nm-pressed | shadow-nm-card |
| 텍스트 색상 | nm-muted | nm-accent | nm-muted |
| 굵기 | normal | font-medium | normal |
| 전환 | - | - | transition-all duration-200 |

### E-3. 검색 입력 필드

| 속성 | 기본 | 포커스 |
|------|------|--------|
| 그림자 | shadow-nm-input | shadow-nm-input |
| 테두리 | 없음 | ring-2 ring-nm-accent/30 |
| 아웃라인 | 없음 | outline-none |

### E-4. 상세 페이지 링크 버튼

| 속성 | 기본 | 호버 |
|------|------|------|
| 그림자 | shadow-nm-flat | shadow-nm-card |
| 텍스트 색상 | nm-text | nm-accent |
| 전환 | - | transition-all duration-200 |

### E-5. 프로필 링크

| 속성 | 기본 | 호버 |
|------|------|------|
| 텍스트 색상 | nm-muted | nm-accent |
| 전환 | - | transition-colors duration-200 |

### E-6. 뒤로가기 링크

| 속성 | 기본 | 호버 |
|------|------|------|
| 텍스트 색상 | nm-muted | nm-accent |
| 전환 | - | transition-colors duration-200 |

### E-7. 빈 상태 (Empty State)

| 화면 | 조건 | 표시 내용 |
|------|------|-----------|
| 메인 페이지 (검색 결과 없음) | filtered.length === 0 | "검색 결과가 없습니다." (기존 유지) |
| 상세 페이지 (프로젝트 없음) | 해당 ID의 프로젝트가 없을 때 | "프로젝트를 찾을 수 없습니다." + 메인으로 돌아가기 링크 |
| 기술 스택 태그 | techStack 없거나 빈 배열 | 태그 행 자체를 숨김 |
| 핵심 기능 | highlights 없거나 빈 배열 | 섹션 자체를 숨김 |

### E-8. 페이지 전환

- Next.js App Router의 기본 클라이언트 사이드 네비게이션 사용
- 별도의 페이지 전환 애니메이션은 넣지 않음 (P2-3 범위)

---

## F. 구현 우선순위 가이드

구현 에이전트(Frontend Lead)를 위한 작업 순서 제안:

1. **데이터 타입 확장** — Project 인터페이스에 신규 필드 추가 (P0-7)
2. **프로젝트 데이터 업데이트** — projects.json에 실제 데이터 입력 (P0-6)
3. **프로필 데이터 및 ProfileSection** — profile.json + ProfileSection 컴포넌트 (P0-5)
4. **ProjectCard 수정** — 기술 스택 태그 행 추가 + 내부 링크 변경 (P0-8)
5. **ProjectDetail 페이지** — /projects/[id] 라우트 + 상세 페이지 (P1-1)
6. **반응형 검증** — 각 breakpoint에서 레이아웃 확인 (P1-4)
7. **인터랙션 확인** — 호버, 전환 효과 확인 (P1-5)

---

*이 스펙은 사용자가 "디자인 승인"할 때까지 수정 가능합니다.*
