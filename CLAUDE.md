# PJ006 Portfolio Dashboard

## 프로젝트 개요
- **이름:** Portfolio Dashboard (포트폴리오 대시보드)
- **목적:** 개인 프로젝트(PJ001~PJ006+)를 보여주는 포트폴리오 웹사이트
- **현재 Phase:** Phase 1 — Planning (PRD 작성 대기)

## 기술 스택
| 계층 | 기술 |
|------|------|
| Framework | Next.js 14 (App Router) |
| UI | React 18, TypeScript |
| Styling | Tailwind CSS 3.4, Neumorphism 디자인 |
| Font | Geist (Variable Font) |
| Deploy | Cloudflare Pages |

## 스쿼드 문서 경로
| 문서 | 경로 | 담당 | 상태 |
|------|------|------|------|
| Decisions Log | `.squad/00_meta/decisions_log.md` | 전체 | 활성 |
| Changelog | `.squad/00_meta/changelog.md` | 전체 | 활성 |
| PRD | `.squad/01_planning/PRD.md` | PM | 대기 |
| Design Brief | `.squad/02_design/Design_Brief.md` | PM→Designer | 대기 |
| UI Specs | `.squad/02_design/UI_Specs.md` | Designer | 대기 |
| Tech Spec | `.squad/03_architecture/Tech_Spec.md` | Tech Lead | 대기 |
| API Contract | `.squad/03_architecture/API_Contract.md` | Tech Lead | 대기 |
| Test Spec | `.squad/04_qa/test_spec.md` | QA | 대기 |
| Deploy Spec | `.squad/05_deploy/Deploy_Spec.md` | DevOps | 대기 |

## 기존 코드 현황
- 기본 UI 컴포넌트 완성: Header, ProjectGrid, ProjectCard, SearchFilter, Footer
- 목업 데이터: `src/data/projects.json` (PJ001~PJ006)
- Neumorphism 테마: `tailwind.config.ts`에 커스텀 색상/그림자 정의
- 검색 + 카테고리 필터 동작 중

## 이 프로젝트에서 사용하는 Skills
- /commit
