import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/Footer.css';

function App() {
  return (
    <Router>
      <div>
        <footer>
          <Link to="#"><i className="fab fa-facebook"></i></Link>
          <Link to="#"><i className="fab fa-instagram"></i></Link>
          <Link to="#"><i className="fab fa-twitter"></i></Link>
        </footer>
      </div>
    </Router>
  );
}

export default App;
