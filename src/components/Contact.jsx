import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="contact__span">Contact Us</div>
      <h1 className="section__title">
        Get in touch with us <span className="pink">Now.</span>
      </h1>
      <div className="container">
        <div className="row">
          <div className="contact">
            <div className="contact__maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d399560.00362872984!2d-83.95809745122301!3d38.52079922891452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88441949bc702c63%3A0xf162a972fb318f8b!2sLewis%20County%2C%20KY%2C%20USA!5e0!3m2!1sen!2see!4v1688655307994!5m2!1sen!2see"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="contact-form">
              <span className="heading">Contact Us</span>
              <form>
                <label htmlFor="name">Name:</label>
                <input type="text" required={true} />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required={true} />
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  required={true}
                ></textarea>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
