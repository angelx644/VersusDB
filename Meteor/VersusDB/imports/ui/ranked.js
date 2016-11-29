import { Template } from 'meteor/templating';

import { Matches } from '../api/matches.js';

import './ranked.html';

Template.ranked.helpers({
    matches() {
        return Matches.find({});
    },
});