import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Hero = ({ images, header, text, btnText, featured, featuredText, iconOne, iconImgOne, iconTwo, iconImgTwo }) => {
  const title = delve(header, 'title');
  console.log("heloo");
   return (
    <section className="hero">
    <div className="container sb">

      {/* left */}
      <div className="left">
        <h1>{title}</h1>
        <p>{text}</p>
        <button>{btnText}</button>
        <span>{featuredText}</span>
        <img
          src={getStrapiMedia(delve(images, "data.attributes.url"))}
          className="featured"
        />

        <div className="box">
          {/* circle one */}
          <div className="boxbox">
            <div className="circle"></div>
            <img
              src={getStrapiMedia(delve(iconImgOne, "data.attributes.url"))}
            />
           <div className="text">
              <span>Projects Supported</span>
              <h3>300</h3>
            </div>
          </div>
          {/* circle two */}
          <div className="boxbox">
            <div className="circle"></div>
            <img
              src={getStrapiMedia(delve(iconImgTwo, "data.attributes.url"))}
            />
            <div className="text">
              <span>Return on Investment</span>
              <h3>100K</h3>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="right">
        <img
          src={getStrapiMedia(delve(images, "data.attributes.url"))}
        />
        <div className="square">

        </div>
      </div>

    </div> 
  </section>
   )
};

Hero.defaultProps = {};

export default Hero;
