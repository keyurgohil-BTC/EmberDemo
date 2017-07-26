import DS from 'ember-data';

export default DS.Model.extend({
  start_at: DS.attr('string'),
  end_at: DS.attr('number'),
  client_email: DS.attr('string'),
  price: DS.attr('number'),
  rental: DS.belongsTo('rental')
});
