import 'babel-polyfill';
// import san from 'san';

// style
require('./index.css');

// route
import DataForm from './components/DataForm/DataForm.san';
import HelloWorld from './components/HelloWorld/HelloWorld.san';
import {router} from 'san-router';

router.add({rule: '/', Component: DataForm, target: '#app'});
router.add({rule: '/helloworld', Component: HelloWorld, target: '#app'});

// start
router.start();
