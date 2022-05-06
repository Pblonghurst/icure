import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Maps = ({ image }) => {

  return (
    <section className="maps">
        <img
          src={getStrapiMedia(delve(image, "data.attributes.url"))}
          alt={delve(image, "data.attributes.alternativeText")}
          className="relative mx-auto shadow-lg rounded-lg w-auto"
      />
      <div className="container">
        <div className="box">   
          {/* name */}
            <div className="boxbox">
              <div className="circle"></div>
              <div className="text">
                <span>Return on Investment</span>
                <h3>100K</h3>
              </div>
            </div>
          {/* text */}
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div> 
    </section>
  );
};

Maps.defaultProps = {};

export default Maps;            
