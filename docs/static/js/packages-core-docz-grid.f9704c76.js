;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    './packages/core/docz/grid.mdx': function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'default', function() {
          return d
        })
      var o = n('./node_modules/react/index.js'),
        r = n.n(o),
        c = n('./node_modules/@mdx-js/tag/dist/index.js'),
        i = n('./node_modules/@rebass/grid/dist/index.js'),
        u = n('./node_modules/docz/dist/index.m.js')
      function a(e) {
        return (a =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e
              }
            : function(e) {
                return e && 'function' === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function s(e, t) {
        if (null == e) return {}
        var n,
          o,
          r = (function(e, t) {
            if (null == e) return {}
            var n,
              o,
              r = {},
              c = Object.keys(e)
            for (o = 0; o < c.length; o++) (n = c[o]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e)
          for (o = 0; o < c.length; o++)
            (n = c[o]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]))
        }
        return r
      }
      function f(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n]
          ;(o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
      }
      function l(e, t) {
        return !t || ('object' !== a(t) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
              return e
            })(e)
          : t
      }
      function p(e) {
        return (p = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
      }
      function m(e, t) {
        return (m =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      var d = (function(e) {
        function t(e) {
          var n
          return (
            (function(e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, t),
            ((n = l(this, p(t).call(this, e))).layout = null),
            n
          )
        }
        var n, o, a
        return (
          (function(e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && m(e, t)
          })(t, r.a.Component),
          (n = t),
          (o = [
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  t = e.components
                s(e, ['components'])
                return r.a.createElement(
                  c.MDXTag,
                  { name: 'wrapper', components: t },
                  r.a.createElement(
                    c.MDXTag,
                    { name: 'h1', components: t, props: { id: 'grid-system' } },
                    'Grid System',
                  ),
                  r.a.createElement(c.MDXTag, { name: 'h2', components: t, props: { id: 'flex' } }, 'Flex'),
                  r.a.createElement(u.f, { of: i.Flex }),
                  r.a.createElement(c.MDXTag, { name: 'h2', components: t, props: { id: 'box' } }, 'Box'),
                  r.a.createElement(u.f, { of: i.Box }),
                )
              },
            },
          ]) && f(n.prototype, o),
          a && f(n, a),
          t
        )
      })()
    },
  },
])
//# sourceMappingURL=packages-core-docz-grid.8e2318af906385de48ca.js.map
