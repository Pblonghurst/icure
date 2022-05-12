import { useState } from 'react';


const Tabs = ({title}) => {
  function getInitialState(){
    return {
      selected:''
    }
  }

  function isActive(){
    return 'btn '+((value===this.state.selected) ?'active':'default');
  }

  return (
    <section className="tabs">
      <div className="container center">
        <div className="tabs__top">
          <span>ICURe Customers</span>
          <h2>{title}</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
        </div>

        <div className="tabs__tab">
          <div>
            <span 
              className={`tabs__tab__item`}
           
              >
              tabs one
            </span>
            <span 
              className={`tabs__tab__item`}
           
              >
              tabs one
            </span>
            <span 
              className={`tabs__tab__item`}
            
              >
              tabs one
            </span>
          </div>
        </div>

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

Tabs.defaultProps = {};

export default Tabs;
