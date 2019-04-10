import React from "react";
import PropTypes from "prop-types"
import MailchimpSubscribe from "../components/MailchimpSubscribe";

// a basic form
const CustomSignupForm = ({ status, message, onValidated, offer }) => {
  let email, fname, lname, promo;
  const submit = () =>
    email &&
    fname &&
    lname &&
    promo &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: fname.value,
      LNAME: lname.value,
      PROMO: promo.value
    });

  return (
    <div
      style={{
        background: "#efefef",
        borderRadius: 2,
        padding: 10,
        display: "inline-block"
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (fname = node)}
        type="text"
        placeholder="First Name"
      />
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (lname = node)}
        type="text"
        placeholder="Last Name"
      />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (promo = node)}
        type="hidden"
        value={offer}
      />
      <br />
      <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
        Submit
      </button>
    </div>
  );
};


  const TestForm = ({ url }) => (
      <div>
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomSignupForm
              status={status}
              message={message}
              offer='ThisVeryAwesomePromo'
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
  )
  
  TestForm.propTypes = {
    url: PropTypes.string,
  }
  
  TestForm.defaultProps = {
    url: `https://gelcreative.us20.list-manage.com/subscribe/post?u=82a58f8438d2a92919b416121&amp;id=0826323f30`,
  }

export default TestForm