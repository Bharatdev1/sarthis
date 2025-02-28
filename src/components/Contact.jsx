import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLocation } from "react-router-dom";

const Contact = () => {
  const query = new URLSearchParams(useLocation().search);
  const name = query.get("name");
  const description = query.get("description");

  console.log(name);
  
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Contact Us</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title mb-4">Get in Touch</h3>
              <div className="d-flex align-items-center mb-3">
                <MapPin className="me-2" />
                <p className="mb-0">
                  CC Parque Santiago, 3, Local Nº 172, 38660 Playa de la Américas, Santa Cruz de Tenerife, Spain
                </p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Phone className="me-2" />
                <p className="mb-0">+34 613668562</p>
              </div>
              <div className="d-flex align-items-center">
                <Mail className="me-2" />
                <p className="mb-0">sdselectronics@hotmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title mb-4">Send us a Message</h3>
              {/* FormSubmit API for sending emails */}
              <form action="https://formsubmit.co/contactsarthi@proton.me" method="POST">
                {/* Hidden input to prevent spam */}
                <input type="hidden" name="_captcha" value="false" />

                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" name="name" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="tel" className="form-control" name="phone" required placeholder='+34 656656656' />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" name="message" rows={5} required defaultValue={name || description ? `model ${name || ""} ${description || ""}` : ""}>
                  </textarea>
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
