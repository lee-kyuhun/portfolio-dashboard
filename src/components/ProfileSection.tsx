import { Profile } from "@/types/project";

export default function ProfileSection({ profile }: { profile: Profile }) {
  // 이름, 이메일, LinkedIn은 숨김 처리 — GitHub 링크만 표시
  const githubUrl = profile.links.github;
  const hasVisibleLinks = Boolean(githubUrl);

  return (
    <div className="mb-6 rounded-2xl bg-nm-bg p-5 shadow-nm-flat">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        {/* 이니셜 아바타 */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-nm-accent text-xl font-bold text-white">
          G
        </div>

        {/* 텍스트 블록 */}
        <div>
          {/* 소개 문구 — 이름은 숨김 */}
          <p className="mt-0.5 text-sm text-nm-muted">{profile.tagline}</p>

          {/* 링크 행 — GitHub만 표시 */}
          {hasVisibleLinks && (
            <div className="mt-2 flex items-center gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-nm-muted transition-colors duration-200 hover:text-nm-accent"
                >
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
