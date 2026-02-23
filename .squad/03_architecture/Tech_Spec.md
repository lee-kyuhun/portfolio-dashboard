# Tech Spec: PJ006 Portfolio Dashboard

> 버전: v1.0 | 작성일: 2026-02-23 | 상태: ✅ 승인 완료 | 작성자: Tech Lead Agent

---

## A. 기술 스택 (확정)

| 영역 | 기술 | 버전 | 선택 근거 |
|------|------|------|-----------|
| Framework | Next.js | 14.2.35 | 기존 유지. Static Export로 Cloudflare Pages 배포 |
| UI | React | ^18 | 기존 유지 |
| Language | TypeScript | ^5 | 기존 유지 |
| Styling | Tailwind CSS | ^3.4.1 | 기존 유지. Neumorphism 토큰 정의 완료 |
| Font | Geist Sans (Variable) | - | 기존 유지 |
| Build | Static Export (`output: 'export'`) | - | 신규. Cloudflare Pages 호환성 확보 |
| Deploy | Cloudflare Pages | - | 기존 결정 유지 |

### 추가 패키지: 없음

기존 의존성만으로 모든 요구사항을 충족한다. 이유:

- 아이콘: SVG를 인라인으로 직접 사용 (lucide-react 등 미도입). 필요한 아이콘이 GitHub, Email, 외부링크, 뒤로가기 4개뿐이므로 패키지 추가 대비 번들 비용이 맞지 않음
- 애니메이션: Tailwind transition 유틸리티로 충분 (framer-motion 미도입)
- 상태관리: useState로 충분 (zustand 등 미도입)
- SEO: Next.js Metadata API 기본 제공

---

## B. 프로젝트 구조 (파일/폴더)

### 현재 구조

```
src/
  app/
    fonts/GeistVF.woff
    globals.css
    layout.tsx
    page.tsx
  components/
    Footer.tsx
    Header.tsx
    ProjectCard.tsx
    ProjectGrid.tsx
    SearchFilter.tsx
  data/
    projects.json
  lib/
    projects.ts
  types/
    project.ts
```

### 변경/추가 파일 목록

| 파일 | 변경 유형 | 역할 |
|------|-----------|------|
| `src/types/project.ts` | **수정** | Project 인터페이스에 신규 필드 추가, Profile 인터페이스 추가 |
| `src/data/projects.json` | **수정** | 실제 프로젝트 데이터 + 신규 필드 포함 |
| `src/data/profile.json` | **신규** | 프로필 데이터 (이름, 소개, 링크) |
| `src/lib/projects.ts` | **수정** | getProjectById() 함수 추가, getProfile() 함수 추가 |
| `src/lib/utils.ts` | **신규** | getGradient(), statusColor 등 공유 유틸리티 |
| `src/components/ProfileSection.tsx` | **신규** | 프로필 카드 컴포넌트 |
| `src/components/ProjectCard.tsx` | **수정** | 기술 스택 태그 행 추가, 링크를 내부 라우팅으로 변경 |
| `src/components/ProjectDetail.tsx` | **신규** | 프로젝트 상세 페이지 콘텐츠 컴포넌트 |
| `src/app/page.tsx` | **수정** | ProfileSection 추가 |
| `src/app/projects/[id]/page.tsx` | **신규** | 프로젝트 상세 페이지 (동적 라우트) |
| `src/app/layout.tsx` | **수정** | SEO 메타데이터 강화 |
| `next.config.mjs` | **수정** | `output: 'export'` 추가 |

### 변경 없는 파일

| 파일 | 이유 |
|------|------|
| `src/components/Header.tsx` | UI Specs에서 변경 없음 명시 |
| `src/components/SearchFilter.tsx` | UI Specs에서 변경 없음 명시 |
| `src/components/Footer.tsx` | UI Specs에서 변경 없음 명시 |
| `src/components/ProjectGrid.tsx` | Project 타입 확장은 자동 반영, 로직 변경 없음 |
| `tailwind.config.ts` | 기존 토큰으로 충분 |
| `src/app/globals.css` | 변경 불필요 |

---

## C. 데이터 모델

### C-1. Project 인터페이스 (확장)

