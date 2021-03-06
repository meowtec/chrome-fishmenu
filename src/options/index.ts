import App from './app.svelte';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = new App({
  target: document.body,
  props: {
    name: 'world',
  },
});
