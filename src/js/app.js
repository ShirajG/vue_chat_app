require('bootstrap-loader');
require('../scss/app.scss');
require('expose?AppVeuxStore!./vue/store.js');
require('expose?io!socket.io-client');

Vue.component('chatAppRoot', require('./vue/components/chatAppRoot.vue'));

window.onload = function() {
  new Vue({
    el: "#app",
    render: function (createElement){
      return createElement('chatAppRoot');
    }
  });
}
