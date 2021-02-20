import { useEffect, useState } from 'react';
import { useHeaderContext } from '../context/header';
import { getRandomColor } from '../utils';
import './SideNav.scss';

function SideNavItem({
  item,
  isSelected,
  setSelectedItem,
}: {
  item: SideNavItem;
  isSelected: boolean;
  setSelectedItem: (id: number) => void;
}) {
  const [bgColor, setBgColor] = useState('#fff');
  useEffect(() => {
    setBgColor(getRandomColor());
  }, []);

  return (
    <article
      className={`side-nav-item-wrapper ${
        isSelected ? 'selected-wrapper' : null
      }`}
      onClick={() => setSelectedItem(item.id)}
    >
      <div
        style={{ backgroundColor: bgColor }}
        className={isSelected ? 'selected-avatar' : ''}
      >
        {item.avatarText}
      </div>
      <label className={isSelected ? 'selected-text' : ''}>
        {item.displayText}
      </label>
    </article>
  );
}

function SideNav() {
  const [selectedItem, setSelectedItem] = useState(1);
  const headerContext = useHeaderContext();
  const sideNavItems: SideNavItem[] = [
    {
      id: 1,
      avatarText: 'A',
      displayText: 'An Le Thanh',
    },
    {
      id: 2,
      avatarText: 'YT',
      displayText: 'Yu Ting',
    },
    {
      id: 3,
      avatarText: 'M',
      displayText: 'Megan Choy',
    },
  ];

  return (
    <section
      className={`side-nav-wrapper ${
        headerContext.sideNavOpen ? 'open' : 'closed'
      }`}
    >
      {sideNavItems.map((item, i) => (
        <SideNavItem
          item={item}
          isSelected={selectedItem === item.id}
          setSelectedItem={setSelectedItem}
          key={i}
        />
      ))}
    </section>
  );
}

interface SideNavItem {
  id: number;
  avatarText: string;
  displayText: string;
}

export { SideNav };
