import { useMediaQuery } from '../hooks';

export const BasicMediaQueryDemo = () => {
  const isSmall = useMediaQuery('(max-width: 640px)');
  const isMedium = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
  const isLarge = useMediaQuery('(min-width: 1025px)');

  const getCurrentSize = () => {
    if (isSmall) return 'Small';
    if (isMedium) return 'Medium';
    if (isLarge) return 'Large';
    return 'Unknown';
  };

  const currentSize = getCurrentSize();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Media Query Basique
      </h3>

      <div className="space-y-6">
        {/* Current Size Display */}
        <div className="p-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl text-center">
          <div className="text-6xl mb-4">
            {isSmall && '📱'}
            {isMedium && '💻'}
            {isLarge && '🖥️'}
          </div>
          <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {currentSize}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            {isSmall && 'Mobile (≤ 640px)'}
            {isMedium && 'Tablet (641px - 1024px)'}
            {isLarge && 'Desktop (≥ 1025px)'}
          </div>
        </div>

        {/* Breakpoints Status */}
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${
            isSmall
              ? 'bg-green-100 dark:bg-green-900/20'
              : 'bg-gray-100 dark:bg-gray-700/20'
          }`}>
            <div className="flex items-center justify-between">
              <span className={`font-semibold ${
                isSmall
                  ? 'text-green-700 dark:text-green-400'
                  : 'text-gray-700 dark:text-gray-400'
              }`}>
                📱 Small (max-width: 640px)
              </span>
              <span className={`px-4 py-2 rounded-full font-bold ${
                isSmall
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
              }`}>
                {isSmall ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${
            isMedium
              ? 'bg-green-100 dark:bg-green-900/20'
              : 'bg-gray-100 dark:bg-gray-700/20'
          }`}>
            <div className="flex items-center justify-between">
              <span className={`font-semibold ${
                isMedium
                  ? 'text-green-700 dark:text-green-400'
                  : 'text-gray-700 dark:text-gray-400'
              }`}>
                💻 Medium (641px - 1024px)
              </span>
              <span className={`px-4 py-2 rounded-full font-bold ${
                isMedium
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
              }`}>
                {isMedium ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${
            isLarge
              ? 'bg-green-100 dark:bg-green-900/20'
              : 'bg-gray-100 dark:bg-gray-700/20'
          }`}>
            <div className="flex items-center justify-between">
              <span className={`font-semibold ${
                isLarge
                  ? 'text-green-700 dark:text-green-400'
                  : 'text-gray-700 dark:text-gray-400'
              }`}>
                🖥️ Large (min-width: 1025px)
              </span>
              <span className={`px-4 py-2 rounded-full font-bold ${
                isLarge
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
              }`}>
                {isLarge ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-400">
            💡 Redimensionnez votre fenêtre pour voir les breakpoints changer en temps réel !
          </p>
        </div>
      </div>
    </div>
  );
};