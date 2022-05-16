import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const TabsAlt = ({ TabsAlt, title, text }) => {

  return (
    <section className="tabs-alt">
      <div className="container sb center">
        <div className="tabs-alt__title">
          <span>How It Works</span>
          <h2>Your Journey starts with ICURe</h2>
        </div>
          <div className="tabs-alt__icon">
            <img
            />
            <h3>LLP</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
          </div>
          <div className="tabs-alt__icon">
            <img
            />
            <h3>LLP</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
          </div>
          
          <div className="tabs-alt__icon">
            <img
            />
            <h3>LLP</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
          </div>

      </div> 
    </section>
  );
};

TabsAlt.defaultProps = {};

export default TabsAlt;
