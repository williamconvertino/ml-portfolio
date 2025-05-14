'use client';

import { Link } from 'react-scroll';

interface NavItem {
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  { label: 'About', to: 'about' },
  { label: 'Publications', to: 'publications' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

export default function Navigator() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="section-container h-[1px] flex items-center justify-between">
        <div className="text-2xl font-bold font-['Poppins'] text-primary">
          William Convertino
        </div>
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-56}
              duration={500}
              className="hover-effect text-text-secondary hover:text-primary cursor-pointer font-medium"
              activeClass="text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 