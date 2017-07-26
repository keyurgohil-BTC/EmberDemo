import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('rental');
  },
  actions: {
    delete(rental) {
      if(confirm("Are you sure?")) {
        rental.deleteRecord();
        rental.save();
      }
    }
  }
});
