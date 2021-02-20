import dp from '../assets/dp.jpg';
import './Header.scss';
import { IoMenuOutline as MenuIcon } from 'react-icons/io5';
import { useHeaderContext } from '../context/header';

function Header() {
  const headerContext = useHeaderContext();
  const toggleHeaderContext = () => {
    headerContext.setSideNavOpen(!headerContext.sideNavOpen);
  };

  return (
    <header className="app-header">
      <div className="app-title">
        <MenuIcon size="2rem" onClick={toggleHeaderContext} />
        <h1>
          <span className="app-logo">An</span>'s Chatbot
        </h1>
      </div>

      <div className="app-avatar">
        <img src={dp} alt="Display Picture" />
        <label>Jay Min</label>
      </div>
    </header>
  );
}

export { Header };
