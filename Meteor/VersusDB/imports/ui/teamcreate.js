import { Template } from 'meteor/templating';

import { Teams } from '../api/teams.js';

import './teamcreate.html';

Template.teamcreate.events({
   'submit'(event) {
        event.preventDefault();
		
		const target = event.target;
		const name = event.target.name.value;
		const motto = event.target.motto.value;
		
		Teams.insert({
			name: name,
			motto: motto,
		});
		
		Session.set("templateName", "teams");
    },
});