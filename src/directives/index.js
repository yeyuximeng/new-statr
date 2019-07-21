import dateFormat from './dateFormat';

class Directives{
    constructor(data) {
      this.data = data;
    }

    install(Vue) {
        this.data.forEach((directive) => {
          Vue.directive(directive.name, directive.binding);
        });
    }
}
export default new Directives([
  dateFormat,
]);
