import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

import style from "./main.css";

const App = require('./js/app');

const app = new App();

document.addEventListener("DOMContentLoaded", function(){
    app.loaded();
  });