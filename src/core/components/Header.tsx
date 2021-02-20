import dp from '../assets/dp.jpg';

function Header() {
  return (
    <header>
      <h1>An's Chatbot</h1>
      <span>
        <img src={dp} alt="Display Picture" />
        <label>Jay Min</label>
      </span>
    </header>
  );
}

export { Header };
