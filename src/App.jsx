import "./App.css";
import { useState } from "react";

const games = [
  {
    title: "GTA V",
    image: "src/assets/Gta v.jpg",
    alt: "GTA V cover art",
    link: "https://www.rockstargames.com/V/",
    reverse: false,
    description:
      "GTA V is one of the most famous action-adventure games created by Rockstar Games. The game takes place in the large and detailed city of Los Santos. Players can explore the city, mountains, beaches, and many hidden places freely. The story follows three main characters named Michael, Franklin, and Trevor. Each character has different skills, missions, and exciting storylines. Players can drive sports cars, bikes, airplanes, and even helicopters. The game includes action missions, robberies, racing, and shooting challenges. GTA V is known for its realistic graphics and smooth gameplay experience. Players can also customize vehicles, clothes, and weapons in the game. The online mode allows players to play with friends and other gamers worldwide. Many players enjoy GTA V because of its open-world freedom and endless activities. The game regularly receives updates, new missions, and online events.",
  },
  {
    title: "Forza Horizon 6",
    image: "src/assets/Forza Horizon.jpg",
    alt: "Forza Horizon 6 cover art",
    link: "https://forza.net/forzahorizon6",
    reverse: true,
    description:
      "Forza Horizon 6 is an open-world racing game developed by Playground Games. It drops players into a huge, ever-changing festival map packed with hundreds of licensed cars. Players can race across roads, dirt trails, and open fields, or free-roam and discover hidden challenges. The game blends arcade-style handling with a strong focus on customization, letting players tune performance and paint jobs to match their style. Dynamic weather and seasons change how every route drives from one week to the next. Online play lets friends team up for convoys, races, and shared festival events. Frequent content drops keep new cars, events, and challenges coming long after launch. Forza Horizon 6 is loved for its sense of freedom, its visuals, and its laid-back but competitive spirit.",
  },
];

const gallery = [
  { src: "src/assets/COD.jpg" },
  { src: "src/assets/Cyberpunk.jpg" },
  { src: "src/assets/God Of War.jpg" },
  { src: "src/assets/Last Of Us.jpg" },
  { src: "src/assets/Minecraft.jpg" },
  { src: "src/assets/RDR.jpg" },
  { src: "src/assets/Resident evil.jpg" },
  { src: "src/assets/Spiderman.jpg" },
];

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

function PritxGaming() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="div1">
      <div className="navbar">
        <div className="logo_container">
          <h1 className="logo_text">Pritx Gaming</h1>
        </div>
        <div className="nav_links_container">
          <ul className="nav_links_list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={"#" + link.id}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id="home" className="underline">
        <div className="background_image">
          <div className="backgraound_image_container">
            <h1 className="heading_container">Welcome to Pritx Gaming</h1>
            <h5 className="subheading_container">
              Where Gamers Become Legends
            </h5>
            <p className="overview_container">
              Welcome to PritX Gaming — the battlefield for true gamers. Dive
              into intense esports action, futuristic gaming content, pro-level
              tips, streams, tournaments, and the latest gaming trends. Join the
              community, sharpen your skills, and dominate every game.
            </p>
          </div>
        </div>
      </div>

      {games.map((game) => (
        <div className="underline" key={game.title}>
          <h1 className="game_title">{game.title}</h1>
          <div className="main_container">
            {!game.reverse && (
              <div className="game_detail_main_container">
                <p className="game_detail_container">
                  {game.description}{" "}
                  <a href={game.link} target="_blank" rel="noreferrer">
                    Learn More
                  </a>
                </p>
              </div>
            )}
            <div className="game_picture_container">
              <img src={game.image} alt={game.alt} className="game_image_2" />
            </div>
            {game.reverse && (
              <div className="game_detail_main_container">
                <p className="game_detail_container">
                  {game.description}
                  <br />
                  <a href={game.link} target="_blank" rel="noreferrer">
                    Learn More
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      ))}

      <div id="about" className="underline">
        <div className="img_container">
          {gallery.map((g, i) => (
            <img key={i} src={g.src} alt={g.alt} className="game_image" />
          ))}
        </div>
      </div>

      <div id="services" className="underline">
        <h1 className="game_title">Our Services</h1>
        <p className="overview_container">
          Esports tournament hosting, pro coaching sessions, live match
          streaming, and a growing content library of guides and highlight reels
          — everything PritX Gaming offers, all in one place.
        </p>
      </div>

      <div id="contact" className="underline">
        <form className="main_form_container" onSubmit={handleSubmit}>
          <h3 className="form_title">Fill The Form Here</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="message"
            placeholder="Enter your message here"
            value={form.message}
            onChange={handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>

      <div className="main_footer">
        <div className="footer_container">
          <p>© 2024 Pritx Gaming. All rights reserved.</p>
        </div>
        <div className="social_media_container">
          <a
            href="#"
            className="social_media_link"
            style={{ color: "#c28fe4" }}
          >
            Facebook
          </a>
          <a
            href="#"
            className="social_media_link"
            style={{ color: "#c28fe4" }}
          >
            Twitter
          </a>
          <a
            href="#"
            className="social_media_link"
            style={{ color: "#c28fe4" }}
          >
            Instagram
          </a>
        </div>
        <div>
          <p className="contact_info_text">
            Email: info@pritxgaming.com
            <br />
            Toll free Number: 1800 1200 700
          </p>
        </div>
      </div>
    </div>
  );
}

export default PritxGaming;
