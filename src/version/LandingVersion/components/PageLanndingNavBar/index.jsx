import { Link } from 'react';

function LandingNavBar() {
  return (
    <div>
      <Link to="/landing">Home</Link>
      <Link to="/landing/about">About</Link>
      <Link to="/landing/contact">Contact</Link>
    </div>
  );
}

export default LandingNavBar;