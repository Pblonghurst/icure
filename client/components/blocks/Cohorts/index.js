

const Cohort = ({ title, subTitle, date, places, btnText }) => {

  return (
    <section className="cohort">
      <div className="container">
        <div className="title">
          <h2>{title}</h2>
        </div>
        <div className="row">
            {/* index */}
            <div className="index">
              <span className="subTitle">{subTitle}Next cohort commences</span>
              <span className="date">{date}5 April 2022</span>
            </div>
            {/* text */}
            <div className="text">
              <span>Next cohort commences</span>
              <h3>ICURe Main</h3>
            </div>
            {/* btn */}
            <div className="btn">
              <button>{btnText}Request More Details</button>
            </div>
          </div>
        </div> 
    </section>
  );
};

Cohort.defaultProps = {};

export default Cohort;
