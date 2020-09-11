import EzPubSub from './client'
const VueEzPubSub = {
    install: function(Vue, appId, options) {
        Vue.prototype.$ezpub = new EzPubSub(appId, options)
    }
};
export default VueEzPubSub;
