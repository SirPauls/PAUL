import React, { useState } from 'react';
import './tabs.css';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  /** The tabs to display */
  items: TabItem[];
  /** The initially selected tab */
  initialTab?: string;
  /** Custom class name */
  className?: string;
}

/**
 * PAUL Industrial Gold Standard Tabs
 * 
 * A component for displaying content in a tabbed interface.
 */
export const Tabs: React.FC<TabsProps> = ({
  items,
  initialTab,
  className,
}) => {
  const [activeTab, setActiveTab] = useState(initialTab || items[0]?.id);

  const baseClass = 'paul-tabs';
  const classes = [baseClass, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={`${baseClass}__list`} role="tablist">
        {items.map(item => (
          <button 
            key={item.id} 
            className={`${baseClass}__tab ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
            role="tab"
            aria-selected={activeTab === item.id}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className={`${baseClass}__panel`} role="tabpanel">
        {items.find(item => item.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
