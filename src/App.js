
import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Training from'./Components/Training/Training';
import Software from'./Components/Software/Software';
import Companies from'./Components/Companies/Companies';
import Industries from './Components/Industries/Industries';
import Students from './Components/Students/Students';
import Branches from './Components/Branches/Branches';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <>
      <Header />
      <Main/>
      <Training/>
      <Software/>
      <Companies/>
      <Industries/>
      <Students/>
      <Branches/>
      <Footer/>
      </>
    </div>
  );
}

export default App;
