import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('rental');
  this.route('rental_new');
  this.route('booking');
  this.route('booking_new');
});

export default Router;
