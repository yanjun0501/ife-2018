import 'babel-polyfill';
// import san from 'san';

// style
require('./index.css');

// route
import GrFather from './components/GrFather/GrFather.san';
import HelloWorld from './components/HelloWorld/HelloWorld.san';
import Loop from './components/Loop/Loop.san';
import Block from './components/Block/Block.san';
import DataForm from './components/DataForm/DataForm.san';
import { router } from 'san-router';

router.add({rule: '/', Component: GrFather, target: '#app'});
router.add({rule: '/block', Component: Block, target: '#app'});
router.add({rule: '/loop', Component: Loop, target: '#app'});
router.add({rule: '/dataform', Component: DataForm, target: '#app'});
router.add({rule: '/helloworld', Component: HelloWorld, target: '#app'});

// start
router.start();

