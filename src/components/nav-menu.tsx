
import { Link } from "react-router-dom";

export function NavMenu() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 glass rounded-full px-6 py-3 flex gap-8 z-50">
      <Link to="/" className="hover:text-primary transition-colors">Home</Link>
      <Link to="/about" className="hover:text-primary transition-colors">About</Link>
      <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
      <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
      <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
    </nav>
  );
}
