import './About.css';
export const About=()=>{
    return(
        <>
             <section className="about-section">
      <div className="container">
        <h1 className="about-title">About Batman Movies</h1>
        <p className="about-subtitle">The Legacy of The Dark Knight</p>
        <p className="about-text">
          Batman movies have evolved over the decades, bringing to life the 
          thrilling tales of Gotham City’s protector. From the dark and 
          mysterious world of Tim Burton’s Batman to Christopher Nolan’s 
          groundbreaking Dark Knight Trilogy, and the modern iterations of 
          the Caped Crusader, each movie has left an unforgettable mark on 
          fans worldwide.
        </p>
        <p className="about-text">
          Whether it’s battling Joker, Riddler, or Bane, Batman remains the 
          ultimate symbol of justice and vengeance. Explore the legendary 
          films, behind-the-scenes secrets, and iconic moments that have 
          shaped the Batman legacy.
        </p>
        <div className="about-btn-container">
          <a href="/movie" className="about-btn">Explore Movies</a>
        </div>
      </div>
    </section>
        </>
    )
}