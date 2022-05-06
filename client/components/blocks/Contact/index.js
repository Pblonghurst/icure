
const Contact = ({ text }) => {

  return (
    <section className="contact">
        <div className="container sb">
            <div className="contact__left">
                <h2>Get In Contact</h2>
                <p>Book your place/find out more information about the lean launch/ICURe Main/post programme support</p>
                <div>
                    <label>Name</label>
                    <input></input>

                    <label>Email</label>
                    <input></input>

                    <label>Enquiry Type</label>
                    <input></input>

                    <label>Message</label>
                    <textarea></textarea>

                    <input className="submit" type="submit"></input>
                </div>
            </div>
            {/* right */}
            <div className="contact__right">
                <div className="square"></div>
            </div>
        </div>
    </section>
  );
};

Contact.defaultProps = {};

export default Contact;
