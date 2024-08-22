import { useEffect, useState } from 'react';
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isloading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // remove selected tour
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  // end of remove selected tour

  // fetch data with function
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const fetchedTours = await response.json();
      setTours(fetchedTours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  // end of fetch data with function

  /// useEffect
  useEffect(() => {
    // call function
    fetchTours();
  }, []);
  /// end of useEffect

  if (isloading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  // refetch data
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button
            type="button"
            style={{ marginTop: '2rem' }}
            className="btn"
            onClick={() => fetchTours()}
          >
            refresh
          </button>
        </div>
      </main>
    );
  }
  // JSX RETURN
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
