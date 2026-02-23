import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4">
      <div className="py-6">
        <Link
          href="/"
          className="text-sm text-nm-muted transition-colors duration-200 hover:text-nm-accent"
        >
          &larr; 모든 프로젝트
        </Link>
      </div>
      <div className="rounded-2xl bg-nm-bg p-12 text-center shadow-nm-flat">
        <p className="text-base text-nm-muted">프로젝트를 찾을 수 없습니다.</p>
        <Link
          href="/"
          className="mt-4 inline-block text-sm text-nm-accent transition-colors duration-200 hover:underline"
        >
          메인으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
