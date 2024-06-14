
import { Link } from 'react-router-dom';
import './Error.css';

const Error = ({ statusCode = 404, message = "Page Not Found" }) => {
  return (
    <div className="error-page">
      <h1>{statusCode}</h1>
      <h2>{message}</h2>
      <p>Sorry, the page you are looking for does not exist. It might have been moved or deleted.</p>
      <Link to="/" className="home-link">Go Back to Home</Link>
    </div>
  );
};

export default Error;
