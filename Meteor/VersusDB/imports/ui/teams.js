import { Template } from 'meteor/templating';

import { Teams } from '../api/teams.js';

import './teams.html';

Template.teams.helpers({
    teams() {
        return Teams.find({});
    },
});
