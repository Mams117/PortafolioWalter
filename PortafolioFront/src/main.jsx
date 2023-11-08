import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/assets/css/style.css";
import "../src/vendor/bootstrap/css/bootstrap.min.css";
import "../src/vendor/bootstrap-icons/bootstrap-icons.css";
import "../src/vendor/glightbox/css/glightbox.min.css";
import "../src/vendor/swiper/swiper-bundle.min.css";

//scripts

import "../src/vendor/purecounter/purecounter_vanilla.js";
import "../src/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "../src/vendor/glightbox/js/glightbox.min.js";
import "../src/vendor/swiper/swiper-bundle.min.js";
import "../src/vendor/typed.js/typed.umd.js";
import "../src/vendor/php-email-form/validate.js";
import "../src/assets/js/main.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
