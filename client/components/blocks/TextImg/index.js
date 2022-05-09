import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const TextImg = ({ caption, title, text, image }) => {

  return (
    <section className="textImg">
      <div className="container sb">
        <div className="textImg__left"> 
          <span>{caption}</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="textImg__right">
          <img
              src={getStrapiMedia(delve(image, "data.attributes.url"))}
              alt={delve(image, "data.attributes.alternativeText")}
              className=""
            />
        </div>
      </div> 
    </section>
  );
};

TextImg.defaultProps = {};

export default TextImg;
