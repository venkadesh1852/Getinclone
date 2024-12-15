
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Training from'./Components/Training/Training';
import Software from'./Components/Software/Software';

function App() {
  return (
    <div className="App">
      <>
      <Header />
      <Main/>
      <Training/>
      <Software/>
      </>
    </div>
  );
}

export default App;
