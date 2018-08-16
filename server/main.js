import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    Meteor.methods({
       'test' (user) {
           console.log(user);
       }
    });
});
