import React from 'react'
import "./About.css"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';




function About() {
  return (
    <div>
      <h2> Welcome to Keja Yangu Properties </h2>
    <div className='aboutus-content'>
      <p>
        Keja Yangu Properties is a real Estate and Property firm that offers a
        unique and unprecedented value proposition covering all the core skills
        and requirements fundamental to the success of a real estate venture. It
        is also among the firms incubated in Nairobi Securities Exchange Ibuka
        programme. Keja Yangufirst appeared in the KPMG Top 100 rankings in 2018
        and then 2019 became the top Real Estate firm in the list. Keja Yangu
        appreciates the industry players for acknowledging our objectives and
        efforts to growing and becoming influencers within the Real Estate
        Industry. Keja Yanguis Kenya’s home for property listing whether for
        sale or for rent. Find new house and land packages, new apartments or
        new land estates in our new homes section where you can also view the
        latest new home designs. Our aim is to deliver to you the best services
        and cater for the real estate boom in Kenya; specifically Mombasa. We
        help buyers, investors, owners and developers meet their needs . Keja
        Yangu properties (K) Ltd is actively involved in property development,
        to meet ever increasing need for housing in Kenya. The Kenya real estate
        boom has arisen because many investors have switched their savings from
        the low-yield treasury bills to the hugely profitable property market.
        This has been complemented by banks introducing and aggressively
        marketing various mortgage products. The comparatively low Kenya
        property prices are indicative of a strong capital growth potential and
        reasonable rental yields. The latter is attributable to the fact that
        currently, Kenya’s annual housing demand stands at 150,000 yet supply is
        only 25,000 units, resulting in a shortage of 125,000 units. With this
        great need for housing, Keja Yangu properties (k) Ltd has a prime
        objective in the development of new housing projects and partnering with
        other developers who share in this vision. We have credible experience
        in property development, marketing, sale and management not only in
        Kenya, but also internationally, with a combined experience Professional
        Services.
      </p>
</div>

      <div className="mission--vision">
        <div className="mission">
          <h1 className="mission--title">Our Mission</h1>
          <p>
            ‘’At Myspace Properties, our mission is to be your first pick for
            your housing needs and when venturing into real estate investments.
            Our aim is to walk the journey as your most preferred real estate
            partner’’
          </p>
        </div>
        <div className="vision">
          <h1 className='vision--title'>Our Vision</h1>
          <p>
            The vision of MySpace Properties, is to be the leading team in
            housing the world
          </p>
        </div>
      </div>


      <div className="contact-details">
        <div className="phone">
          
          <h3><PhoneIcon /> <br></br>Phone: +25478383838</h3>
        </div>

        <div className="email">
          
          <h3><EmailIcon /> <br/>Email: kejayangu@gmail.com</h3>
        </div>
        
      </div>
   
      
   
    </div>
  );
}

export default About









