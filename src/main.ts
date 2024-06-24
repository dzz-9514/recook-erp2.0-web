import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import { setupStore } from '@/store';
import { setupDirective } from '@/directive';
import akbutton from "@/components/button/button.vue"
import hevueImgPreview from 'hevue-img-preview'
import Particles from 'particles.vue3'
import '@/permission';
import '@/styles/css/index.css'
// 本地SVG图标
import 'virtual:svg-icons-register';

// 国际化
import i18n from '@/lang/index';

// 样式
import 'element-plus/theme-chalk/dark/css-vars.css';
import '@/styles/index.scss';
// import 'uno.css';

const app = createApp(App);
// 全局注册 自定义指令(directive)
setupDirective(app);
// 全局注册 状态管理(store)
setupStore(app);
app.component('akbutton', akbutton)
app.use(hevueImgPreview)
app.use(Particles)
app.use(router).use(i18n).mount('#app');
