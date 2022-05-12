import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Hero = ({ header, text, btnText, featuredText, images, imageo, image}) => {
  const title = delve(header, 'title');
  console.log("heloo");
   return (
    <section className="hero">
    <div className="container sb">

      {/* left */}
      <div className="hero__left">
        <h1>{title}</h1>
        <p>{text}</p>
        <button>{btnText}</button>
        <span>{featuredText}</span>
        <img
          src={getStrapiMedia(delve(images, "data.attributes.url"))}
          className="featured"
        />

        <div className="hero__left__box">
          <div className="hero__left__box__boxbox">
            <img
              src={getStrapiMedia(delve(imageo, "data.attributes.url"))}
            />
            <div className="hero__left__box__boxbox__text">
              <span>Projects Supported</span>
              <h3>300</h3>
            </div>
          </div>
          <div className="hero__left__box__boxbox">
            <img />
  
            <div className="hero__left__box__boxbox__text">
              <span>Return on Investment</span>
              <h3>100K</h3>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="hero__right">
        <img
          src={getStrapiMedia(delve(image, "data.attributes.url"))}
        />
      </div>

    </div> 
  </section>
   )
};

Hero.defaultProps = {};

export default Hero;
