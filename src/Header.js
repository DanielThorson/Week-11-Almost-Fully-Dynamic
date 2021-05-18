const NavBar = () => (
  <div>
    <div>
      <div className="bar flex left">
        <h1 className="black">HACKERNOON</h1>
      </div>
    </div>
    <div>
      <div className="nav-bar">
        <a href="https://reactjs.org" target="_blank" className="green">
          Read
        </a>
        <a href="https://reactjs.org" target="_blank">
          Top Stories
        </a>
        <a href="https://reactjs.org" target="_blank">
          Write
        </a>
        <a href="https://reactjs.org" target="_blank">
          Listen
        </a>
        <a href="https://reactjs.org" target="_blank" className="green">
          Learn
        </a>
        <a href="https://reactjs.org" target="_blank">
          Live
        </a>
        <a href="https://reactjs.org" target="_blank">
          Advertise
        </a>
        <a href="https://reactjs.org" target="_blank" className="green">
          About
        </a>
        <a href="https://reactjs.org" target="_blank" className="green">
          Tech Companies
        </a>
        <a href="https://reactjs.org" target="_blank">
          Slogging
        </a>
        <a href="https://reactjs.org" target="_blank" className="green">
          Help
        </a>
      </div>
    </div>
  </div>
);

export const Header = () => (
  <div>
    <NavBar />
  </div>
);
