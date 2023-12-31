import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <div className='container'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
