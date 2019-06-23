import menus from './menus';

class Constants {
  constructor(data) {
    this.data = data;
  }
  install(Vue) {

    Object.assign(Vue, {
      $constants: this.data,
    });

    Object.assign(Vue.prototype, {
      $constants: this.data,
    });
  }
}

export default new Constants({
  menus,
});
