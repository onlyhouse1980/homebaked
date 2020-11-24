import React from "react";
import ReactDOM from "react-dom";
import "../components/ImageComponent";
import VideoBg1 from '../components/VideoBg1';
import styles from '../styles/contact.module.css'

function contact() {
  return (
    <div className="Contact">
      <h1>Orchard Beach Community Group</h1>
      <h4>Some contact info.. </h4>
      <h5> mailto reference </h5>
      <ImageComponent />
    </div>
  );
}

export default Contact

