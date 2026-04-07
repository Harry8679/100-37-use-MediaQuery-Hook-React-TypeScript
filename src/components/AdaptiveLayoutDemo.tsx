import { useMediaQuery } from '../hooks';
import type { LayoutCard } from '../types';

export const AdaptiveLayoutDemo = () => {
  const isSmall = useMediaQuery('(max-width: 640px)');
  const isMedium = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');
  const isLarge = useMediaQuery('(min-width: 1025px)');

  const cards: LayoutCard[] = [
    { id: '1', title: 'Card 1', description: 'Description de la carte 1', image: '🎨' },
    { id: '2', title: 'Card 2', description: 'Description de la carte 2', image: '🎭' },
    { id: '3', title: 'Card 3', description: 'Description de la carte 3', image: '🎪' },
    { id: '4', title: 'Card 4', description: 'Description de la carte 4', image: '🎬' },
    { id: '5', title: 'Card 5', description: 'Description de la carte 5', image: '🎮' },
    { id: '6', title: 'Card 6', description: 'Description de la carte 6', image: '🎯' },
  ];

  const getGridClass = () => {
    if (isSmall) return 'grid-cols-1';
    if (isMedium) return 'grid-cols-2';
    if (isLarge) return 'grid-cols-3';
    return 'grid-cols-1';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Layout Adaptatif
      </h3>

      <div className="space-y-6">
        {/* Layout Info */}
        <div className="p-4 bg-linear-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">
                {isSmall && '📱'}
                {isMedium && '💻'}
                {isLarge && '🖥️'}
              </span>
              <div>
                <div className="font-bold text-gray-800 dark:text-white">
                  {isSmall && '1 colonne (Mobile)'}
                  {isMedium && '2 colonnes (Tablet)'}
                  {isLarge && '3 colonnes (Desktop)'}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Layout actuel
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Adaptive Grid */}
        <div className={`grid ${getGridClass()} gap-4`}>
          {cards.map((card) => (
            <div
              key={card.id}
              className="p-6 bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-3 text-center">{card.image}</div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-2 text-center">
                {card.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 bg-pink-100 dark:bg-pink-900/20 rounded-lg">
          <p className="text-sm text-pink-700 dark:text-pink-400">
            💡 Le nombre de colonnes s'adapte automatiquement à la taille de l'écran !
          </p>
        </div>
      </div>
    </div>
  );
};