import { Template } from 'meteor/templating';

import { Matches } from '../api/matches.js';

import './creatematch.html';

Template.creatematch.events({
   'submit'(event) {
        event.preventDefault();
		
		const target = event.target;
		const activity = event.target.act.value;
		const team1 = event.target.team1.value;
		const team2 = event.target.team2.value;
		const location = event.target.loc.value;
		const date = event.target.date.value;
		const time = event.target.time.value;
		
		Matches.insert({
			activity: activity,
			team1: team1,
			team2: team2,
			location: location,
			date: date,
			time: time,
		});
		

		
		target.activity.value = '';
		target.team1.value = '';
		target.team2.value = '';
		target.location.value = '';
		target.date.value = '';
		target.time.value = '';
		
		Session.set("templateName", "ranked");
    },
});