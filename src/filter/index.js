
import Vue from 'vue';
const filter=Vue.filter('formatTime', function (val) {
    const date = new Date(val);
    const year = date.getFullYear();
    const month = date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const day = date.getDate() > 9 ? date.getDate() + 1 : `0${date.getDate() + 1}`;
    return `${year}-${month}-${day}`;
  })

export {filter}