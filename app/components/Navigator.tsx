'use client';

import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  to: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { label: 'About', to: 'hero' },
  { label: 'Publications', to: 'publications' },
  { label: 'Projects', to: 'projects' },
  { label: 'Resume', to: '/resume.pdf', isExternal: true },
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
      isScrolled ? 'bg-white border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="section-container h-[4rem] flex items-center justify-between">
        <div className={`text-2xl font-bold font-['Poppins'] transition-colors duration-300 ${
          isScrolled ? 'text-primary' : 'text-white'
        }`}>
          William Convertino
        </div>
        <div className="flex gap-6">
          {navItems.map((item) => (
            item.isExternal ? (
              <a
                key={item.to}
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  hover-effect cursor-pointer font-medium px-4 py-2 rounded-md
                  transition-all duration-200 active:scale-95
                  ${isScrolled 
                    ? 'text-text-secondary hover:text-primary hover:bg-black/5 active:bg-black/10' 
                    : 'text-white/90 hover:text-white hover:bg-white/10 active:bg-white/20'
                  }
                `}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                spy={false}
                smooth={true}
                offset={-64}
                duration={75}
                className={`
                  hover-effect cursor-pointer font-medium px-4 py-2 rounded-md
                  transition-all duration-200 active:scale-95
                  ${isScrolled 
                    ? 'text-text-secondary hover:text-primary hover:bg-black/5 active:bg-black/10' 
                    : 'text-white/90 hover:text-white hover:bg-white/10 active:bg-white/20'
                  }
                `}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
} 