
import './App.css';
import Rating from './components/Rating';
import Reviews from './components/Reviews';
import Sentiments from './components/Sentiments';
import Visitors from './components/Visitors';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App">
      <div className='main'>
        <Sidebar/>
        <div className='containerone'>
          <div className='containertwo'>
            <Reviews/>
            <Rating/>
            <Sentiments/>
          </div>
        <Visitors/>
        </div>
        </div>
    </div>
  );
}

export default App;
