const PubSub = {
  publish: function(channel, payload){
    const event = new CustomEvent(channel, {detail: payload});
    document.dispatchEvent(event);
  }, // comma means one key-value pair and then another in an object(hash)
  subscribe: function(channel, callback){
    console.log(`subscribe to channel: ${channel}`);
  document.addEventListener(channel, callback);
  }
};

module.exports = PubSub;
