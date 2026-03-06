import React, { useState } from 'react';
import './tab-list.css';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabListProps {
  /** The tabs to display */
  tabs: TabItem[];
  /** The initial active tab ID */
  initialTabId?: string;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard TabList
 * 
 * A sleek, high-precision tab component for organizing related content.
 */
export const TabList: React.FC<TabListProps> = ({
  tabs,
  initialTabId,
  className,
}) => {
  const [activeTabId, setActiveTabId] = useState(initialTabId || tabs[0]?.id);

  const baseClass = 'paul-tab-list';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <div className={classes}>
      <div className={`${baseClass}__header`} role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={[
              `${baseClass}__tab`,
              tab.id === activeTabId && `${baseClass}__tab--active`,
              tab.disabled && `${baseClass}__tab--disabled`
            ].filter(Boolean).join(' ')}
            onClick={() => !tab.disabled && setActiveTabId(tab.id)}
            role="tab"
            aria-selected={tab.id === activeTabId}
            disabled={tab.disabled}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={`${baseClass}__panel`} role="tabpanel">
        {activeTab?.content}
      </div>
    </div>
  );
};

export default TabList;
