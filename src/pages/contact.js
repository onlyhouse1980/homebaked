import React from "react";
import ReactDOM from "react-dom";
import ImageComponent from "../components/ImageComponent";
import VideoBg1 from '../components/VideoBg1';
import styles from '../styles/contact.module.css'

function contact() {
  return (
    <div className="App">
      <h1>Modal popup</h1>
      <h4>To trigger the popup click the picture, please! </h4>
      <ImageComponent />
    </div>
  );
}

export default contact

