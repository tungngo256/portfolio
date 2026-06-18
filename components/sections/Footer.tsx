export default function Footer() {
  return (
    <footer className="border-t border-line/10 py-10 text-center text-sm text-muted">
      © {new Date().getFullYear()} Ngo Huu Thanh Tung · Built with Next.js
      &amp; Tailwind CSS
    </footer>
  );
}
