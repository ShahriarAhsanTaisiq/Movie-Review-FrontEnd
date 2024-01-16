import React from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-3">
      <Container fluid>
        <p className="text-center mb-0">
          &copy; {new Date().getFullYear()} <FontAwesomeIcon icon={faPlay} /> <strong>RedFlix</strong>. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
