export const Footer = () => {
  return (
    <>
      <footer className="section-footer">
        <div className="footer-container container">
          <div className="content_1">
            <img src="./images/logo.png" alt="logo" />
            <p>
              Welcome to BATMAN movies Site, your ultimate destination for
              entertainment!
            </p>
            <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
          </div>
          <div className="content_2">
            <h4>Try new Series</h4>
            <a href="#">Batman vs Super_MAN</a>
            <a href="#">Batman_Returns</a>
            <a href="#">Batman_Begins</a>
            <a href="#">BatMan_Forever</a>
          </div>
          <div className="content_3">
            <h4>Experience</h4>
            <a href="./contact.html">Contact Us</a>
            <a href="" target="_blank">
              Payment Method
            </a>
          </div>
          <div className="content_4">
            <h4>NEWSLETTER</h4>
            <p>
              Be the first to know about new
              <br />
              arrivals and sales !
            </p>
            <div className="f-mail">
              <input type="email" placeholder="Your Email" />
              <i className="bx bx-envelope"></i>
            </div>
            <hr />
          </div>
        </div>
        <div className="f-design">
          <div className="f-design-txt">
            <p>Desing and code by Ankur Dalal !</p>
          </div>
        </div>
      </footer>
    </>
  );
};
