import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faFacebook, faLinkedin);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("base-card", BaseCard)
  .mount("#app");
