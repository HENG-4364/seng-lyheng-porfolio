import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import style from "./contact.module.scss"

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);

    axios.post(
      `https://api.telegram.org/bot${'6005082481:AAH8UZCaEToHWgZTeCiSQkaf2RW7ZxpNLa8'}/sendMessage`,
      {
        chat_id: 898391639,
        text: `FullName: ${name} \nEmail: ${email} \nPhoneNumber: ${phone} \nMessage: ${message}`,
      }
    );
  };

  return (
    <>
      <section className={`py-5 ${style.contact}`}>
        <div className="container  px-5 my-5">
          <div className="bg-light rounded-4 py-5 px-4 px-md-5">
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                <i className="bi bi-envelope"></i>
              </div>
              <h1 className="text-gradient d-inline fw-bolder">
                Contact To Me
              </h1>
              <p className="lead fw-normal text-muted mb-0">
                Let's work together!
              </p>
            </div>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <form id="contactForm" onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Enter your name..."
                      required
                      data-sb-can-submit="no"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                    />
                    <label for="name">Full name</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="name:required"
                    >
                      A name is required.
                    </div>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                      data-sb-can-submit="no"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <label for="email">Email address</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:required"
                    >
                      An email is required.
                    </div>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:email"
                    >
                      Email is not valid.
                    </div>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      required
                      data-sb-can-submit="no"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                    />
                    <label for="phone">Phone number</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="phone:required"
                    >
                      A phone number is required.
                    </div>
                  </div>

                  <div className="form-floating mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      type="text"
                      placeholder="Enter your message here..."
                      style={{ height: '10rem' }}
                      required
                      data-sb-can-submit="no"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                    ></textarea>
                    <label for="message">Message</label>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      A message is required.
                    </div>
                  </div>

                  <div className="d-none" id="submitSuccessMessage">
                    <div className="text-center mb-3">
                      <div className="fw-bolder">
                        Form submission successful!
                      </div>
                      To activate this form, sign up at
                      <br />
                      <Link to="https://startbootstrap.com/solution/contact-forms">
                        https://startbootstrap.com/solution/contact-forms
                      </Link>
                    </div>
                  </div>

                  <div className="d-none" id="submitErrorMessage">
                    <div className="text-center text-danger mb-3">
                      Error sending message!
                    </div>
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-lg  bg-gradient-primary-to-secondary"
                      id="submitButton"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
