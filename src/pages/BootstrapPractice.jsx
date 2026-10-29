function BootstrapPractice() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          <a className="navbar-brand" href="#">
            My Portfolio
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#myNavbar"
            aria-controls="myNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Products
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

            </ul>
          </div>

        </div>
      </nav>

      <div className="container mt-5">
  <h1 className="mb-4">My Projects</h1>

  <div className="row">
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Portfolio Website</h5>
          <p className="card-text">My personal portfolio project.</p>
          <button className="btn btn-primary">View Project</button>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Restaurant Menu</h5>
          <p className="card-text">A menu with search and category filters.</p>
          <button className="btn btn-primary">View Project</button>
        </div>
      </div>
    </div>

    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Notes App</h5>
          <p className="card-text">An app for saving notes locally.</p>
          <button className="btn btn-primary">View Project</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="mt-5">
  <h2 className="mb-4">Contact Me</h2>

  <form>
    <div className="mb-3">
      <label className="form-label">Your Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter your name"
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Email Address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter your email"
      />
    </div>

    <div className="mb-3">
      <label className="form-label">Message</label>
      <textarea
        className="form-control"
        rows="4"
        placeholder="Write your message"
      ></textarea>
    </div>

    <div className="mb-3">
  <label className="form-label">What are you interested in?</label>

  <select className="form-select">
    <option>Select an option</option>
    <option>Web Development</option>
    <option>UI Design</option>
    <option>Content Creation</option>
  </select>
</div>

<div className="form-check mb-3">
  <input
    className="form-check-input"
    type="checkbox"
    id="newsletter"
  />
  <label className="form-check-label" htmlFor="newsletter">
    Subscribe to updates
  </label>
</div>

    <button type="submit" className="btn btn-primary">
      Send Message
    </button>
  </form>
</div>

    </div>
  );
}

export default BootstrapPractice;