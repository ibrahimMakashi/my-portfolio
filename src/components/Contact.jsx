import emailjs from "emailjs-com";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const sendEmail = () => {
    setLoading(true);
    if (!userName.trim()) {
      toast.error("Name is required");
      setLoading(false);
      return;
    }

    if (!userEmail.trim() || !userEmail.includes("@")) {
      toast.error("mail is required");
      setLoading(false);
      return;
    }

    if (!message.trim()) {
      toast.error("message is required");
      setLoading(false);

      return;
    }
    const templateParams = {
      name: userName,
      email: userEmail,
      message: message,
    };

    emailjs
      .send(
        "service_e8f4yo8",
        "template_y0vrg5y",
        templateParams,
        "8KBpuH_tTRcwngZA4"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent!");
          setUserName("");
          setUserEmail("");
          setMessage("");
          setLoading(false);
        },
        (err) => {
          console.error("FAILED...", err);
          toast.error("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <h1 className="contact-title block">Let's Talk</h1>
      <div className="social-box">
        <div className="contact-icons block">
          <Link className="flex">
            <FaPhoneAlt /> <h3>+91 9739413691</h3>
          </Link>
          <Link
            className="flex"
            to={"https://www.instagram.com/ibrahim__makashi__/"}
            target="blank"
          >
            <FaInstagram />
            <h3>ibrahim_makashi_</h3>
          </Link>
          <a
            className="flex"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ibrahimmakashi5159@gmail.com&su=Subject&body=Hello"
            target="_blank"
          >
            <MdOutlineEmail />
            <h3>ibrahimmakashi5159@gmail.com</h3>
          </a>
        </div>
        <div className="social-icons flex block">
          <Link
            to={"https://www.instagram.com/ibrahim__makashi__/"}
            target="blank"
          >
            <FaInstagram />
          </Link>
          <Link to={"https://github.com/ibrahimMakashi"} target="blank">
            <FaGithub />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/mahammadibrahim-makashi-116b84259"}
            target="blank"
          >
            <CiLinkedin />
          </Link>
        </div>
      </div>
      <div className="contact-box block">
        <p>
          Wheter you are looking to build a new website, improve your existing
          platform. I'm here to help.
        </p>

        <p>Full Name</p>
        <input
          required
          type="text"
          placeholder="Your full name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <p>Email address</p>
        <input
          required
          type="email"
          placeholder="Your email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />

        <p>Your message</p>
        <input
          required
          type="text"
          placeholder="Shaire your thoughts..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="contact-btn" onClick={sendEmail}>
          <IoMdSend />
          {loading ? "Sending..." : "Send message"}
        </button>
      </div>
    </div>
  );
};

export default Contact;