```typescript
// src/types/project.ts

export interface Project {
  // 기존 필드
  id: string;              // "pj001"
  title: string;           // "칸반 보드"
  description: string;     // 한 줄 설명
  thumbnail: string;       // 이미지 경로 (현재 미사용, 그래디언트 대체)
  url: string;             // 서비스 URL
  category: string;        // "생산성"
  status: "운영중" | "개발중" | "계획중" | "중단";

  // 신규 필드
  techStack: string[];     // ["Next.js", "TypeScript", "Tailwind CSS"]
  githubUrl?: string;      // GitHub 레포 URL (선택)
  period?: string;         // "2025.06 ~ 현재" (선택)
  highlights?: string[];   // 핵심 기능/성과 2~3줄 (선택, 상세 페이지용)
}
```

**변경 영향 분석:**
- `techStack`은 필수 필드. 빈 배열 `[]` 허용하되, 모든 프로젝트에 최소 1개 이상 기술 기입 권장
- `githubUrl`, `period`, `highlights`는 선택 필드. 없으면 해당 UI 요소를 숨김
- 기존 `url` 필드는 유지. 상세 페이지의 "서비스 바로가기" 링크에 사용
- 기존 `thumbnail` 필드는 유지하되, 현재는 이니셜 그래디언트로 대체 (P1-2 스크린샷 준비 시 활용)

### C-2. Profile 인터페이스 (신규)

```typescript
// src/types/project.ts에 함께 정의

export interface Profile {
  name: string;            // "이규훈"
  tagline: string;         // "풀스택 개발자 | 문제를 해결하는 것을 좋아합니다"
  links: {
    github?: string;       // "https://github.com/username"
    email?: string;        // "user@example.com"
    linkedin?: string;     // "https://linkedin.com/in/username"
  };
}
```

### C-3. 데이터 저장 위치 결정

| 데이터 | 파일 | 근거 |
|--------|------|------|
| 프로젝트 목록 | `src/data/projects.json` | 기존 유지 |
| 프로필 정보 | `src/data/profile.json` | **별도 파일로 분리**. 프로젝트와 프로필은 성격이 다른 데이터이며, 업데이트 주기가 다름 |

**Designer 질문 해소:** Designer Memory에서 "프로필 데이터 저장 위치"를 미해결로 남겼다. `src/data/profile.json`으로 확정한다. 이유는 위 표 참고.

### C-4. profile.json 구조

```json
{
  "name": "이규훈",
  "tagline": "풀스택 개발자 | 문제를 해결하는 것을 좋아합니다",
  "links": {
    "github": "https://github.com/username",
    "email": "user@example.com"
  }
}
```

### C-5. projects.json 확장 구조 (예시)

```json
[
  {
    "id": "pj001",
    "title": "칸반 보드",
    "description": "드래그앤드롭 기반 태스크 관리 칸반 보드",
    "thumbnail": "/thumbnails/pj001.png",
    "url": "https://actual-service-url.com",
    "category": "생산성",
    "status": "운영중",
    "techStack": ["Next.js", "TypeScript", "Tailwind CSS", "DnD Kit"],
    "githubUrl": "https://github.com/username/kanban",
    "period": "2025.03 ~ 현재",
    "highlights": [
      "드래그앤드롭으로 태스크 상태 변경",
      "로컬스토리지 기반 데이터 영속성",
      "반응형 칸반 보드 레이아웃"
    ]
  }
]
```

> 실제 데이터 내용은 사이트 오너가 직접 채운다. 여기서는 구조만 확정한다.

---

## D. 컴포넌트 설계

### D-1. 기존 컴포넌트 변경: ProjectCard

**변경 사항 요약:**
1. `<a href={url} target="_blank">` --> `<Link href={/projects/${id}}>`
2. 카테고리 태그 아래에 기술 스택 태그 행 추가

**Props 변경:** 없음 (기존 `{ project: Project }`). Project 타입 확장으로 자동 반영.

**기술 스택 태그 렌더링 로직:**
```
if (project.techStack.length === 0) -> 태그 행 숨김
if (project.techStack.length <= 4) -> 전체 표시
if (project.techStack.length > 4) -> 앞 4개 + "+{나머지 수}" 태그
```

**Link 컴포넌트 임포트:** `next/link`에서 가져온다. 이 변경으로 ProjectCard는 Server Component로 유지 가능하다.

### D-2. 신규 컴포넌트: ProfileSection

**파일:** `src/components/ProfileSection.tsx`
**역할:** 개발자 프로필 카드. 이름, 소개, 외부 링크를 표시한다.

**Props:**
```typescript
interface ProfileSectionProps {
  profile: Profile;
}
```

**데이터 흐름:**
```
profile.json --> lib/projects.ts (getProfile) --> app/page.tsx --> ProfileSection
```

