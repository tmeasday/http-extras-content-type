if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    var url = 'https://verso-uploads-staging.s3-us-west-1.amazonaws.com/asdf';
    try {
      HTTP.get(url);
    } catch (e) {
      console.log(e)
    }
    try {
      HTTP.get(url, {responseType: 'buffer'});
    } catch (e) {
      console.log(e)
    }
  });
}
