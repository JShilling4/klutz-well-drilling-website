import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faBars, faCheck } from "@fortawesome/free-solid-svg-icons";

library.add(faFacebook, faBars, faCheck);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
