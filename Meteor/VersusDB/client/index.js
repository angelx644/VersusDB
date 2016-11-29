import { Template } from 'meteor/templating';

import './index.html';
import '../imports/startup/accounts-config.js';
import '../imports/ui/login.html';
import '../imports/ui/matches.html';
import '../imports/ui/teams.html';
import '../imports/ui/profile.html';
import '../imports/ui/about.html';
import '../imports/ui/ranked.html';
import '../imports/ui/quick.html';
import '../imports/ui/pendingranked.html';
import '../imports/ui/rankedrequest.html';
import '../imports/ui/rankedaccept.html';
import '../imports/ui/creatematch.html';
import '../imports/ui/pendingteam.html';
import '../imports/ui/teamcreate.html';
import '../imports/ui/teamjoinreqs.html';

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
  },
  "click .ranked": function() {
     Session.set("templateName", "ranked");
  },
  "click .quick": function() {
     Session.set("templateName", "quick");
  },
  "click .pendingranked": function() {
     Session.set("templateName", "pendingranked");
  },
  "click .rankedrequest": function() {
     Session.set("templateName", "rankedrequest");
  },
  "click .rankedaccept": function() {
     Session.set("templateName", "rankedaccept");
  },
  "click .creatematch": function() {
     Session.set("templateName", "creatematch");
  },
  "click .pendingteam": function() {
     Session.set("templateName", "pendingteam");
  },
  "click .teamcreate": function() {
     Session.set("templateName", "teamcreate");
  },
  "click .teamjoinreqs": function() {
     Session.set("templateName", "teamjoinreqs");
  }
});