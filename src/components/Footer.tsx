export default function Footer() {
  return (
    <footer className="py-8 text-center">
      <p className="font-mono text-xs text-slate/50">
        Designed & Built by Gromit
      </p>
      <p className="mt-1 font-mono text-xs text-slate/30">
        &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
