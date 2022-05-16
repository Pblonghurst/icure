import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
const Cohort = ({ bars, title  }) => {

  return (
    <section className="cohort">
      <div className="container">
        <div className="title">
          <h2>{title}</h2>
        </div>
        { bars?.map((item, index) => (
          <div className="bar__item" key={`bar-${index}`}>
              <h3>{delve(item, "title")}</h3>
          </div>
        ))}
          {/* <div className="row">
            <div className="index">
              <span className="subTitle">Next cohort commences</span>
              <span className="date">5 April 2022</span>
            </div>
            <div className="text">
              <span>Next cohort commences</span>
              <h3>ICURe Main</h3>
            </div>
            <div className="btn">
              <button>Request More Details</button>
            </div>
          </div> */}
        </div> 
    </section>
  );
};

Cohort.defaultProps = {};

export default Cohort;
