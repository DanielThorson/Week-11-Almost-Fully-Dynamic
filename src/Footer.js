const FooterBar = () => (
  <div className="footer-container">
    <div className="flex">
      <div>
        <h1 className="green inline">
          <a href="https://reactjs.org" target="_blank" className="green left">
            <h2>ABOUT</h2>
          </a>
          <div className="">
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Careers
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Contact
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Cookies
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Help
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Privacy
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Terms
            </a>
          </div>
        </h1>
      </div>
      <div>
        <h1 className="green inline">
          <a href="https://reactjs.org" target="_blank" className="green left">
            <h2>READ</h2>
          </a>
          <div className="">
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Archive
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Leaderboard
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Signup
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Tech Brief
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Tech Tags
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Top Stories
            </a>
          </div>
        </h1>
      </div>
      <div>
        <h1 className="green inline">
          <a href="https://reactjs.org" target="_blank" className="green left">
            <h2>WRITE</h2>
          </a>
          <div className="">
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Distribution
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Editor Tips
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Guidelines
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              New Story
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Perks
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Why Write
            </a>
          </div>
        </h1>
      </div>
      <div>
        <h1 className="green inline">
          <a href="https://reactjs.org" target="_blank" className="green left">
            <h2>SPONSOR</h2>
          </a>
          <div className="">
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Brand Publishing
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Editor Tips
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Guidelines
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              New Story
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Perks
            </a>
            <a href="https://reactjs.org" target="_blank" className="flex left">
              Why Write
            </a>
          </div>
        </h1>
      </div>
      <div>
        <div className="inline">
          <h1 className="green inline">THE HACKER NOON NEWSLETTER</h1>
          <div>
            <p className="white">
              Quality Weekly Reads About Technology Infiltrating Everything
            </p>
            <form>
              <input type="text"></input>
              <button>Subscribe Free</button>
            </form>
            <form>
              <input type="checkbox"></input>Yes, I agree to receive emails
              about tech eating the world.
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const Footer = () => (
  <div>
    <FooterBar />
  </div>
);
