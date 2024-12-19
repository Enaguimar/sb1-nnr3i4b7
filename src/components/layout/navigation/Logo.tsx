import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Logo() {
  return (
    <Link to="/" className="text-2xl font-bold text-yellow-500 flex items-center gap-2">
      <Sparkles className="h-6 w-6" />
      Kastillikos
    </Link>
  );
}