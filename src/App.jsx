import './App.css';
import Row from './Components/Row/Row';
import requests from './API/request';
import Banner from './Components/Banner/Banner';
import Nav from './Components/Navbar/Nav';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Banner/>
     <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow={true}/>
     <Row title="Trending Now" fetchURL={requests.fetchTrending} />
     <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
     <Row title="Action Movies" fetchURL={requests.fetchActionMovie} />
     <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovie} />
     <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovie} />
     <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovie} />
     <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;