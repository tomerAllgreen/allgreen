import { createApp } from 'vue';
import App from './App.vue';
import Sidebar from './components/Sidebar.vue';
import HelloWorld from './components/HelloWorld.vue';

const app = createApp(App);
app.components('hello-world',HelloWorld);
app.components('sidebar',Sidebar);
app.mount('#app');