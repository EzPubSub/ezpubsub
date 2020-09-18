'use strict';
let Faye = require('faye');

const checkAppKey =  appId => {
    if (appId === null || appId === undefined) throw 'You must pass your app id when you instantiate NgaNyi.';
}
const getServerUrl = cluster => `https://${cluster}.ezpubsub.com`;
let ezPubSubClass =  class fayeClient {
    constructor(appId, options, other = {
        retry: 5,
        timeout: 120
    }) {
        checkAppKey(appId)
        let server_url = getServerUrl(options.cluster)
        let client = new Faye.Client(server_url, other)
        client.addExtension({
            outgoing: (message, callback) => {
                message.channel = message.channel.replace('//', '/')
                if (message.channel !== '/meta/subscribe') return callback(message);
                if (!message.ext) message.ext = {};
                message.ext.app_id = appId;
                message.ext.key = options.key;
                message.ext.secret = options.secret ;
                callback(message);
            },
            incoming: (message, callback) => {
                message.channel = message.channel.replace('//', '/')
                if (message.error) throw message.error
                callback(message);
            }
        });
        client.addExtension({
            outgoing: function(message, callback) {
                message.channel = message.channel.replace('//', '/')
                if (!message.ext) message.ext = {};
                message.ext.app_id = appId;
                message.ext.key = options.key;
                message.ext.secret = options.secret ;
                callback(message);
            }
        })
        this.appId = appId;
        this.client = client
    }
    wildCardChannel(channel, data) {
        return this.client.subscribe(`/${this.appId}${channel}`).withChannel(data)
    }
    subscribeChannel(channel, data) {
        return this.client.subscribe(`/${this.appId}${channel}`, data)
    }
    publishChannel(channel, data) {
        return this.client.publish(`/${this.appId}${channel}`, data)
    }
}

module.exports = ezPubSubClass;
