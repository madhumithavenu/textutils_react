import './App.css';
import Navbar from './components/Navbar.jsx'
import TextForm from './components/TextForm.jsx';

function App() {
  return (
    <>
      <Navbar title="textUtils" about="About Text Utilities"/>
      <div className='container'>
      <TextForm />
      </div>
    </>
  );
}

export default App;
