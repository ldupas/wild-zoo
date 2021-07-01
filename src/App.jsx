import './App.css';
import Navbar from './components/navbar/Navbar';
import AnimalList from './components/animal-cards-home/AnimalList';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimalList />
      <Footer />
    </div>
  );
}

export default App;
