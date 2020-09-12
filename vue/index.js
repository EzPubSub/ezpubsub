const EzPubSub = require('../src/client')
module.exports = {
    install: function(Vue, appId, options) {
        Vue.prototype.$ezpub = new EzPubSub(appId, options)
    }
};
