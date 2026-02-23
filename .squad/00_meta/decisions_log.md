# PJ006 의사결정 기록 (Decisions Log)

---

## D-001: PRD 승인

**날짜:** 2026-02-23
**담당:** PM → 사용자 승인
**상태:** ✅ 승인 완료

**PRD v1.0 승인 사항:**
- P0 기능 8개 확정 (기존 4개 구현완료 + 신규 4개)
- 신규: 프로필 섹션, 실제 데이터, 데이터 구조 확장, 기술스택 태그
- P1 기능 5개 (상세 페이지, 썸네일, SEO, 반응형, 인터랙션)
- 배포 플랫폼: Cloudflare Pages 확정
- 정적 JSON 기반, 백엔드 없는 심플 포트폴리오 유지

---

## D-002: UI Spec 승인

**날짜:** 2026-02-23
**담당:** Designer → 사용자 승인
**상태:** ✅ 승인 완료

**UI Spec v1.0 승인 사항:**
- 기존 Neumorphism 시스템 100% 유지 (tailwind.config.ts 변경 없음)
- 신규 컴포넌트 2개: ProfileSection, ProjectDetail
- 기존 컴포넌트 변경 1개: ProjectCard (techStack 태그 + 내부 링크)
- 화면 2개: S-01 메인(/), S-02 상세(/projects/[id])
- 반응형 3단계: Mobile / Tablet(640px) / Desktop(1024px)

---

## D-003: Tech Spec 승인

**날짜:** 2026-02-23
**담당:** Tech Lead → 사용자 승인
**상태:** ✅ 승인 완료

**Tech Spec v1.0 승인 사항:**
- 추가 패키지 0개 (기존 스택만으로 충분)
- Static Export (`output: 'export'`) 배포 전략
- 프로필 데이터: `src/data/profile.json` 별도 파일
- 공유 유틸: `lib/utils.ts` (getGradient, statusColor)
- 빌드 6단계 로드맵 확정 (Phase 1~6)
- 변경/추가 파일 12개, 변경 없음 6개

---
