import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import UserDetails from "../components/user-profile-lite/UserDetails";
import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

const Signin = () => (
  <Container fluid className="main-content-container px-4">
    <div className="wrapper fadeInDown container mt-4">
      <div id="formContent">
        <div className="fadeIn first text-center">
          <img
            src="http://danielzawadzki.com/codepen/01/icon.svg"
            id="icon"
            alt="User Icon"
          />
        </div>

        <form>
          <input
            type="text"
            id="login"
            className="fadeIn second form-control"
            name="login"
            placeholder="login"
          />
          <input
            type="text"
            id="password"
            className="fadeIn third form-control"
            name="login"
            placeholder="password"
          />
          <input
            type="submit"
            className="fadeIn fourth btn btn-primary btn-sm"
            value="Log In"
          />
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  </Container>
);
export default Signin;
