import { BasicMediaQueryDemo } from './BasicMediaQueryDemo';
import { BreakpointsDemo } from './BreakpointsDemo';
import { DeviceDetectionDemo } from './DeviceDetectionDemo';
import { OrientationDemo } from './OrientationDemo';
import { DarkModeDemo } from './DarkModeDemo';
import { ResponsiveNavDemo } from './ResponsiveNavDemo';
import { AdaptiveLayoutDemo } from './AdaptiveLayoutDemo';

export const MediaQueryDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">
            📱 useMediaQuery Hook
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
            Projet 37/100 • Responsive Design
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Media queries et design adaptatif avec React
          </p>
        </div>

        {/* Demos */}
        <div className="space-y-8">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <BasicMediaQueryDemo />
            <BreakpointsDemo />
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <DeviceDetectionDemo />
            <OrientationDemo />
          </div>

          {/* Row 3 */}
          <div className="grid lg:grid-cols-2 gap-8">
            <DarkModeDemo />
            <ResponsiveNavDemo />
          </div>

          {/* Row 4 */}
          <AdaptiveLayoutDemo />

          {/* Features */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              ✨ Fonctionnalités
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Responsive</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Design adaptatif
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Breakpoints</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Points de rupture
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Device Detection</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Détection d'appareil
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Orientation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Portrait/Landscape
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Dark Mode</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Préférence système
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Accessibility</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Préférences utilisateur
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Real-time</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mise à jour en direct
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">Type-Safe</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    100% TypeScript
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              💻 Exemples d'utilisation
            </h2>

            <div className="space-y-6">
              {/* Basic Usage */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Utilisation basique :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`import { useMediaQuery } from './hooks';

const isMobile = useMediaQuery('(max-width: 768px)');

return (
  <div>
    {isMobile ? (
      <MobileLayout />
    ) : (
      <DesktopLayout />
    )}
  </div>
);`}
                </pre>
              </div>

              {/* Breakpoints */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Breakpoints Tailwind :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const isSm = useMediaQuery('(min-width: 640px)');
const isMd = useMediaQuery('(min-width: 768px)');
const isLg = useMediaQuery('(min-width: 1024px)');
const isXl = useMediaQuery('(min-width: 1280px)');
const is2Xl = useMediaQuery('(min-width: 1536px)');

const columns = is2Xl ? 4 : isXl ? 3 : isLg ? 2 : 1;

return (
  <div className={\`grid grid-cols-\${columns} gap-4\`}>
    {/* Cards */}
  </div>
);`}
                </pre>
              </div>

              {/* Device Detection */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Détection d'appareil :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const isMobile = useMediaQuery('(max-width: 768px)');
const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
const isDesktop = useMediaQuery('(min-width: 1025px)');
const isTouch = useMediaQuery('(hover: none) and (pointer: coarse)');

return (
  <div>
    {isMobile && <p>Vous êtes sur mobile</p>}
    {isTablet && <p>Vous êtes sur tablette</p>}
    {isDesktop && <p>Vous êtes sur desktop</p>}
    {isTouch && <p>Écran tactile détecté</p>}
  </div>
);`}
                </pre>
              </div>

              {/* Orientation */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Orientation :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const isPortrait = useMediaQuery('(orientation: portrait)');
const isLandscape = useMediaQuery('(orientation: landscape)');

return (
  <div className={isPortrait ? 'flex-col' : 'flex-row'}>
    {/* Content adapté à l'orientation */}
  </div>
);`}
                </pre>
              </div>

              {/* Dark Mode */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Dark Mode système :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');

useEffect(() => {
  if (prefersDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [prefersDark]);`}
                </pre>
              </div>

              {/* Accessibility */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Préférences accessibilité :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
const prefersContrast = useMediaQuery('(prefers-contrast: more)');

return (
  <div
    className={\`
      \${prefersReducedMotion ? '' : 'transition-all'}
      \${prefersContrast ? 'border-4 border-black' : ''}
    \`}
  >
    {/* Content */}
  </div>
);`}
                </pre>
              </div>

              {/* Responsive Navigation */}
              <div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-3">Navigation responsive :</h3>
                <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto text-sm">
{`const isMobile = useMediaQuery('(max-width: 768px)');
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

return (
  <nav>
    {isMobile ? (
      <>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </button>
        {isMobileMenuOpen && <MobileMenu />}
      </>
    ) : (
      <DesktopMenu />
    )}
  </nav>
);`}
                </pre>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-linear-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">🎯 Cas d'usage courants</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>📱</span> Responsive Design
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Layouts adaptatifs</li>
                  <li>• Grilles responsives</li>
                  <li>• Navigation mobile/desktop</li>
                  <li>• Composants conditionnels</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>🎨</span> Theming
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Dark mode automatique</li>
                  <li>• Préférence système</li>
                  <li>• Thèmes adaptatifs</li>
                  <li>• Contraste élevé</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>♿</span> Accessibilité
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Reduced motion</li>
                  <li>• High contrast</li>
                  <li>• Large text</li>
                  <li>• Préférences utilisateur</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span>📐</span> Layout
                </h3>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Colonnes dynamiques</li>
                  <li>• Orientation adaptative</li>
                  <li>• Sidebar conditionnelle</li>
                  <li>• Content reflow</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};