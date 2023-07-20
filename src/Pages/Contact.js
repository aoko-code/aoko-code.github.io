import React, { useState } from "react";


const Contact = () => {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.833173952": "",
    "entry.652189072": "",
    "entry.1619897803": ""
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    
    let url = `https://docs.google.com/forms/d/e/1FAIpQLSfZMdKakDUWraI5JsNGzVkiEY5me-3U-jTMGhTe8JbZHiXl8g/formResponse?entry.833173952=${formData["entry.833173952"]}&entry.652189072=${formData["entry.652189072"]}&entry.1619897803=${formData["entry.1619897803"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
  }
  return (
    <section className="contact p-5" id="contact">
        <h1>Contact Form</h1><hr/>
    <div className="contactFormWrapper ">
        <h3>Any comments, Suggestions or Questions are highly appreciated</h3>
      <div className="formcontact">
        {submit ? (
          <div className="afterForm">Thanks, will get back to you soon</div>
        ) : (
          <form onSubmit={handleSubmit} target="_self" className="">
            <fieldset>
              <label htmlFor="entry.833173952">Name:</label>
              <input
                required
                type="text"
                name="entry.833173952"
                onChange={handleInputData("entry.833173952")}
                value={formData["entry.833173952"]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="entry.652189072">E-mail:</label>
              <input
                required
                type="email"
                name="entry.652189072"
                onChange={handleInputData("entry.652189072")}
                value={formData["entry.652189072"]}
                autoComplete={false}
              />
            </fieldset>

            <fieldset>
              <label htmlFor="entry.1619897803">Message:</label>
              <textarea
                required
                name="entry.1619897803"
                rows="4"
                cols="10"
                onChange={handleInputData("entry.1619897803")}
                value={formData["entry.1619897803"]}
                autoComplete={false}
              ></textarea>
            </fieldset>

            <button type="submit" classNameName="more">Send</button>
          </form>
        )}
      </div>
    </div>
    
    </section>
  );
};




export default Contact