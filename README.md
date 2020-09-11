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

#### Vue
```javascript
import VueEzPubSub from 'ezpubsub/src/vue'

Vue.use(VueEzPubSub,'your-app-id',{
    key: 'your-app-key',
    secret: 'your-app-secret',
    cluster: 'your-app-cluster'
})
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
You can get your `app_id`, `key`, `secret` and `cluster` from the [EzPubSub](https://ezpubsub.com/login).

##### Subscribe Channel
```
client.subscribeChannel('/my-channel', function(message) {
   alert(JSON.stringify(message));
});
```

##### Publish Channel
```
client.publishChannel('/my-channel', {
    text: 'Hello world'
});
```

## Credits
- All Contributors

## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
