import render from './render.js'
import vnode from './vnode.js'
import proxy from './proxy.js'

export default function Vue(options) {

    this.$el = options && options.el;
    this.$data = options && options.data;

    this.$vnode = vnode(document.querySelector(this.$el))

    let that = this;
    proxy(this, this.$data, function () {
        that.render()
    })
    this.render();

}
Vue.prototype.render = function () {
    render(this.$vnode, this);
}