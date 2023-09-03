import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";
import { Link } from "react-router-dom";
const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Link to="/login">
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
      </Link>
      <Button variant="outline-secondary">
        <FaGithub /> Login with Github
      </Button>
      <div>
        <h4 className="mt-4">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter />
            Twiter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
