let ezPubSubClient = require('./client')

if (typeof window !== "undefined") {
    window.EzPubSub = ezPubSubClient;
}

module.exports = ezPubSubClient;
