import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from './pages/PageNotFound/PageNotFound'
import EventList from './pages/EventList/EventList'
import Bookmarked from './pages/Bookmarked/Bookmarked';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/Bookmarked" element={<Bookmarked />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
