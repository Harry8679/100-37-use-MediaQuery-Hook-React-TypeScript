import { useMediaQuery } from '../hooks';

export const DeviceDetectionDemo = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const isTouch = useMediaQuery('(hover: none) and (pointer: coarse)');
  const isRetina = useMediaQuery('(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)');

  const deviceType = isMobile ? 'Mobile' : isTablet ? 'Tablet' : isDesktop ? 'Desktop' : 'Unknown';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Détection d'Appareil
      </h3>

      <div className="space-y-6">
        {/* Device Type Display */}
        <div className="p-8 bg-linear-to-br from-green-100 to-blue-100 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl text-center">
          <div className="text-6xl mb-4">
            {isMobile && '📱'}
            {isTablet && '📱💻'}
            {isDesktop && '🖥️'}
          </div>
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
            {deviceType}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Type d'appareil détecté
          </div>
        </div>

        {/* Device Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${
            isMobile
              ? 'bg-green-100 dark:bg-green-900/20'
              : 'bg-gray-100 dark:bg-gray-700/20'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">📱</span>
              <span className={`font-bold ${
                isMobile
                  ? 'text-green-700 dark:text-green-400'
                  : 'text-gray-700 dark:text-gray-400'
              }`}>
                Mobile
              </span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-500">
              max-width: 768px
            </div>
          </div>

          <div className={`p-4 rounded-lg ${
            isTablet
              ? 'bg-green-100 dark:bg-green-900/20'
              : 'bg-gray-100 dark:bg-gray-700/20'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">💻</span>
              <span className={`font-bold ${
                isTablet
                  ? 'text-green-700 dark:text-green-400'
                  : 'text-gray-700 dark:text-gray-400'
              }`}>
                Tablet
              </span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-500">
              769px - 1024px
            </div>
          </div>

          <div className={`p-4 rounded-lg ${
            isDesktop
              ? 'bg-green-100 dark:bg-green-900/20'
              : 'bg-gray-100 dark:bg-gray-700/20'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🖥️</span>
              <span className={`font-bold ${
                isDesktop
                  ? 'text-green-700 dark:text-green-400'
                  : 'text-gray-700 dark:text-gray-400'
              }`}>
                Desktop
              </span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-500">
              min-width: 1025px
            </div>
          </div>

          <div className={`p-4 rounded-lg ${
            isTouch
              ? 'bg-blue-100 dark:bg-blue-900/20'
              : 'bg-gray-100 dark:bg-gray-700/20'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">👆</span>
              <span className={`font-bold ${
                isTouch
                  ? 'text-blue-700 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-400'
              }`}>
                Touch Screen
              </span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-500">
              {isTouch ? 'Détecté' : 'Non détecté'}
            </div>
          </div>

          <div className={`p-4 rounded-lg md:col-span-2 ${
            isRetina
              ? 'bg-purple-100 dark:bg-purple-900/20'
              : 'bg-gray-100 dark:bg-gray-700/20'
          }`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">✨</span>
              <span className={`font-bold ${
                isRetina
                  ? 'text-purple-700 dark:text-purple-400'
                  : 'text-gray-700 dark:text-gray-400'
              }`}>
                Retina / High DPI
              </span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-500">
              {isRetina ? 'Écran haute résolution' : 'Écran standard'}
            </div>
          </div>
        </div>

        <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg">
          <p className="text-sm text-green-700 dark:text-green-400">
            💡 Ces détections permettent d'adapter l'interface en fonction de l'appareil de l'utilisateur.
          </p>
        </div>
      </div>
    </div>
  );
};