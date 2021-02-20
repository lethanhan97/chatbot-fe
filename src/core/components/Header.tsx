import dp from '../assets/dp.jpg';
import './Header.scss';

function Header() {
  return (
    <header className="app-header">
      <h1>
        <span className="app-logo">An</span>'s Chatbot
      </h1>
      <div className="app-avatar">
        <img src={dp} alt="Display Picture" />
        <label>Jay Min</label>
      </div>
    </header>
  );
}

export { Header };
