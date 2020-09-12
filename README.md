# EzPubSub
Simple Pub/Sub Messaging 

## Installation
```
npm install --save ezpubsub
```
Then:
```javascript
import EzPubSub from 'ezpubsub';
```

If you're not using ES6 modules:
```javascript
let EzPubSub = require('ezpubsub')
```

#### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/ezpubsub/dist/ezpubsub.min.js"></script>
```

#### Vue
```javascript
import VueEzPubSub from 'ezpubsub/vue'
```

## Usage
##### Initialization
```
let client = new EzPubSub('your-app-id',{
    key: 'your-app-key',
    secret: 'your-app-secret',
    cluster: 'your-app-cluster'
});
```
```
// Vue.js
Vue.use(VueEzPubSub,'your-app-id',{
    key: 'your-app-key',
    secret: 'your-app-secret',
    cluster: 'your-app-cluster'
})
```

You can get your `app_id`, `key`, `secret` and `cluster` from the [EzPubSub](https://ezpubsub.com/login).

##### Subscribe Channel
```javascript
client.subscribeChannel('/my-channel', function(message) {
   alert(JSON.stringify(message));
});
```
```javascript
// Vue.js
this.$ezpub.subscribeChannel('/my-channel', function(message) {
   alert(JSON.stringify(message));
});
```

##### Publish Channel
```javascript
client.publishChannel('/my-channel', {
    text: 'Hello world'
});
```
```javascript
// Vue.js
this.$ezpub.publishChannel('/my-channel', {
   text: 'Hello world'
});
   ```

## Credits
- All Contributors

## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