**렌더링 조건:**
- `profile.links` 객체에서 값이 있는 항목만 표시
- 모든 링크가 없으면 링크 행 숨김

**반응형:**
- Mobile: 세로 스택 (아바타 위, 텍스트 아래) --> `flex-col items-center text-center`
- sm 이상: 가로 배치 --> `sm:flex-row sm:items-start sm:text-left`

**Server Component:** 인터랙션 없으므로 Server Component로 구현한다.

### D-3. 신규 컴포넌트: ProjectDetail

**파일:** `src/components/ProjectDetail.tsx`
**역할:** 프로젝트 상세 페이지의 전체 콘텐츠. 뒤로가기 내비, 헤더 카드, 상세 카드를 포함한다.

**Props:**
```typescript
interface ProjectDetailProps {
  project: Project;
}
```

**데이터 흐름:**
```
projects.json --> lib/projects.ts (getProjectById) --> app/projects/[id]/page.tsx --> ProjectDetail
```

**내부 구조 (단일 컴포넌트로 구성):**
```
ProjectDetail
  |- 뒤로가기 링크 (Link to "/")
  |- 헤더 카드 (그래디언트 + 제목/상태/설명/기간/태그)
  |- 상세 카드 (핵심 기능 + 링크 버튼)
```

> 별도 하위 컴포넌트(BackNavigation, ProjectHeaderCard, ProjectInfoCard)로 분리하지 않는다.
> 이유: 이 컴포넌트들은 상세 페이지에서만 사용되며, 재사용 가능성이 없다. 불필요한 파일 증식을 피한다.

**조건부 렌더링:**
- `period` 없으면 기간 행 숨김
- `highlights` 없거나 빈 배열이면 "핵심 기능" 섹션 숨김
- `githubUrl` 없으면 GitHub 링크 버튼 숨김
- `url` 없으면 서비스 링크 버튼 숨김

**Server Component:** 인터랙션 없으므로 Server Component로 구현한다.

### D-4. 그래디언트 함수 공유

현재 `getGradient()` 함수가 ProjectCard.tsx에 직접 정의되어 있다. ProjectDetail에서도 동일한 그래디언트를 써야 하므로:

**방법:** `getGradient()` 함수와 `gradients` 배열, `statusColor` 맵을 `src/lib/utils.ts`로 추출한다.

| 파일 | 변경 |
|------|------|
| `src/lib/utils.ts` | **신규**. `getGradient()`, `gradients[]`, `statusColor` 배치 |
| `src/components/ProjectCard.tsx` | 로컬 정의 삭제, `@/lib/utils`에서 임포트 |
| `src/components/ProjectDetail.tsx` | `@/lib/utils`에서 임포트 |

### D-5. 컴포넌트 전체 목록 (최종)

| # | 컴포넌트 | 파일 | 유형 | 변경 |
|---|---------|------|------|------|
| 1 | Header | components/Header.tsx | Server | 없음 |
| 2 | ProfileSection | components/ProfileSection.tsx | Server | **신규** |
| 3 | ProjectGrid | components/ProjectGrid.tsx | Client | 없음 |
| 4 | SearchFilter | components/SearchFilter.tsx | Client | 없음 |
| 5 | ProjectCard | components/ProjectCard.tsx | Server | **수정** |
| 6 | ProjectDetail | components/ProjectDetail.tsx | Server | **신규** |
| 7 | Footer | components/Footer.tsx | Server | 없음 |

---

## E. 라우팅

### E-1. 라우트 구조

| 경로 | 파일 | 설명 |
|------|------|------|
| `/` | `src/app/page.tsx` | 메인 페이지 (프로필 + 프로젝트 그리드) |
| `/projects/[id]` | `src/app/projects/[id]/page.tsx` | 프로젝트 상세 페이지 |

### E-2. 메인 페이지 (`/`) 변경

```typescript
// src/app/page.tsx
import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import ProjectGrid from "@/components/ProjectGrid";
import Footer from "@/components/Footer";
import { getProjects, getCategories, getProfile } from "@/lib/projects";

export default function Home() {
  const projects = getProjects();
  const categories = getCategories();
  const profile = getProfile();

  return (
    <div className="mx-auto max-w-5xl px-4">
      <Header />
      <ProfileSection profile={profile} />
      <ProjectGrid projects={projects} categories={categories} />
      <Footer />
    </div>
  );
}
```

### E-3. 상세 페이지 (`/projects/[id]`) 설계

