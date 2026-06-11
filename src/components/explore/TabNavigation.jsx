

const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex items-center gap-lg border-b border-border overflow-x-auto whitespace-nowrap scrollbar-hide">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`pb-lg px-2 transition-colors ${
            activeTab === tab
              ? 'text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary dark:border-primary-fixed-dim'
              : 'text-on-surface-variant hover:text-primary'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
