import './SideNav.scss';

function SideNav() {
  const sideNavItems: SideNavItem[] = [
    {
      avatarText: 'A',
      displayText: 'An Le Thanh',
    },
    {
      avatarText: 'YT',
      displayText: 'Yu Ting',
    },
    {
      avatarText: 'M',
      displayText: 'Megan Choy',
    },
  ];

  const SideNavItem = ({ item }: { item: SideNavItem }) => {
    return (
      <article>
        <div>{item.avatarText}</div>
        <label>{item.displayText}</label>
      </article>
    );
  };

  return (
    <section className="side-nav-wrapper">
      {sideNavItems.map((item) => (
        <SideNavItem item={item} />
      ))}
    </section>
  );
}

interface SideNavItem {
  avatarText: string;
  displayText: string;
}

export { SideNav };