```typescript
// src/app/projects/[id]/page.tsx
import { getProjects, getProjectById } from "@/lib/projects";
import ProjectDetail from "@/components/ProjectDetail";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Static Generation: 빌드 시 모든 프로젝트 페이지를 미리 생성
export function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ id: p.id }));
}

// 동적 메타데이터: 프로젝트별 SEO
export function generateMetadata({
  params,
}: {
  params: { id: string };
}): Metadata {
  const project = getProjectById(params.id);
  if (!project) return { title: "프로젝트를 찾을 수 없습니다" };
  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4">
      <ProjectDetail project={project} />
      <Footer />
    </div>
  );
}
```

### E-4. 404 처리

존재하지 않는 프로젝트 ID로 접근 시 `notFound()`를 호출한다. Next.js의 기본 404 페이지가 표시된다.

`output: 'export'` 모드에서 `generateStaticParams()`에 포함되지 않는 경로는 자동으로 404가 된다.

### E-5. lib/projects.ts 확장

```typescript
// src/lib/projects.ts (전체)
import projectsData from "@/data/projects.json";
import profileData from "@/data/profile.json";
import { Project, Profile } from "@/types/project";

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function getCategories(): string[] {
  const categories = new Set(projectsData.map((p) => p.category));
  return Array.from(categories);
}

export function getProjectById(id: string): Project | undefined {
  return (projectsData as Project[]).find((p) => p.id === id);
}

export function getProfile(): Profile {
  return profileData as Profile;
}
```

---

## F. 빌드 단계 (구현 로드맵)

UI Specs 섹션 F의 구현 순서를 기술적으로 세분화한다.

### Phase 1: 데이터 계층 (P0-6, P0-7)

> 모든 UI 변경의 기반. 데이터 구조 확정 후 컴포넌트를 건드린다.

| # | 작업 | 상세 |
|---|------|------|
| 1-1 | Project 타입 확장 | `src/types/project.ts`에 `techStack`, `githubUrl`, `period`, `highlights` 추가 |
| 1-2 | Profile 타입 추가 | 같은 파일에 `Profile` 인터페이스 정의 |
| 1-3 | projects.json 업데이트 | 6개 프로젝트 모두 실제 데이터로 교체 + 신규 필드 입력 |
| 1-4 | profile.json 생성 | `src/data/profile.json` 생성, 프로필 데이터 입력 |
| 1-5 | lib/projects.ts 확장 | `getProjectById()`, `getProfile()` 함수 추가 |
| 1-6 | lib/utils.ts 생성 | `getGradient()`, `gradients[]`, `statusColor` 추출 |

### Phase 2: 메인 페이지 변경 (P0-5, P0-8)

| # | 작업 | 상세 |
|---|------|------|
| 2-1 | ProfileSection 컴포넌트 생성 | UI Specs S-01-B 스펙 구현 |
| 2-2 | page.tsx에 ProfileSection 삽입 | Header 아래, ProjectGrid 위 |
| 2-3 | ProjectCard 수정 - 태그 | 기술 스택 태그 행 추가 (최대 4개 + "+N") |
| 2-4 | ProjectCard 수정 - 링크 | `<a>` --> `<Link href={/projects/${id}}>` |
| 2-5 | ProjectCard 수정 - 유틸 임포트 | getGradient, statusColor를 lib/utils에서 임포트 |

### Phase 3: 상세 페이지 (P1-1)

| # | 작업 | 상세 |
|---|------|------|
| 3-1 | 디렉토리 생성 | `src/app/projects/[id]/` |
| 3-2 | page.tsx 생성 | generateStaticParams + generateMetadata + 본문 |
| 3-3 | ProjectDetail 컴포넌트 생성 | UI Specs S-02 전체 구현 |
| 3-4 | 404 처리 확인 | 존재하지 않는 ID 접근 시 동작 확인 |

### Phase 4: SEO 및 메타데이터 (P1-3)

| # | 작업 | 상세 |
|---|------|------|
| 4-1 | layout.tsx 메타데이터 강화 | Open Graph 기본값 설정 |
| 4-2 | 메인 페이지 메타데이터 | page.tsx에 metadata export |
| 4-3 | 상세 페이지 동적 메타데이터 | generateMetadata 함수 (Phase 3에서 이미 구현) |

### Phase 5: 반응형 및 인터랙션 검증 (P1-4, P1-5)

