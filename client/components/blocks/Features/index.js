import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Features = ({ cards, title, image }) => {
  return (
    <div className="features">
      <div className="container sb">
        <h2>{title}</h2>
        <div className="features__item">
          <img
              src={getStrapiMedia(delve(image, "data.attributes.url"))}
              alt={delve(image, "data.attributes.alternativeText")}
              className="relative mx-auto shadow-lg rounded-lg w-auto"
            />
          <h3>Net Zero</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
        </div>

        <div className="features__item">
          <img
              src={getStrapiMedia(delve(image, "data.attributes.url"))}
              alt={delve(image, "data.attributes.alternativeText")}
              className="relative mx-auto shadow-lg rounded-lg w-auto"
            />
          <h3>Net Zero</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
        </div>

        <div className="features__item">
          <img
              src={getStrapiMedia(delve(image, "data.attributes.url"))}
              alt={delve(image, "data.attributes.alternativeText")}
              className="relative mx-auto shadow-lg rounded-lg w-auto"
            />
          <h3>Net Zero</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
        </div>

        <div className="features__item">
          <img
              src={getStrapiMedia(delve(image, "data.attributes.url"))}
              alt={delve(image, "data.attributes.alternativeText")}
              className="relative mx-auto shadow-lg rounded-lg w-auto"
            />
          <h3>Net Zero</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>
        </div>
      </div>
    </div>
  );
};

Features.defaultProps = {};

export default Features;
