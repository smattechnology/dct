// lib/fontawesome.ts
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faCoffee, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false; // Tell Font Awesome to skip adding CSS automatically

library.add(faCoffee, faHome, faUser);
