
import Vue from 'vue'

import {
  Button,
  Popup,
  Checkbox,
  DatetimePicker,
  NumberKeyboard,
  Picker,
  Switch,
  ActionSheet,
  Dialog,
  Toast,
  Collapse,
  CollapseItem,
  List,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Lazyload


} from 'vant'



const components = [
  Button,
  Popup,
  Checkbox,
  DatetimePicker,
  NumberKeyboard,
  Picker,
  Switch,
  ActionSheet,
  Dialog,
  Toast,
  Collapse,
  CollapseItem,
  List,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Lazyload

]
Vue.use(Button);
Vue.use(Popup);
Vue.use(Checkbox);
Vue.use(DatetimePicker);
Vue.use(NumberKeyboard);
Vue.use(Picker);
Vue.use(Switch);
Vue.use(ActionSheet);
Vue.use(Dialog);
Vue.use(Toast);
Vue.use(Collapse).use(CollapseItem);
Vue.use(List);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Tab).use(Tabs);
Vue.use(Lazyload);
