import './App.scss';
import { Header, SideNav } from './core/components';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <section className="app-body">
        <SideNav />
      </section>
    </div>
  );
}

export default App;
