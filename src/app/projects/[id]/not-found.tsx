import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <div className="py-6">
        <Link
          href="/"
          className="font-mono text-sm text-accent hover:underline"
        >
          &larr; 모든 프로젝트
        </Link>
      </div>
      <div className="rounded-lg border border-navy-lighter bg-navy-light p-12 text-center">
        <p className="text-base text-slate">프로젝트를 찾을 수 없습니다.</p>
        <Link
          href="/"
          className="mt-4 inline-block font-mono text-sm text-accent hover:underline"
        >
          메인으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
