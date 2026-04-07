import { useMediaQuery } from '../hooks';

export const BreakpointsDemo = () => {
  // Tailwind breakpoints
  const isSm = useMediaQuery('(min-width: 640px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const isLg = useMediaQuery('(min-width: 1024px)');
  const isXl = useMediaQuery('(min-width: 1280px)');
  const is2Xl = useMediaQuery('(min-width: 1536px)');

  const breakpoints = [
    { name: 'xs', active: !isSm, min: '0px', max: '639px', icon: '📱' },
    { name: 'sm', active: isSm && !isMd, min: '640px', max: '767px', icon: '📱' },
    { name: 'md', active: isMd && !isLg, min: '768px', max: '1023px', icon: '💻' },
    { name: 'lg', active: isLg && !isXl, min: '1024px', max: '1279px', icon: '🖥️' },
    { name: 'xl', active: isXl && !is2Xl, min: '1280px', max: '1535px', icon: '🖥️' },
    { name: '2xl', active: is2Xl, min: '1536px', max: '∞', icon: '🖥️' },
  ];

  const currentBreakpoint = breakpoints.find((bp) => bp.active);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Tailwind Breakpoints
      </h3>

      <div className="space-y-6">
        {/* Current Breakpoint */}
        <div className="p-8 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl text-center">
          <div className="text-5xl mb-4">{currentBreakpoint?.icon}</div>
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
            {currentBreakpoint?.name.toUpperCase()}
          </div>
          <div className="text-gray-600 dark:text-gray-400">
            {currentBreakpoint?.min} - {currentBreakpoint?.max}
          </div>
        </div>

        {/* All Breakpoints */}
        <div className="space-y-2">
          {breakpoints.map((bp) => (
            <div
              key={bp.name}
              className={`p-4 rounded-lg transition-all ${
                bp.active
                  ? 'bg-purple-100 dark:bg-purple-900/20 scale-105'
                  : 'bg-gray-50 dark:bg-gray-700/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{bp.icon}</span>
                  <div>
                    <div className={`font-bold ${
                      bp.active
                        ? 'text-purple-700 dark:text-purple-400'
                        : 'text-gray-700 dark:text-gray-400'
                    }`}>
                      {bp.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-500">
                      {bp.min} - {bp.max}
                    </div>
                  </div>
                </div>
                {bp.active && (
                  <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-bold">
                    Active
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
          <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2">
            Correspondance Tailwind :
          </h4>
          <div className="text-sm text-purple-700 dark:text-purple-400 space-y-1">
            <div>• sm: min-width: 640px</div>
            <div>• md: min-width: 768px</div>
            <div>• lg: min-width: 1024px</div>
            <div>• xl: min-width: 1280px</div>
            <div>• 2xl: min-width: 1536px</div>
          </div>
        </div>
      </div>
    </div>
  );
};