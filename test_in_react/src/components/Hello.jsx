import React from "react";
import propTypes from "prop-types";

const Hello = ({ title }) => <h1>{title}</h1>;

Hello.propTypes = {
  title: propTypes.string
};

export default Hello;
