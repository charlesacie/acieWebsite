import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Carousel from './components/Carousel';
import YouTubeContainer from './components/YouTubeContainer';
import SignUpForm from './components/SignUpForm';
import Music from './components/Music';
import Videos from './components/Videos';
import Shop from './components/Shop';
import SocialMediaFeeds from './components/SocialMediaFeeds';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios.get('/api/data') 
      .then(response => setData(response.data))
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to load data.');
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <SocialMediaFeeds /> 
              <YouTubeContainer />
              <AboutMe />
              <SignUpForm />
            </>
          } />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
        {error && <p>{error}</p>}
      </div>
    </Router>
  );
}

export default App;