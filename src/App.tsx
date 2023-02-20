import './App.css';
import Loading from './component/Loading';
import Routed from './routes';

function App() {
  return (
    <>
      <div className='bg-grey-light'>
        <Routed />
      </div>
      <Loading />
    </>
  );
}

export default App;
