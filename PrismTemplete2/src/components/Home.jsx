import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    
      <div >
        <h1 className="home-title">Leave Summary</h1>
        

        <div className="home-actions">
          <button className="home-button primary" onClick={() => navigate('/1')}>
            Main Template
          </button>
          <button className="home-button primary" onClick={() => navigate('/2')}>
            Go to /2
          </button>
          <button className="home-button primary" onClick={() => navigate('/3')}>
            Go to /3
          </button>
          <button className="home-button primary" onClick={() => navigate('/4')}>
            Go to /4
          </button>
          <button className="home-button primary" onClick={() => navigate('/5')}>
            Go to /5
          </button>
          <button className="home-button primary" onClick={() => navigate('/6')}>
            Go to /6
          </button>
          <button className="home-button primary" onClick={() => navigate('/7')}>
            Go to /7
          </button>
          <button className="home-button primary" onClick={() => navigate('/8')}>
            Go to /8
          </button>
          <button className="home-button primary" onClick={() => navigate('/9')}>
            Go to /9
          </button>
          <button className="home-button primary" onClick={() => navigate('/10')}>
            Go to /10
          </button>
          <button className="home-button primary" onClick={() => navigate('/11')}>
            Go to /11
          </button>
          <button className="home-button primary" onClick={() => navigate('/12')}>
            Go to /12
          </button>
        </div>
      </div>
    
  );
};

export default Home;