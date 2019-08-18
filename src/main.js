import Vue           from 'vue';
import { sync }      from 'vuex-router-sync';
import VeeValidate   from 'vee-validate';
import { library }          from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon }  from '@fortawesome/vue-fontawesome';
import { faKey, faCheck, faEnvelope, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import App    from './App';
import store  from './store';
import router from './router';

library.add(faKey, faCheck, faEnvelope, faExclamationTriangle);

// Require the main Sass manifest file
import('./assets/main.scss');

Vue.config.productionTip = false;
Vue.use(VeeValidate, { events: '' });
Vue.component('fa-icon', FontAwesomeIcon);

sync(store, router);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
