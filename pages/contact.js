import React, { useState } from "react";
import Header from "@/components/Headers";
import Footer from "@/components/Footer";
import { Montserrat } from "next/font/google";
import { Form } from "react-bootstrap";
import { Button } from "@mui/material";
import { FaEnvelope } from "react-icons/fa";
import Animation from "../components/assets/animations/Contact.json";
import Lottie from "lottie-react";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const Contact = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [notificationType, setNotificationType] = useState("success");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/contact-support`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      }
    );

    const data = await response.json();

    if (data.status) {
      setNotificationType("success");
      setMessage(data.message);
      setDetails({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setNotificationType("error");
      setMessage(data.message);
    }

    setLoading(false);
  };
  return (
    <div className={`bg-brand-black ${montserrat.className}`}>
      <Header />
      <main className="overflow-hidden pb-10 border-white border-b">
        <div className="relative w-full contactoverlay glow shadow-lg">
          <h1 className="absolute md:text-5xl text-2xl font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
            Get In Touch
          </h1>
        </div>
        <div className="mt-8 text-gray-300 font-medium text-lg md:text-center text-left slide-in-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-left !mt-10">
                <h5 className="mb-4 text-xl">Write a Message</h5>
                <Form onSubmit={handleSubmit}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="text-sm text-brand-gold">
                      Your Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      disabled={loading}
                      onChange={handleChange}
                      name="name"
                      value={details.name}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="text-sm text-brand-gold">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      required
                      disabled={loading}
                      onChange={handleChange}
                      value={details.email}
                      name="email"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-sm text-brand-gold">
                      How Can We Help You?
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      required
                      placeholder="Please Send all Inquiries to"
                      onChange={handleChange}
                      value={details.message}
                      name="message"
                      disabled={loading}
                    />
                  </Form.Group>
                  <div className="my-4">
                    <Button
                      startIcon={<FaEnvelope />}
                      className="w-full !bg-brand-gold hover:!bg-brand-orange"
                      variant="contained"
                      type={loading ? "button" : "submit"}
                    >
                      {loading ? "Sending Message..." : "Send a Message"}
                    </Button>
                  </div>
                  {message && (
                    <Alert message={message} severity={notificationType}>
                      {message}
                    </Alert>
                  )}
                </Form>
              </div>
              <div className="col-md-6 text-left !mt-10">
                <Lottie
                  animationData={Animation}
                  className="h-96"
                  loop={true}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
