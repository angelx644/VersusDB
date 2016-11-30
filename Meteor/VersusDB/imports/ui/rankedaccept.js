import { Template } from 'meteor/templating';

import { Requests } from '../api/requests.js';

import './rankedaccept.html';

Template.rankedaccept.helpers({
    requests() {
        return Requests.find({});
    },
});