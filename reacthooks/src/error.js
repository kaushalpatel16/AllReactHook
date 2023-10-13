import { Link } from 'react-router-dom';
import './error.css';

const Error = () => {
  

  return (
    <div className="error-container">
      <h1 className="error-title">404 Error</h1>
      <h3 className="error-message">Page Not Found</h3>
      <Link to="/">Go back</Link>
     
    </div>
  );
};

export default Error;
