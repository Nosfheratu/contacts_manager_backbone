// Backbone Views

App.Views.App = Backbone.View.extend({
  initialize: function(){
    var addContactView = new App.Views.AddContact({ collection: App.contacts });

  }
});

App.Views.AddContact = Backbone.View.extend({
  el: '#addContact',
  events: {
    'submit': 'addContact'
  },

  addContact: function(e){
    e.preventDefault();

    var newContact = this.collection.create({
      first_name: this.$('#first_name').val(), // this.$el.find('#first_name')
      last_name: this.$('#last_name').val(),
      email_address: this.$('#email_address').val(),
      description: this.$('#description').val()
    }, { wait: true });

    console.log( newContact );
  }
});
