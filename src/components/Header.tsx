export default function Header() {
  return (
    <header className="py-16 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-nm-text">
        My Projects
      </h1>
      <div className="mx-auto mt-4 h-0.5 w-12 rounded-full bg-nm-accent" />
      <p className="mt-4 text-lg text-nm-muted">
        직접 만든 웹서비스 프로젝트 모음
      </p>
    </header>
  );
}
