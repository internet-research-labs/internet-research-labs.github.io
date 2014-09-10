/**
 * Return Universal Unique Identifier
 * @return {String} A unique DOM ID
 */
angular.module('loading...').service('uuid', function () {
  return function (pre, post, sep) {
    pre  = pre  || '';
    post = post || '';
    sep  = sep  || '-';

    var id  = Math.floor(Math.random() * 1000) + '';

    if (pre)
      id = pre + sep + id;

    if (post)
      id = id + sep + post;

    return id;
  };
});