'use client';

import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-fixed transition-all duration-300 ${
      isScrolled ? 'bg-white border-b border-gray-100' : 'bg-white'
    }`}>
      <div className="section-container h-[4rem] flex items-center justify-between">
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
              offset={-64}
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