import platform from './platform';

class Utils{
  constructor(data) {
    this.data = data;
  }
  install(Vue) {
    Object.assign(Vue, {
      $utils: this.data,
    });
    Object.assign(Vue.prototype, {
      $utils: this.data,
    });
  }
}

export default new Utils({
  platform,
});
