import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
  // code to run on server at startup
    Meteor.methods({
       'user.post' (user) {
           Accounts.createUser(user);
       }
    });
});