| # | 작업 | 상세 |
|---|------|------|
| 5-1 | 반응형 검증 | 375px, 640px, 1024px breakpoint에서 전체 페이지 확인 |
| 5-2 | 호버/트랜지션 확인 | 카드, 버튼, 링크의 인터랙션 동작 확인 |
| 5-3 | ProfileSection 반응형 | 모바일 세로 스택 / sm 이상 가로 배치 확인 |
| 5-4 | 상세 페이지 반응형 | 링크 버튼 모바일 전체 너비 / sm 이상 가로 배치 확인 |

### Phase 6: 빌드 및 배포 준비

| # | 작업 | 상세 |
|---|------|------|
| 6-1 | next.config.mjs 설정 | `output: 'export'` 추가 |
| 6-2 | 로컬 빌드 테스트 | `npm run build` 성공 확인 |
| 6-3 | 정적 파일 확인 | `out/` 디렉토리에 모든 페이지 생성 확인 |
| 6-4 | Cloudflare Pages 배포 | DevOps 단계에서 처리 |

---

## G. Cloudflare Pages 배포 설정

### G-1. 배포 전략: Static Export

이 프로젝트는 **정적 사이트**다. 서버 사이드 로직이 없으므로 Next.js의 `output: 'export'` 모드로 순수 정적 HTML/CSS/JS를 생성하고, Cloudflare Pages에 업로드한다.

**왜 Static Export인가:**
- `@cloudflare/next-on-pages`는 deprecated 상태 (2026년 Q1 기준)
- OpenNext 어댑터는 SSR/ISR이 필요한 경우에 해당
- 이 프로젝트는 JSON 데이터를 빌드 타임에 읽어 정적 페이지를 생성하므로, SSR이 필요 없음
- Static Export가 가장 단순하고 안정적이며, Cloudflare Pages와 완벽 호환

참고 자료:
- [Next.js Cloudflare Pages 공식 문서](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [OpenNext Cloudflare 어댑터](https://opennext.js.org/cloudflare)

### G-2. next.config.mjs 변경

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

export default nextConfig;
```

### G-3. Static Export 제약 사항

`output: 'export'` 사용 시 아래 기능을 사용할 수 없다. 이 프로젝트에서는 **모두 사용하지 않으므로 문제 없음**.

| 비활성 기능 | 영향 |
|-------------|------|
| Server Components (서버 전용 로직) | 이 프로젝트의 Server Components는 빌드 타임에 실행됨 -- 문제 없음 |
| API Routes | 사용하지 않음 |
| Middleware | 사용하지 않음 |
| ISR/SSR | 사용하지 않음 |
| Image Optimization (`next/image`) | 사용하지 않음 (그래디언트 썸네일 사용 중) |

### G-4. Cloudflare Pages 빌드 설정

| 설정 | 값 |
|------|----|
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` (프로젝트 루트) |
| Node.js version | 18 이상 (환경 변수 `NODE_VERSION=18`로 지정) |

### G-5. 이미지 최적화 참고

현재 `next/image`를 사용하지 않고 있으며, `output: 'export'`에서는 기본 이미지 최적화가 비활성화된다. 향후 P1-2(카드 썸네일 개선)에서 실제 이미지를 사용할 경우:

- `<img>` 태그 직접 사용, 또는
- `next/image`에 `unoptimized: true` 설정 추가

---

## 기술 제약 조건

1. **Next.js 14 + Cloudflare Pages:** Static Export 모드 필수. SSR/ISR 사용 불가.
2. **JSON 데이터 관리:** 프로젝트/프로필 데이터 변경 시 재빌드+재배포 필요. (이것은 의도된 제약 -- CMS 없이 JSON으로 관리하는 구조)
3. **동적 라우트:** `generateStaticParams()`로 빌드 시 모든 경로를 미리 생성해야 함. 런타임에 새 경로 생성 불가.
4. **아이콘:** 외부 아이콘 라이브러리 미사용. SVG 인라인으로 직접 구현.

---

## 미결 결정 사항 (TBD)

| # | 항목 | 상태 | 메모 |
|---|------|------|------|
| TBD-1 | projects.json 실제 데이터 내용 | 사이트 오너 입력 대기 | 구조만 확정, 내용은 구현 시 채움 |
| TBD-2 | profile.json 실제 데이터 내용 | 사이트 오너 입력 대기 | 구조만 확정, 내용은 구현 시 채움 |
| TBD-3 | P1-2 썸네일 이미지 전환 시점 | 미정 | 현재는 이니셜 그래디언트 유지 |
| TBD-4 | 커스텀 404 페이지 디자인 | 미정 | 현재는 Next.js 기본 404 사용 |

---

*이 Tech Spec은 사용자가 "Tech Spec 승인"할 때까지 수정 가능합니다.*
