import { useMediaQuery } from '../hooks';

export const DarkModeDemo = () => {
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const prefersLight = useMediaQuery('(prefers-color-scheme: light)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const prefersContrast = useMediaQuery('(prefers-contrast: more)');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Préférences Système
      </h3>

      <div className="space-y-6">
        {/* Dark Mode Display */}
        <div className={`p-8 rounded-xl text-center transition-all ${
          prefersDark
            ? 'bg-gray-900 text-white'
            : 'bg-gray-100 text-gray-900'
        }`}>
          <div className="text-6xl mb-4">
            {prefersDark ? '🌙' : '☀️'}
          </div>
          <div className="text-3xl font-bold mb-2">
            {prefersDark ? 'Dark Mode' : 'Light Mode'}
          </div>
          <div className={prefersDark ? 'text-gray-400' : 'text-gray-600'}>
            Préférence système détectée
          </div>
        </div>

        {/* All Preferences */}
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${
            prefersDark
              ? 'bg-blue-100 dark:bg-blue-900/20'
              : 'bg-gray-100 dark:bg-gray-700/20'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌙</span>
                <div>
                  <div className={`font-bold ${
                    prefersDark
                      ? 'text-blue-700 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-400'
                  }`}>
                    Dark Mode
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-500">
                    prefers-color-scheme: dark
                  </div>
                </div>
              </div>
              <span className={`px-4 py-2 rounded-full font-bold ${
                prefersDark
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
              }`}>
                {prefersDark ? 'ON' : 'OFF'}
              </span>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${
            prefersLight
              ? 'bg-yellow-100 dark:bg-yellow-900/20'
              : 'bg-gray-100 dark:bg-gray-700/20'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">☀️</span>
                <div>
                  <div className={`font-bold ${
                    prefersLight
                      ? 'text-yellow-700 dark:text-yellow-400'
                      : 'text-gray-700 dark:text-gray-400'
                  }`}>
                    Light Mode
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-500">
                    prefers-color-scheme: light
                  </div>
                </div>
              </div>
              <span className={`px-4 py-2 rounded-full font-bold ${
                prefersLight
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
              }`}>
                {prefersLight ? 'ON' : 'OFF'}
              </span>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${
            prefersReducedMotion
              ? 'bg-purple-100 dark:bg-purple-900/20'
              : 'bg-gray-100 dark:bg-gray-700/20'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🐢</span>
                <div>
                  <div className={`font-bold ${
                    prefersReducedMotion
                      ? 'text-purple-700 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-400'
                  }`}>
                    Reduced Motion
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-500">
                    prefers-reduced-motion: reduce
                  </div>
                </div>
              </div>
              <span className={`px-4 py-2 rounded-full font-bold ${
                prefersReducedMotion
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
              }`}>
                {prefersReducedMotion ? 'ON' : 'OFF'}
              </span>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${
            prefersContrast
              ? 'bg-pink-100 dark:bg-pink-900/20'
              : 'bg-gray-100 dark:bg-gray-700/20'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔍</span>
                <div>
                  <div className={`font-bold ${
                    prefersContrast
                      ? 'text-pink-700 dark:text-pink-400'
                      : 'text-gray-700 dark:text-gray-400'
                  }`}>
                    High Contrast
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-500">
                    prefers-contrast: more
                  </div>
                </div>
              </div>
              <span className={`px-4 py-2 rounded-full font-bold ${
                prefersContrast
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
              }`}>
                {prefersContrast ? 'ON' : 'OFF'}
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
            Comment tester :
          </h4>
          <ul className="text-sm text-blue-700 dark:text-blue-400 space-y-1">
            <li>• macOS: Préférences Système → Général → Apparence</li>
            <li>• Windows: Paramètres → Personnalisation → Couleurs</li>
            <li>• Chrome DevTools: Rendering → Emulate CSS media</li>
          </ul>
        </div>
      </div>
    </div>
  );
};