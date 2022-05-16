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
        {/* tab buttons */}
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

        {/* tab content */}
          <div className="tabs__content">
            <div className="tabs__content__left">
                <h2>Is ICURe right for you?</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
            </div>     
            <div className="tabs__content__right">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg"
                />
            </div>
          </div>
          
      </div> 
    </section>
  );
};

TabsAlt.defaultProps = {};

export default TabsAlt;
