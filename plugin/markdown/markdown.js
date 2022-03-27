!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).RevealMarkdown = t());
})(this, function () {
  "use strict";
  function e(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function t(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function n(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r);
    }
  }
  function r(e, t, r) {
    return t && n(e.prototype, t), r && n(e, r), e;
  }
  function u(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function i(e, t) {
    if (null == e) return {};
    var n,
      r,
      u = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          u = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (u[n] = e[n]);
        return u;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]),
          t.indexOf(n) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (u[n] = e[n]));
    }
    return u;
  }
  function o(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          e &&
          (("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"]);
        if (null == n) return;
        var r,
          u,
          i = [],
          o = !0,
          a = !1;
        try {
          for (
            n = n.call(e);
            !(o = (r = n.next()).done) &&
            (i.push(r.value), !t || i.length !== t);
            o = !0
          );
        } catch (e) {
          (a = !0), (u = e);
        } finally {
          try {
            o || null == n.return || n.return();
          } finally {
            if (a) throw u;
          }
        }
        return i;
      })(e, t) ||
      a(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function a(e, t) {
    if (e) {
      if ("string" == typeof e) return s(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return (
        "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(e)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? s(e, t)
          : void 0
      );
    }
  }
  function s(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function l(e, t) {
    var n =
      ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (!n) {
      if (
        Array.isArray(e) ||
        (n = a(e)) ||
        (t && e && "number" == typeof e.length)
      ) {
        n && (e = n);
        var r = 0,
          u = function () {};
        return {
          s: u,
          n: function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          },
          e: function (e) {
            throw e;
          },
          f: u,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var i,
      o = !0,
      s = !1;
    return {
      s: function () {
        n = n.call(e);
      },
      n: function () {
        var e = n.next();
        return (o = e.done), e;
      },
      e: function (e) {
        (s = !0), (i = e);
      },
      f: function () {
        try {
          o || null == n.return || n.return();
        } finally {
          if (s) throw i;
        }
      },
    };
  }
  var c =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
    f = function (e) {
      return e && e.Math == Math && e;
    },
    p =
      f("object" == typeof globalThis && globalThis) ||
      f("object" == typeof window && window) ||
      f("object" == typeof self && self) ||
      f("object" == typeof c && c) ||
      (function () {
        return this;
      })() ||
      Function("return this")(),
    h = {},
    D = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    },
    g = !D(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }),
    d = {},
    v = {}.propertyIsEnumerable,
    y = Object.getOwnPropertyDescriptor,
    A = y && !v.call({ 1: 2 }, 1);
  d.f = A
    ? function (e) {
        var t = y(this, e);
        return !!t && t.enumerable;
      }
    : v;
  var m = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    },
    k = {}.toString,
    E = function (e) {
      return k.call(e).slice(8, -1);
    },
    x = E,
    F = "".split,
    b = D(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" == x(e) ? F.call(e, "") : Object(e);
        }
      : Object,
    C = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    },
    w = b,
    B = C,
    S = function (e) {
      return w(B(e));
    },
    _ = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    },
    T = _,
    O = function (e, t) {
      if (!T(e)) return e;
      var n, r;
      if (t && "function" == typeof (n = e.toString) && !T((r = n.call(e))))
        return r;
      if ("function" == typeof (n = e.valueOf) && !T((r = n.call(e)))) return r;
      if (!t && "function" == typeof (n = e.toString) && !T((r = n.call(e))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    },
    R = C,
    I = function (e) {
      return Object(R(e));
    },
    j = I,
    z = {}.hasOwnProperty,
    $ = function (e, t) {
      return z.call(j(e), t);
    },
    P = _,
    L = p.document,
    M = P(L) && P(L.createElement),
    N = function (e) {
      return M ? L.createElement(e) : {};
    },
    U = N,
    q =
      !g &&
      !D(function () {
        return (
          7 !=
          Object.defineProperty(U("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    Z = g,
    G = d,
    H = m,
    Q = S,
    V = O,
    Y = $,
    K = q,
    X = Object.getOwnPropertyDescriptor;
  h.f = Z
    ? X
    : function (e, t) {
        if (((e = Q(e)), (t = V(t, !0)), K))
          try {
            return X(e, t);
          } catch (e) {}
        if (Y(e, t)) return H(!G.f.call(e, t), e[t]);
      };
  var W = {},
    J = _,
    ee = function (e) {
      if (!J(e)) throw TypeError(String(e) + " is not an object");
      return e;
    },
    te = g,
    ne = q,
    re = ee,
    ue = O,
    ie = Object.defineProperty;
  W.f = te
    ? ie
    : function (e, t, n) {
        if ((re(e), (t = ue(t, !0)), re(n), ne))
          try {
            return ie(e, t, n);
          } catch (e) {}
        if ("get" in n || "set" in n)
          throw TypeError("Accessors not supported");
        return "value" in n && (e[t] = n.value), e;
      };
  var oe = W,
    ae = m,
    se = g
      ? function (e, t, n) {
          return oe.f(e, t, ae(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        },
    le = { exports: {} },
    ce = p,
    fe = se,
    pe = function (e, t) {
      try {
        fe(ce, e, t);
      } catch (n) {
        ce[e] = t;
      }
      return t;
    },
    he = pe,
    De = "__core-js_shared__",
    ge = p[De] || he(De, {}),
    de = ge,
    ve = Function.toString;
  "function" != typeof de.inspectSource &&
    (de.inspectSource = function (e) {
      return ve.call(e);
    });
  var ye = de.inspectSource,
    Ae = ye,
    me = p.WeakMap,
    ke = "function" == typeof me && /native code/.test(Ae(me)),
    Ee = { exports: {} },
    xe = ge;
  (Ee.exports = function (e, t) {
    return xe[e] || (xe[e] = void 0 !== t ? t : {});
  })("versions", []).push({
    version: "3.12.1",
    mode: "global",
    copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
  });
  var Fe,
    be,
    Ce,
    we = 0,
    Be = Math.random(),
    Se = function (e) {
      return (
        "Symbol(" +
        String(void 0 === e ? "" : e) +
        ")_" +
        (++we + Be).toString(36)
      );
    },
    _e = Ee.exports,
    Te = Se,
    Oe = _e("keys"),
    Re = function (e) {
      return Oe[e] || (Oe[e] = Te(e));
    },
    Ie = {},
    je = ke,
    ze = _,
    $e = se,
    Pe = $,
    Le = ge,
    Me = Re,
    Ne = Ie,
    Ue = "Object already initialized",
    qe = p.WeakMap;
  if (je || Le.state) {
    var Ze = Le.state || (Le.state = new qe()),
      Ge = Ze.get,
      He = Ze.has,
      Qe = Ze.set;
    (Fe = function (e, t) {
      if (He.call(Ze, e)) throw new TypeError(Ue);
      return (t.facade = e), Qe.call(Ze, e, t), t;
    }),
      (be = function (e) {
        return Ge.call(Ze, e) || {};
      }),
      (Ce = function (e) {
        return He.call(Ze, e);
      });
  } else {
    var Ve = Me("state");
    (Ne[Ve] = !0),
      (Fe = function (e, t) {
        if (Pe(e, Ve)) throw new TypeError(Ue);
        return (t.facade = e), $e(e, Ve, t), t;
      }),
      (be = function (e) {
        return Pe(e, Ve) ? e[Ve] : {};
      }),
      (Ce = function (e) {
        return Pe(e, Ve);
      });
  }
  var Ye = {
      set: Fe,
      get: be,
      has: Ce,
      enforce: function (e) {
        return Ce(e) ? be(e) : Fe(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!ze(t) || (n = be(t)).type !== e)
            throw TypeError("Incompatible receiver, " + e + " required");
          return n;
        };
      },
    },
    Ke = p,
    Xe = se,
    We = $,
    Je = pe,
    et = ye,
    tt = Ye.get,
    nt = Ye.enforce,
    rt = String(String).split("String");
  (le.exports = function (e, t, n, r) {
    var u,
      i = !!r && !!r.unsafe,
      o = !!r && !!r.enumerable,
      a = !!r && !!r.noTargetGet;
    "function" == typeof n &&
      ("string" != typeof t || We(n, "name") || Xe(n, "name", t),
      (u = nt(n)).source ||
        (u.source = rt.join("string" == typeof t ? t : ""))),
      e !== Ke
        ? (i ? !a && e[t] && (o = !0) : delete e[t],
          o ? (e[t] = n) : Xe(e, t, n))
        : o
        ? (e[t] = n)
        : Je(t, n);
  })(Function.prototype, "toString", function () {
    return ("function" == typeof this && tt(this).source) || et(this);
  });
  var ut = p,
    it = p,
    ot = function (e) {
      return "function" == typeof e ? e : void 0;
    },
    at = function (e, t) {
      return arguments.length < 2
        ? ot(ut[e]) || ot(it[e])
        : (ut[e] && ut[e][t]) || (it[e] && it[e][t]);
    },
    st = {},
    lt = Math.ceil,
    ct = Math.floor,
    ft = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? ct : lt)(e);
    },
    pt = ft,
    ht = Math.min,
    Dt = function (e) {
      return e > 0 ? ht(pt(e), 9007199254740991) : 0;
    },
    gt = ft,
    dt = Math.max,
    vt = Math.min,
    yt = function (e, t) {
      var n = gt(e);
      return n < 0 ? dt(n + t, 0) : vt(n, t);
    },
    At = S,
    mt = Dt,
    kt = yt,
    Et = function (e) {
      return function (t, n, r) {
        var u,
          i = At(t),
          o = mt(i.length),
          a = kt(r, o);
        if (e && n != n) {
          for (; o > a; ) if ((u = i[a++]) != u) return !0;
        } else
          for (; o > a; a++)
            if ((e || a in i) && i[a] === n) return e || a || 0;
        return !e && -1;
      };
    },
    xt = { includes: Et(!0), indexOf: Et(!1) },
    Ft = $,
    bt = S,
    Ct = xt.indexOf,
    wt = Ie,
    Bt = function (e, t) {
      var n,
        r = bt(e),
        u = 0,
        i = [];
      for (n in r) !Ft(wt, n) && Ft(r, n) && i.push(n);
      for (; t.length > u; ) Ft(r, (n = t[u++])) && (~Ct(i, n) || i.push(n));
      return i;
    },
    St = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    _t = Bt,
    Tt = St.concat("length", "prototype");
  st.f =
    Object.getOwnPropertyNames ||
    function (e) {
      return _t(e, Tt);
    };
  var Ot = {};
  Ot.f = Object.getOwnPropertySymbols;
  var Rt = st,
    It = Ot,
    jt = ee,
    zt =
      at("Reflect", "ownKeys") ||
      function (e) {
        var t = Rt.f(jt(e)),
          n = It.f;
        return n ? t.concat(n(e)) : t;
      },
    $t = $,
    Pt = zt,
    Lt = h,
    Mt = W,
    Nt = D,
    Ut = /#|\.prototype\./,
    qt = function (e, t) {
      var n = Gt[Zt(e)];
      return n == Qt || (n != Ht && ("function" == typeof t ? Nt(t) : !!t));
    },
    Zt = (qt.normalize = function (e) {
      return String(e).replace(Ut, ".").toLowerCase();
    }),
    Gt = (qt.data = {}),
    Ht = (qt.NATIVE = "N"),
    Qt = (qt.POLYFILL = "P"),
    Vt = qt,
    Yt = p,
    Kt = h.f,
    Xt = se,
    Wt = le.exports,
    Jt = pe,
    en = function (e, t) {
      for (var n = Pt(t), r = Mt.f, u = Lt.f, i = 0; i < n.length; i++) {
        var o = n[i];
        $t(e, o) || r(e, o, u(t, o));
      }
    },
    tn = Vt,
    nn = function (e, t) {
      var n,
        r,
        u,
        i,
        o,
        a = e.target,
        s = e.global,
        l = e.stat;
      if ((n = s ? Yt : l ? Yt[a] || Jt(a, {}) : (Yt[a] || {}).prototype))
        for (r in t) {
          if (
            ((i = t[r]),
            (u = e.noTargetGet ? (o = Kt(n, r)) && o.value : n[r]),
            !tn(s ? r : a + (l ? "." : "#") + r, e.forced) && void 0 !== u)
          ) {
            if (typeof i == typeof u) continue;
            en(i, u);
          }
          (e.sham || (u && u.sham)) && Xt(i, "sham", !0), Wt(n, r, i, e);
        }
    },
    rn = ee,
    un = function () {
      var e = rn(this),
        t = "";
      return (
        e.global && (t += "g"),
        e.ignoreCase && (t += "i"),
        e.multiline && (t += "m"),
        e.dotAll && (t += "s"),
        e.unicode && (t += "u"),
        e.sticky && (t += "y"),
        t
      );
    },
    on = {},
    an = D;
  function sn(e, t) {
    return RegExp(e, t);
  }
  (on.UNSUPPORTED_Y = an(function () {
    var e = sn("a", "y");
    return (e.lastIndex = 2), null != e.exec("abcd");
  })),
    (on.BROKEN_CARET = an(function () {
      var e = sn("^r", "gy");
      return (e.lastIndex = 2), null != e.exec("str");
    }));
  var ln = un,
    cn = on,
    fn = Ee.exports,
    pn = RegExp.prototype.exec,
    hn = fn("native-string-replace", String.prototype.replace),
    Dn = pn,
    gn = (function () {
      var e = /a/,
        t = /b*/g;
      return (
        pn.call(e, "a"), pn.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
      );
    })(),
    dn = cn.UNSUPPORTED_Y || cn.BROKEN_CARET,
    vn = void 0 !== /()??/.exec("")[1];
  (gn || vn || dn) &&
    (Dn = function (e) {
      var t,
        n,
        r,
        u,
        i = this,
        o = dn && i.sticky,
        a = ln.call(i),
        s = i.source,
        l = 0,
        c = e;
      return (
        o &&
          (-1 === (a = a.replace("y", "")).indexOf("g") && (a += "g"),
          (c = String(e).slice(i.lastIndex)),
          i.lastIndex > 0 &&
            (!i.multiline || (i.multiline && "\n" !== e[i.lastIndex - 1])) &&
            ((s = "(?: " + s + ")"), (c = " " + c), l++),
          (n = new RegExp("^(?:" + s + ")", a))),
        vn && (n = new RegExp("^" + s + "$(?!\\s)", a)),
        gn && (t = i.lastIndex),
        (r = pn.call(o ? n : i, c)),
        o
          ? r
            ? ((r.input = r.input.slice(l)),
              (r[0] = r[0].slice(l)),
              (r.index = i.lastIndex),
              (i.lastIndex += r[0].length))
            : (i.lastIndex = 0)
          : gn && r && (i.lastIndex = i.global ? r.index + r[0].length : t),
        vn &&
          r &&
          r.length > 1 &&
          hn.call(r[0], n, function () {
            for (u = 1; u < arguments.length - 2; u++)
              void 0 === arguments[u] && (r[u] = void 0);
          }),
        r
      );
    });
  var yn = Dn;
  nn({ target: "RegExp", proto: !0, forced: /./.exec !== yn }, { exec: yn });
  var An,
    mn,
    kn = at("navigator", "userAgent") || "",
    En = kn,
    xn = p.process,
    Fn = xn && xn.versions,
    bn = Fn && Fn.v8;
  bn
    ? (mn = (An = bn.split("."))[0] < 4 ? 1 : An[0] + An[1])
    : En &&
      (!(An = En.match(/Edge\/(\d+)/)) || An[1] >= 74) &&
      (An = En.match(/Chrome\/(\d+)/)) &&
      (mn = An[1]);
  var Cn = mn && +mn,
    wn = Cn,
    Bn = D,
    Sn =
      !!Object.getOwnPropertySymbols &&
      !Bn(function () {
        return !String(Symbol()) || (!Symbol.sham && wn && wn < 41);
      }),
    _n = Sn && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    Tn = p,
    On = Ee.exports,
    Rn = $,
    In = Se,
    jn = Sn,
    zn = _n,
    $n = On("wks"),
    Pn = Tn.Symbol,
    Ln = zn ? Pn : (Pn && Pn.withoutSetter) || In,
    Mn = function (e) {
      return (
        (Rn($n, e) && (jn || "string" == typeof $n[e])) ||
          (jn && Rn(Pn, e) ? ($n[e] = Pn[e]) : ($n[e] = Ln("Symbol." + e))),
        $n[e]
      );
    },
    Nn = le.exports,
    Un = yn,
    qn = D,
    Zn = Mn,
    Gn = se,
    Hn = Zn("species"),
    Qn = RegExp.prototype,
    Vn = !qn(function () {
      var e = /./;
      return (
        (e.exec = function () {
          var e = [];
          return (e.groups = { a: "7" }), e;
        }),
        "7" !== "".replace(e, "$<a>")
      );
    }),
    Yn = "$0" === "a".replace(/./, "$0"),
    Kn = Zn("replace"),
    Xn = !!/./[Kn] && "" === /./[Kn]("a", "$0"),
    Wn = !qn(function () {
      var e = /(?:)/,
        t = e.exec;
      e.exec = function () {
        return t.apply(this, arguments);
      };
      var n = "ab".split(e);
      return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
    }),
    Jn = function (e, t, n, r) {
      var u = Zn(e),
        i = !qn(function () {
          var t = {};
          return (
            (t[u] = function () {
              return 7;
            }),
            7 != ""[e](t)
          );
        }),
        o =
          i &&
          !qn(function () {
            var t = !1,
              n = /a/;
            return (
              "split" === e &&
                (((n = {}).constructor = {}),
                (n.constructor[Hn] = function () {
                  return n;
                }),
                (n.flags = ""),
                (n[u] = /./[u])),
              (n.exec = function () {
                return (t = !0), null;
              }),
              n[u](""),
              !t
            );
          });
      if (
        !i ||
        !o ||
        ("replace" === e && (!Vn || !Yn || Xn)) ||
        ("split" === e && !Wn)
      ) {
        var a = /./[u],
          s = n(
            u,
            ""[e],
            function (e, t, n, r, u) {
              var o = t.exec;
              return o === Un || o === Qn.exec
                ? i && !u
                  ? { done: !0, value: a.call(t, n, r) }
                  : { done: !0, value: e.call(n, t, r) }
                : { done: !1 };
            },
            {
              REPLACE_KEEPS_$0: Yn,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Xn,
            }
          ),
          l = s[0],
          c = s[1];
        Nn(String.prototype, e, l),
          Nn(
            Qn,
            u,
            2 == t
              ? function (e, t) {
                  return c.call(e, this, t);
                }
              : function (e) {
                  return c.call(e, this);
                }
          );
      }
      r && Gn(Qn[u], "sham", !0);
    },
    er = ft,
    tr = C,
    nr = function (e) {
      return function (t, n) {
        var r,
          u,
          i = String(tr(t)),
          o = er(n),
          a = i.length;
        return o < 0 || o >= a
          ? e
            ? ""
            : void 0
          : (r = i.charCodeAt(o)) < 55296 ||
            r > 56319 ||
            o + 1 === a ||
            (u = i.charCodeAt(o + 1)) < 56320 ||
            u > 57343
          ? e
            ? i.charAt(o)
            : r
          : e
          ? i.slice(o, o + 2)
          : u - 56320 + ((r - 55296) << 10) + 65536;
      };
    },
    rr = { codeAt: nr(!1), charAt: nr(!0) },
    ur = rr.charAt,
    ir = function (e, t, n) {
      return t + (n ? ur(e, t).length : 1);
    },
    or = I,
    ar = Math.floor,
    sr = "".replace,
    lr = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
    cr = /\$([$&'`]|\d{1,2})/g,
    fr = E,
    pr = yn,
    hr = function (e, t) {
      var n = e.exec;
      if ("function" == typeof n) {
        var r = n.call(e, t);
        if ("object" != typeof r)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return r;
      }
      if ("RegExp" !== fr(e))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return pr.call(e, t);
    },
    Dr = Jn,
    gr = ee,
    dr = Dt,
    vr = ft,
    yr = C,
    Ar = ir,
    mr = function (e, t, n, r, u, i) {
      var o = n + e.length,
        a = r.length,
        s = cr;
      return (
        void 0 !== u && ((u = or(u)), (s = lr)),
        sr.call(i, s, function (i, s) {
          var l;
          switch (s.charAt(0)) {
            case "$":
              return "$";
            case "&":
              return e;
            case "`":
              return t.slice(0, n);
            case "'":
              return t.slice(o);
            case "<":
              l = u[s.slice(1, -1)];
              break;
            default:
              var c = +s;
              if (0 === c) return i;
              if (c > a) {
                var f = ar(c / 10);
                return 0 === f
                  ? i
                  : f <= a
                  ? void 0 === r[f - 1]
                    ? s.charAt(1)
                    : r[f - 1] + s.charAt(1)
                  : i;
              }
              l = r[c - 1];
          }
          return void 0 === l ? "" : l;
        })
      );
    },
    kr = hr,
    Er = Math.max,
    xr = Math.min;
  Dr("replace", 2, function (e, t, n, r) {
    var u = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
      i = r.REPLACE_KEEPS_$0,
      o = u ? "$" : "$0";
    return [
      function (n, r) {
        var u = yr(this),
          i = null == n ? void 0 : n[e];
        return void 0 !== i ? i.call(n, u, r) : t.call(String(u), n, r);
      },
      function (e, r) {
        if ((!u && i) || ("string" == typeof r && -1 === r.indexOf(o))) {
          var a = n(t, e, this, r);
          if (a.done) return a.value;
        }
        var s = gr(e),
          l = String(this),
          c = "function" == typeof r;
        c || (r = String(r));
        var f = s.global;
        if (f) {
          var p = s.unicode;
          s.lastIndex = 0;
        }
        for (var h = []; ; ) {
          var D = kr(s, l);
          if (null === D) break;
          if ((h.push(D), !f)) break;
          "" === String(D[0]) && (s.lastIndex = Ar(l, dr(s.lastIndex), p));
        }
        for (var g, d = "", v = 0, y = 0; y < h.length; y++) {
          D = h[y];
          for (
            var A = String(D[0]),
              m = Er(xr(vr(D.index), l.length), 0),
              k = [],
              E = 1;
            E < D.length;
            E++
          )
            k.push(void 0 === (g = D[E]) ? g : String(g));
          var x = D.groups;
          if (c) {
            var F = [A].concat(k, m, l);
            void 0 !== x && F.push(x);
            var b = String(r.apply(void 0, F));
          } else b = mr(A, l, m, k, x, r);
          m >= v && ((d += l.slice(v, m) + b), (v = m + A.length));
        }
        return d + l.slice(v);
      },
    ];
  });
  var Fr = _,
    br = ee,
    Cr = function (e) {
      if (!Fr(e) && null !== e)
        throw TypeError("Can't set " + String(e) + " as a prototype");
      return e;
    },
    wr =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e,
              t = !1,
              n = {};
            try {
              (e = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(n, []),
                (t = n instanceof Array);
            } catch (e) {}
            return function (n, r) {
              return br(n), Cr(r), t ? e.call(n, r) : (n.__proto__ = r), n;
            };
          })()
        : void 0),
    Br = _,
    Sr = wr,
    _r = _,
    Tr = E,
    Or = Mn("match"),
    Rr = function (e) {
      var t;
      return _r(e) && (void 0 !== (t = e[Or]) ? !!t : "RegExp" == Tr(e));
    },
    Ir = at,
    jr = W,
    zr = g,
    $r = Mn("species"),
    Pr = function (e) {
      var t = Ir(e),
        n = jr.f;
      zr &&
        t &&
        !t[$r] &&
        n(t, $r, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    },
    Lr = g,
    Mr = p,
    Nr = Vt,
    Ur = function (e, t, n) {
      var r, u;
      return (
        Sr &&
          "function" == typeof (r = t.constructor) &&
          r !== n &&
          Br((u = r.prototype)) &&
          u !== n.prototype &&
          Sr(e, u),
        e
      );
    },
    qr = W.f,
    Zr = st.f,
    Gr = Rr,
    Hr = un,
    Qr = on,
    Vr = le.exports,
    Yr = D,
    Kr = Ye.enforce,
    Xr = Pr,
    Wr = Mn("match"),
    Jr = Mr.RegExp,
    eu = Jr.prototype,
    tu = /a/g,
    nu = /a/g,
    ru = new Jr(tu) !== tu,
    uu = Qr.UNSUPPORTED_Y;
  if (
    Lr &&
    Nr(
      "RegExp",
      !ru ||
        uu ||
        Yr(function () {
          return (
            (nu[Wr] = !1), Jr(tu) != tu || Jr(nu) == nu || "/a/i" != Jr(tu, "i")
          );
        })
    )
  ) {
    for (
      var iu = function (e, t) {
          var n,
            r = this instanceof iu,
            u = Gr(e),
            i = void 0 === t;
          if (!r && u && e.constructor === iu && i) return e;
          ru
            ? u && !i && (e = e.source)
            : e instanceof iu && (i && (t = Hr.call(e)), (e = e.source)),
            uu && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
          var o = Ur(ru ? new Jr(e, t) : Jr(e, t), r ? this : eu, iu);
          uu && n && (Kr(o).sticky = !0);
          return o;
        },
        ou = function (e) {
          (e in iu) ||
            qr(iu, e, {
              configurable: !0,
              get: function () {
                return Jr[e];
              },
              set: function (t) {
                Jr[e] = t;
              },
            });
        },
        au = Zr(Jr),
        su = 0;
      au.length > su;

    )
      ou(au[su++]);
    (eu.constructor = iu), (iu.prototype = eu), Vr(Mr, "RegExp", iu);
  }
  Xr("RegExp");
  var lu = le.exports,
    cu = ee,
    fu = D,
    pu = un,
    hu = "toString",
    Du = RegExp.prototype,
    gu = Du.toString,
    du = fu(function () {
      return "/a/b" != gu.call({ source: "a", flags: "b" });
    }),
    vu = gu.name != hu;
  (du || vu) &&
    lu(
      RegExp.prototype,
      hu,
      function () {
        var e = cu(this),
          t = String(e.source),
          n = e.flags;
        return (
          "/" +
          t +
          "/" +
          String(
            void 0 === n && e instanceof RegExp && !("flags" in Du)
              ? pu.call(e)
              : n
          )
        );
      },
      { unsafe: !0 }
    );
  var yu = ee,
    Au = Dt,
    mu = C,
    ku = ir,
    Eu = hr;
  Jn("match", 1, function (e, t, n) {
    return [
      function (t) {
        var n = mu(this),
          r = null == t ? void 0 : t[e];
        return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n));
      },
      function (e) {
        var r = n(t, e, this);
        if (r.done) return r.value;
        var u = yu(e),
          i = String(this);
        if (!u.global) return Eu(u, i);
        var o = u.unicode;
        u.lastIndex = 0;
        for (var a, s = [], l = 0; null !== (a = Eu(u, i)); ) {
          var c = String(a[0]);
          (s[l] = c),
            "" === c && (u.lastIndex = ku(i, Au(u.lastIndex), o)),
            l++;
        }
        return 0 === l ? null : s;
      },
    ];
  });
  var xu = g,
    Fu = W.f,
    bu = Function.prototype,
    Cu = bu.toString,
    wu = /^\s*function ([^ (]*)/,
    Bu = "name";
  xu &&
    !(Bu in bu) &&
    Fu(bu, Bu, {
      configurable: !0,
      get: function () {
        try {
          return Cu.call(this).match(wu)[1];
        } catch (e) {
          return "";
        }
      },
    });
  var Su = D,
    _u = function (e, t) {
      var n = [][e];
      return (
        !!n &&
        Su(function () {
          n.call(
            null,
            t ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    },
    Tu = nn,
    Ou = S,
    Ru = [].join,
    Iu = b != Object,
    ju = _u("join", ",");
  Tu(
    { target: "Array", proto: !0, forced: Iu || !ju },
    {
      join: function (e) {
        return Ru.call(Ou(this), void 0 === e ? "," : e);
      },
    }
  );
  var zu = function (e) {
      if ("function" != typeof e)
        throw TypeError(String(e) + " is not a function");
      return e;
    },
    $u = ee,
    Pu = zu,
    Lu = Mn("species"),
    Mu = function (e, t) {
      var n,
        r = $u(e).constructor;
      return void 0 === r || null == (n = $u(r)[Lu]) ? t : Pu(n);
    },
    Nu = Jn,
    Uu = Rr,
    qu = ee,
    Zu = C,
    Gu = Mu,
    Hu = ir,
    Qu = Dt,
    Vu = hr,
    Yu = yn,
    Ku = on.UNSUPPORTED_Y,
    Xu = [].push,
    Wu = Math.min,
    Ju = 4294967295;
  Nu(
    "split",
    2,
    function (e, t, n) {
      var r;
      return (
        (r =
          "c" == "abbc".split(/(b)*/)[1] ||
          4 != "test".split(/(?:)/, -1).length ||
          2 != "ab".split(/(?:ab)*/).length ||
          4 != ".".split(/(.?)(.?)/).length ||
          ".".split(/()()/).length > 1 ||
          "".split(/.?/).length
            ? function (e, n) {
                var r = String(Zu(this)),
                  u = void 0 === n ? Ju : n >>> 0;
                if (0 === u) return [];
                if (void 0 === e) return [r];
                if (!Uu(e)) return t.call(r, e, u);
                for (
                  var i,
                    o,
                    a,
                    s = [],
                    l =
                      (e.ignoreCase ? "i" : "") +
                      (e.multiline ? "m" : "") +
                      (e.unicode ? "u" : "") +
                      (e.sticky ? "y" : ""),
                    c = 0,
                    f = new RegExp(e.source, l + "g");
                  (i = Yu.call(f, r)) &&
                  !(
                    (o = f.lastIndex) > c &&
                    (s.push(r.slice(c, i.index)),
                    i.length > 1 &&
                      i.index < r.length &&
                      Xu.apply(s, i.slice(1)),
                    (a = i[0].length),
                    (c = o),
                    s.length >= u)
                  );

                )
                  f.lastIndex === i.index && f.lastIndex++;
                return (
                  c === r.length
                    ? (!a && f.test("")) || s.push("")
                    : s.push(r.slice(c)),
                  s.length > u ? s.slice(0, u) : s
                );
              }
            : "0".split(void 0, 0).length
            ? function (e, n) {
                return void 0 === e && 0 === n ? [] : t.call(this, e, n);
              }
            : t),
        [
          function (t, n) {
            var u = Zu(this),
              i = null == t ? void 0 : t[e];
            return void 0 !== i ? i.call(t, u, n) : r.call(String(u), t, n);
          },
          function (e, u) {
            var i = n(r, e, this, u, r !== t);
            if (i.done) return i.value;
            var o = qu(e),
              a = String(this),
              s = Gu(o, RegExp),
              l = o.unicode,
              c =
                (o.ignoreCase ? "i" : "") +
                (o.multiline ? "m" : "") +
                (o.unicode ? "u" : "") +
                (Ku ? "g" : "y"),
              f = new s(Ku ? "^(?:" + o.source + ")" : o, c),
              p = void 0 === u ? Ju : u >>> 0;
            if (0 === p) return [];
            if (0 === a.length) return null === Vu(f, a) ? [a] : [];
            for (var h = 0, D = 0, g = []; D < a.length; ) {
              f.lastIndex = Ku ? 0 : D;
              var d,
                v = Vu(f, Ku ? a.slice(D) : a);
              if (
                null === v ||
                (d = Wu(Qu(f.lastIndex + (Ku ? D : 0)), a.length)) === h
              )
                D = Hu(a, D, l);
              else {
                if ((g.push(a.slice(h, D)), g.length === p)) return g;
                for (var y = 1; y <= v.length - 1; y++)
                  if ((g.push(v[y]), g.length === p)) return g;
                D = h = d;
              }
            }
            return g.push(a.slice(h)), g;
          },
        ]
      );
    },
    Ku
  );
  var ei = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    ti = C,
    ni = "[\t\n\v\f\r                　\u2028\u2029\ufeff]",
    ri = RegExp("^" + ni + ni + "*"),
    ui = RegExp(ni + ni + "*$"),
    ii = function (e) {
      return function (t) {
        var n = String(ti(t));
        return (
          1 & e && (n = n.replace(ri, "")), 2 & e && (n = n.replace(ui, "")), n
        );
      };
    },
    oi = { start: ii(1), end: ii(2), trim: ii(3) },
    ai = D,
    si = ei,
    li = function (e) {
      return ai(function () {
        return !!si[e]() || "​᠎" != "​᠎"[e]() || si[e].name !== e;
      });
    },
    ci = oi.trim;
  nn(
    { target: "String", proto: !0, forced: li("trim") },
    {
      trim: function () {
        return ci(this);
      },
    }
  );
  var fi = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    },
    pi = zu,
    hi = function (e, t, n) {
      if ((pi(e), void 0 === t)) return e;
      switch (n) {
        case 0:
          return function () {
            return e.call(t);
          };
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function (n, r, u) {
            return e.call(t, n, r, u);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    },
    Di = E,
    gi =
      Array.isArray ||
      function (e) {
        return "Array" == Di(e);
      },
    di = _,
    vi = gi,
    yi = Mn("species"),
    Ai = function (e, t) {
      var n;
      return (
        vi(e) &&
          ("function" != typeof (n = e.constructor) ||
          (n !== Array && !vi(n.prototype))
            ? di(n) && null === (n = n[yi]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
      );
    },
    mi = hi,
    ki = b,
    Ei = I,
    xi = Dt,
    Fi = Ai,
    bi = [].push,
    Ci = function (e) {
      var t = 1 == e,
        n = 2 == e,
        r = 3 == e,
        u = 4 == e,
        i = 6 == e,
        o = 7 == e,
        a = 5 == e || i;
      return function (s, l, c, f) {
        for (
          var p,
            h,
            D = Ei(s),
            g = ki(D),
            d = mi(l, c, 3),
            v = xi(g.length),
            y = 0,
            A = f || Fi,
            m = t ? A(s, v) : n || o ? A(s, 0) : void 0;
          v > y;
          y++
        )
          if ((a || y in g) && ((h = d((p = g[y]), y, D)), e))
            if (t) m[y] = h;
            else if (h)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return p;
                case 6:
                  return y;
                case 2:
                  bi.call(m, p);
              }
            else
              switch (e) {
                case 4:
                  return !1;
                case 7:
                  bi.call(m, p);
              }
        return i ? -1 : r || u ? u : m;
      };
    },
    wi = {
      forEach: Ci(0),
      map: Ci(1),
      filter: Ci(2),
      some: Ci(3),
      every: Ci(4),
      find: Ci(5),
      findIndex: Ci(6),
      filterOut: Ci(7),
    },
    Bi = wi.forEach,
    Si = p,
    _i = fi,
    Ti = _u("forEach")
      ? [].forEach
      : function (e) {
          return Bi(this, e, arguments.length > 1 ? arguments[1] : void 0);
        },
    Oi = se;
  for (var Ri in _i) {
    var Ii = Si[Ri],
      ji = Ii && Ii.prototype;
    if (ji && ji.forEach !== Ti)
      try {
        Oi(ji, "forEach", Ti);
      } catch (e) {
        ji.forEach = Ti;
      }
  }
  var zi = {};
  zi[Mn("toStringTag")] = "z";
  var $i = "[object z]" === String(zi),
    Pi = $i,
    Li = E,
    Mi = Mn("toStringTag"),
    Ni =
      "Arguments" ==
      Li(
        (function () {
          return arguments;
        })()
      ),
    Ui = Pi
      ? Li
      : function (e) {
          var t, n, r;
          return void 0 === e
            ? "Undefined"
            : null === e
            ? "Null"
            : "string" ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = Object(e)), Mi))
            ? n
            : Ni
            ? Li(t)
            : "Object" == (r = Li(t)) && "function" == typeof t.callee
            ? "Arguments"
            : r;
        },
    qi = Ui,
    Zi = $i
      ? {}.toString
      : function () {
          return "[object " + qi(this) + "]";
        },
    Gi = $i,
    Hi = le.exports,
    Qi = Zi;
  Gi || Hi(Object.prototype, "toString", Qi, { unsafe: !0 });
  var Vi = p.Promise,
    Yi = le.exports,
    Ki = W.f,
    Xi = $,
    Wi = Mn("toStringTag"),
    Ji = function (e, t, n) {
      e &&
        !Xi((e = n ? e : e.prototype), Wi) &&
        Ki(e, Wi, { configurable: !0, value: t });
    },
    eo = {},
    to = eo,
    no = Mn("iterator"),
    ro = Array.prototype,
    uo = Ui,
    io = eo,
    oo = Mn("iterator"),
    ao = ee,
    so = ee,
    lo = function (e) {
      return void 0 !== e && (to.Array === e || ro[no] === e);
    },
    co = Dt,
    fo = hi,
    po = function (e) {
      if (null != e) return e[oo] || e["@@iterator"] || io[uo(e)];
    },
    ho = function (e) {
      var t = e.return;
      if (void 0 !== t) return ao(t.call(e)).value;
    },
    Do = function (e, t) {
      (this.stopped = e), (this.result = t);
    },
    go = Mn("iterator"),
    vo = !1;
  try {
    var yo = 0,
      Ao = {
        next: function () {
          return { done: !!yo++ };
        },
        return: function () {
          vo = !0;
        },
      };
    (Ao[go] = function () {
      return this;
    }),
      Array.from(Ao, function () {
        throw 2;
      });
  } catch (e) {}
  var mo,
    ko,
    Eo,
    xo = at("document", "documentElement"),
    Fo = /(?:iphone|ipod|ipad).*applewebkit/i.test(kn),
    bo = "process" == E(p.process),
    Co = p,
    wo = D,
    Bo = hi,
    So = xo,
    _o = N,
    To = Fo,
    Oo = bo,
    Ro = Co.location,
    Io = Co.setImmediate,
    jo = Co.clearImmediate,
    zo = Co.process,
    $o = Co.MessageChannel,
    Po = Co.Dispatch,
    Lo = 0,
    Mo = {},
    No = "onreadystatechange",
    Uo = function (e) {
      if (Mo.hasOwnProperty(e)) {
        var t = Mo[e];
        delete Mo[e], t();
      }
    },
    qo = function (e) {
      return function () {
        Uo(e);
      };
    },
    Zo = function (e) {
      Uo(e.data);
    },
    Go = function (e) {
      Co.postMessage(e + "", Ro.protocol + "//" + Ro.host);
    };
  (Io && jo) ||
    ((Io = function (e) {
      for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
      return (
        (Mo[++Lo] = function () {
          ("function" == typeof e ? e : Function(e)).apply(void 0, t);
        }),
        mo(Lo),
        Lo
      );
    }),
    (jo = function (e) {
      delete Mo[e];
    }),
    Oo
      ? (mo = function (e) {
          zo.nextTick(qo(e));
        })
      : Po && Po.now
      ? (mo = function (e) {
          Po.now(qo(e));
        })
      : $o && !To
      ? ((Eo = (ko = new $o()).port2),
        (ko.port1.onmessage = Zo),
        (mo = Bo(Eo.postMessage, Eo, 1)))
      : Co.addEventListener &&
        "function" == typeof postMessage &&
        !Co.importScripts &&
        Ro &&
        "file:" !== Ro.protocol &&
        !wo(Go)
      ? ((mo = Go), Co.addEventListener("message", Zo, !1))
      : (mo =
          No in _o("script")
            ? function (e) {
                So.appendChild(_o("script")).onreadystatechange = function () {
                  So.removeChild(this), Uo(e);
                };
              }
            : function (e) {
                setTimeout(qo(e), 0);
              }));
  var Ho,
    Qo,
    Vo,
    Yo,
    Ko,
    Xo,
    Wo,
    Jo,
    ea = { set: Io, clear: jo },
    ta = /web0s(?!.*chrome)/i.test(kn),
    na = p,
    ra = h.f,
    ua = ea.set,
    ia = Fo,
    oa = ta,
    aa = bo,
    sa = na.MutationObserver || na.WebKitMutationObserver,
    la = na.document,
    ca = na.process,
    fa = na.Promise,
    pa = ra(na, "queueMicrotask"),
    ha = pa && pa.value;
  ha ||
    ((Ho = function () {
      var e, t;
      for (aa && (e = ca.domain) && e.exit(); Qo; ) {
        (t = Qo.fn), (Qo = Qo.next);
        try {
          t();
        } catch (e) {
          throw (Qo ? Yo() : (Vo = void 0), e);
        }
      }
      (Vo = void 0), e && e.enter();
    }),
    ia || aa || oa || !sa || !la
      ? fa && fa.resolve
        ? (((Wo = fa.resolve(void 0)).constructor = fa),
          (Jo = Wo.then),
          (Yo = function () {
            Jo.call(Wo, Ho);
          }))
        : (Yo = aa
            ? function () {
                ca.nextTick(Ho);
              }
            : function () {
                ua.call(na, Ho);
              })
      : ((Ko = !0),
        (Xo = la.createTextNode("")),
        new sa(Ho).observe(Xo, { characterData: !0 }),
        (Yo = function () {
          Xo.data = Ko = !Ko;
        })));
  var Da =
      ha ||
      function (e) {
        var t = { fn: e, next: void 0 };
        Vo && (Vo.next = t), Qo || ((Qo = t), Yo()), (Vo = t);
      },
    ga = {},
    da = zu,
    va = function (e) {
      var t, n;
      (this.promise = new e(function (e, r) {
        if (void 0 !== t || void 0 !== n)
          throw TypeError("Bad Promise constructor");
        (t = e), (n = r);
      })),
        (this.resolve = da(t)),
        (this.reject = da(n));
    };
  ga.f = function (e) {
    return new va(e);
  };
  var ya,
    Aa,
    ma,
    ka,
    Ea = ee,
    xa = _,
    Fa = ga,
    ba = p,
    Ca = "object" == typeof window,
    wa = nn,
    Ba = p,
    Sa = at,
    _a = Vi,
    Ta = le.exports,
    Oa = function (e, t, n) {
      for (var r in t) Yi(e, r, t[r], n);
      return e;
    },
    Ra = wr,
    Ia = Ji,
    ja = Pr,
    za = _,
    $a = zu,
    Pa = function (e, t, n) {
      if (!(e instanceof t))
        throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return e;
    },
    La = ye,
    Ma = function (e, t, n) {
      var r,
        u,
        i,
        o,
        a,
        s,
        l,
        c = n && n.that,
        f = !(!n || !n.AS_ENTRIES),
        p = !(!n || !n.IS_ITERATOR),
        h = !(!n || !n.INTERRUPTED),
        D = fo(t, c, 1 + f + h),
        g = function (e) {
          return r && ho(r), new Do(!0, e);
        },
        d = function (e) {
          return f
            ? (so(e), h ? D(e[0], e[1], g) : D(e[0], e[1]))
            : h
            ? D(e, g)
            : D(e);
        };
      if (p) r = e;
      else {
        if ("function" != typeof (u = po(e)))
          throw TypeError("Target is not iterable");
        if (lo(u)) {
          for (i = 0, o = co(e.length); o > i; i++)
            if ((a = d(e[i])) && a instanceof Do) return a;
          return new Do(!1);
        }
        r = u.call(e);
      }
      for (s = r.next; !(l = s.call(r)).done; ) {
        try {
          a = d(l.value);
        } catch (e) {
          throw (ho(r), e);
        }
        if ("object" == typeof a && a && a instanceof Do) return a;
      }
      return new Do(!1);
    },
    Na = function (e, t) {
      if (!t && !vo) return !1;
      var n = !1;
      try {
        var r = {};
        (r[go] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          e(r);
      } catch (e) {}
      return n;
    },
    Ua = Mu,
    qa = ea.set,
    Za = Da,
    Ga = function (e, t) {
      if ((Ea(e), xa(t) && t.constructor === e)) return t;
      var n = Fa.f(e);
      return (0, n.resolve)(t), n.promise;
    },
    Ha = function (e, t) {
      var n = ba.console;
      n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t));
    },
    Qa = ga,
    Va = function (e) {
      try {
        return { error: !1, value: e() };
      } catch (e) {
        return { error: !0, value: e };
      }
    },
    Ya = Ye,
    Ka = Vt,
    Xa = Ca,
    Wa = bo,
    Ja = Cn,
    es = Mn("species"),
    ts = "Promise",
    ns = Ya.get,
    rs = Ya.set,
    us = Ya.getterFor(ts),
    is = _a && _a.prototype,
    os = _a,
    as = is,
    ss = Ba.TypeError,
    ls = Ba.document,
    cs = Ba.process,
    fs = Qa.f,
    ps = fs,
    hs = !!(ls && ls.createEvent && Ba.dispatchEvent),
    Ds = "function" == typeof PromiseRejectionEvent,
    gs = "unhandledrejection",
    ds = !1,
    vs = Ka(ts, function () {
      var e = La(os) !== String(os);
      if (!e && 66 === Ja) return !0;
      if (Ja >= 51 && /native code/.test(os)) return !1;
      var t = new os(function (e) {
          e(1);
        }),
        n = function (e) {
          e(
            function () {},
            function () {}
          );
        };
      return (
        ((t.constructor = {})[es] = n),
        !(ds = t.then(function () {}) instanceof n) || (!e && Xa && !Ds)
      );
    }),
    ys =
      vs ||
      !Na(function (e) {
        os.all(e).catch(function () {});
      }),
    As = function (e) {
      var t;
      return !(!za(e) || "function" != typeof (t = e.then)) && t;
    },
    ms = function (e, t) {
      if (!e.notified) {
        e.notified = !0;
        var n = e.reactions;
        Za(function () {
          for (var r = e.value, u = 1 == e.state, i = 0; n.length > i; ) {
            var o,
              a,
              s,
              l = n[i++],
              c = u ? l.ok : l.fail,
              f = l.resolve,
              p = l.reject,
              h = l.domain;
            try {
              c
                ? (u || (2 === e.rejection && Fs(e), (e.rejection = 1)),
                  !0 === c
                    ? (o = r)
                    : (h && h.enter(), (o = c(r)), h && (h.exit(), (s = !0))),
                  o === l.promise
                    ? p(ss("Promise-chain cycle"))
                    : (a = As(o))
                    ? a.call(o, f, p)
                    : f(o))
                : p(r);
            } catch (e) {
              h && !s && h.exit(), p(e);
            }
          }
          (e.reactions = []), (e.notified = !1), t && !e.rejection && Es(e);
        });
      }
    },
    ks = function (e, t, n) {
      var r, u;
      hs
        ? (((r = ls.createEvent("Event")).promise = t),
          (r.reason = n),
          r.initEvent(e, !1, !0),
          Ba.dispatchEvent(r))
        : (r = { promise: t, reason: n }),
        !Ds && (u = Ba["on" + e])
          ? u(r)
          : e === gs && Ha("Unhandled promise rejection", n);
    },
    Es = function (e) {
      qa.call(Ba, function () {
        var t,
          n = e.facade,
          r = e.value;
        if (
          xs(e) &&
          ((t = Va(function () {
            Wa ? cs.emit("unhandledRejection", r, n) : ks(gs, n, r);
          })),
          (e.rejection = Wa || xs(e) ? 2 : 1),
          t.error)
        )
          throw t.value;
      });
    },
    xs = function (e) {
      return 1 !== e.rejection && !e.parent;
    },
    Fs = function (e) {
      qa.call(Ba, function () {
        var t = e.facade;
        Wa
          ? cs.emit("rejectionHandled", t)
          : ks("rejectionhandled", t, e.value);
      });
    },
    bs = function (e, t, n) {
      return function (r) {
        e(t, r, n);
      };
    },
    Cs = function (e, t, n) {
      e.done ||
        ((e.done = !0), n && (e = n), (e.value = t), (e.state = 2), ms(e, !0));
    },
    ws = function (e, t, n) {
      if (!e.done) {
        (e.done = !0), n && (e = n);
        try {
          if (e.facade === t) throw ss("Promise can't be resolved itself");
          var r = As(t);
          r
            ? Za(function () {
                var n = { done: !1 };
                try {
                  r.call(t, bs(ws, n, e), bs(Cs, n, e));
                } catch (t) {
                  Cs(n, t, e);
                }
              })
            : ((e.value = t), (e.state = 1), ms(e, !1));
        } catch (t) {
          Cs({ done: !1 }, t, e);
        }
      }
    };
  if (
    vs &&
    ((as = (os = function (e) {
      Pa(this, os, ts), $a(e), ya.call(this);
      var t = ns(this);
      try {
        e(bs(ws, t), bs(Cs, t));
      } catch (e) {
        Cs(t, e);
      }
    }).prototype),
    ((ya = function (e) {
      rs(this, {
        type: ts,
        done: !1,
        notified: !1,
        parent: !1,
        reactions: [],
        rejection: !1,
        state: 0,
        value: void 0,
      });
    }).prototype = Oa(as, {
      then: function (e, t) {
        var n = us(this),
          r = fs(Ua(this, os));
        return (
          (r.ok = "function" != typeof e || e),
          (r.fail = "function" == typeof t && t),
          (r.domain = Wa ? cs.domain : void 0),
          (n.parent = !0),
          n.reactions.push(r),
          0 != n.state && ms(n, !1),
          r.promise
        );
      },
      catch: function (e) {
        return this.then(void 0, e);
      },
    })),
    (Aa = function () {
      var e = new ya(),
        t = ns(e);
      (this.promise = e), (this.resolve = bs(ws, t)), (this.reject = bs(Cs, t));
    }),
    (Qa.f = fs =
      function (e) {
        return e === os || e === ma ? new Aa(e) : ps(e);
      }),
    "function" == typeof _a && is !== Object.prototype)
  ) {
    (ka = is.then),
      ds ||
        (Ta(
          is,
          "then",
          function (e, t) {
            var n = this;
            return new os(function (e, t) {
              ka.call(n, e, t);
            }).then(e, t);
          },
          { unsafe: !0 }
        ),
        Ta(is, "catch", as.catch, { unsafe: !0 }));
    try {
      delete is.constructor;
    } catch (e) {}
    Ra && Ra(is, as);
  }
  wa({ global: !0, wrap: !0, forced: vs }, { Promise: os }),
    Ia(os, ts, !1),
    ja(ts),
    (ma = Sa(ts)),
    wa(
      { target: ts, stat: !0, forced: vs },
      {
        reject: function (e) {
          var t = fs(this);
          return t.reject.call(void 0, e), t.promise;
        },
      }
    ),
    wa(
      { target: ts, stat: !0, forced: vs },
      {
        resolve: function (e) {
          return Ga(this, e);
        },
      }
    ),
    wa(
      { target: ts, stat: !0, forced: ys },
      {
        all: function (e) {
          var t = this,
            n = fs(t),
            r = n.resolve,
            u = n.reject,
            i = Va(function () {
              var n = $a(t.resolve),
                i = [],
                o = 0,
                a = 1;
              Ma(e, function (e) {
                var s = o++,
                  l = !1;
                i.push(void 0),
                  a++,
                  n.call(t, e).then(function (e) {
                    l || ((l = !0), (i[s] = e), --a || r(i));
                  }, u);
              }),
                --a || r(i);
            });
          return i.error && u(i.value), n.promise;
        },
        race: function (e) {
          var t = this,
            n = fs(t),
            r = n.reject,
            u = Va(function () {
              var u = $a(t.resolve);
              Ma(e, function (e) {
                u.call(t, e).then(n.resolve, r);
              });
            });
          return u.error && r(u.value), n.promise;
        },
      }
    );
  var Bs = O,
    Ss = W,
    _s = m,
    Ts = function (e, t, n) {
      var r = Bs(t);
      r in e ? Ss.f(e, r, _s(0, n)) : (e[r] = n);
    },
    Os = D,
    Rs = Cn,
    Is = Mn("species"),
    js = function (e) {
      return (
        Rs >= 51 ||
        !Os(function () {
          var t = [];
          return (
            ((t.constructor = {})[Is] = function () {
              return { foo: 1 };
            }),
            1 !== t[e](Boolean).foo
          );
        })
      );
    },
    zs = nn,
    $s = _,
    Ps = gi,
    Ls = yt,
    Ms = Dt,
    Ns = S,
    Us = Ts,
    qs = Mn,
    Zs = js("slice"),
    Gs = qs("species"),
    Hs = [].slice,
    Qs = Math.max;
  zs(
    { target: "Array", proto: !0, forced: !Zs },
    {
      slice: function (e, t) {
        var n,
          r,
          u,
          i = Ns(this),
          o = Ms(i.length),
          a = Ls(e, o),
          s = Ls(void 0 === t ? o : t, o);
        if (
          Ps(i) &&
          ("function" != typeof (n = i.constructor) ||
          (n !== Array && !Ps(n.prototype))
            ? $s(n) && null === (n = n[Gs]) && (n = void 0)
            : (n = void 0),
          n === Array || void 0 === n)
        )
          return Hs.call(i, a, s);
        for (
          r = new (void 0 === n ? Array : n)(Qs(s - a, 0)), u = 0;
          a < s;
          a++, u++
        )
          a in i && Us(r, u, i[a]);
        return (r.length = u), r;
      },
    }
  );
  var Vs,
    Ys = Bt,
    Ks = St,
    Xs =
      Object.keys ||
      function (e) {
        return Ys(e, Ks);
      },
    Ws = W,
    Js = ee,
    el = Xs,
    tl = g
      ? Object.defineProperties
      : function (e, t) {
          Js(e);
          for (var n, r = el(t), u = r.length, i = 0; u > i; )
            Ws.f(e, (n = r[i++]), t[n]);
          return e;
        },
    nl = ee,
    rl = tl,
    ul = St,
    il = Ie,
    ol = xo,
    al = N,
    sl = Re("IE_PROTO"),
    ll = function () {},
    cl = function (e) {
      return "<script>" + e + "</" + "script>";
    },
    fl = function () {
      try {
        Vs = document.domain && new ActiveXObject("htmlfile");
      } catch (e) {}
      var e, t;
      fl = Vs
        ? (function (e) {
            e.write(cl("")), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          })(Vs)
        : (((t = al("iframe")).style.display = "none"),
          ol.appendChild(t),
          (t.src = String("javascript:")),
          (e = t.contentWindow.document).open(),
          e.write(cl("document.F=Object")),
          e.close(),
          e.F);
      for (var n = ul.length; n--; ) delete fl.prototype[ul[n]];
      return fl();
    };
  il[sl] = !0;
  var pl =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((ll.prototype = nl(e)),
              (n = new ll()),
              (ll.prototype = null),
              (n[sl] = e))
            : (n = fl()),
          void 0 === t ? n : rl(n, t)
        );
      },
    hl = pl,
    Dl = W,
    gl = Mn("unscopables"),
    dl = Array.prototype;
  null == dl[gl] && Dl.f(dl, gl, { configurable: !0, value: hl(null) });
  var vl,
    yl,
    Al,
    ml = function (e) {
      dl[gl][e] = !0;
    },
    kl = !D(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      );
    }),
    El = $,
    xl = I,
    Fl = kl,
    bl = Re("IE_PROTO"),
    Cl = Object.prototype,
    wl = Fl
      ? Object.getPrototypeOf
      : function (e) {
          return (
            (e = xl(e)),
            El(e, bl)
              ? e[bl]
              : "function" == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? Cl
              : null
          );
        },
    Bl = D,
    Sl = wl,
    _l = se,
    Tl = $,
    Ol = Mn("iterator"),
    Rl = !1;
  [].keys &&
    ("next" in (Al = [].keys())
      ? (yl = Sl(Sl(Al))) !== Object.prototype && (vl = yl)
      : (Rl = !0)),
    (null == vl ||
      Bl(function () {
        var e = {};
        return vl[Ol].call(e) !== e;
      })) &&
      (vl = {}),
    Tl(vl, Ol) ||
      _l(vl, Ol, function () {
        return this;
      });
  var Il = { IteratorPrototype: vl, BUGGY_SAFARI_ITERATORS: Rl },
    jl = Il.IteratorPrototype,
    zl = pl,
    $l = m,
    Pl = Ji,
    Ll = eo,
    Ml = function () {
      return this;
    },
    Nl = nn,
    Ul = function (e, t, n) {
      var r = t + " Iterator";
      return (
        (e.prototype = zl(jl, { next: $l(1, n) })),
        Pl(e, r, !1),
        (Ll[r] = Ml),
        e
      );
    },
    ql = wl,
    Zl = wr,
    Gl = Ji,
    Hl = se,
    Ql = le.exports,
    Vl = eo,
    Yl = Il.IteratorPrototype,
    Kl = Il.BUGGY_SAFARI_ITERATORS,
    Xl = Mn("iterator"),
    Wl = "keys",
    Jl = "values",
    ec = "entries",
    tc = function () {
      return this;
    },
    nc = function (e, t, n, r, u, i, o) {
      Ul(n, t, r);
      var a,
        s,
        l,
        c = function (e) {
          if (e === u && g) return g;
          if (!Kl && e in h) return h[e];
          switch (e) {
            case Wl:
            case Jl:
            case ec:
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this);
          };
        },
        f = t + " Iterator",
        p = !1,
        h = e.prototype,
        D = h[Xl] || h["@@iterator"] || (u && h[u]),
        g = (!Kl && D) || c(u),
        d = ("Array" == t && h.entries) || D;
      if (
        (d &&
          ((a = ql(d.call(new e()))),
          Yl !== Object.prototype &&
            a.next &&
            (ql(a) !== Yl &&
              (Zl ? Zl(a, Yl) : "function" != typeof a[Xl] && Hl(a, Xl, tc)),
            Gl(a, f, !0))),
        u == Jl &&
          D &&
          D.name !== Jl &&
          ((p = !0),
          (g = function () {
            return D.call(this);
          })),
        h[Xl] !== g && Hl(h, Xl, g),
        (Vl[t] = g),
        u)
      )
        if (((s = { values: c(Jl), keys: i ? g : c(Wl), entries: c(ec) }), o))
          for (l in s) (Kl || p || !(l in h)) && Ql(h, l, s[l]);
        else Nl({ target: t, proto: !0, forced: Kl || p }, s);
      return s;
    },
    rc = S,
    uc = ml,
    ic = eo,
    oc = Ye,
    ac = nc,
    sc = "Array Iterator",
    lc = oc.set,
    cc = oc.getterFor(sc),
    fc = ac(
      Array,
      "Array",
      function (e, t) {
        lc(this, { type: sc, target: rc(e), index: 0, kind: t });
      },
      function () {
        var e = cc(this),
          t = e.target,
          n = e.kind,
          r = e.index++;
        return !t || r >= t.length
          ? ((e.target = void 0), { value: void 0, done: !0 })
          : "keys" == n
          ? { value: r, done: !1 }
          : "values" == n
          ? { value: t[r], done: !1 }
          : { value: [r, t[r]], done: !1 };
      },
      "values"
    );
  (ic.Arguments = ic.Array), uc("keys"), uc("values"), uc("entries");
  var pc = rr.charAt,
    hc = Ye,
    Dc = nc,
    gc = "String Iterator",
    dc = hc.set,
    vc = hc.getterFor(gc);
  Dc(
    String,
    "String",
    function (e) {
      dc(this, { type: gc, string: String(e), index: 0 });
    },
    function () {
      var e,
        t = vc(this),
        n = t.string,
        r = t.index;
      return r >= n.length
        ? { value: void 0, done: !0 }
        : ((e = pc(n, r)), (t.index += e.length), { value: e, done: !1 });
    }
  );
  var yc = p,
    Ac = fi,
    mc = fc,
    kc = se,
    Ec = Mn,
    xc = Ec("iterator"),
    Fc = Ec("toStringTag"),
    bc = mc.values;
  for (var Cc in Ac) {
    var wc = yc[Cc],
      Bc = wc && wc.prototype;
    if (Bc) {
      if (Bc[xc] !== bc)
        try {
          kc(Bc, xc, bc);
        } catch (e) {
          Bc[xc] = bc;
        }
      if ((Bc[Fc] || kc(Bc, Fc, Cc), Ac[Cc]))
        for (var Sc in mc)
          if (Bc[Sc] !== mc[Sc])
            try {
              kc(Bc, Sc, mc[Sc]);
            } catch (e) {
              Bc[Sc] = mc[Sc];
            }
    }
  }
  var _c = nn,
    Tc = D,
    Oc = gi,
    Rc = _,
    Ic = I,
    jc = Dt,
    zc = Ts,
    $c = Ai,
    Pc = js,
    Lc = Cn,
    Mc = Mn("isConcatSpreadable"),
    Nc = 9007199254740991,
    Uc = "Maximum allowed index exceeded",
    qc =
      Lc >= 51 ||
      !Tc(function () {
        var e = [];
        return (e[Mc] = !1), e.concat()[0] !== e;
      }),
    Zc = Pc("concat"),
    Gc = function (e) {
      if (!Rc(e)) return !1;
      var t = e[Mc];
      return void 0 !== t ? !!t : Oc(e);
    };
  _c(
    { target: "Array", proto: !0, forced: !qc || !Zc },
    {
      concat: function (e) {
        var t,
          n,
          r,
          u,
          i,
          o = Ic(this),
          a = $c(o, 0),
          s = 0;
        for (t = -1, r = arguments.length; t < r; t++)
          if (Gc((i = -1 === t ? o : arguments[t]))) {
            if (s + (u = jc(i.length)) > Nc) throw TypeError(Uc);
            for (n = 0; n < u; n++, s++) n in i && zc(a, s, i[n]);
          } else {
            if (s >= Nc) throw TypeError(Uc);
            zc(a, s++, i);
          }
        return (a.length = s), a;
      },
    }
  );
  var Hc = nn,
    Qc = yt,
    Vc = ft,
    Yc = Dt,
    Kc = I,
    Xc = Ai,
    Wc = Ts,
    Jc = js("splice"),
    ef = Math.max,
    tf = Math.min,
    nf = 9007199254740991,
    rf = "Maximum allowed length exceeded";
  Hc(
    { target: "Array", proto: !0, forced: !Jc },
    {
      splice: function (e, t) {
        var n,
          r,
          u,
          i,
          o,
          a,
          s = Kc(this),
          l = Yc(s.length),
          c = Qc(e, l),
          f = arguments.length;
        if (
          (0 === f
            ? (n = r = 0)
            : 1 === f
            ? ((n = 0), (r = l - c))
            : ((n = f - 2), (r = tf(ef(Vc(t), 0), l - c))),
          l + n - r > nf)
        )
          throw TypeError(rf);
        for (u = Xc(s, r), i = 0; i < r; i++)
          (o = c + i) in s && Wc(u, i, s[o]);
        if (((u.length = r), n < r)) {
          for (i = c; i < l - r; i++)
            (a = i + n), (o = i + r) in s ? (s[a] = s[o]) : delete s[a];
          for (i = l; i > l - r + n; i--) delete s[i - 1];
        } else if (n > r)
          for (i = l - r; i > c; i--)
            (a = i + n - 1), (o = i + r - 1) in s ? (s[a] = s[o]) : delete s[a];
        for (i = 0; i < n; i++) s[i + c] = arguments[i + 2];
        return (s.length = l - r + n), u;
      },
    }
  );
  var uf = wi.map;
  nn(
    { target: "Array", proto: !0, forced: !js("map") },
    {
      map: function (e) {
        return uf(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var of = nn,
    af = oi.start,
    sf = li("trimStart"),
    lf = sf
      ? function () {
          return af(this);
        }
      : "".trimStart;
  of(
    { target: "String", proto: !0, forced: sf },
    { trimStart: lf, trimLeft: lf }
  );
  var cf =
      Object.is ||
      function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      },
    ff = ee,
    pf = C,
    hf = cf,
    Df = hr;
  Jn("search", 1, function (e, t, n) {
    return [
      function (t) {
        var n = pf(this),
          r = null == t ? void 0 : t[e];
        return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n));
      },
      function (e) {
        var r = n(t, e, this);
        if (r.done) return r.value;
        var u = ff(e),
          i = String(this),
          o = u.lastIndex;
        hf(o, 0) || (u.lastIndex = 0);
        var a = Df(u, i);
        return (
          hf(u.lastIndex, o) || (u.lastIndex = o), null === a ? -1 : a.index
        );
      },
    ];
  });
  var gf = nn,
    df = oi.end,
    vf = li("trimEnd"),
    yf = vf
      ? function () {
          return df(this);
        }
      : "".trimEnd;
  gf(
    { target: "String", proto: !0, forced: vf },
    { trimEnd: yf, trimRight: yf }
  );
  var Af = wi.filter;
  nn(
    { target: "Array", proto: !0, forced: !js("filter") },
    {
      filter: function (e) {
        return Af(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  var mf = C,
    kf = /"/g,
    Ef = D,
    xf = function (e, t, n, r) {
      var u = String(mf(e)),
        i = "<" + t;
      return (
        "" !== n &&
          (i += " " + n + '="' + String(r).replace(kf, "&quot;") + '"'),
        i + ">" + u + "</" + t + ">"
      );
    };
  nn(
    {
      target: "String",
      proto: !0,
      forced: (function (e) {
        return Ef(function () {
          var t = ""[e]('"');
          return t !== t.toLowerCase() || t.split('"').length > 3;
        });
      })("link"),
    },
    {
      link: function (e) {
        return xf(this, "a", "href", e);
      },
    }
  );
  var Ff = I,
    bf = Xs;
  nn(
    {
      target: "Object",
      stat: !0,
      forced: D(function () {
        bf(1);
      }),
    },
    {
      keys: function (e) {
        return bf(Ff(e));
      },
    }
  );
  var Cf = xt.includes,
    wf = ml;
  nn(
    { target: "Array", proto: !0 },
    {
      includes: function (e) {
        return Cf(this, e, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
    wf("includes");
  var Bf = Rr,
    Sf = Mn("match"),
    _f = function (e) {
      if (Bf(e))
        throw TypeError("The method doesn't accept regular expressions");
      return e;
    },
    Tf = C;
  function Of() {
    return {
      baseUrl: null,
      breaks: !1,
      extensions: null,
      gfm: !0,
      headerIds: !0,
      headerPrefix: "",
      highlight: null,
      langPrefix: "language-",
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartLists: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1,
    };
  }
  nn(
    {
      target: "String",
      proto: !0,
      forced: !(function (e) {
        var t = /./;
        try {
          "/./"[e](t);
        } catch (n) {
          try {
            return (t[Sf] = !1), "/./"[e](t);
          } catch (e) {}
        }
        return !1;
      })("includes"),
    },
    {
      includes: function (e) {
        return !!~String(Tf(this)).indexOf(
          _f(e),
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    }
  );
  var Rf = {
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !0,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartLists: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1,
  };
  var If = /[&<>"']/,
    jf = /[&<>"']/g,
    zf = /[<>"']|&(?!#?\w+;)/,
    $f = /[<>"']|&(?!#?\w+;)/g,
    Pf = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    },
    Lf = function (e) {
      return Pf[e];
    };
  function Mf(e, t) {
    if (t) {
      if (If.test(e)) return e.replace(jf, Lf);
    } else if (zf.test(e)) return e.replace($f, Lf);
    return e;
  }
  var Nf = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
  function Uf(e) {
    return e.replace(Nf, function (e, t) {
      return "colon" === (t = t.toLowerCase())
        ? ":"
        : "#" === t.charAt(0)
        ? "x" === t.charAt(1)
          ? String.fromCharCode(parseInt(t.substring(2), 16))
          : String.fromCharCode(+t.substring(1))
        : "";
    });
  }
  var qf = /(^|[^\[])\^/g;
  function Zf(e, t) {
    (e = e.source || e), (t = t || "");
    var n = {
      replace: function (t, r) {
        return (
          (r = (r = r.source || r).replace(qf, "$1")), (e = e.replace(t, r)), n
        );
      },
      getRegex: function () {
        return new RegExp(e, t);
      },
    };
    return n;
  }
  var Gf = /[^\w:]/g,
    Hf = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  function Qf(e, t, n) {
    if (e) {
      var r;
      try {
        r = decodeURIComponent(Uf(n)).replace(Gf, "").toLowerCase();
      } catch (e) {
        return null;
      }
      if (
        0 === r.indexOf("javascript:") ||
        0 === r.indexOf("vbscript:") ||
        0 === r.indexOf("data:")
      )
        return null;
    }
    t &&
      !Hf.test(n) &&
      (n = (function (e, t) {
        Vf[" " + e] ||
          (Yf.test(e)
            ? (Vf[" " + e] = e + "/")
            : (Vf[" " + e] = tp(e, "/", !0)));
        var n = -1 === (e = Vf[" " + e]).indexOf(":");
        return "//" === t.substring(0, 2)
          ? n
            ? t
            : e.replace(Kf, "$1") + t
          : "/" === t.charAt(0)
          ? n
            ? t
            : e.replace(Xf, "$1") + t
          : e + t;
      })(t, n));
    try {
      n = encodeURI(n).replace(/%25/g, "%");
    } catch (e) {
      return null;
    }
    return n;
  }
  var Vf = {},
    Yf = /^[^:]+:\/*[^/]*$/,
    Kf = /^([^:]+:)[\s\S]*$/,
    Xf = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  var Wf = { exec: function () {} };
  function Jf(e) {
    for (var t, n, r = 1; r < arguments.length; r++)
      for (n in (t = arguments[r]))
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return e;
  }
  function ep(e, t) {
    var n = e
        .replace(/\|/g, function (e, t, n) {
          for (var r = !1, u = t; --u >= 0 && "\\" === n[u]; ) r = !r;
          return r ? "|" : " |";
        })
        .split(/ \|/),
      r = 0;
    if (
      (n[0].trim() || n.shift(),
      n.length > 0 && !n[n.length - 1].trim() && n.pop(),
      n.length > t)
    )
      n.splice(t);
    else for (; n.length < t; ) n.push("");
    for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
    return n;
  }
  function tp(e, t, n) {
    var r = e.length;
    if (0 === r) return "";
    for (var u = 0; u < r; ) {
      var i = e.charAt(r - u - 1);
      if (i !== t || n) {
        if (i === t || !n) break;
        u++;
      } else u++;
    }
    return e.substr(0, r - u);
  }
  function np(e) {
    e &&
      e.sanitize &&
      !e.silent &&
      console.warn(
        "marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"
      );
  }
  function rp(e, t) {
    if (t < 1) return "";
    for (var n = ""; t > 1; ) 1 & t && (n += e), (t >>= 1), (e += e);
    return n + e;
  }
  function up(e, t, n, r) {
    var u = t.href,
      i = t.title ? Mf(t.title) : null,
      o = e[1].replace(/\\([\[\]])/g, "$1");
    if ("!" !== e[0].charAt(0)) {
      r.state.inLink = !0;
      var a = {
        type: "link",
        raw: n,
        href: u,
        title: i,
        text: o,
        tokens: r.inlineTokens(o, []),
      };
      return (r.state.inLink = !1), a;
    }
    return { type: "image", raw: n, href: u, title: i, text: Mf(o) };
  }
  var ip = (function () {
      function e(n) {
        t(this, e), (this.options = n || Rf);
      }
      return (
        r(e, [
          {
            key: "space",
            value: function (e) {
              var t = this.rules.block.newline.exec(e);
              if (t && t[0].length > 0) return { type: "space", raw: t[0] };
            },
          },
          {
            key: "code",
            value: function (e) {
              var t = this.rules.block.code.exec(e);
              if (t) {
                var n = t[0].replace(/^ {1,4}/gm, "");
                return {
                  type: "code",
                  raw: t[0],
                  codeBlockStyle: "indented",
                  text: this.options.pedantic ? n : tp(n, "\n"),
                };
              }
            },
          },
          {
            key: "fences",
            value: function (e) {
              var t = this.rules.block.fences.exec(e);
              if (t) {
                var n = t[0],
                  r = (function (e, t) {
                    var n = e.match(/^(\s+)(?:```)/);
                    if (null === n) return t;
                    var r = n[1];
                    return t
                      .split("\n")
                      .map(function (e) {
                        var t = e.match(/^\s+/);
                        return null === t
                          ? e
                          : o(t, 1)[0].length >= r.length
                          ? e.slice(r.length)
                          : e;
                      })
                      .join("\n");
                  })(n, t[3] || "");
                return {
                  type: "code",
                  raw: n,
                  lang: t[2] ? t[2].trim() : t[2],
                  text: r,
                };
              }
            },
          },
          {
            key: "heading",
            value: function (e) {
              var t = this.rules.block.heading.exec(e);
              if (t) {
                var n = t[2].trim();
                if (/#$/.test(n)) {
                  var r = tp(n, "#");
                  this.options.pedantic
                    ? (n = r.trim())
                    : (r && !/ $/.test(r)) || (n = r.trim());
                }
                var u = {
                  type: "heading",
                  raw: t[0],
                  depth: t[1].length,
                  text: n,
                  tokens: [],
                };
                return this.lexer.inline(u.text, u.tokens), u;
              }
            },
          },
          {
            key: "hr",
            value: function (e) {
              var t = this.rules.block.hr.exec(e);
              if (t) return { type: "hr", raw: t[0] };
            },
          },
          {
            key: "blockquote",
            value: function (e) {
              var t = this.rules.block.blockquote.exec(e);
              if (t) {
                var n = t[0].replace(/^ *> ?/gm, "");
                return {
                  type: "blockquote",
                  raw: t[0],
                  tokens: this.lexer.blockTokens(n, []),
                  text: n,
                };
              }
            },
          },
          {
            key: "list",
            value: function (e) {
              var t = this.rules.block.list.exec(e);
              if (t) {
                var n,
                  r,
                  u,
                  i,
                  o,
                  a,
                  s,
                  c,
                  f,
                  p,
                  h,
                  D,
                  g = t[1].trim(),
                  d = g.length > 1,
                  v = {
                    type: "list",
                    raw: "",
                    ordered: d,
                    start: d ? +g.slice(0, -1) : "",
                    loose: !1,
                    items: [],
                  };
                (g = d ? "\\d{1,9}\\".concat(g.slice(-1)) : "\\".concat(g)),
                  this.options.pedantic && (g = d ? g : "[*+-]");
                for (
                  var y = new RegExp(
                    "^( {0,3}".concat(g, ")((?: [^\\n]*)?(?:\\n|$))")
                  );
                  e &&
                  ((D = !1), (t = y.exec(e))) &&
                  !this.rules.block.hr.test(e);

                ) {
                  if (
                    ((n = t[0]),
                    (e = e.substring(n.length)),
                    (c = t[2].split("\n", 1)[0]),
                    (f = e.split("\n", 1)[0]),
                    this.options.pedantic
                      ? ((i = 2), (h = c.trimLeft()))
                      : ((i = (i = t[2].search(/[^ ]/)) > 4 ? 1 : i),
                        (h = c.slice(i)),
                        (i += t[1].length)),
                    (a = !1),
                    !c &&
                      /^ *$/.test(f) &&
                      ((n += f + "\n"),
                      (e = e.substring(f.length + 1)),
                      (D = !0)),
                    !D)
                  )
                    for (
                      var A = new RegExp(
                        "^ {0,".concat(
                          Math.min(3, i - 1),
                          "}(?:[*+-]|\\d{1,9}[.)])"
                        )
                      );
                      e &&
                      ((c = p = e.split("\n", 1)[0]),
                      this.options.pedantic &&
                        (c = c.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")),
                      !A.test(c));

                    ) {
                      if (c.search(/[^ ]/) >= i || !c.trim())
                        h += "\n" + c.slice(i);
                      else {
                        if (a) break;
                        h += "\n" + c;
                      }
                      a || c.trim() || (a = !0),
                        (n += p + "\n"),
                        (e = e.substring(p.length + 1));
                    }
                  v.loose ||
                    (s ? (v.loose = !0) : /\n *\n *$/.test(n) && (s = !0)),
                    this.options.gfm &&
                      (r = /^\[[ xX]\] /.exec(h)) &&
                      ((u = "[ ] " !== r[0]),
                      (h = h.replace(/^\[[ xX]\] +/, ""))),
                    v.items.push({
                      type: "list_item",
                      raw: n,
                      task: !!r,
                      checked: u,
                      loose: !1,
                      text: h,
                    }),
                    (v.raw += n);
                }
                (v.items[v.items.length - 1].raw = n.trimRight()),
                  (v.items[v.items.length - 1].text = h.trimRight()),
                  (v.raw = v.raw.trimRight());
                var m = v.items.length;
                for (o = 0; o < m; o++) {
                  (this.lexer.state.top = !1),
                    (v.items[o].tokens = this.lexer.blockTokens(
                      v.items[o].text,
                      []
                    ));
                  var k = v.items[o].tokens.filter(function (e) {
                      return "space" === e.type;
                    }),
                    E = k.every(function (e) {
                      var t,
                        n = 0,
                        r = l(e.raw.split(""));
                      try {
                        for (r.s(); !(t = r.n()).done; ) {
                          if (("\n" === t.value && (n += 1), n > 1)) return !0;
                        }
                      } catch (e) {
                        r.e(e);
                      } finally {
                        r.f();
                      }
                      return !1;
                    });
                  !v.loose &&
                    k.length &&
                    E &&
                    ((v.loose = !0), (v.items[o].loose = !0));
                }
                return v;
              }
            },
          },
          {
            key: "html",
            value: function (e) {
              var t = this.rules.block.html.exec(e);
              if (t) {
                var n = {
                  type: "html",
                  raw: t[0],
                  pre:
                    !this.options.sanitizer &&
                    ("pre" === t[1] || "script" === t[1] || "style" === t[1]),
                  text: t[0],
                };
                return (
                  this.options.sanitize &&
                    ((n.type = "paragraph"),
                    (n.text = this.options.sanitizer
                      ? this.options.sanitizer(t[0])
                      : Mf(t[0])),
                    (n.tokens = []),
                    this.lexer.inline(n.text, n.tokens)),
                  n
                );
              }
            },
          },
          {
            key: "def",
            value: function (e) {
              var t = this.rules.block.def.exec(e);
              if (t)
                return (
                  t[3] && (t[3] = t[3].substring(1, t[3].length - 1)),
                  {
                    type: "def",
                    tag: t[1].toLowerCase().replace(/\s+/g, " "),
                    raw: t[0],
                    href: t[2],
                    title: t[3],
                  }
                );
            },
          },
          {
            key: "table",
            value: function (e) {
              var t = this.rules.block.table.exec(e);
              if (t) {
                var n = {
                  type: "table",
                  header: ep(t[1]).map(function (e) {
                    return { text: e };
                  }),
                  align: t[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                  rows:
                    t[3] && t[3].trim()
                      ? t[3].replace(/\n[ \t]*$/, "").split("\n")
                      : [],
                };
                if (n.header.length === n.align.length) {
                  n.raw = t[0];
                  var r,
                    u,
                    i,
                    o,
                    a = n.align.length;
                  for (r = 0; r < a; r++)
                    /^ *-+: *$/.test(n.align[r])
                      ? (n.align[r] = "right")
                      : /^ *:-+: *$/.test(n.align[r])
                      ? (n.align[r] = "center")
                      : /^ *:-+ *$/.test(n.align[r])
                      ? (n.align[r] = "left")
                      : (n.align[r] = null);
                  for (a = n.rows.length, r = 0; r < a; r++)
                    n.rows[r] = ep(n.rows[r], n.header.length).map(function (
                      e
                    ) {
                      return { text: e };
                    });
                  for (a = n.header.length, u = 0; u < a; u++)
                    (n.header[u].tokens = []),
                      this.lexer.inlineTokens(
                        n.header[u].text,
                        n.header[u].tokens
                      );
                  for (a = n.rows.length, u = 0; u < a; u++)
                    for (o = n.rows[u], i = 0; i < o.length; i++)
                      (o[i].tokens = []),
                        this.lexer.inlineTokens(o[i].text, o[i].tokens);
                  return n;
                }
              }
            },
          },
          {
            key: "lheading",
            value: function (e) {
              var t = this.rules.block.lheading.exec(e);
              if (t) {
                var n = {
                  type: "heading",
                  raw: t[0],
                  depth: "=" === t[2].charAt(0) ? 1 : 2,
                  text: t[1],
                  tokens: [],
                };
                return this.lexer.inline(n.text, n.tokens), n;
              }
            },
          },
          {
            key: "paragraph",
            value: function (e) {
              var t = this.rules.block.paragraph.exec(e);
              if (t) {
                var n = {
                  type: "paragraph",
                  raw: t[0],
                  text:
                    "\n" === t[1].charAt(t[1].length - 1)
                      ? t[1].slice(0, -1)
                      : t[1],
                  tokens: [],
                };
                return this.lexer.inline(n.text, n.tokens), n;
              }
            },
          },
          {
            key: "text",
            value: function (e) {
              var t = this.rules.block.text.exec(e);
              if (t) {
                var n = { type: "text", raw: t[0], text: t[0], tokens: [] };
                return this.lexer.inline(n.text, n.tokens), n;
              }
            },
          },
          {
            key: "escape",
            value: function (e) {
              var t = this.rules.inline.escape.exec(e);
              if (t) return { type: "escape", raw: t[0], text: Mf(t[1]) };
            },
          },
          {
            key: "tag",
            value: function (e) {
              var t = this.rules.inline.tag.exec(e);
              if (t)
                return (
                  !this.lexer.state.inLink && /^<a /i.test(t[0])
                    ? (this.lexer.state.inLink = !0)
                    : this.lexer.state.inLink &&
                      /^<\/a>/i.test(t[0]) &&
                      (this.lexer.state.inLink = !1),
                  !this.lexer.state.inRawBlock &&
                  /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
                    ? (this.lexer.state.inRawBlock = !0)
                    : this.lexer.state.inRawBlock &&
                      /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
                      (this.lexer.state.inRawBlock = !1),
                  {
                    type: this.options.sanitize ? "text" : "html",
                    raw: t[0],
                    inLink: this.lexer.state.inLink,
                    inRawBlock: this.lexer.state.inRawBlock,
                    text: this.options.sanitize
                      ? this.options.sanitizer
                        ? this.options.sanitizer(t[0])
                        : Mf(t[0])
                      : t[0],
                  }
                );
            },
          },
          {
            key: "link",
            value: function (e) {
              var t = this.rules.inline.link.exec(e);
              if (t) {
                var n = t[2].trim();
                if (!this.options.pedantic && /^</.test(n)) {
                  if (!/>$/.test(n)) return;
                  var r = tp(n.slice(0, -1), "\\");
                  if ((n.length - r.length) % 2 == 0) return;
                } else {
                  var u = (function (e, t) {
                    if (-1 === e.indexOf(t[1])) return -1;
                    for (var n = e.length, r = 0, u = 0; u < n; u++)
                      if ("\\" === e[u]) u++;
                      else if (e[u] === t[0]) r++;
                      else if (e[u] === t[1] && --r < 0) return u;
                    return -1;
                  })(t[2], "()");
                  if (u > -1) {
                    var i = (0 === t[0].indexOf("!") ? 5 : 4) + t[1].length + u;
                    (t[2] = t[2].substring(0, u)),
                      (t[0] = t[0].substring(0, i).trim()),
                      (t[3] = "");
                  }
                }
                var o = t[2],
                  a = "";
                if (this.options.pedantic) {
                  var s = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(o);
                  s && ((o = s[1]), (a = s[3]));
                } else a = t[3] ? t[3].slice(1, -1) : "";
                return (
                  (o = o.trim()),
                  /^</.test(o) &&
                    (o =
                      this.options.pedantic && !/>$/.test(n)
                        ? o.slice(1)
                        : o.slice(1, -1)),
                  up(
                    t,
                    {
                      href: o ? o.replace(this.rules.inline._escapes, "$1") : o,
                      title: a
                        ? a.replace(this.rules.inline._escapes, "$1")
                        : a,
                    },
                    t[0],
                    this.lexer
                  )
                );
              }
            },
          },
          {
            key: "reflink",
            value: function (e, t) {
              var n;
              if (
                (n = this.rules.inline.reflink.exec(e)) ||
                (n = this.rules.inline.nolink.exec(e))
              ) {
                var r = (n[2] || n[1]).replace(/\s+/g, " ");
                if (!(r = t[r.toLowerCase()]) || !r.href) {
                  var u = n[0].charAt(0);
                  return { type: "text", raw: u, text: u };
                }
                return up(n, r, n[0], this.lexer);
              }
            },
          },
          {
            key: "emStrong",
            value: function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "",
                r = this.rules.inline.emStrong.lDelim.exec(e);
              if (
                r &&
                (!r[3] ||
                  !n.match(
                    /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/
                  ))
              ) {
                var u = r[1] || r[2] || "";
                if (
                  !u ||
                  (u && ("" === n || this.rules.inline.punctuation.exec(n)))
                ) {
                  var i,
                    o,
                    a = r[0].length - 1,
                    s = a,
                    l = 0,
                    c =
                      "*" === r[0][0]
                        ? this.rules.inline.emStrong.rDelimAst
                        : this.rules.inline.emStrong.rDelimUnd;
                  for (
                    c.lastIndex = 0, t = t.slice(-1 * e.length + a);
                    null != (r = c.exec(t));

                  )
                    if ((i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]))
                      if (((o = i.length), r[3] || r[4])) s += o;
                      else if (!((r[5] || r[6]) && a % 3) || (a + o) % 3) {
                        if (!((s -= o) > 0)) {
                          if (
                            ((o = Math.min(o, o + s + l)), Math.min(a, o) % 2)
                          ) {
                            var f = e.slice(1, a + r.index + o);
                            return {
                              type: "em",
                              raw: e.slice(0, a + r.index + o + 1),
                              text: f,
                              tokens: this.lexer.inlineTokens(f, []),
                            };
                          }
                          var p = e.slice(2, a + r.index + o - 1);
                          return {
                            type: "strong",
                            raw: e.slice(0, a + r.index + o + 1),
                            text: p,
                            tokens: this.lexer.inlineTokens(p, []),
                          };
                        }
                      } else l += o;
                }
              }
            },
          },
          {
            key: "codespan",
            value: function (e) {
              var t = this.rules.inline.code.exec(e);
              if (t) {
                var n = t[2].replace(/\n/g, " "),
                  r = /[^ ]/.test(n),
                  u = /^ /.test(n) && / $/.test(n);
                return (
                  r && u && (n = n.substring(1, n.length - 1)),
                  (n = Mf(n, !0)),
                  { type: "codespan", raw: t[0], text: n }
                );
              }
            },
          },
          {
            key: "br",
            value: function (e) {
              var t = this.rules.inline.br.exec(e);
              if (t) return { type: "br", raw: t[0] };
            },
          },
          {
            key: "del",
            value: function (e) {
              var t = this.rules.inline.del.exec(e);
              if (t)
                return {
                  type: "del",
                  raw: t[0],
                  text: t[2],
                  tokens: this.lexer.inlineTokens(t[2], []),
                };
            },
          },
          {
            key: "autolink",
            value: function (e, t) {
              var n,
                r,
                u = this.rules.inline.autolink.exec(e);
              if (u)
                return (
                  (r =
                    "@" === u[2]
                      ? "mailto:" +
                        (n = Mf(this.options.mangle ? t(u[1]) : u[1]))
                      : (n = Mf(u[1]))),
                  {
                    type: "link",
                    raw: u[0],
                    text: n,
                    href: r,
                    tokens: [{ type: "text", raw: n, text: n }],
                  }
                );
            },
          },
          {
            key: "url",
            value: function (e, t) {
              var n;
              if ((n = this.rules.inline.url.exec(e))) {
                var r, u;
                if ("@" === n[2])
                  u =
                    "mailto:" + (r = Mf(this.options.mangle ? t(n[0]) : n[0]));
                else {
                  var i;
                  do {
                    (i = n[0]),
                      (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
                  } while (i !== n[0]);
                  (r = Mf(n[0])), (u = "www." === n[1] ? "http://" + r : r);
                }
                return {
                  type: "link",
                  raw: n[0],
                  text: r,
                  href: u,
                  tokens: [{ type: "text", raw: r, text: r }],
                };
              }
            },
          },
          {
            key: "inlineText",
            value: function (e, t) {
              var n,
                r = this.rules.inline.text.exec(e);
              if (r)
                return (
                  (n = this.lexer.state.inRawBlock
                    ? this.options.sanitize
                      ? this.options.sanitizer
                        ? this.options.sanitizer(r[0])
                        : Mf(r[0])
                      : r[0]
                    : Mf(this.options.smartypants ? t(r[0]) : r[0])),
                  { type: "text", raw: r[0], text: n }
                );
            },
          },
        ]),
        e
      );
    })(),
    op = {
      newline: /^(?: *(?:\n|$))+/,
      code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
      fences:
        /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
      hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
      html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
      def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
      table: Wf,
      lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
      _paragraph:
        /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
      text: /^[^\n]+/,
      _label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
      _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
    };
  (op.def = Zf(op.def)
    .replace("label", op._label)
    .replace("title", op._title)
    .getRegex()),
    (op.bullet = /(?:[*+-]|\d{1,9}[.)])/),
    (op.listItemStart = Zf(/^( *)(bull) */)
      .replace("bull", op.bullet)
      .getRegex()),
    (op.list = Zf(op.list)
      .replace(/bull/g, op.bullet)
      .replace(
        "hr",
        "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
      )
      .replace("def", "\\n+(?=" + op.def.source + ")")
      .getRegex()),
    (op._tag =
      "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
    (op._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
    (op.html = Zf(op.html, "i")
      .replace("comment", op._comment)
      .replace("tag", op._tag)
      .replace(
        "attribute",
        / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
      )
      .getRegex()),
    (op.paragraph = Zf(op._paragraph)
      .replace("hr", op.hr)
      .replace("heading", " {0,3}#{1,6} ")
      .replace("|lheading", "")
      .replace("|table", "")
      .replace("blockquote", " {0,3}>")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace(
        "html",
        "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
      )
      .replace("tag", op._tag)
      .getRegex()),
    (op.blockquote = Zf(op.blockquote)
      .replace("paragraph", op.paragraph)
      .getRegex()),
    (op.normal = Jf({}, op)),
    (op.gfm = Jf({}, op.normal, {
      table:
        "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",
    })),
    (op.gfm.table = Zf(op.gfm.table)
      .replace("hr", op.hr)
      .replace("heading", " {0,3}#{1,6} ")
      .replace("blockquote", " {0,3}>")
      .replace("code", " {4}[^\\n]")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace(
        "html",
        "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
      )
      .replace("tag", op._tag)
      .getRegex()),
    (op.gfm.paragraph = Zf(op._paragraph)
      .replace("hr", op.hr)
      .replace("heading", " {0,3}#{1,6} ")
      .replace("|lheading", "")
      .replace("table", op.gfm.table)
      .replace("blockquote", " {0,3}>")
      .replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n")
      .replace("list", " {0,3}(?:[*+-]|1[.)]) ")
      .replace(
        "html",
        "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)"
      )
      .replace("tag", op._tag)
      .getRegex()),
    (op.pedantic = Jf({}, op.normal, {
      html: Zf(
        "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
      )
        .replace("comment", op._comment)
        .replace(
          /tag/g,
          "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: Wf,
      paragraph: Zf(op.normal._paragraph)
        .replace("hr", op.hr)
        .replace("heading", " *#{1,6} *[^\n]")
        .replace("lheading", op.lheading)
        .replace("blockquote", " {0,3}>")
        .replace("|fences", "")
        .replace("|list", "")
        .replace("|html", "")
        .getRegex(),
    }));
  var ap = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: Wf,
    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(ref)\]/,
    nolink: /^!?\[(ref)\](?:\[\])?/,
    reflinkSearch: "reflink|nolink(?!\\()",
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      rDelimAst:
        /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
      rDelimUnd:
        /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: Wf,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/,
  };
  function sp(e) {
    return e
      .replace(/---/g, "—")
      .replace(/--/g, "–")
      .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘")
      .replace(/'/g, "’")
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“")
      .replace(/"/g, "”")
      .replace(/\.{3}/g, "…");
  }
  function lp(e) {
    var t,
      n,
      r = "",
      u = e.length;
    for (t = 0; t < u; t++)
      (n = e.charCodeAt(t)),
        Math.random() > 0.5 && (n = "x" + n.toString(16)),
        (r += "&#" + n + ";");
    return r;
  }
  (ap._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"),
    (ap.punctuation = Zf(ap.punctuation)
      .replace(/punctuation/g, ap._punctuation)
      .getRegex()),
    (ap.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
    (ap.escapedEmSt = /\\\*|\\_/g),
    (ap._comment = Zf(op._comment)
      .replace("(?:--\x3e|$)", "--\x3e")
      .getRegex()),
    (ap.emStrong.lDelim = Zf(ap.emStrong.lDelim)
      .replace(/punct/g, ap._punctuation)
      .getRegex()),
    (ap.emStrong.rDelimAst = Zf(ap.emStrong.rDelimAst, "g")
      .replace(/punct/g, ap._punctuation)
      .getRegex()),
    (ap.emStrong.rDelimUnd = Zf(ap.emStrong.rDelimUnd, "g")
      .replace(/punct/g, ap._punctuation)
      .getRegex()),
    (ap._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
    (ap._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
    (ap._email =
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
    (ap.autolink = Zf(ap.autolink)
      .replace("scheme", ap._scheme)
      .replace("email", ap._email)
      .getRegex()),
    (ap._attribute =
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
    (ap.tag = Zf(ap.tag)
      .replace("comment", ap._comment)
      .replace("attribute", ap._attribute)
      .getRegex()),
    (ap._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
    (ap._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
    (ap._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
    (ap.link = Zf(ap.link)
      .replace("label", ap._label)
      .replace("href", ap._href)
      .replace("title", ap._title)
      .getRegex()),
    (ap.reflink = Zf(ap.reflink)
      .replace("label", ap._label)
      .replace("ref", op._label)
      .getRegex()),
    (ap.nolink = Zf(ap.nolink).replace("ref", op._label).getRegex()),
    (ap.reflinkSearch = Zf(ap.reflinkSearch, "g")
      .replace("reflink", ap.reflink)
      .replace("nolink", ap.nolink)
      .getRegex()),
    (ap.normal = Jf({}, ap)),
    (ap.pedantic = Jf({}, ap.normal, {
      strong: {
        start: /^__|\*\*/,
        middle:
          /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        endAst: /\*\*(?!\*)/g,
        endUnd: /__(?!_)/g,
      },
      em: {
        start: /^_|\*/,
        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
        endAst: /\*(?!\*)/g,
        endUnd: /_(?!_)/g,
      },
      link: Zf(/^!?\[(label)\]\((.*?)\)/)
        .replace("label", ap._label)
        .getRegex(),
      reflink: Zf(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace("label", ap._label)
        .getRegex(),
    })),
    (ap.gfm = Jf({}, ap.normal, {
      escape: Zf(ap.escape).replace("])", "~|])").getRegex(),
      _extended_email:
        /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal:
        /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
    })),
    (ap.gfm.url = Zf(ap.gfm.url, "i")
      .replace("email", ap.gfm._extended_email)
      .getRegex()),
    (ap.breaks = Jf({}, ap.gfm, {
      br: Zf(ap.br).replace("{2,}", "*").getRegex(),
      text: Zf(ap.gfm.text)
        .replace("\\b_", "\\b_| {2,}\\n")
        .replace(/\{2,\}/g, "*")
        .getRegex(),
    }));
  var cp = (function () {
      function e(n) {
        t(this, e),
          (this.tokens = []),
          (this.tokens.links = Object.create(null)),
          (this.options = n || Rf),
          (this.options.tokenizer = this.options.tokenizer || new ip()),
          (this.tokenizer = this.options.tokenizer),
          (this.tokenizer.options = this.options),
          (this.tokenizer.lexer = this),
          (this.inlineQueue = []),
          (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
        var r = { block: op.normal, inline: ap.normal };
        this.options.pedantic
          ? ((r.block = op.pedantic), (r.inline = ap.pedantic))
          : this.options.gfm &&
            ((r.block = op.gfm),
            this.options.breaks ? (r.inline = ap.breaks) : (r.inline = ap.gfm)),
          (this.tokenizer.rules = r);
      }
      return (
        r(
          e,
          [
            {
              key: "lex",
              value: function (e) {
                var t;
                for (
                  e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    "),
                    this.blockTokens(e, this.tokens);
                  (t = this.inlineQueue.shift());

                )
                  this.inlineTokens(t.src, t.tokens);
                return this.tokens;
              },
            },
            {
              key: "blockTokens",
              value: function (e) {
                var t,
                  n,
                  r,
                  u,
                  i = this,
                  o =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [];
                for (
                  this.options.pedantic && (e = e.replace(/^ +$/gm, ""));
                  e;

                )
                  if (
                    !(
                      this.options.extensions &&
                      this.options.extensions.block &&
                      this.options.extensions.block.some(function (n) {
                        return (
                          !!(t = n.call({ lexer: i }, e, o)) &&
                          ((e = e.substring(t.raw.length)), o.push(t), !0)
                        );
                      })
                    )
                  )
                    if ((t = this.tokenizer.space(e)))
                      (e = e.substring(t.raw.length)),
                        1 === t.raw.length && o.length > 0
                          ? (o[o.length - 1].raw += "\n")
                          : o.push(t);
                    else if ((t = this.tokenizer.code(e)))
                      (e = e.substring(t.raw.length)),
                        !(n = o[o.length - 1]) ||
                        ("paragraph" !== n.type && "text" !== n.type)
                          ? o.push(t)
                          : ((n.raw += "\n" + t.raw),
                            (n.text += "\n" + t.text),
                            (this.inlineQueue[this.inlineQueue.length - 1].src =
                              n.text));
                    else if ((t = this.tokenizer.fences(e)))
                      (e = e.substring(t.raw.length)), o.push(t);
                    else if ((t = this.tokenizer.heading(e)))
                      (e = e.substring(t.raw.length)), o.push(t);
                    else if ((t = this.tokenizer.hr(e)))
                      (e = e.substring(t.raw.length)), o.push(t);
                    else if ((t = this.tokenizer.blockquote(e)))
                      (e = e.substring(t.raw.length)), o.push(t);
                    else if ((t = this.tokenizer.list(e)))
                      (e = e.substring(t.raw.length)), o.push(t);
                    else if ((t = this.tokenizer.html(e)))
                      (e = e.substring(t.raw.length)), o.push(t);
                    else if ((t = this.tokenizer.def(e)))
                      (e = e.substring(t.raw.length)),
                        !(n = o[o.length - 1]) ||
                        ("paragraph" !== n.type && "text" !== n.type)
                          ? this.tokens.links[t.tag] ||
                            (this.tokens.links[t.tag] = {
                              href: t.href,
                              title: t.title,
                            })
                          : ((n.raw += "\n" + t.raw),
                            (n.text += "\n" + t.raw),
                            (this.inlineQueue[this.inlineQueue.length - 1].src =
                              n.text));
                    else if ((t = this.tokenizer.table(e)))
                      (e = e.substring(t.raw.length)), o.push(t);
                    else if ((t = this.tokenizer.lheading(e)))
                      (e = e.substring(t.raw.length)), o.push(t);
                    else if (
                      ((r = e),
                      this.options.extensions &&
                        this.options.extensions.startBlock &&
                        (function () {
                          var t = 1 / 0,
                            n = e.slice(1),
                            u = void 0;
                          i.options.extensions.startBlock.forEach(function (e) {
                            "number" ==
                              typeof (u = e.call({ lexer: this }, n)) &&
                              u >= 0 &&
                              (t = Math.min(t, u));
                          }),
                            t < 1 / 0 && t >= 0 && (r = e.substring(0, t + 1));
                        })(),
                      this.state.top && (t = this.tokenizer.paragraph(r)))
                    )
                      (n = o[o.length - 1]),
                        u && "paragraph" === n.type
                          ? ((n.raw += "\n" + t.raw),
                            (n.text += "\n" + t.text),
                            this.inlineQueue.pop(),
                            (this.inlineQueue[this.inlineQueue.length - 1].src =
                              n.text))
                          : o.push(t),
                        (u = r.length !== e.length),
                        (e = e.substring(t.raw.length));
                    else if ((t = this.tokenizer.text(e)))
                      (e = e.substring(t.raw.length)),
                        (n = o[o.length - 1]) && "text" === n.type
                          ? ((n.raw += "\n" + t.raw),
                            (n.text += "\n" + t.text),
                            this.inlineQueue.pop(),
                            (this.inlineQueue[this.inlineQueue.length - 1].src =
                              n.text))
                          : o.push(t);
                    else if (e) {
                      var a = "Infinite loop on byte: " + e.charCodeAt(0);
                      if (this.options.silent) {
                        console.error(a);
                        break;
                      }
                      throw new Error(a);
                    }
                return (this.state.top = !0), o;
              },
            },
            {
              key: "inline",
              value: function (e, t) {
                this.inlineQueue.push({ src: e, tokens: t });
              },
            },
            {
              key: "inlineTokens",
              value: function (e) {
                var t,
                  n,
                  r,
                  u,
                  i,
                  o,
                  a = this,
                  s =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  l = e;
                if (this.tokens.links) {
                  var c = Object.keys(this.tokens.links);
                  if (c.length > 0)
                    for (
                      ;
                      null !=
                      (u = this.tokenizer.rules.inline.reflinkSearch.exec(l));

                    )
                      c.includes(u[0].slice(u[0].lastIndexOf("[") + 1, -1)) &&
                        (l =
                          l.slice(0, u.index) +
                          "[" +
                          rp("a", u[0].length - 2) +
                          "]" +
                          l.slice(
                            this.tokenizer.rules.inline.reflinkSearch.lastIndex
                          ));
                }
                for (
                  ;
                  null != (u = this.tokenizer.rules.inline.blockSkip.exec(l));

                )
                  l =
                    l.slice(0, u.index) +
                    "[" +
                    rp("a", u[0].length - 2) +
                    "]" +
                    l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
                for (
                  ;
                  null != (u = this.tokenizer.rules.inline.escapedEmSt.exec(l));

                )
                  l =
                    l.slice(0, u.index) +
                    "++" +
                    l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
                for (; e; )
                  if (
                    (i || (o = ""),
                    (i = !1),
                    !(
                      this.options.extensions &&
                      this.options.extensions.inline &&
                      this.options.extensions.inline.some(function (n) {
                        return (
                          !!(t = n.call({ lexer: a }, e, s)) &&
                          ((e = e.substring(t.raw.length)), s.push(t), !0)
                        );
                      })
                    ))
                  )
                    if ((t = this.tokenizer.escape(e)))
                      (e = e.substring(t.raw.length)), s.push(t);
                    else if ((t = this.tokenizer.tag(e)))
                      (e = e.substring(t.raw.length)),
                        (n = s[s.length - 1]) &&
                        "text" === t.type &&
                        "text" === n.type
                          ? ((n.raw += t.raw), (n.text += t.text))
                          : s.push(t);
                    else if ((t = this.tokenizer.link(e)))
                      (e = e.substring(t.raw.length)), s.push(t);
                    else if ((t = this.tokenizer.reflink(e, this.tokens.links)))
                      (e = e.substring(t.raw.length)),
                        (n = s[s.length - 1]) &&
                        "text" === t.type &&
                        "text" === n.type
                          ? ((n.raw += t.raw), (n.text += t.text))
                          : s.push(t);
                    else if ((t = this.tokenizer.emStrong(e, l, o)))
                      (e = e.substring(t.raw.length)), s.push(t);
                    else if ((t = this.tokenizer.codespan(e)))
                      (e = e.substring(t.raw.length)), s.push(t);
                    else if ((t = this.tokenizer.br(e)))
                      (e = e.substring(t.raw.length)), s.push(t);
                    else if ((t = this.tokenizer.del(e)))
                      (e = e.substring(t.raw.length)), s.push(t);
                    else if ((t = this.tokenizer.autolink(e, lp)))
                      (e = e.substring(t.raw.length)), s.push(t);
                    else if (
                      this.state.inLink ||
                      !(t = this.tokenizer.url(e, lp))
                    ) {
                      if (
                        ((r = e),
                        this.options.extensions &&
                          this.options.extensions.startInline &&
                          (function () {
                            var t = 1 / 0,
                              n = e.slice(1),
                              u = void 0;
                            a.options.extensions.startInline.forEach(function (
                              e
                            ) {
                              "number" ==
                                typeof (u = e.call({ lexer: this }, n)) &&
                                u >= 0 &&
                                (t = Math.min(t, u));
                            }),
                              t < 1 / 0 &&
                                t >= 0 &&
                                (r = e.substring(0, t + 1));
                          })(),
                        (t = this.tokenizer.inlineText(r, sp)))
                      )
                        (e = e.substring(t.raw.length)),
                          "_" !== t.raw.slice(-1) && (o = t.raw.slice(-1)),
                          (i = !0),
                          (n = s[s.length - 1]) && "text" === n.type
                            ? ((n.raw += t.raw), (n.text += t.text))
                            : s.push(t);
                      else if (e) {
                        var f = "Infinite loop on byte: " + e.charCodeAt(0);
                        if (this.options.silent) {
                          console.error(f);
                          break;
                        }
                        throw new Error(f);
                      }
                    } else (e = e.substring(t.raw.length)), s.push(t);
                return s;
              },
            },
          ],
          [
            {
              key: "rules",
              get: function () {
                return { block: op, inline: ap };
              },
            },
            {
              key: "lex",
              value: function (t, n) {
                return new e(n).lex(t);
              },
            },
            {
              key: "lexInline",
              value: function (t, n) {
                return new e(n).inlineTokens(t);
              },
            },
          ]
        ),
        e
      );
    })(),
    fp = (function () {
      function e(n) {
        t(this, e), (this.options = n || Rf);
      }
      return (
        r(e, [
          {
            key: "code",
            value: function (e, t, n) {
              var r = (t || "").match(/\S*/)[0];
              if (this.options.highlight) {
                var u = this.options.highlight(e, r);
                null != u && u !== e && ((n = !0), (e = u));
              }
              return (
                (e = e.replace(/\n$/, "") + "\n"),
                r
                  ? '<pre><code class="' +
                    this.options.langPrefix +
                    Mf(r, !0) +
                    '">' +
                    (n ? e : Mf(e, !0)) +
                    "</code></pre>\n"
                  : "<pre><code>" + (n ? e : Mf(e, !0)) + "</code></pre>\n"
              );
            },
          },
          {
            key: "blockquote",
            value: function (e) {
              return "<blockquote>\n" + e + "</blockquote>\n";
            },
          },
          {
            key: "html",
            value: function (e) {
              return e;
            },
          },
          {
            key: "heading",
            value: function (e, t, n, r) {
              return this.options.headerIds
                ? "<h" +
                    t +
                    ' id="' +
                    this.options.headerPrefix +
                    r.slug(n) +
                    '">' +
                    e +
                    "</h" +
                    t +
                    ">\n"
                : "<h" + t + ">" + e + "</h" + t + ">\n";
            },
          },
          {
            key: "hr",
            value: function () {
              return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
            },
          },
          {
            key: "list",
            value: function (e, t, n) {
              var r = t ? "ol" : "ul";
              return (
                "<" +
                r +
                (t && 1 !== n ? ' start="' + n + '"' : "") +
                ">\n" +
                e +
                "</" +
                r +
                ">\n"
              );
            },
          },
          {
            key: "listitem",
            value: function (e) {
              return "<li>" + e + "</li>\n";
            },
          },
          {
            key: "checkbox",
            value: function (e) {
              return (
                "<input " +
                (e ? 'checked="" ' : "") +
                'disabled="" type="checkbox"' +
                (this.options.xhtml ? " /" : "") +
                "> "
              );
            },
          },
          {
            key: "paragraph",
            value: function (e) {
              return "<p>" + e + "</p>\n";
            },
          },
          {
            key: "table",
            value: function (e, t) {
              return (
                t && (t = "<tbody>" + t + "</tbody>"),
                "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
              );
            },
          },
          {
            key: "tablerow",
            value: function (e) {
              return "<tr>\n" + e + "</tr>\n";
            },
          },
          {
            key: "tablecell",
            value: function (e, t) {
              var n = t.header ? "th" : "td";
              return (
                (t.align
                  ? "<" + n + ' align="' + t.align + '">'
                  : "<" + n + ">") +
                e +
                "</" +
                n +
                ">\n"
              );
            },
          },
          {
            key: "strong",
            value: function (e) {
              return "<strong>" + e + "</strong>";
            },
          },
          {
            key: "em",
            value: function (e) {
              return "<em>" + e + "</em>";
            },
          },
          {
            key: "codespan",
            value: function (e) {
              return "<code>" + e + "</code>";
            },
          },
          {
            key: "br",
            value: function () {
              return this.options.xhtml ? "<br/>" : "<br>";
            },
          },
          {
            key: "del",
            value: function (e) {
              return "<del>" + e + "</del>";
            },
          },
          {
            key: "link",
            value: function (e, t, n) {
              if (
                null ===
                (e = Qf(this.options.sanitize, this.options.baseUrl, e))
              )
                return n;
              var r = '<a href="' + Mf(e) + '"';
              return t && (r += ' title="' + t + '"'), (r += ">" + n + "</a>");
            },
          },
          {
            key: "image",
            value: function (e, t, n) {
              if (
                null ===
                (e = Qf(this.options.sanitize, this.options.baseUrl, e))
              )
                return n;
              var r = '<img src="' + e + '" alt="' + n + '"';
              return (
                t && (r += ' title="' + t + '"'),
                (r += this.options.xhtml ? "/>" : ">")
              );
            },
          },
          {
            key: "text",
            value: function (e) {
              return e;
            },
          },
        ]),
        e
      );
    })(),
    pp = (function () {
      function e() {
        t(this, e);
      }
      return (
        r(e, [
          {
            key: "strong",
            value: function (e) {
              return e;
            },
          },
          {
            key: "em",
            value: function (e) {
              return e;
            },
          },
          {
            key: "codespan",
            value: function (e) {
              return e;
            },
          },
          {
            key: "del",
            value: function (e) {
              return e;
            },
          },
          {
            key: "html",
            value: function (e) {
              return e;
            },
          },
          {
            key: "text",
            value: function (e) {
              return e;
            },
          },
          {
            key: "link",
            value: function (e, t, n) {
              return "" + n;
            },
          },
          {
            key: "image",
            value: function (e, t, n) {
              return "" + n;
            },
          },
          {
            key: "br",
            value: function () {
              return "";
            },
          },
        ]),
        e
      );
    })(),
    hp = (function () {
      function e() {
        t(this, e), (this.seen = {});
      }
      return (
        r(e, [
          {
            key: "serialize",
            value: function (e) {
              return e
                .toLowerCase()
                .trim()
                .replace(/<[!\/a-z].*?>/gi, "")
                .replace(
                  /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                  ""
                )
                .replace(/\s/g, "-");
            },
          },
          {
            key: "getNextSafeSlug",
            value: function (e, t) {
              var n = e,
                r = 0;
              if (this.seen.hasOwnProperty(n)) {
                r = this.seen[e];
                do {
                  n = e + "-" + ++r;
                } while (this.seen.hasOwnProperty(n));
              }
              return t || ((this.seen[e] = r), (this.seen[n] = 0)), n;
            },
          },
          {
            key: "slug",
            value: function (e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = this.serialize(e);
              return this.getNextSafeSlug(n, t.dryrun);
            },
          },
        ]),
        e
      );
    })(),
    Dp = (function () {
      function e(n) {
        t(this, e),
          (this.options = n || Rf),
          (this.options.renderer = this.options.renderer || new fp()),
          (this.renderer = this.options.renderer),
          (this.renderer.options = this.options),
          (this.textRenderer = new pp()),
          (this.slugger = new hp());
      }
      return (
        r(
          e,
          [
            {
              key: "parse",
              value: function (e) {
                var t,
                  n,
                  r,
                  u,
                  i,
                  o,
                  a,
                  s,
                  l,
                  c,
                  f,
                  p,
                  h,
                  D,
                  g,
                  d,
                  v,
                  y,
                  A,
                  m =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                  k = "",
                  E = e.length;
                for (t = 0; t < E; t++)
                  if (
                    ((c = e[t]),
                    !(
                      this.options.extensions &&
                      this.options.extensions.renderers &&
                      this.options.extensions.renderers[c.type]
                    ) ||
                      (!1 ===
                        (A = this.options.extensions.renderers[c.type].call(
                          { parser: this },
                          c
                        )) &&
                        [
                          "space",
                          "hr",
                          "heading",
                          "code",
                          "table",
                          "blockquote",
                          "list",
                          "html",
                          "paragraph",
                          "text",
                        ].includes(c.type)))
                  )
                    switch (c.type) {
                      case "space":
                        continue;
                      case "hr":
                        k += this.renderer.hr();
                        continue;
                      case "heading":
                        k += this.renderer.heading(
                          this.parseInline(c.tokens),
                          c.depth,
                          Uf(this.parseInline(c.tokens, this.textRenderer)),
                          this.slugger
                        );
                        continue;
                      case "code":
                        k += this.renderer.code(c.text, c.lang, c.escaped);
                        continue;
                      case "table":
                        for (
                          s = "", a = "", u = c.header.length, n = 0;
                          n < u;
                          n++
                        )
                          a += this.renderer.tablecell(
                            this.parseInline(c.header[n].tokens),
                            { header: !0, align: c.align[n] }
                          );
                        for (
                          s += this.renderer.tablerow(a),
                            l = "",
                            u = c.rows.length,
                            n = 0;
                          n < u;
                          n++
                        ) {
                          for (
                            a = "", i = (o = c.rows[n]).length, r = 0;
                            r < i;
                            r++
                          )
                            a += this.renderer.tablecell(
                              this.parseInline(o[r].tokens),
                              { header: !1, align: c.align[r] }
                            );
                          l += this.renderer.tablerow(a);
                        }
                        k += this.renderer.table(s, l);
                        continue;
                      case "blockquote":
                        (l = this.parse(c.tokens)),
                          (k += this.renderer.blockquote(l));
                        continue;
                      case "list":
                        for (
                          f = c.ordered,
                            p = c.start,
                            h = c.loose,
                            u = c.items.length,
                            l = "",
                            n = 0;
                          n < u;
                          n++
                        )
                          (d = (g = c.items[n]).checked),
                            (v = g.task),
                            (D = ""),
                            g.task &&
                              ((y = this.renderer.checkbox(d)),
                              h
                                ? g.tokens.length > 0 &&
                                  "paragraph" === g.tokens[0].type
                                  ? ((g.tokens[0].text =
                                      y + " " + g.tokens[0].text),
                                    g.tokens[0].tokens &&
                                      g.tokens[0].tokens.length > 0 &&
                                      "text" === g.tokens[0].tokens[0].type &&
                                      (g.tokens[0].tokens[0].text =
                                        y + " " + g.tokens[0].tokens[0].text))
                                  : g.tokens.unshift({ type: "text", text: y })
                                : (D += y)),
                            (D += this.parse(g.tokens, h)),
                            (l += this.renderer.listitem(D, v, d));
                        k += this.renderer.list(l, f, p);
                        continue;
                      case "html":
                        k += this.renderer.html(c.text);
                        continue;
                      case "paragraph":
                        k += this.renderer.paragraph(
                          this.parseInline(c.tokens)
                        );
                        continue;
                      case "text":
                        for (
                          l = c.tokens ? this.parseInline(c.tokens) : c.text;
                          t + 1 < E && "text" === e[t + 1].type;

                        )
                          l +=
                            "\n" +
                            ((c = e[++t]).tokens
                              ? this.parseInline(c.tokens)
                              : c.text);
                        k += m ? this.renderer.paragraph(l) : l;
                        continue;
                      default:
                        var x =
                          'Token with "' + c.type + '" type was not found.';
                        if (this.options.silent) return void console.error(x);
                        throw new Error(x);
                    }
                  else k += A || "";
                return k;
              },
            },
            {
              key: "parseInline",
              value: function (e, t) {
                t = t || this.renderer;
                var n,
                  r,
                  u,
                  i = "",
                  o = e.length;
                for (n = 0; n < o; n++)
                  if (
                    ((r = e[n]),
                    !(
                      this.options.extensions &&
                      this.options.extensions.renderers &&
                      this.options.extensions.renderers[r.type]
                    ) ||
                      (!1 ===
                        (u = this.options.extensions.renderers[r.type].call(
                          { parser: this },
                          r
                        )) &&
                        [
                          "escape",
                          "html",
                          "link",
                          "image",
                          "strong",
                          "em",
                          "codespan",
                          "br",
                          "del",
                          "text",
                        ].includes(r.type)))
                  )
                    switch (r.type) {
                      case "escape":
                        i += t.text(r.text);
                        break;
                      case "html":
                        i += t.html(r.text);
                        break;
                      case "link":
                        i += t.link(
                          r.href,
                          r.title,
                          this.parseInline(r.tokens, t)
                        );
                        break;
                      case "image":
                        i += t.image(r.href, r.title, r.text);
                        break;
                      case "strong":
                        i += t.strong(this.parseInline(r.tokens, t));
                        break;
                      case "em":
                        i += t.em(this.parseInline(r.tokens, t));
                        break;
                      case "codespan":
                        i += t.codespan(r.text);
                        break;
                      case "br":
                        i += t.br();
                        break;
                      case "del":
                        i += t.del(this.parseInline(r.tokens, t));
                        break;
                      case "text":
                        i += t.text(r.text);
                        break;
                      default:
                        var a =
                          'Token with "' + r.type + '" type was not found.';
                        if (this.options.silent) return void console.error(a);
                        throw new Error(a);
                    }
                  else i += u || "";
                return i;
              },
            },
          ],
          [
            {
              key: "parse",
              value: function (t, n) {
                return new e(n).parse(t);
              },
            },
            {
              key: "parseInline",
              value: function (t, n) {
                return new e(n).parseInline(t);
              },
            },
          ]
        ),
        e
      );
    })();
  function gp(e, t, n) {
    if (null == e)
      throw new Error("marked(): input parameter is undefined or null");
    if ("string" != typeof e)
      throw new Error(
        "marked(): input parameter is of type " +
          Object.prototype.toString.call(e) +
          ", string expected"
      );
    if (
      ("function" == typeof t && ((n = t), (t = null)),
      np((t = Jf({}, gp.defaults, t || {}))),
      n)
    ) {
      var r,
        u = t.highlight;
      try {
        r = cp.lex(e, t);
      } catch (e) {
        return n(e);
      }
      var i = function (e) {
        var i;
        if (!e)
          try {
            t.walkTokens && gp.walkTokens(r, t.walkTokens),
              (i = Dp.parse(r, t));
          } catch (t) {
            e = t;
          }
        return (t.highlight = u), e ? n(e) : n(null, i);
      };
      if (!u || u.length < 3) return i();
      if ((delete t.highlight, !r.length)) return i();
      var o = 0;
      return (
        gp.walkTokens(r, function (e) {
          "code" === e.type &&
            (o++,
            setTimeout(function () {
              u(e.text, e.lang, function (t, n) {
                if (t) return i(t);
                null != n && n !== e.text && ((e.text = n), (e.escaped = !0)),
                  0 === --o && i();
              });
            }, 0));
        }),
        void (0 === o && i())
      );
    }
    try {
      var a = cp.lex(e, t);
      return t.walkTokens && gp.walkTokens(a, t.walkTokens), Dp.parse(a, t);
    } catch (e) {
      if (
        ((e.message +=
          "\nPlease report this to https://github.com/markedjs/marked."),
        t.silent)
      )
        return (
          "<p>An error occurred:</p><pre>" + Mf(e.message + "", !0) + "</pre>"
        );
      throw e;
    }
  }
  (gp.options = gp.setOptions =
    function (e) {
      var t;
      return Jf(gp.defaults, e), (t = gp.defaults), (Rf = t), gp;
    }),
    (gp.getDefaults = Of),
    (gp.defaults = Rf),
    (gp.use = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r,
        u = Jf.apply(void 0, [{}].concat(t)),
        i = gp.defaults.extensions || { renderers: {}, childTokens: {} };
      t.forEach(function (e) {
        if (
          (e.extensions &&
            ((r = !0),
            e.extensions.forEach(function (e) {
              if (!e.name) throw new Error("extension name required");
              if (e.renderer) {
                var t = i.renderers ? i.renderers[e.name] : null;
                i.renderers[e.name] = t
                  ? function () {
                      for (
                        var n = arguments.length, r = new Array(n), u = 0;
                        u < n;
                        u++
                      )
                        r[u] = arguments[u];
                      var i = e.renderer.apply(this, r);
                      return !1 === i && (i = t.apply(this, r)), i;
                    }
                  : e.renderer;
              }
              if (e.tokenizer) {
                if (!e.level || ("block" !== e.level && "inline" !== e.level))
                  throw new Error(
                    "extension level must be 'block' or 'inline'"
                  );
                i[e.level]
                  ? i[e.level].unshift(e.tokenizer)
                  : (i[e.level] = [e.tokenizer]),
                  e.start &&
                    ("block" === e.level
                      ? i.startBlock
                        ? i.startBlock.push(e.start)
                        : (i.startBlock = [e.start])
                      : "inline" === e.level &&
                        (i.startInline
                          ? i.startInline.push(e.start)
                          : (i.startInline = [e.start])));
              }
              e.childTokens && (i.childTokens[e.name] = e.childTokens);
            })),
          e.renderer &&
            (function () {
              var t = gp.defaults.renderer || new fp(),
                n = function (n) {
                  var r = t[n];
                  t[n] = function () {
                    for (
                      var u = arguments.length, i = new Array(u), o = 0;
                      o < u;
                      o++
                    )
                      i[o] = arguments[o];
                    var a = e.renderer[n].apply(t, i);
                    return !1 === a && (a = r.apply(t, i)), a;
                  };
                };
              for (var r in e.renderer) n(r);
              u.renderer = t;
            })(),
          e.tokenizer &&
            (function () {
              var t = gp.defaults.tokenizer || new ip(),
                n = function (n) {
                  var r = t[n];
                  t[n] = function () {
                    for (
                      var u = arguments.length, i = new Array(u), o = 0;
                      o < u;
                      o++
                    )
                      i[o] = arguments[o];
                    var a = e.tokenizer[n].apply(t, i);
                    return !1 === a && (a = r.apply(t, i)), a;
                  };
                };
              for (var r in e.tokenizer) n(r);
              u.tokenizer = t;
            })(),
          e.walkTokens)
        ) {
          var t = gp.defaults.walkTokens;
          u.walkTokens = function (n) {
            e.walkTokens.call(this, n), t && t.call(this, n);
          };
        }
        r && (u.extensions = i), gp.setOptions(u);
      });
    }),
    (gp.walkTokens = function (e, t) {
      var n,
        r = l(e);
      try {
        var u = function () {
          var e = n.value;
          switch ((t.call(gp, e), e.type)) {
            case "table":
              var r,
                u = l(e.header);
              try {
                for (u.s(); !(r = u.n()).done; ) {
                  var i = r.value;
                  gp.walkTokens(i.tokens, t);
                }
              } catch (e) {
                u.e(e);
              } finally {
                u.f();
              }
              var o,
                a = l(e.rows);
              try {
                for (a.s(); !(o = a.n()).done; ) {
                  var s,
                    c = l(o.value);
                  try {
                    for (c.s(); !(s = c.n()).done; ) {
                      var f = s.value;
                      gp.walkTokens(f.tokens, t);
                    }
                  } catch (e) {
                    c.e(e);
                  } finally {
                    c.f();
                  }
                }
              } catch (e) {
                a.e(e);
              } finally {
                a.f();
              }
              break;
            case "list":
              gp.walkTokens(e.items, t);
              break;
            default:
              gp.defaults.extensions &&
              gp.defaults.extensions.childTokens &&
              gp.defaults.extensions.childTokens[e.type]
                ? gp.defaults.extensions.childTokens[e.type].forEach(function (
                    n
                  ) {
                    gp.walkTokens(e[n], t);
                  })
                : e.tokens && gp.walkTokens(e.tokens, t);
          }
        };
        for (r.s(); !(n = r.n()).done; ) u();
      } catch (e) {
        r.e(e);
      } finally {
        r.f();
      }
    }),
    (gp.parseInline = function (e, t) {
      if (null == e)
        throw new Error(
          "marked.parseInline(): input parameter is undefined or null"
        );
      if ("string" != typeof e)
        throw new Error(
          "marked.parseInline(): input parameter is of type " +
            Object.prototype.toString.call(e) +
            ", string expected"
        );
      np((t = Jf({}, gp.defaults, t || {})));
      try {
        var n = cp.lexInline(e, t);
        return (
          t.walkTokens && gp.walkTokens(n, t.walkTokens), Dp.parseInline(n, t)
        );
      } catch (e) {
        if (
          ((e.message +=
            "\nPlease report this to https://github.com/markedjs/marked."),
          t.silent)
        )
          return (
            "<p>An error occurred:</p><pre>" + Mf(e.message + "", !0) + "</pre>"
          );
        throw e;
      }
    }),
    (gp.Parser = Dp),
    (gp.parser = Dp.parse),
    (gp.Renderer = fp),
    (gp.TextRenderer = pp),
    (gp.Lexer = cp),
    (gp.lexer = cp.lex),
    (gp.Tokenizer = ip),
    (gp.Slugger = hp),
    (gp.parse = gp);
  var dp = "__SCRIPT_END__",
    vp = /\[([\s\d,|-]*)\]/,
    yp = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
  return function () {
    var t;
    function n(e) {
      var t = (
          e.querySelector("[data-template]") ||
          e.querySelector("script") ||
          e
        ).textContent,
        n = (t = t.replace(new RegExp(dp, "g"), "</script>")).match(
          /^\n?(\s*)/
        )[1].length,
        r = t.match(/^\n?(\t*)/)[1].length;
      return (
        r > 0
          ? (t = t.replace(new RegExp("\\n?\\t{" + r + "}", "g"), "\n"))
          : n > 1 && (t = t.replace(new RegExp("\\n? {" + n + "}", "g"), "\n")),
        t
      );
    }
    function r(e) {
      for (var t = e.attributes, n = [], r = 0, u = t.length; r < u; r++) {
        var i = t[r].name,
          o = t[r].value;
        /data\-(markdown|separator|vertical|notes)/gi.test(i) ||
          (o ? n.push(i + '="' + o + '"') : n.push(i));
      }
      return n.join(" ");
    }
    function o(e) {
      return (
        ((e = e || {}).separator = e.separator || "\r?\n---\r?\n"),
        (e.notesSeparator = e.notesSeparator || "notes?:"),
        (e.attributes = e.attributes || ""),
        e
      );
    }
    function a(e, t) {
      t = o(t);
      var n = e.split(new RegExp(t.notesSeparator, "mgi"));
      return (
        2 === n.length &&
          (e = n[0] + '<aside class="notes">' + gp(n[1].trim()) + "</aside>"),
        '<script type="text/template">' +
          (e = e.replace(/<\/script>/g, dp)) +
          "</script>"
      );
    }
    function s(e, t) {
      t = o(t);
      for (
        var n,
          r,
          u,
          i = new RegExp(
            t.separator +
              (t.verticalSeparator ? "|" + t.verticalSeparator : ""),
            "mg"
          ),
          s = new RegExp(t.separator),
          l = 0,
          c = !0,
          f = [];
        (n = i.exec(e));

      )
        !(r = s.test(n[0])) && c && f.push([]),
          (u = e.substring(l, n.index)),
          r && c ? f.push(u) : f[f.length - 1].push(u),
          (l = i.lastIndex),
          (c = r);
      (c ? f : f[f.length - 1]).push(e.substring(l));
      for (var p = "", h = 0, D = f.length; h < D; h++)
        f[h] instanceof Array
          ? ((p += "<section " + t.attributes + ">"),
            f[h].forEach(function (e) {
              p += "<section data-markdown>" + a(e, t) + "</section>";
            }),
            (p += "</section>"))
          : (p +=
              "<section " +
              t.attributes +
              " data-markdown>" +
              a(f[h], t) +
              "</section>");
      return p;
    }
    function l(e) {
      return new Promise(function (t) {
        var u = [];
        [].slice
          .call(
            e.querySelectorAll(
              "section[data-markdown]:not([data-markdown-parsed])"
            )
          )
          .forEach(function (e, t) {
            e.getAttribute("data-markdown").length
              ? u.push(
                  (function (e) {
                    return new Promise(function (t, n) {
                      var r = new XMLHttpRequest(),
                        u = e.getAttribute("data-markdown"),
                        i = e.getAttribute("data-charset");
                      null != i &&
                        "" != i &&
                        r.overrideMimeType("text/html; charset=" + i),
                        (r.onreadystatechange = function (e, r) {
                          4 === r.readyState &&
                            ((r.status >= 200 && r.status < 300) ||
                            0 === r.status
                              ? t(r, u)
                              : n(r, u));
                        }.bind(this, e, r)),
                        r.open("GET", u, !0);
                      try {
                        r.send();
                      } catch (e) {
                        console.warn(
                          "Failed to get the Markdown file " +
                            u +
                            ". Make sure that the presentation and the file are served by a HTTP server and the file can be found there. " +
                            e
                        ),
                          t(r, u);
                      }
                    });
                  })(e).then(
                    function (t, n) {
                      e.outerHTML = s(t.responseText, {
                        separator: e.getAttribute("data-separator"),
                        verticalSeparator: e.getAttribute(
                          "data-separator-vertical"
                        ),
                        notesSeparator: e.getAttribute("data-separator-notes"),
                        attributes: r(e),
                      });
                    },
                    function (t, n) {
                      e.outerHTML =
                        '<section data-state="alert">ERROR: The attempt to fetch ' +
                        n +
                        " failed with HTTP status " +
                        t.status +
                        ".Check your browser's JavaScript console for more details.<p>Remember that you need to serve the presentation HTML from a HTTP server.</p></section>";
                    }
                  )
                )
              : (e.outerHTML = s(n(e), {
                  separator: e.getAttribute("data-separator"),
                  verticalSeparator: e.getAttribute("data-separator-vertical"),
                  notesSeparator: e.getAttribute("data-separator-notes"),
                  attributes: r(e),
                }));
          }),
          Promise.all(u).then(t);
      });
    }
    function c(e, t, n) {
      var r,
        u,
        i = new RegExp(n, "mg"),
        o = new RegExp('([^"= ]+?)="([^"]+?)"|(data-[^"= ]+?)(?=[" ])', "mg"),
        a = e.nodeValue;
      if ((r = i.exec(a))) {
        var s = r[1];
        for (
          a = a.substring(0, r.index) + a.substring(i.lastIndex),
            e.nodeValue = a;
          (u = o.exec(s));

        )
          u[2] ? t.setAttribute(u[1], u[2]) : t.setAttribute(u[3], "");
        return !0;
      }
      return !1;
    }
    function f(e, t, n, r, u) {
      if (null != t && null != t.childNodes && t.childNodes.length > 0)
        for (var i = t, o = 0; o < t.childNodes.length; o++) {
          var a = t.childNodes[o];
          if (o > 0)
            for (var s = o - 1; s >= 0; ) {
              var l = t.childNodes[s];
              if ("function" == typeof l.setAttribute && "BR" != l.tagName) {
                i = l;
                break;
              }
              s -= 1;
            }
          var p = e;
          "section" == a.nodeName && ((p = a), (i = a)),
            ("function" != typeof a.setAttribute &&
              a.nodeType != Node.COMMENT_NODE) ||
              f(p, a, i, r, u);
        }
      t.nodeType == Node.COMMENT_NODE && 0 == c(t, n, r) && c(t, e, u);
    }
    function p() {
      var e = t
        .getRevealElement()
        .querySelectorAll("[data-markdown]:not([data-markdown-parsed])");
      return (
        [].slice.call(e).forEach(function (e) {
          e.setAttribute("data-markdown-parsed", !0);
          var t = e.querySelector("aside.notes"),
            r = n(e);
          (e.innerHTML = gp(r)),
            f(
              e,
              e,
              null,
              e.getAttribute("data-element-attributes") ||
                e.parentNode.getAttribute("data-element-attributes") ||
                "\\.element\\s*?(.+?)$",
              e.getAttribute("data-attributes") ||
                e.parentNode.getAttribute("data-attributes") ||
                "\\.slide:\\s*?(\\S.+?)$"
            ),
            t && e.appendChild(t);
        }),
        Promise.resolve()
      );
    }
    return {
      id: "markdown",
      init: function (n) {
        var r = (t = n).getConfig().markdown || {},
          o = r.renderer,
          a = r.animateLists,
          s = i(r, ["renderer", "animateLists"]);
        return (
          o ||
            ((o = new gp.Renderer()).code = function (e, t) {
              var n = "";
              return (
                vp.test(t) &&
                  ((n = t.match(vp)[1].trim()),
                  (n = 'data-line-numbers="'.concat(n, '"')),
                  (t = t.replace(vp, "").trim())),
                (e = e.replace(/([&<>'"])/g, function (e) {
                  return yp[e];
                })),
                "<pre><code "
                  .concat(n, ' class="')
                  .concat(t, '">')
                  .concat(e, "</code></pre>")
              );
            }),
          !0 === a &&
            (o.listitem = function (e) {
              return '<li class="fragment">'.concat(e, "</li>");
            }),
          gp.setOptions(
            (function (t) {
              for (var n = 1; n < arguments.length; n++) {
                var r = null != arguments[n] ? arguments[n] : {};
                n % 2
                  ? e(Object(r), !0).forEach(function (e) {
                      u(t, e, r[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : e(Object(r)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(r, e)
                      );
                    });
              }
              return t;
            })({ renderer: o }, s)
          ),
          l(t.getRevealElement()).then(p)
        );
      },
      processSlides: l,
      convertSlides: p,
      slidify: s,
      marked: gp,
    };
  };
});
