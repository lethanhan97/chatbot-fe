import { getRandomColor } from '../utils';
import './SideNav.scss';

function SideNav() {
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

  const SideNavItem = ({ item }: { item: SideNavItem }) => {
    const bgColor = getRandomColor();

    return (
      <article className="side-nav-item-wrapper">
        <div style={{ backgroundColor: bgColor }}>{item.avatarText}</div>
        <label>{item.displayText}</label>
      </article>
    );
  };

  return (
    <section className="side-nav-wrapper">
      {sideNavItems.map((item, i) => (
        <SideNavItem item={item} key={i} />
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
