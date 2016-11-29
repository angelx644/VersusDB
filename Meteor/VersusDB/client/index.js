import { Template } from 'meteor/templating';

import './index.html';
import '../imports/startup/accounts-config.js';
import '../imports/ui/login.html';
import '../imports/ui/matches.html';
import '../imports/ui/teams.html';
import '../imports/ui/profile.html';
import '../imports/ui/about.html';


Meteor.startup(function () {
  Session.setDefault("templateName", "login")
});

Template.body.helpers({
  template_name: function(){
    return Session.get("templateName")
  }
});

Template.body.events({
  "click .home": function() {
    Session.set("templateName", "login");
  },
  "click .matches": function() {
    Session.set("templateName", "matches");
  },
  "click .teams": function() {
    Session.set("templateName", "teams");
  },
  "click .profile": function() {
    Session.set("templateName", "profile");
  },
  "click .about": function() {
     Session.set("templateName", "about");
  }
});