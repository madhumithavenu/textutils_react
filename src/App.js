import './App.css';
import Navbar from './components/Navbar.jsx'
import TextForm from './components/TextForm.jsx';

function App() {
  return (
    <>
      <Navbar title="textUtils" about="About Text Utilities"/>
      <div className='container my-3' >
      <TextForm  heading="Enter the text to analyze"/>
      </div>
    </>
  );
}

export default App;
