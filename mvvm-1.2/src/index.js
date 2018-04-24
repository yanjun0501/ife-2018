import san from 'san';

var MyApp = san.defineComponent({
  template: '<p>Hello {{ text }}!</p>',
  initData: function() {
    return {
      text: 'world'
    };
  }
});

var myApp = new MyApp();

myApp.attach(document.body);
