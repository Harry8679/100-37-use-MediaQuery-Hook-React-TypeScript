import { useMediaQuery } from '../hooks';

export const OrientationDemo = () => {
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const isLandscape = useMediaQuery('(orientation: landscape)');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Détection d'Orientation
      </h3>

      <div className="space-y-6">
        {/* Orientation Display */}
        <div className={`p-12 rounded-xl text-center transition-all ${
          isPortrait
            ? 'bg-linear-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20'
            : 'bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20'
        }`}>
          <div className="text-7xl mb-4">
            {isPortrait ? '📱' : '📱'}
          </div>
          <div className={`text-4xl font-bold mb-2 ${
            isPortrait
              ? 'text-orange-600 dark:text-orange-400'
              : 'text-blue-600 dark:text-blue-400'
          }`}>
            {isPortrait ? 'Portrait' : 'Landscape'}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            Orientation actuelle
          </div>
        </div>

        {/* Orientation Status */}
        <div className="grid grid-cols-2 gap-4">
          <div className={`p-6 rounded-xl text-center transition-all ${
            isPortrait
              ? 'bg-orange-100 dark:bg-orange-900/20 scale-105'
              : 'bg-gray-100 dark:bg-gray-700/20'
          }`}>
            <div className="text-5xl mb-3">📱</div>
            <div className={`font-bold text-lg mb-1 ${
              isPortrait
                ? 'text-orange-700 dark:text-orange-400'
                : 'text-gray-700 dark:text-gray-400'
            }`}>
              Portrait
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-500">
              Hauteur {'>'} Largeur
            </div>
            {isPortrait && (
              <div className="mt-3 px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-bold inline-block">
                Active
              </div>
            )}
          </div>

          <div className={`p-6 rounded-xl text-center transition-all ${
            isLandscape
              ? 'bg-blue-100 dark:bg-blue-900/20 scale-105'
              : 'bg-gray-100 dark:bg-gray-700/20'
          }`}>
            <div className="text-5xl mb-3 rotate-90">📱</div>
            <div className={`font-bold text-lg mb-1 ${
              isLandscape
                ? 'text-blue-700 dark:text-blue-400'
                : 'text-gray-700 dark:text-gray-400'
            }`}>
              Landscape
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-500">
              Largeur {'>'} Hauteur
            </div>
            {isLandscape && (
              <div className="mt-3 px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-bold inline-block">
                Active
              </div>
            )}
          </div>
        </div>

        {/* Visual Example */}
        <div className="p-6 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
          <h4 className="font-bold text-gray-800 dark:text-white mb-4">
            Exemple d'utilisation :
          </h4>
          <div className={`aspect-video bg-linear-to-br rounded-lg flex items-center justify-center transition-all ${
            isPortrait
              ? 'from-orange-400 to-red-500'
              : 'from-blue-400 to-purple-500'
          }`}>
            <div className="text-white text-center">
              <div className="text-4xl mb-2">
                {isPortrait ? '📖' : '🎬'}
              </div>
              <div className="font-bold">
                {isPortrait ? 'Mode Lecture' : 'Mode Vidéo'}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
          <p className="text-sm text-orange-700 dark:text-orange-400">
            💡 Sur mobile, tournez votre appareil pour voir le changement d'orientation !
          </p>
        </div>
      </div>
    </div>
  );
};