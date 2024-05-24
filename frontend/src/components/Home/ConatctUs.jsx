import React from 'react';

function ContactUs() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or need further information, please feel free to contact us. We are here to help you!</p>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" className="form-control" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="4" placeholder="Your message" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h2>Our Address</h2>
                    <p> 002,Swapna Sundar Residency , Ganesh Chowk, Kalyan East, Mumbai, Maharashtra 421306</p>
                    <h3>Email</h3>
                    <p>digitech@gmail.com</p>
                    <h3>Phone</h3>
                    <p>+91-9076876590</p>
                    <h3>Location</h3>
                    <div className="map-responsive">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2330775565297!2d73.13007697466884!3d19.22867124716299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7953fef9ea5ff%3A0x4f14411b7347ab17!2sDigiTech%20Solutions!5e0!3m2!1sen!2sin!4v1716226470433!5m2!1sen!2sin" 
                            width="600" 
                            height="450" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
