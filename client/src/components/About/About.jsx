import React from 'react'
import "./About.css"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';




function About() {
  return (
    <div>
      <h2 className='about'> Welcome to Keja Yangu Properties </h2>
      <div className="aboutus-content">
        <p>
          In their online group discussion, four visionary minds united to
          create Keja Yangu, a revolutionary platform that would transform the
          way people find homes.
          <br /> Inspired by the challenges of house hunting and the cumbersome
          process of connecting tenants with landlords, the founders embarked on
          a mission to simplify and streamline the entire experience. It all
          began during a casual conversation at a local nyamachoma joint, where
          the founders shared their frustrations with the traditional rental
          process.
          <br /> Motivated by a shared desire to make a positive impact, they
          hatched the idea for Keja Yangu. The name itself, Swahili for "My
          Home," reflected their commitment to creating a platform that felt
          personal and welcoming. Pooling their diverse skills in technology,
          design, and business, the founders embarked on a journey to build a
          user-friendly website. Keja Yangu quickly evolved into a sophisticated
          online space where tenants could effortlessly browse available homes
          and connect with property owners. The platform's intuitive interface
          and advanced search features set it apart, making it a go-to
          destination for those in search of their dream home.
          <br />
          Happy House Searching
        </p>
      </div>

      <div className="mission--vision">
        <div className="mission">
          <h1 className="mission--title">Our Mission</h1>
          <p>
            Keja Yangu is dedicated to simplifying the rental experience by
            connecting tenants with house owners seamlessly. Our mission is to
            create a user-friendly online platform that fosters trust,
            community, and convenience, ensuring that finding the perfect home
            becomes a delightful journey for everyone involved.
          </p>
        </div>
        <div className="vision">
          <h1 className="vision--title">Our Vision</h1>
          <p>
            Our vision at Keja Yangu is to be the premier online destination for
            hassle-free home connections. We aspire to redefine the rental
            landscape, making finding and securing the ideal home effortless.
          </p>
        </div>
      </div>

      <div className="contact-details">
        <div className="phone">
          <h3>
            <PhoneIcon /> <br></br>Phone: +25478383838
          </h3>
        </div>

        <div className="email">
          <h3>
            <EmailIcon /> <br />
            Email: kejayangu@gmail.com
          </h3>
        </div>
      </div>
    </div>
  );
}

export default About