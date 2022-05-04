import styles from  '../../../styles/components/points.module.scss'

const Points = ({ text }) => {

  return (
    <section className={styles.points}>
      <div className={styles.container}>
        <div>
            <span>Caption</span>
            <h2>Heading 2</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </div>

        {/* col */}
        <div>
            
        </div>

      </div> 
    </section>
  );
};

Points.defaultProps = {};

export default Points;
