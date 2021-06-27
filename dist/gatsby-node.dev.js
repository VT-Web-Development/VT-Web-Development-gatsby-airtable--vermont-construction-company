"use strict";

var path = require('path');

exports.createPages = function _callee(_ref) {
  var graphql, actions, createPage, result;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          graphql = _ref.graphql, actions = _ref.actions;
          createPage = actions.createPage;
          _context.next = 4;
          return regeneratorRuntime.awrap(graphql("\n    query {\n      allPrismicServices {\n        nodes {\n          slug: uid\n        }\n      }\n    }\n  "));

        case 4:
          result = _context.sent;
          result.data.allPrismicServices.nodes.forEach(function (node) {
            return createPage({
              path: "/services/".concat(node.slug),
              component: path.resolve("src/templetes/services-templete.js"),
              context: {
                slug: node.slug
              }
            });
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};