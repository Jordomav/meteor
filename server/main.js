import { Meteor } from 'meteor/meteor';
import '../imports/api/users';
import { Users } from '../imports/api/users';

Meteor.startup(() => {
  // code to run on server at startup
    Meteor.methods({
       'user.post' (user) {
           Users.insert(user);
       }
    });
});
