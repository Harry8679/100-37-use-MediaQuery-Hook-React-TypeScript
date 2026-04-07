import { useState } from 'react';
import { useMediaQuery } from '../hooks';
import type { NavItem } from '../types';

export const ResponsiveNavDemo = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { id: '1', label: 'Accueil', icon: '🏠', href: '#' },
    { id: '2', label: 'Produits', icon: '📦', href: '#' },
    { id: '3', label: 'Services', icon: '⚙️', href: '#' },
    { id: '4', label: 'À propos', icon: 'ℹ️', href: '#' },
    { id: '5', label: 'Contact', icon: '📧', href: '#' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Navigation Responsive
      </h3>

      <div className="space-y-6">
        {/* Navigation */}
        <div className="bg-linear-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg overflow-hidden">
          {isMobile ? (
            // Mobile Navigation
            <div>
              <div className="p-4 flex items-center justify-between">
                <div className="text-white font-bold text-lg">
                  📱 Mobile Nav
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                >
                  <span className="text-2xl">
                    {isMobileMenuOpen ? '✕' : '☰'}
                  </span>
                </button>
              </div>

              {isMobileMenuOpen && (
                <div className="bg-white dark:bg-gray-800 animate-scale-in">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className="block px-6 py-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-semibold text-gray-800 dark:text-white">
                          {item.label}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            // Desktop Navigation
            <div className="p-4 flex items-center justify-between">
              <div className="text-white font-bold text-lg">
                🖥️ Desktop Nav
              </div>
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-colors font-semibold"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{isMobile ? '📱' : '🖥️'}</span>
            <div className="font-bold text-blue-800 dark:text-blue-300">
              Mode {isMobile ? 'Mobile' : 'Desktop'} détecté
            </div>
          </div>
          <p className="text-sm text-blue-700 dark:text-blue-400">
            {isMobile
              ? 'Menu hamburger avec navigation déroulante'
              : 'Navigation horizontale complète'}
          </p>
        </div>

        <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-400">
            💡 Redimensionnez votre fenêtre pour voir la navigation s'adapter automatiquement !
          </p>
        </div>
      </div>
    </div>
  );
};