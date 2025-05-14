'use client';

import { Link } from 'react-scroll';

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  { label: 'About', to: 'about' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

export default function Navigator() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4">
      <div className="text-xl font-bold">
        Will Smith
      </div>
      <div className="flex gap-6">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-gray-600"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
} 