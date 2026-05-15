import React from "react";
import { Link } from "react-router-dom";
import { Home, FolderKanban } from "lucide-react";

const NotFound = () => {
  return (
    <section className="notfound-section">
      <div className="notfound-bg"></div>

      <div className="notfound-container">
        <h1 className="error-code">404</h1>

        <div className="glass-card">
          <h2>Page Not Found</h2>

          <p>
            The page you're looking for doesn't exist or has been moved.
            Let’s get you back on track.
          </p>

          <div className="button-group">
            <Link to="/" className="home-btn">
              <Home size={20} />
              Back to Home
            </Link>

            <a href="/#projects" className="project-btn">
              <FolderKanban size={20} />
              View Projects
            </a>
          </div>
          
        </div>
        <div className="foot">
            <p>
                TechySaumya &copy; {new Date().getFullYear()}. / 404 Not Found.
            </p>
        </div>
      </div>
    </section>
  );
};

export default NotFound;

