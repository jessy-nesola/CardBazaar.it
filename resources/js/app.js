import "bootstrap";
import "./bootstrap";

var sitePlusMinus = function () {
    var value,
        quantity = document.getElementsByClassName("quantity-container");

    function createBindings(quantityContainer) {
        var quantityAmount =
            quantityContainer.getElementsByClassName("quantity-amount")[0];
        var increase = quantityContainer.getElementsByClassName("increase")[0];
        var decrease = quantityContainer.getElementsByClassName("decrease")[0];
        increase.addEventListener("click", function (e) {
            increaseValue(e, quantityAmount);
        });
        decrease.addEventListener("click", function (e) {
            decreaseValue(e, quantityAmount);
        });
    }

    function init() {
        for (var i = 0; i < quantity.length; i++) {
            createBindings(quantity[i]);
        }
    }

    function increaseValue(event, quantityAmount) {
        value = parseInt(quantityAmount.value, 10);

        console.log(quantityAmount, quantityAmount.value);

        value = isNaN(value) ? 0 : value;
        value++;
        quantityAmount.value = value;
    }

    function decreaseValue(event, quantityAmount) {
        value = parseInt(quantityAmount.value, 10);

        value = isNaN(value) ? 0 : value;
        if (value > 0) value--;

        quantityAmount.value = value;
    }

    init();
};
sitePlusMinus();

var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 3000, // Tempo in millisecondi tra le slide
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = e())
        : "function" == typeof define && define.amd
        ? define(e)
        : ((t =
              "undefined" != typeof globalThis
                  ? globalThis
                  : t || self).bootstrap = e());
})(this, function () {
    "use strict";
    const t = "transitionend",
        e = (t) => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
                i.includes("#") &&
                    !i.startsWith("#") &&
                    (i = `#${i.split("#")[1]}`),
                    (e = i && "#" !== i ? i.trim() : null);
            }
            return e;
        },
        i = (t) => {
            const i = e(t);
            return i && document.querySelector(i) ? i : null;
        },
        n = (t) => {
            const i = e(t);
            return i ? document.querySelector(i) : null;
        },
        s = (e) => {
            e.dispatchEvent(new Event(t));
        },
        o = (t) =>
            !(!t || "object" != typeof t) &&
            (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        r = (t) =>
            o(t)
                ? t.jquery
                    ? t[0]
                    : t
                : "string" == typeof t && t.length > 0
                ? document.querySelector(t)
                : null,
        a = (t, e, i) => {
            Object.keys(i).forEach((n) => {
                const s = i[n],
                    r = e[n],
                    a =
                        r && o(r)
                            ? "element"
                            : null == (l = r)
                            ? `${l}`
                            : {}.toString
                                  .call(l)
                                  .match(/\s([a-z]+)/i)[1]
                                  .toLowerCase();
                var l;
                if (!new RegExp(s).test(a))
                    throw new TypeError(
                        `${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`
                    );
            });
        },
        l = (t) =>
            !(!o(t) || 0 === t.getClientRects().length) &&
            "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        c = (t) =>
            !t ||
            t.nodeType !== Node.ELEMENT_NODE ||
            !!t.classList.contains("disabled") ||
            (void 0 !== t.disabled
                ? t.disabled
                : t.hasAttribute("disabled") &&
                  "false" !== t.getAttribute("disabled")),
        h = (t) => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot
                ? t
                : t.parentNode
                ? h(t.parentNode)
                : null;
        },
        d = () => {},
        u = (t) => {
            t.offsetHeight;
        },
        f = () => {
            const { jQuery: t } = window;
            return t && !document.body.hasAttribute("data-bs-no-jquery")
                ? t
                : null;
        },
        p = [],
        m = () => "rtl" === document.documentElement.dir,
        g = (t) => {
            var e;
            (e = () => {
                const e = f();
                if (e) {
                    const i = t.NAME,
                        n = e.fn[i];
                    (e.fn[i] = t.jQueryInterface),
                        (e.fn[i].Constructor = t),
                        (e.fn[i].noConflict = () => (
                            (e.fn[i] = n), t.jQueryInterface
                        ));
                }
            }),
                "loading" === document.readyState
                    ? (p.length ||
                          document.addEventListener("DOMContentLoaded", () => {
                              p.forEach((t) => t());
                          }),
                      p.push(e))
                    : e();
        },
        _ = (t) => {
            "function" == typeof t && t();
        },
        b = (e, i, n = !0) => {
            if (!n) return void _(e);
            const o =
                ((t) => {
                    if (!t) return 0;
                    let { transitionDuration: e, transitionDelay: i } =
                        window.getComputedStyle(t);
                    const n = Number.parseFloat(e),
                        s = Number.parseFloat(i);
                    return n || s
                        ? ((e = e.split(",")[0]),
                          (i = i.split(",")[0]),
                          1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
                        : 0;
                })(i) + 5;
            let r = !1;
            const a = ({ target: n }) => {
                n === i && ((r = !0), i.removeEventListener(t, a), _(e));
            };
            i.addEventListener(t, a),
                setTimeout(() => {
                    r || s(i);
                }, o);
        },
        v = (t, e, i, n) => {
            let s = t.indexOf(e);
            if (-1 === s) return t[!i && n ? t.length - 1 : 0];
            const o = t.length;
            return (
                (s += i ? 1 : -1),
                n && (s = (s + o) % o),
                t[Math.max(0, Math.min(s, o - 1))]
            );
        },
        y = /[^.]*(?=\..*)\.|.*/,
        w = /\..*/,
        E = /::\d+$/,
        A = {};
    let T = 1;
    const O = { mouseenter: "mouseover", mouseleave: "mouseout" },
        C = /^(mouseenter|mouseleave)/i,
        k = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
        ]);
    function L(t, e) {
        return (e && `${e}::${T++}`) || t.uidEvent || T++;
    }
    function x(t) {
        const e = L(t);
        return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
    }
    function D(t, e, i = null) {
        const n = Object.keys(t);
        for (let s = 0, o = n.length; s < o; s++) {
            const o = t[n[s]];
            if (o.originalHandler === e && o.delegationSelector === i) return o;
        }
        return null;
    }
    function S(t, e, i) {
        const n = "string" == typeof e,
            s = n ? i : e;
        let o = P(t);
        return k.has(o) || (o = t), [n, s, o];
    }
    function N(t, e, i, n, s) {
        if ("string" != typeof e || !t) return;
        if ((i || ((i = n), (n = null)), C.test(e))) {
            const t = (t) =>
                function (e) {
                    if (
                        !e.relatedTarget ||
                        (e.relatedTarget !== e.delegateTarget &&
                            !e.delegateTarget.contains(e.relatedTarget))
                    )
                        return t.call(this, e);
                };
            n ? (n = t(n)) : (i = t(i));
        }
        const [o, r, a] = S(e, i, n),
            l = x(t),
            c = l[a] || (l[a] = {}),
            h = D(c, r, o ? i : null);
        if (h) return void (h.oneOff = h.oneOff && s);
        const d = L(r, e.replace(y, "")),
            u = o
                ? (function (t, e, i) {
                      return function n(s) {
                          const o = t.querySelectorAll(e);
                          for (
                              let { target: r } = s;
                              r && r !== this;
                              r = r.parentNode
                          )
                              for (let a = o.length; a--; )
                                  if (o[a] === r)
                                      return (
                                          (s.delegateTarget = r),
                                          n.oneOff && j.off(t, s.type, e, i),
                                          i.apply(r, [s])
                                      );
                          return null;
                      };
                  })(t, i, n)
                : (function (t, e) {
                      return function i(n) {
                          return (
                              (n.delegateTarget = t),
                              i.oneOff && j.off(t, n.type, e),
                              e.apply(t, [n])
                          );
                      };
                  })(t, i);
        (u.delegationSelector = o ? i : null),
            (u.originalHandler = r),
            (u.oneOff = s),
            (u.uidEvent = d),
            (c[d] = u),
            t.addEventListener(a, u, o);
    }
    function I(t, e, i, n, s) {
        const o = D(e[i], n, s);
        o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
    }
    function P(t) {
        return (t = t.replace(w, "")), O[t] || t;
    }
    const j = {
            on(t, e, i, n) {
                N(t, e, i, n, !1);
            },
            one(t, e, i, n) {
                N(t, e, i, n, !0);
            },
            off(t, e, i, n) {
                if ("string" != typeof e || !t) return;
                const [s, o, r] = S(e, i, n),
                    a = r !== e,
                    l = x(t),
                    c = e.startsWith(".");
                if (void 0 !== o) {
                    if (!l || !l[r]) return;
                    return void I(t, l, r, o, s ? i : null);
                }
                c &&
                    Object.keys(l).forEach((i) => {
                        !(function (t, e, i, n) {
                            const s = e[i] || {};
                            Object.keys(s).forEach((o) => {
                                if (o.includes(n)) {
                                    const n = s[o];
                                    I(
                                        t,
                                        e,
                                        i,
                                        n.originalHandler,
                                        n.delegationSelector
                                    );
                                }
                            });
                        })(t, l, i, e.slice(1));
                    });
                const h = l[r] || {};
                Object.keys(h).forEach((i) => {
                    const n = i.replace(E, "");
                    if (!a || e.includes(n)) {
                        const e = h[i];
                        I(t, l, r, e.originalHandler, e.delegationSelector);
                    }
                });
            },
            trigger(t, e, i) {
                if ("string" != typeof e || !t) return null;
                const n = f(),
                    s = P(e),
                    o = e !== s,
                    r = k.has(s);
                let a,
                    l = !0,
                    c = !0,
                    h = !1,
                    d = null;
                return
                let event;
                if (o && n) {
                    const customEvent = new n.Event(e, i);
                    n(t).trigger(customEvent);

                    const isPropagationStopped = !customEvent.isPropagationStopped();
                    const isImmediatePropagationStopped = !customEvent.isImmediatePropagationStopped();
                    const isDefaultPrevented = customEvent.isDefaultPrevented();

                    if (r) {
                        event = document.createEvent("HTMLEvents");
                        event.initEvent(s, isPropagationStopped, true);
                    } else {
                        event = new CustomEvent(e, { bubbles: isPropagationStopped, cancelable: true });
                    }

                    if (i !== undefined) {
                        Object.keys(i).forEach((key) => {
                            Object.defineProperty(event, key, { get: () => i[key] });
                        });
                    }

                    if (isDefaultPrevented) {
                        event.preventDefault();
                    }

                    if (isImmediatePropagationStopped) {
                        t.dispatchEvent(event);
                    }

                    if (event.defaultPrevented && i !== undefined) {
                        i.preventDefault();
                    }
                }

                return event;
            },
        },
        M = new Map(),
        H = {
            set(t, e, i) {
                M.has(t) || M.set(t, new Map());
                const n = M.get(t);
                n.has(e) || 0 === n.size
                    ? n.set(e, i)
                    : console.error(
                          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                              Array.from(n.keys())[0]
                          }.`
                      );
            },
            get: (t, e) => (M.has(t) && M.get(t).get(e)) || null,
            remove(t, e) {
                if (!M.has(t)) return;
                const i = M.get(t);
                i.delete(e), 0 === i.size && M.delete(t);
            },
        };
    class B {
        constructor(t) {
            (t = r(t)) &&
                ((this._element = t),
                H.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            H.remove(this._element, this.constructor.DATA_KEY),
                j.off(this._element, this.constructor.EVENT_KEY),
                Object.getOwnPropertyNames(this).forEach((t) => {
                    this[t] = null;
                });
        }
        _queueCallback(t, e, i = !0) {
            b(t, e, i);
        }
        static getInstance(t) {
            return H.get(r(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return (
                this.getInstance(t) ||
                new this(t, "object" == typeof e ? e : null)
            );
        }
        static get VERSION() {
            return "5.1.3";
        }
        static get NAME() {
            throw new Error(
                'You have to implement the static method "NAME", for each component!'
            );
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
    }
    const R = (t, e = "hide") => {
        const i = `click.dismiss${t.EVENT_KEY}`,
            s = t.NAME;
        j.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
            if (
                (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
                c(this))
            )
                return;
            const o = n(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(o)[e]();
        });
    };
    class W extends B {
        static get NAME() {
            return "alert";
        }
        close() {
            if (j.trigger(this._element, "close.bs.alert").defaultPrevented)
                return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(),
                j.trigger(this._element, "closed.bs.alert"),
                this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = W.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (
                        void 0 === e[t] ||
                        t.startsWith("_") ||
                        "constructor" === t
                    )
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    R(W, "close"), g(W);
    const $ = '[data-bs-toggle="button"]';
    class z extends B {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute(
                "aria-pressed",
                this._element.classList.toggle("active")
            );
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = z.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    function q(t) {
        return (
            "true" === t ||
            ("false" !== t &&
                (t === Number(t).toString()
                    ? Number(t)
                    : "" === t || "null" === t
                    ? null
                    : t))
        );
    }
    function F(t) {
        return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
    }
    j.on(document, "click.bs.button.data-api", $, (t) => {
        t.preventDefault();
        const e = t.target.closest($);
        z.getOrCreateInstance(e).toggle();
    }),
        g(z);
    const U = {
            setDataAttribute(t, e, i) {
                t.setAttribute(`data-bs-${F(e)}`, i);
            },
            removeDataAttribute(t, e) {
                t.removeAttribute(`data-bs-${F(e)}`);
            },
            getDataAttributes(t) {
                if (!t) return {};
                const e = {};
                return (
                    Object.keys(t.dataset)
                        .filter((t) => t.startsWith("bs"))
                        .forEach((i) => {
                            let n = i.replace(/^bs/, "");
                            (n =
                                n.charAt(0).toLowerCase() +
                                n.slice(1, n.length)),
                                (e[n] = q(t.dataset[i]));
                        }),
                    e
                );
            },
            getDataAttribute: (t, e) => q(t.getAttribute(`data-bs-${F(e)}`)),
            offset(t) {
                const e = t.getBoundingClientRect();
                return {
                    top: e.top + window.pageYOffset,
                    left: e.left + window.pageXOffset,
                };
            },
            position: (t) => ({ top: t.offsetTop, left: t.offsetLeft }),
        },
        V = {
            find: (t, e = document.documentElement) =>
                [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) =>
                Element.prototype.querySelector.call(e, t),
            children: (t, e) =>
                [].concat(...t.children).filter((t) => t.matches(e)),
            parents(t, e) {
                const i = [];
                let n = t.parentNode;
                for (
                    ;
                    n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType;

                )
                    n.matches(e) && i.push(n), (n = n.parentNode);
                return i;
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i; ) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling;
                }
                return [];
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i; ) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling;
                }
                return [];
            },
            focusableChildren(t) {
                const e = [
                    "a",
                    "button",
                    "input",
                    "textarea",
                    "select",
                    "details",
                    "[tabindex]",
                    '[contenteditable="true"]',
                ]
                    .map((t) => `${t}:not([tabindex^="-"])`)
                    .join(", ");
                return this.find(e, t).filter((t) => !c(t) && l(t));
            },
        },
        K = "carousel",
        X = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0,
        },
        Y = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean",
        },
        Q = "next",
        G = "prev",
        Z = "left",
        J = "right",
        tt = { ArrowLeft: J, ArrowRight: Z },
        et = "slid.bs.carousel",
        it = "active",
        nt = ".active.carousel-item";
    class st extends B {
        constructor(t, e) {
            super(t),
                (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this.touchStartX = 0),
                (this.touchDeltaX = 0),
                (this._config = this._getConfig(e)),
                (this._indicatorsElement = V.findOne(
                    ".carousel-indicators",
                    this._element
                )),
                (this._touchSupported =
                    "ontouchstart" in document.documentElement ||
                    navigator.maxTouchPoints > 0),
                (this._pointerEvent = Boolean(window.PointerEvent)),
                this._addEventListeners();
        }
        static get Default() {
            return X;
        }
        static get NAME() {
            return K;
        }
        next() {
            this._slide(Q);
        }
        nextWhenVisible() {
            !document.hidden && l(this._element) && this.next();
        }
        prev() {
            this._slide(G);
        }
        pause(t) {
            t || (this._isPaused = !0),
                V.findOne(
                    ".carousel-item-next, .carousel-item-prev",
                    this._element
                ) && (s(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
        }
        cycle(t) {
            t || (this._isPaused = !1),
                this._interval &&
                    (clearInterval(this._interval), (this._interval = null)),
                this._config &&
                    this._config.interval &&
                    !this._isPaused &&
                    (this._updateInterval(),
                    (this._interval = setInterval(
                        (document.visibilityState
                            ? this.nextWhenVisible
                            : this.next
                        ).bind(this),
                        this._config.interval
                    )));
        }
        to(t) {
            this._activeElement = V.findOne(nt, this._element);
            const e = this._getItemIndex(this._activeElement);
            if (t > this._items.length - 1 || t < 0) return;
            if (this._isSliding)
                return void j.one(this._element, et, () => this.to(t));
            if (e === t) return this.pause(), void this.cycle();
            const i = t > e ? Q : G;
            this._slide(i, this._items[t]);
        }
        _getConfig(t) {
            return (
                (t = {
                    ...X,
                    ...U.getDataAttributes(this._element),
                    ...("object" == typeof t ? t : {}),
                }),
                a(K, t, Y),
                t
            );
        }
        _handleSwipe() {
            const t = Math.abs(this.touchDeltaX);
            if (t <= 40) return;
            const e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e && this._slide(e > 0 ? J : Z);
        }
        _addEventListeners() {
            this._config.keyboard &&
                j.on(this._element, "keydown.bs.carousel", (t) =>
                    this._keydown(t)
                ),
                "hover" === this._config.pause &&
                    (j.on(this._element, "mouseenter.bs.carousel", (t) =>
                        this.pause(t)
                    ),
                    j.on(this._element, "mouseleave.bs.carousel", (t) =>
                        this.cycle(t)
                    )),
                this._config.touch &&
                    this._touchSupported &&
                    this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            const t = (t) =>
                    this._pointerEvent &&
                    ("pen" === t.pointerType || "touch" === t.pointerType),
                e = (e) => {
                    t(e)
                        ? (this.touchStartX = e.clientX)
                        : this._pointerEvent ||
                          (this.touchStartX = e.touches[0].clientX);
                },
                i = (t) => {
                    this.touchDeltaX =
                        t.touches && t.touches.length > 1
                            ? 0
                            : t.touches[0].clientX - this.touchStartX;
                },
                n = (e) => {
                    t(e) && (this.touchDeltaX = e.clientX - this.touchStartX),
                        this._handleSwipe(),
                        "hover" === this._config.pause &&
                            (this.pause(),
                            this.touchTimeout &&
                                clearTimeout(this.touchTimeout),
                            (this.touchTimeout = setTimeout(
                                (t) => this.cycle(t),
                                500 + this._config.interval
                            )));
                };
            V.find(".carousel-item img", this._element).forEach((t) => {
                j.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
            }),
                this._pointerEvent
                    ? (j.on(this._element, "pointerdown.bs.carousel", (t) =>
                          e(t)
                      ),
                      j.on(this._element, "pointerup.bs.carousel", (t) => n(t)),
                      this._element.classList.add("pointer-event"))
                    : (j.on(this._element, "touchstart.bs.carousel", (t) =>
                          e(t)
                      ),
                      j.on(this._element, "touchmove.bs.carousel", (t) => i(t)),
                      j.on(this._element, "touchend.bs.carousel", (t) => n(t)));
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = tt[t.key];
            e && (t.preventDefault(), this._slide(e));
        }
        _getItemIndex(t) {
            return (
                (this._items =
                    t && t.parentNode
                        ? V.find(".carousel-item", t.parentNode)
                        : []),
                this._items.indexOf(t)
            );
        }
        _getItemByOrder(t, e) {
            const i = t === Q;
            return v(this._items, e, i, this._config.wrap);
        }
        _triggerSlideEvent(t, e) {
            const i = this._getItemIndex(t),
                n = this._getItemIndex(V.findOne(nt, this._element));
            return j.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: t,
                direction: e,
                from: n,
                to: i,
            });
        }
        _setActiveIndicatorElement(t) {
            if (this._indicatorsElement) {
                const e = V.findOne(".active", this._indicatorsElement);
                e.classList.remove(it), e.removeAttribute("aria-current");
                const i = V.find("[data-bs-target]", this._indicatorsElement);
                for (let e = 0; e < i.length; e++)
                    if (
                        Number.parseInt(
                            i[e].getAttribute("data-bs-slide-to"),
                            10
                        ) === this._getItemIndex(t)
                    ) {
                        i[e].classList.add(it),
                            i[e].setAttribute("aria-current", "true");
                        break;
                    }
            }
        }
        _updateInterval() {
            const t = this._activeElement || V.findOne(nt, this._element);
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            e
                ? ((this._config.defaultInterval =
                      this._config.defaultInterval || this._config.interval),
                  (this._config.interval = e))
                : (this._config.interval =
                      this._config.defaultInterval || this._config.interval);
        }
        _slide(t, e) {
            const i = this._directionToOrder(t),
                n = V.findOne(nt, this._element),
                s = this._getItemIndex(n),
                o = e || this._getItemByOrder(i, n),
                r = this._getItemIndex(o),
                a = Boolean(this._interval),
                l = i === Q,
                c = l ? "carousel-item-start" : "carousel-item-end",
                h = l ? "carousel-item-next" : "carousel-item-prev",
                d = this._orderToDirection(i);
            if (o && o.classList.contains(it))
                return void (this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(o, d).defaultPrevented) return;
            if (!n || !o) return;
            (this._isSliding = !0),
                a && this.pause(),
                this._setActiveIndicatorElement(o),
                (this._activeElement = o);
            const f = () => {
                j.trigger(this._element, et, {
                    relatedTarget: o,
                    direction: d,
                    from: s,
                    to: r,
                });
            };
            if (this._element.classList.contains("slide")) {
                o.classList.add(h),
                    u(o),
                    n.classList.add(c),
                    o.classList.add(c);
                const t = () => {
                    o.classList.remove(c, h),
                        o.classList.add(it),
                        n.classList.remove(it, h, c),
                        (this._isSliding = !1),
                        setTimeout(f, 0);
                };
                this._queueCallback(t, n, !0);
            } else n.classList.remove(it), o.classList.add(it), (this._isSliding = !1), f();
            a && this.cycle();
        }
        _directionToOrder(t) {
            return [J, Z].includes(t)
                ? m()
                    ? t === Z
                        ? G
                        : Q
                    : t === Z
                    ? Q
                    : G
                : t;
        }
        _orderToDirection(t) {
            return [Q, G].includes(t)
                ? m()
                    ? t === G
                        ? Z
                        : J
                    : t === G
                    ? J
                    : Z
                : t;
        }
        static carouselInterface(t, e) {
            const i = st.getOrCreateInstance(t, e);
            let { _config: n } = i;
            "object" == typeof e && (n = { ...n, ...e });
            const s = "string" == typeof e ? e : n.slide;
            if ("number" == typeof e) i.to(e);
            else if ("string" == typeof s) {
                if (void 0 === i[s])
                    throw new TypeError(`No method named "${s}"`);
                i[s]();
            } else n.interval && n.ride && (i.pause(), i.cycle());
        }
        static jQueryInterface(t) {
            return this.each(function () {
                st.carouselInterface(this, t);
            });
        }
        static dataApiClickHandler(t) {
            const e = n(this);
            if (!e || !e.classList.contains("carousel")) return;
            const i = {
                    ...U.getDataAttributes(e),
                    ...U.getDataAttributes(this),
                },
                s = this.getAttribute("data-bs-slide-to");
            s && (i.interval = !1),
                st.carouselInterface(e, i),
                s && st.getInstance(e).to(s),
                t.preventDefault();
        }
    }
    j.on(
        document,
        "click.bs.carousel.data-api",
        "[data-bs-slide], [data-bs-slide-to]",
        st.dataApiClickHandler
    ),
        j.on(window, "load.bs.carousel.data-api", () => {
            const t = V.find('[data-bs-ride="carousel"]');
            for (let e = 0, i = t.length; e < i; e++)
                st.carouselInterface(t[e], st.getInstance(t[e]));
        }),
        g(st);
    const ot = "collapse",
        rt = { toggle: !0, parent: null },
        at = { toggle: "boolean", parent: "(null|element)" },
        lt = "show",
        ct = "collapse",
        ht = "collapsing",
        dt = "collapsed",
        ut = ":scope .collapse .collapse",
        ft = '[data-bs-toggle="collapse"]';
    class pt extends B {
        constructor(t, e) {
            super(t),
                (this._isTransitioning = !1),
                (this._config = this._getConfig(e)),
                (this._triggerArray = []);
            const n = V.find(ft);
            for (let t = 0, e = n.length; t < e; t++) {
                const e = n[t],
                    s = i(e),
                    o = V.find(s).filter((t) => t === this._element);
                null !== s &&
                    o.length &&
                    ((this._selector = s), this._triggerArray.push(e));
            }
            this._initializeChildren(),
                this._config.parent ||
                    this._addAriaAndCollapsedClass(
                        this._triggerArray,
                        this._isShown()
                    ),
                this._config.toggle && this.toggle();
        }
        static get Default() {
            return rt;
        }
        static get NAME() {
            return ot;
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t,
                e = [];
            if (this._config.parent) {
                const t = V.find(ut, this._config.parent);
                e = V.find(
                    ".collapse.show, .collapse.collapsing",
                    this._config.parent
                ).filter((e) => !t.includes(e));
            }
            const i = V.findOne(this._selector);
            if (e.length) {
                const n = e.find((t) => i !== t);
                if (
                    ((t = n ? pt.getInstance(n) : null),
                    t && t._isTransitioning)
                )
                    return;
            }
            if (j.trigger(this._element, "show.bs.collapse").defaultPrevented)
                return;
            e.forEach((e) => {
                i !== e && pt.getOrCreateInstance(e, { toggle: !1 }).hide(),
                    t || H.set(e, "bs.collapse", null);
            });
            const n = this._getDimension();
            this._element.classList.remove(ct),
                this._element.classList.add(ht),
                (this._element.style[n] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0);
            const s = `scroll${n[0].toUpperCase() + n.slice(1)}`;
            this._queueCallback(
                () => {
                    (this._isTransitioning = !1),
                        this._element.classList.remove(ht),
                        this._element.classList.add(ct, lt),
                        (this._element.style[n] = ""),
                        j.trigger(this._element, "shown.bs.collapse");
                },
                this._element,
                !0
            ),
                (this._element.style[n] = `${this._element[s]}px`);
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (j.trigger(this._element, "hide.bs.collapse").defaultPrevented)
                return;
            const t = this._getDimension();
            (this._element.style[t] = `${
                this._element.getBoundingClientRect()[t]
            }px`),
                u(this._element),
                this._element.classList.add(ht),
                this._element.classList.remove(ct, lt);
            const e = this._triggerArray.length;
            for (let t = 0; t < e; t++) {
                const e = this._triggerArray[t],
                    i = n(e);
                i &&
                    !this._isShown(i) &&
                    this._addAriaAndCollapsedClass([e], !1);
            }
            (this._isTransitioning = !0),
                (this._element.style[t] = ""),
                this._queueCallback(
                    () => {
                        (this._isTransitioning = !1),
                            this._element.classList.remove(ht),
                            this._element.classList.add(ct),
                            j.trigger(this._element, "hidden.bs.collapse");
                    },
                    this._element,
                    !0
                );
        }
        _isShown(t = this._element) {
            return t.classList.contains(lt);
        }
        _getConfig(t) {
            return (
                ((t = {
                    ...rt,
                    ...U.getDataAttributes(this._element),
                    ...t,
                }).toggle = Boolean(t.toggle)),
                (t.parent = r(t.parent)),
                a(ot, t, at),
                t
            );
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal")
                ? "width"
                : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = V.find(ut, this._config.parent);
            V.find(ft, this._config.parent)
                .filter((e) => !t.includes(e))
                .forEach((t) => {
                    const e = n(t);
                    e && this._addAriaAndCollapsedClass([t], this._isShown(e));
                });
        }
        _addAriaAndCollapsedClass(t, e) {
            t.length &&
                t.forEach((t) => {
                    e ? t.classList.remove(dt) : t.classList.add(dt),
                        t.setAttribute("aria-expanded", e);
                });
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = {};
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1);
                const i = pt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t]();
                }
            });
        }
    }
    j.on(document, "click.bs.collapse.data-api", ft, function (t) {
        ("A" === t.target.tagName ||
            (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
            t.preventDefault();
        const e = i(this);
        V.find(e).forEach((t) => {
            pt.getOrCreateInstance(t, { toggle: !1 }).toggle();
        });
    }),
        g(pt);
    var mt = "top",
        gt = "bottom",
        _t = "right",
        bt = "left",
        vt = "auto",
        yt = [mt, gt, _t, bt],
        wt = "start",
        Et = "end",
        At = "clippingParents",
        Tt = "viewport",
        Ot = "popper",
        Ct = "reference",
        kt = yt.reduce(function (t, e) {
            return t.concat([e + "-" + wt, e + "-" + Et]);
        }, []),
        Lt = [].concat(yt, [vt]).reduce(function (t, e) {
            return t.concat([e, e + "-" + wt, e + "-" + Et]);
        }, []),
        xt = "beforeRead",
        Dt = "read",
        St = "afterRead",
        Nt = "beforeMain",
        It = "main",
        Pt = "afterMain",
        jt = "beforeWrite",
        Mt = "write",
        Ht = "afterWrite",
        Bt = [xt, Dt, St, Nt, It, Pt, jt, Mt, Ht];
    function Rt(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function Wt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return (e && e.defaultView) || window;
        }
        return t;
    }
    function $t(t) {
        return t instanceof Wt(t).Element || t instanceof Element;
    }
    function zt(t) {
        return t instanceof Wt(t).HTMLElement || t instanceof HTMLElement;
    }
    function qt(t) {
        return (
            "undefined" != typeof ShadowRoot &&
            (t instanceof Wt(t).ShadowRoot || t instanceof ShadowRoot)
        );
    }
    const Ft = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function (t) {
                var i = e.styles[t] || {},
                    n = e.attributes[t] || {},
                    s = e.elements[t];
                zt(s) &&
                    Rt(s) &&
                    (Object.assign(s.style, i),
                    Object.keys(n).forEach(function (t) {
                        var e = n[t];
                        !1 === e
                            ? s.removeAttribute(t)
                            : s.setAttribute(t, !0 === e ? "" : e);
                    }));
            });
        },
        effect: function (t) {
            var e = t.state,
                i = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0",
                    },
                    arrow: { position: "absolute" },
                    reference: {},
                };
            return (
                Object.assign(e.elements.popper.style, i.popper),
                (e.styles = i),
                e.elements.arrow &&
                    Object.assign(e.elements.arrow.style, i.arrow),
                function () {
                    Object.keys(e.elements).forEach(function (t) {
                        var n = e.elements[t],
                            s = e.attributes[t] || {},
                            o = Object.keys(
                                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
                            ).reduce(function (t, e) {
                                return (t[e] = ""), t;
                            }, {});
                        zt(n) &&
                            Rt(n) &&
                            (Object.assign(n.style, o),
                            Object.keys(s).forEach(function (t) {
                                n.removeAttribute(t);
                            }));
                    });
                }
            );
        },
        requires: ["computeStyles"],
    };
    function Ut(t) {
        return t.split("-")[0];
    }
    function Vt(t, e) {
        var i = t.getBoundingClientRect();
        return {
            width: i.width / 1,
            height: i.height / 1,
            top: i.top / 1,
            right: i.right / 1,
            bottom: i.bottom / 1,
            left: i.left / 1,
            x: i.left / 1,
            y: i.top / 1,
        };
    }
    function Kt(t) {
        var e = Vt(t),
            i = t.offsetWidth,
            n = t.offsetHeight;
        return (
            Math.abs(e.width - i) <= 1 && (i = e.width),
            Math.abs(e.height - n) <= 1 && (n = e.height),
            { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
        );
    }
    function Xt(t, e) {
        var i = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (i && qt(i)) {
            var n = e;
            do {
                if (n && t.isSameNode(n)) return !0;
                n = n.parentNode || n.host;
            } while (n);
        }
        return !1;
    }
    function Yt(t) {
        return Wt(t).getComputedStyle(t);
    }
    function Qt(t) {
        return ["table", "td", "th"].indexOf(Rt(t)) >= 0;
    }
    function Gt(t) {
        return (
            ($t(t) ? t.ownerDocument : t.document) || window.document
        ).documentElement;
    }
    function Zt(t) {
        return "html" === Rt(t)
            ? t
            : t.assignedSlot ||
                  t.parentNode ||
                  (qt(t) ? t.host : null) ||
                  Gt(t);
    }
    function Jt(t) {
        return zt(t) && "fixed" !== Yt(t).position ? t.offsetParent : null;
    }
    function te(t) {
        for (
            var e = Wt(t), i = Jt(t);
            i && Qt(i) && "static" === Yt(i).position;

        )
            i = Jt(i);
        return i &&
            ("html" === Rt(i) ||
                ("body" === Rt(i) && "static" === Yt(i).position))
            ? e
            : i ||
                  (function (t) {
                      var e =
                          -1 !==
                          navigator.userAgent.toLowerCase().indexOf("firefox");
                      if (
                          -1 !== navigator.userAgent.indexOf("Trident") &&
                          zt(t) &&
                          "fixed" === Yt(t).position
                      )
                          return null;
                      for (
                          var i = Zt(t);
                          zt(i) && ["html", "body"].indexOf(Rt(i)) < 0;

                      ) {
                          var n = Yt(i);
                          if (
                              "none" !== n.transform ||
                              "none" !== n.perspective ||
                              "paint" === n.contain ||
                              -1 !==
                                  ["transform", "perspective"].indexOf(
                                      n.willChange
                                  ) ||
                              (e && "filter" === n.willChange) ||
                              (e && n.filter && "none" !== n.filter)
                          )
                              return i;
                          i = i.parentNode;
                      }
                      return null;
                  })(t) ||
                  e;
    }
    function ee(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
    }
    var ie = Math.max,
        ne = Math.min,
        se = Math.round;
    function oe(t, e, i) {
        return ie(t, ne(e, i));
    }
    function re(t) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
    }
    function ae(t, e) {
        return e.reduce(function (e, i) {
            return (e[i] = t), e;
        }, {});
    }
    const le = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e,
                i = t.state,
                n = t.name,
                s = t.options,
                o = i.elements.arrow,
                r = i.modifiersData.popperOffsets,
                a = Ut(i.placement),
                l = ee(a),
                c = [bt, _t].indexOf(a) >= 0 ? "height" : "width";
            if (o && r) {
                var h = (function (t, e) {
                        return re(
                            "number" !=
                                typeof (t =
                                    "function" == typeof t
                                        ? t(
                                              Object.assign({}, e.rects, {
                                                  placement: e.placement,
                                              })
                                          )
                                        : t)
                                ? t
                                : ae(t, yt)
                        );
                    })(s.padding, i),
                    d = Kt(o),
                    u = "y" === l ? mt : bt,
                    f = "y" === l ? gt : _t,
                    p =
                        i.rects.reference[c] +
                        i.rects.reference[l] -
                        r[l] -
                        i.rects.popper[c],
                    m = r[l] - i.rects.reference[l],
                    g = te(o),
                    _ = g
                        ? "y" === l
                            ? g.clientHeight || 0
                            : g.clientWidth || 0
                        : 0,
                    b = p / 2 - m / 2,
                    v = h[u],
                    y = _ - d[c] - h[f],
                    w = _ / 2 - d[c] / 2 + b,
                    E = oe(v, w, y),
                    A = l;
                i.modifiersData[n] =
                    (((e = {})[A] = E), (e.centerOffset = E - w), e);
            }
        },
        effect: function (t) {
            var e = t.state,
                i = t.options.element,
                n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n &&
                ("string" != typeof n ||
                    (n = e.elements.popper.querySelector(n))) &&
                Xt(e.elements.popper, n) &&
                (e.elements.arrow = n);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
    };
    function ce(t) {
        return t.split("-")[1];
    }
    var he = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function de(t) {
        var e,
            i = t.popper,
            n = t.popperRect,
            s = t.placement,
            o = t.variation,
            r = t.offsets,
            a = t.position,
            l = t.gpuAcceleration,
            c = t.adaptive,
            h = t.roundOffsets,
            d =
                !0 === h
                    ? (function (t) {
                          var e = t.x,
                              i = t.y,
                              n = window.devicePixelRatio || 1;
                          return {
                              x: se(se(e * n) / n) || 0,
                              y: se(se(i * n) / n) || 0,
                          };
                      })(r)
                    : "function" == typeof h
                    ? h(r)
                    : r,
            u = d.x,
            f = void 0 === u ? 0 : u,
            p = d.y,
            m = void 0 === p ? 0 : p,
            g = r.hasOwnProperty("x"),
            _ = r.hasOwnProperty("y"),
            b = bt,
            v = mt,
            y = window;
        if (c) {
            var w = te(i),
                E = "clientHeight",
                A = "clientWidth";
            w === Wt(i) &&
                "static" !== Yt((w = Gt(i))).position &&
                "absolute" === a &&
                ((E = "scrollHeight"), (A = "scrollWidth")),
                (w = w),
                (s !== mt && ((s !== bt && s !== _t) || o !== Et)) ||
                    ((v = gt), (m -= w[E] - n.height), (m *= l ? 1 : -1)),
                (s !== bt && ((s !== mt && s !== gt) || o !== Et)) ||
                    ((b = _t), (f -= w[A] - n.width), (f *= l ? 1 : -1));
        }
        var T,
            O = Object.assign({ position: a }, c && he);
        return l
            ? Object.assign(
                  {},
                  O,
                  (((T = {})[v] = _ ? "0" : ""),
                  (T[b] = g ? "0" : ""),
                  (T.transform =
                      (y.devicePixelRatio || 1) <= 1
                          ? "translate(" + f + "px, " + m + "px)"
                          : "translate3d(" + f + "px, " + m + "px, 0)"),
                  T)
              )
            : Object.assign(
                  {},
                  O,
                  (((e = {})[v] = _ ? m + "px" : ""),
                  (e[b] = g ? f + "px" : ""),
                  (e.transform = ""),
                  e)
              );
    }
    const ue = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (t) {
            var e = t.state,
                i = t.options,
                n = i.gpuAcceleration,
                s = void 0 === n || n,
                o = i.adaptive,
                r = void 0 === o || o,
                a = i.roundOffsets,
                l = void 0 === a || a,
                c = {
                    placement: Ut(e.placement),
                    variation: ce(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: s,
                };
            null != e.modifiersData.popperOffsets &&
                (e.styles.popper = Object.assign(
                    {},
                    e.styles.popper,
                    de(
                        Object.assign({}, c, {
                            offsets: e.modifiersData.popperOffsets,
                            position: e.options.strategy,
                            adaptive: r,
                            roundOffsets: l,
                        })
                    )
                )),
                null != e.modifiersData.arrow &&
                    (e.styles.arrow = Object.assign(
                        {},
                        e.styles.arrow,
                        de(
                            Object.assign({}, c, {
                                offsets: e.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: l,
                            })
                        )
                    )),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-placement": e.placement,
                }));
        },
        data: {},
    };
    var fe = { passive: !0 };
    const pe = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (t) {
            var e = t.state,
                i = t.instance,
                n = t.options,
                s = n.scroll,
                o = void 0 === s || s,
                r = n.resize,
                a = void 0 === r || r,
                l = Wt(e.elements.popper),
                c = [].concat(
                    e.scrollParents.reference,
                    e.scrollParents.popper
                );
            return (
                o &&
                    c.forEach(function (t) {
                        t.addEventListener("scroll", i.update, fe);
                    }),
                a && l.addEventListener("resize", i.update, fe),
                function () {
                    o &&
                        c.forEach(function (t) {
                            t.removeEventListener("scroll", i.update, fe);
                        }),
                        a && l.removeEventListener("resize", i.update, fe);
                }
            );
        },
        data: {},
    };
    var me = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function ge(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
            return me[t];
        });
    }
    var _e = { start: "end", end: "start" };
    function be(t) {
        return t.replace(/start|end/g, function (t) {
            return _e[t];
        });
    }
    function ve(t) {
        var e = Wt(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
    }
    function ye(t) {
        return Vt(Gt(t)).left + ve(t).scrollLeft;
    }
    function we(t) {
        var e = Yt(t),
            i = e.overflow,
            n = e.overflowX,
            s = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n);
    }
    function Ee(t) {
        return ["html", "body", "#document"].indexOf(Rt(t)) >= 0
            ? t.ownerDocument.body
            : zt(t) && we(t)
            ? t
            : Ee(Zt(t));
    }
    function Ae(t, e) {
        var i;
        void 0 === e && (e = []);
        var n = Ee(t),
            s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
            o = Wt(n),
            r = s ? [o].concat(o.visualViewport || [], we(n) ? n : []) : n,
            a = e.concat(r);
        return s ? a : a.concat(Ae(Zt(r)));
    }
    function Te(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height,
        });
    }
    function Oe(t, e) {
        return e === Tt
            ? Te(
                  (function (t) {
                      var e = Wt(t),
                          i = Gt(t),
                          n = e.visualViewport,
                          s = i.clientWidth,
                          o = i.clientHeight,
                          r = 0,
                          a = 0;
                      return (
                          n &&
                              ((s = n.width),
                              (o = n.height),
                              /^((?!chrome|android).)*safari/i.test(
                                  navigator.userAgent
                              ) || ((r = n.offsetLeft), (a = n.offsetTop))),
                          { width: s, height: o, x: r + ye(t), y: a }
                      );
                  })(t)
              )
            : zt(e)
            ? (function (t) {
                  var e = Vt(t);
                  return (
                      (e.top = e.top + t.clientTop),
                      (e.left = e.left + t.clientLeft),
                      (e.bottom = e.top + t.clientHeight),
                      (e.right = e.left + t.clientWidth),
                      (e.width = t.clientWidth),
                      (e.height = t.clientHeight),
                      (e.x = e.left),
                      (e.y = e.top),
                      e
                  );
              })(e)
            : Te(
                  (function (t) {
                      var e,
                          i = Gt(t),
                          n = ve(t),
                          s = null == (e = t.ownerDocument) ? void 0 : e.body,
                          o = ie(
                              i.scrollWidth,
                              i.clientWidth,
                              s ? s.scrollWidth : 0,
                              s ? s.clientWidth : 0
                          ),
                          r = ie(
                              i.scrollHeight,
                              i.clientHeight,
                              s ? s.scrollHeight : 0,
                              s ? s.clientHeight : 0
                          ),
                          a = -n.scrollLeft + ye(t),
                          l = -n.scrollTop;
                      return (
                          "rtl" === Yt(s || i).direction &&
                              (a +=
                                  ie(i.clientWidth, s ? s.clientWidth : 0) - o),
                          { width: o, height: r, x: a, y: l }
                      );
                  })(Gt(t))
              );
    }
    function Ce(t) {
        var e,
            i = t.reference,
            n = t.element,
            s = t.placement,
            o = s ? Ut(s) : null,
            r = s ? ce(s) : null,
            a = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
        switch (o) {
            case mt:
                e = { x: a, y: i.y - n.height };
                break;
            case gt:
                e = { x: a, y: i.y + i.height };
                break;
            case _t:
                e = { x: i.x + i.width, y: l };
                break;
            case bt:
                e = { x: i.x - n.width, y: l };
                break;
            default:
                e = { x: i.x, y: i.y };
        }
        var c = o ? ee(o) : null;
        if (null != c) {
            var h = "y" === c ? "height" : "width";
            switch (r) {
                case wt:
                    e[c] = e[c] - (i[h] / 2 - n[h] / 2);
                    break;
                case Et:
                    e[c] = e[c] + (i[h] / 2 - n[h] / 2);
            }
        }
        return e;
    }
    function ke(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = void 0 === n ? t.placement : n,
            o = i.boundary,
            r = void 0 === o ? At : o,
            a = i.rootBoundary,
            l = void 0 === a ? Tt : a,
            c = i.elementContext,
            h = void 0 === c ? Ot : c,
            d = i.altBoundary,
            u = void 0 !== d && d,
            f = i.padding,
            p = void 0 === f ? 0 : f,
            m = re("number" != typeof p ? p : ae(p, yt)),
            g = h === Ot ? Ct : Ot,
            _ = t.rects.popper,
            b = t.elements[u ? g : h],
            v = (function (t, e, i) {
                var n =
                        "clippingParents" === e
                            ? (function (t) {
                                  var e = Ae(Zt(t)),
                                      i =
                                          ["absolute", "fixed"].indexOf(
                                              Yt(t).position
                                          ) >= 0 && zt(t)
                                              ? te(t)
                                              : t;
                                  return $t(i)
                                      ? e.filter(function (t) {
                                            return (
                                                $t(t) &&
                                                Xt(t, i) &&
                                                "body" !== Rt(t)
                                            );
                                        })
                                      : [];
                              })(t)
                            : [].concat(e),
                    s = [].concat(n, [i]),
                    o = s[0],
                    r = s.reduce(function (e, i) {
                        var n = Oe(t, i);
                        return (
                            (e.top = ie(n.top, e.top)),
                            (e.right = ne(n.right, e.right)),
                            (e.bottom = ne(n.bottom, e.bottom)),
                            (e.left = ie(n.left, e.left)),
                            e
                        );
                    }, Oe(t, o));
                return (
                    (r.width = r.right - r.left),
                    (r.height = r.bottom - r.top),
                    (r.x = r.left),
                    (r.y = r.top),
                    r
                );
            })($t(b) ? b : b.contextElement || Gt(t.elements.popper), r, l),
            y = Vt(t.elements.reference),
            w = Ce({
                reference: y,
                element: _,
                strategy: "absolute",
                placement: s,
            }),
            E = Te(Object.assign({}, _, w)),
            A = h === Ot ? E : y,
            T = {
                top: v.top - A.top + m.top,
                bottom: A.bottom - v.bottom + m.bottom,
                left: v.left - A.left + m.left,
                right: A.right - v.right + m.right,
            },
            O = t.modifiersData.offset;
        if (h === Ot && O) {
            var C = O[s];
            Object.keys(T).forEach(function (t) {
                var e = [_t, gt].indexOf(t) >= 0 ? 1 : -1,
                    i = [mt, gt].indexOf(t) >= 0 ? "y" : "x";
                T[t] += C[i] * e;
            });
        }
        return T;
    }
    function Le(t, e) {
        void 0 === e && (e = {});
        var i = e,
            n = i.placement,
            s = i.boundary,
            o = i.rootBoundary,
            r = i.padding,
            a = i.flipVariations,
            l = i.allowedAutoPlacements,
            c = void 0 === l ? Lt : l,
            h = ce(n),
            d = h
                ? a
                    ? kt
                    : kt.filter(function (t) {
                          return ce(t) === h;
                      })
                : yt,
            u = d.filter(function (t) {
                return c.indexOf(t) >= 0;
            });
        0 === u.length && (u = d);
        var f = u.reduce(function (e, i) {
            return (
                (e[i] = ke(t, {
                    placement: i,
                    boundary: s,
                    rootBoundary: o,
                    padding: r,
                })[Ut(i)]),
                e
            );
        }, {});
        return Object.keys(f).sort(function (t, e) {
            return f[t] - f[e];
        });
    }
    const xe = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e = t.state,
                i = t.options,
                n = t.name;
            if (!e.modifiersData[n]._skip) {
                for (
                    var s = i.mainAxis,
                        o = void 0 === s || s,
                        r = i.altAxis,
                        a = void 0 === r || r,
                        l = i.fallbackPlacements,
                        c = i.padding,
                        h = i.boundary,
                        d = i.rootBoundary,
                        u = i.altBoundary,
                        f = i.flipVariations,
                        p = void 0 === f || f,
                        m = i.allowedAutoPlacements,
                        g = e.options.placement,
                        _ = Ut(g),
                        b =
                            l ||
                            (_ !== g && p
                                ? (function (t) {
                                      if (Ut(t) === vt) return [];
                                      var e = ge(t);
                                      return [be(t), e, be(e)];
                                  })(g)
                                : [ge(g)]),
                        v = [g].concat(b).reduce(function (t, i) {
                            return t.concat(
                                Ut(i) === vt
                                    ? Le(e, {
                                          placement: i,
                                          boundary: h,
                                          rootBoundary: d,
                                          padding: c,
                                          flipVariations: p,
                                          allowedAutoPlacements: m,
                                      })
                                    : i
                            );
                        }, []),
                        y = e.rects.reference,
                        w = e.rects.popper,
                        E = new Map(),
                        A = !0,
                        T = v[0],
                        O = 0;
                    O < v.length;
                    O++
                ) {
                    var C = v[O],
                        k = Ut(C),
                        L = ce(C) === wt,
                        x = [mt, gt].indexOf(k) >= 0,
                        D = x ? "width" : "height",
                        S = ke(e, {
                            placement: C,
                            boundary: h,
                            rootBoundary: d,
                            altBoundary: u,
                            padding: c,
                        }),
                        N = x ? (L ? _t : bt) : L ? gt : mt;
                    y[D] > w[D] && (N = ge(N));
                    var I = ge(N),
                        P = [];
                    if (
                        (o && P.push(S[k] <= 0),
                        a && P.push(S[N] <= 0, S[I] <= 0),
                        P.every(function (t) {
                            return t;
                        }))
                    ) {
                        (T = C), (A = !1);
                        break;
                    }
                    E.set(C, P);
                }
                if (A)
                    for (
                        var j = function (t) {
                                var e = v.find(function (e) {
                                    var i = E.get(e);
                                    if (i)
                                        return i
                                            .slice(0, t)
                                            .every(function (t) {
                                                return t;
                                            });
                                });
                                if (e) return (T = e), "break";
                            },
                            M = p ? 3 : 1;
                        M > 0 && "break" !== j(M);
                        M--
                    );
                e.placement !== T &&
                    ((e.modifiersData[n]._skip = !0),
                    (e.placement = T),
                    (e.reset = !0));
            }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
    };
    function De(t, e, i) {
        return (
            void 0 === i && (i = { x: 0, y: 0 }),
            {
                top: t.top - e.height - i.y,
                right: t.right - e.width + i.x,
                bottom: t.bottom - e.height + i.y,
                left: t.left - e.width - i.x,
            }
        );
    }
    function Se(t) {
        return [mt, _t, gt, bt].some(function (e) {
            return t[e] >= 0;
        });
    }
    const Ne = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (t) {
                var e = t.state,
                    i = t.name,
                    n = e.rects.reference,
                    s = e.rects.popper,
                    o = e.modifiersData.preventOverflow,
                    r = ke(e, { elementContext: "reference" }),
                    a = ke(e, { altBoundary: !0 }),
                    l = De(r, n),
                    c = De(a, s, o),
                    h = Se(l),
                    d = Se(c);
                (e.modifiersData[i] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: c,
                    isReferenceHidden: h,
                    hasPopperEscaped: d,
                }),
                    (e.attributes.popper = Object.assign(
                        {},
                        e.attributes.popper,
                        {
                            "data-popper-reference-hidden": h,
                            "data-popper-escaped": d,
                        }
                    ));
            },
        },
        Ie = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.offset,
                    o = void 0 === s ? [0, 0] : s,
                    r = Lt.reduce(function (t, i) {
                        return (
                            (t[i] = (function (t, e, i) {
                                var n = Ut(t),
                                    s = [bt, mt].indexOf(n) >= 0 ? -1 : 1,
                                    o =
                                        "function" == typeof i
                                            ? i(
                                                  Object.assign({}, e, {
                                                      placement: t,
                                                  })
                                              )
                                            : i,
                                    r = o[0],
                                    a = o[1];
                                return (
                                    (r = r || 0),
                                    (a = (a || 0) * s),
                                    [bt, _t].indexOf(n) >= 0
                                        ? { x: a, y: r }
                                        : { x: r, y: a }
                                );
                            })(i, e.rects, o)),
                            t
                        );
                    }, {}),
                    a = r[e.placement],
                    l = a.x,
                    c = a.y;
                null != e.modifiersData.popperOffsets &&
                    ((e.modifiersData.popperOffsets.x += l),
                    (e.modifiersData.popperOffsets.y += c)),
                    (e.modifiersData[n] = r);
            },
        },
        Pe = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (t) {
                var e = t.state,
                    i = t.name;
                e.modifiersData[i] = Ce({
                    reference: e.rects.reference,
                    element: e.rects.popper,
                    strategy: "absolute",
                    placement: e.placement,
                });
            },
            data: {},
        },
        je = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (t) {
                var e = t.state,
                    i = t.options,
                    n = t.name,
                    s = i.mainAxis,
                    o = void 0 === s || s,
                    r = i.altAxis,
                    a = void 0 !== r && r,
                    l = i.boundary,
                    c = i.rootBoundary,
                    h = i.altBoundary,
                    d = i.padding,
                    u = i.tether,
                    f = void 0 === u || u,
                    p = i.tetherOffset,
                    m = void 0 === p ? 0 : p,
                    g = ke(e, {
                        boundary: l,
                        rootBoundary: c,
                        padding: d,
                        altBoundary: h,
                    }),
                    _ = Ut(e.placement),
                    b = ce(e.placement),
                    v = !b,
                    y = ee(_),
                    w = "x" === y ? "y" : "x",
                    E = e.modifiersData.popperOffsets,
                    A = e.rects.reference,
                    T = e.rects.popper,
                    O =
                        "function" == typeof m
                            ? m(
                                  Object.assign({}, e.rects, {
                                      placement: e.placement,
                                  })
                              )
                            : m,
                    C = { x: 0, y: 0 };
                if (E) {
                    if (o || a) {
                        var k = "y" === y ? mt : bt,
                            L = "y" === y ? gt : _t,
                            x = "y" === y ? "height" : "width",
                            D = E[y],
                            S = E[y] + g[k],
                            N = E[y] - g[L],
                            I = f ? -T[x] / 2 : 0,
                            P = b === wt ? A[x] : T[x],
                            j = b === wt ? -T[x] : -A[x],
                            M = e.elements.arrow,
                            H = f && M ? Kt(M) : { width: 0, height: 0 },
                            B = e.modifiersData["arrow#persistent"]
                                ? e.modifiersData["arrow#persistent"].padding
                                : { top: 0, right: 0, bottom: 0, left: 0 },
                            R = B[k],
                            W = B[L],
                            $ = oe(0, A[x], H[x]),
                            z = v ? A[x] / 2 - I - $ - R - O : P - $ - R - O,
                            q = v ? -A[x] / 2 + I + $ + W + O : j + $ + W + O,
                            F = e.elements.arrow && te(e.elements.arrow),
                            U = F
                                ? "y" === y
                                    ? F.clientTop || 0
                                    : F.clientLeft || 0
                                : 0,
                            V = e.modifiersData.offset
                                ? e.modifiersData.offset[e.placement][y]
                                : 0,
                            K = E[y] + z - V - U,
                            X = E[y] + q - V;
                        if (o) {
                            var Y = oe(f ? ne(S, K) : S, D, f ? ie(N, X) : N);
                            (E[y] = Y), (C[y] = Y - D);
                        }
                        if (a) {
                            var Q = "x" === y ? mt : bt,
                                G = "x" === y ? gt : _t,
                                Z = E[w],
                                J = Z + g[Q],
                                tt = Z - g[G],
                                et = oe(
                                    f ? ne(J, K) : J,
                                    Z,
                                    f ? ie(tt, X) : tt
                                );
                            (E[w] = et), (C[w] = et - Z);
                        }
                    }
                    e.modifiersData[n] = C;
                }
            },
            requiresIfExists: ["offset"],
        };
    function Me(t, e, i) {
        void 0 === i && (i = !1);
        var n = zt(e);
        zt(e) &&
            (function (t) {
                var e = t.getBoundingClientRect();
                e.width, t.offsetWidth, e.height, t.offsetHeight;
            })(e);
        var s,
            o,
            r = Gt(e),
            a = Vt(t),
            l = { scrollLeft: 0, scrollTop: 0 },
            c = { x: 0, y: 0 };
        return (
            (n || (!n && !i)) &&
                (("body" !== Rt(e) || we(r)) &&
                    (l =
                        (s = e) !== Wt(s) && zt(s)
                            ? {
                                  scrollLeft: (o = s).scrollLeft,
                                  scrollTop: o.scrollTop,
                              }
                            : ve(s)),
                zt(e)
                    ? (((c = Vt(e)).x += e.clientLeft), (c.y += e.clientTop))
                    : r && (c.x = ye(r))),
            {
                x: a.left + l.scrollLeft - c.x,
                y: a.top + l.scrollTop - c.y,
                width: a.width,
                height: a.height,
            }
        );
    }
    function He(t) {
        var e = new Map(),
            i = new Set(),
            n = [];
        function s(t) {
            i.add(t.name),
                []
                    .concat(t.requires || [], t.requiresIfExists || [])
                    .forEach(function (t) {
                        if (!i.has(t)) {
                            var n = e.get(t);
                            n && s(n);
                        }
                    }),
                n.push(t);
        }
        return (
            t.forEach(function (t) {
                e.set(t.name, t);
            }),
            t.forEach(function (t) {
                i.has(t.name) || s(t);
            }),
            n
        );
    }
    var Be = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function Re() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        return !e.some(function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function We(t) {
        void 0 === t && (t = {});
        var e = t,
            i = e.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = e.defaultOptions,
            o = void 0 === s ? Be : s;
        return function (t, e, i) {
            void 0 === i && (i = o);
            var s,
                r,
                a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, Be, o),
                    modifiersData: {},
                    elements: { reference: t, popper: e },
                    attributes: {},
                    styles: {},
                },
                l = [],
                c = !1,
                h = {
                    state: a,
                    setOptions: function (i) {
                        var s = "function" == typeof i ? i(a.options) : i;
                        d(),
                            (a.options = Object.assign({}, o, a.options, s)),
                            (a.scrollParents = {
                                reference: $t(t)
                                    ? Ae(t)
                                    : t.contextElement
                                    ? Ae(t.contextElement)
                                    : [],
                                popper: Ae(e),
                            });
                        var r,
                            c,
                            u = (function (t) {
                                var e = He(t);
                                return Bt.reduce(function (t, i) {
                                    return t.concat(
                                        e.filter(function (t) {
                                            return t.phase === i;
                                        })
                                    );
                                }, []);
                            })(
                                ((r = [].concat(n, a.options.modifiers)),
                                (c = r.reduce(function (t, e) {
                                    var i = t[e.name];
                                    return (
                                        (t[e.name] = i
                                            ? Object.assign({}, i, e, {
                                                  options: Object.assign(
                                                      {},
                                                      i.options,
                                                      e.options
                                                  ),
                                                  data: Object.assign(
                                                      {},
                                                      i.data,
                                                      e.data
                                                  ),
                                              })
                                            : e),
                                        t
                                    );
                                }, {})),
                                Object.keys(c).map(function (t) {
                                    return c[t];
                                }))
                            );
                        return (
                            (a.orderedModifiers = u.filter(function (t) {
                                return t.enabled;
                            })),
                            a.orderedModifiers.forEach(function (t) {
                                var e = t.name,
                                    i = t.options,
                                    n = void 0 === i ? {} : i,
                                    s = t.effect;
                                if ("function" == typeof s) {
                                    var o = s({
                                        state: a,
                                        name: e,
                                        instance: h,
                                        options: n,
                                    });
                                    l.push(o || function () {});
                                }
                            }),
                            h.update()
                        );
                    },
                    forceUpdate: function () {
                        if (!c) {
                            var t = a.elements,
                                e = t.reference,
                                i = t.popper;
                            if (Re(e, i)) {
                                (a.rects = {
                                    reference: Me(
                                        e,
                                        te(i),
                                        "fixed" === a.options.strategy
                                    ),
                                    popper: Kt(i),
                                }),
                                    (a.reset = !1),
                                    (a.placement = a.options.placement),
                                    a.orderedModifiers.forEach(function (t) {
                                        return (a.modifiersData[t.name] =
                                            Object.assign({}, t.data));
                                    });
                                for (
                                    var n = 0;
                                    n < a.orderedModifiers.length;
                                    n++
                                )
                                    if (!0 !== a.reset) {
                                        var s = a.orderedModifiers[n],
                                            o = s.fn,
                                            r = s.options,
                                            l = void 0 === r ? {} : r,
                                            d = s.name;
                                        "function" == typeof o &&
                                            (a =
                                                o({
                                                    state: a,
                                                    options: l,
                                                    name: d,
                                                    instance: h,
                                                }) || a);
                                    } else (a.reset = !1), (n = -1);
                            }
                        }
                    },
                    update:
                        ((s = function () {
                            return new Promise(function (t) {
                                h.forceUpdate(), t(a);
                            });
                        }),
                        function () {
                            return (
                                r ||
                                    (r = new Promise(function (t) {
                                        Promise.resolve().then(function () {
                                            (r = void 0), t(s());
                                        });
                                    })),
                                r
                            );
                        }),
                    destroy: function () {
                        d(), (c = !0);
                    },
                };
            if (!Re(t, e)) return h;
            function d() {
                l.forEach(function (t) {
                    return t();
                }),
                    (l = []);
            }
            return (
                h.setOptions(i).then(function (t) {
                    !c && i.onFirstUpdate && i.onFirstUpdate(t);
                }),
                h
            );
        };
    }
    var $e = We(),
        ze = We({ defaultModifiers: [pe, Pe, ue, Ft] }),
        qe = We({ defaultModifiers: [pe, Pe, ue, Ft, Ie, xe, je, le, Ne] });
    const Fe = Object.freeze({
            __proto__: null,
            popperGenerator: We,
            detectOverflow: ke,
            createPopperBase: $e,
            createPopper: qe,
            createPopperLite: ze,
            top: mt,
            bottom: gt,
            right: _t,
            left: bt,
            auto: vt,
            basePlacements: yt,
            start: wt,
            end: Et,
            clippingParents: At,
            viewport: Tt,
            popper: Ot,
            reference: Ct,
            variationPlacements: kt,
            placements: Lt,
            beforeRead: xt,
            read: Dt,
            afterRead: St,
            beforeMain: Nt,
            main: It,
            afterMain: Pt,
            beforeWrite: jt,
            write: Mt,
            afterWrite: Ht,
            modifierPhases: Bt,
            applyStyles: Ft,
            arrow: le,
            computeStyles: ue,
            eventListeners: pe,
            flip: xe,
            hide: Ne,
            offset: Ie,
            popperOffsets: Pe,
            preventOverflow: je,
        }),
        Ue = "dropdown",
        Ve = "Escape",
        Ke = "Space",
        Xe = "ArrowUp",
        Ye = "ArrowDown",
        Qe = new RegExp("ArrowUp|ArrowDown|Escape"),
        Ge = "click.bs.dropdown.data-api",
        Ze = "keydown.bs.dropdown.data-api",
        Je = "show",
        ti = '[data-bs-toggle="dropdown"]',
        ei = ".dropdown-menu",
        ii = m() ? "top-end" : "top-start",
        ni = m() ? "top-start" : "top-end",
        si = m() ? "bottom-end" : "bottom-start",
        oi = m() ? "bottom-start" : "bottom-end",
        ri = m() ? "left-start" : "right-start",
        ai = m() ? "right-start" : "left-start",
        li = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0,
        },
        ci = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)",
        };
    class hi extends B {
        constructor(t, e) {
            super(t),
                (this._popper = null),
                (this._config = this._getConfig(e)),
                (this._menu = this._getMenuElement()),
                (this._inNavbar = this._detectNavbar());
        }
        static get Default() {
            return li;
        }
        static get DefaultType() {
            return ci;
        }
        static get NAME() {
            return Ue;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (c(this._element) || this._isShown(this._menu)) return;
            const t = { relatedTarget: this._element };
            if (
                j.trigger(this._element, "show.bs.dropdown", t).defaultPrevented
            )
                return;
            const e = hi.getParentFromElement(this._element);
            this._inNavbar
                ? U.setDataAttribute(this._menu, "popper", "none")
                : this._createPopper(e),
                "ontouchstart" in document.documentElement &&
                    !e.closest(".navbar-nav") &&
                    []
                        .concat(...document.body.children)
                        .forEach((t) => j.on(t, "mouseover", d)),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add(Je),
                this._element.classList.add(Je),
                j.trigger(this._element, "shown.bs.dropdown", t);
        }
        hide() {
            if (c(this._element) || !this._isShown(this._menu)) return;
            const t = { relatedTarget: this._element };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            (this._inNavbar = this._detectNavbar()),
                this._popper && this._popper.update();
        }
        _completeHide(t) {
            j.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented ||
                ("ontouchstart" in document.documentElement &&
                    []
                        .concat(...document.body.children)
                        .forEach((t) => j.off(t, "mouseover", d)),
                this._popper && this._popper.destroy(),
                this._menu.classList.remove(Je),
                this._element.classList.remove(Je),
                this._element.setAttribute("aria-expanded", "false"),
                U.removeDataAttribute(this._menu, "popper"),
                j.trigger(this._element, "hidden.bs.dropdown", t));
        }
        _getConfig(t) {
            if (
                ((t = {
                    ...this.constructor.Default,
                    ...U.getDataAttributes(this._element),
                    ...t,
                }),
                a(Ue, t, this.constructor.DefaultType),
                "object" == typeof t.reference &&
                    !o(t.reference) &&
                    "function" != typeof t.reference.getBoundingClientRect)
            )
                throw new TypeError(
                    `${Ue.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                );
            return t;
        }
        _createPopper(t) {
            if (void 0 === Fe)
                throw new TypeError(
                    "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                );
            let e = this._element;
            "parent" === this._config.reference
                ? (e = t)
                : o(this._config.reference)
                ? (e = r(this._config.reference))
                : "object" == typeof this._config.reference &&
                  (e = this._config.reference);
            const i = this._getPopperConfig(),
                n = i.modifiers.find(
                    (t) => "applyStyles" === t.name && !1 === t.enabled
                );
            (this._popper = qe(e, this._menu, i)),
                n && U.setDataAttribute(this._menu, "popper", "static");
        }
        _isShown(t = this._element) {
            return t.classList.contains(Je);
        }
        _getMenuElement() {
            return V.next(this._element, ei)[0];
        }
        _getPlacement() {
            const t = this._element.parentNode;
            if (t.classList.contains("dropend")) return ri;
            if (t.classList.contains("dropstart")) return ai;
            const e =
                "end" ===
                getComputedStyle(this._menu)
                    .getPropertyValue("--bs-position")
                    .trim();
            return t.classList.contains("dropup") ? (e ? ni : ii) : e ? oi : si;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t
                ? t.split(",").map((t) => Number.parseInt(t, 10))
                : "function" == typeof t
                ? (e) => t(e, this._element)
                : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                ],
            };
            return (
                "static" === this._config.display &&
                    (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
                {
                    ...t,
                    ...("function" == typeof this._config.popperConfig
                        ? this._config.popperConfig(t)
                        : this._config.popperConfig),
                }
            );
        }
        _selectMenuItem({ key: t, target: e }) {
            const i = V.find(
                ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                this._menu
            ).filter(l);
            i.length && v(i, e, t === Ye, !i.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = hi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (
                t &&
                (2 === t.button || ("keyup" === t.type && "Tab" !== t.key))
            )
                return;
            const e = V.find(ti);
            for (let i = 0, n = e.length; i < n; i++) {
                const n = hi.getInstance(e[i]);
                if (!n || !1 === n._config.autoClose) continue;
                if (!n._isShown()) continue;
                const s = { relatedTarget: n._element };
                if (t) {
                    const e = t.composedPath(),
                        i = e.includes(n._menu);
                    if (
                        e.includes(n._element) ||
                        ("inside" === n._config.autoClose && !i) ||
                        ("outside" === n._config.autoClose && i)
                    )
                        continue;
                    if (
                        n._menu.contains(t.target) &&
                        (("keyup" === t.type && "Tab" === t.key) ||
                            /input|select|option|textarea|form/i.test(
                                t.target.tagName
                            ))
                    )
                        continue;
                    "click" === t.type && (s.clickEvent = t);
                }
                n._completeHide(s);
            }
        }
        static getParentFromElement(t) {
            return n(t) || t.parentNode;
        }
        static dataApiKeydownHandler(t) {
            if (
                /input|textarea/i.test(t.target.tagName)
                    ? t.key === Ke ||
                      (t.key !== Ve &&
                          ((t.key !== Ye && t.key !== Xe) ||
                              t.target.closest(ei)))
                    : !Qe.test(t.key)
            )
                return;
            const e = this.classList.contains(Je);
            if (!e && t.key === Ve) return;
            if ((t.preventDefault(), t.stopPropagation(), c(this))) return;
            const i = this.matches(ti) ? this : V.prev(this, ti)[0],
                n = hi.getOrCreateInstance(i);
            if (t.key !== Ve)
                return t.key === Xe || t.key === Ye
                    ? (e || n.show(), void n._selectMenuItem(t))
                    : void ((e && t.key !== Ke) || hi.clearMenus());
            n.hide();
        }
    }
    j.on(document, Ze, ti, hi.dataApiKeydownHandler),
        j.on(document, Ze, ei, hi.dataApiKeydownHandler),
        j.on(document, Ge, hi.clearMenus),
        j.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus),
        j.on(document, Ge, ti, function (t) {
            t.preventDefault(), hi.getOrCreateInstance(this).toggle();
        }),
        g(hi);
    const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        ui = ".sticky-top";
    class fi {
        constructor() {
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
                this._setElementAttributes(
                    this._element,
                    "paddingRight",
                    (e) => e + t
                ),
                this._setElementAttributes(di, "paddingRight", (e) => e + t),
                this._setElementAttributes(ui, "marginRight", (e) => e - t);
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(t, e, i) {
            const n = this.getWidth();
            this._applyManipulationCallback(t, (t) => {
                if (
                    t !== this._element &&
                    window.innerWidth > t.clientWidth + n
                )
                    return;
                this._saveInitialAttribute(t, e);
                const s = window.getComputedStyle(t)[e];
                t.style[e] = `${i(Number.parseFloat(s))}px`;
            });
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, "paddingRight"),
                this._resetElementAttributes(di, "paddingRight"),
                this._resetElementAttributes(ui, "marginRight");
        }
        _saveInitialAttribute(t, e) {
            const i = t.style[e];
            i && U.setDataAttribute(t, e, i);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t) => {
                const i = U.getDataAttribute(t, e);
                void 0 === i
                    ? t.style.removeProperty(e)
                    : (U.removeDataAttribute(t, e), (t.style[e] = i));
            });
        }
        _applyManipulationCallback(t, e) {
            o(t) ? e(t) : V.find(t, this._element).forEach(e);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
    }
    const pi = {
            className: "modal-backdrop",
            isVisible: !0,
            isAnimated: !1,
            rootElement: "body",
            clickCallback: null,
        },
        mi = {
            className: "string",
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)",
        },
        gi = "show",
        _i = "mousedown.bs.backdrop";
    class bi {
        constructor(t) {
            (this._config = this._getConfig(t)),
                (this._isAppended = !1),
                (this._element = null);
        }
        show(t) {
            this._config.isVisible
                ? (this._append(),
                  this._config.isAnimated && u(this._getElement()),
                  this._getElement().classList.add(gi),
                  this._emulateAnimation(() => {
                      _(t);
                  }))
                : _(t);
        }
        hide(t) {
            this._config.isVisible
                ? (this._getElement().classList.remove(gi),
                  this._emulateAnimation(() => {
                      this.dispose(), _(t);
                  }))
                : _(t);
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                (t.className = this._config.className),
                    this._config.isAnimated && t.classList.add("fade"),
                    (this._element = t);
            }
            return this._element;
        }
        _getConfig(t) {
            return (
                ((t = {
                    ...pi,
                    ...("object" == typeof t ? t : {}),
                }).rootElement = r(t.rootElement)),
                a("backdrop", t, mi),
                t
            );
        }
        _append() {
            this._isAppended ||
                (this._config.rootElement.append(this._getElement()),
                j.on(this._getElement(), _i, () => {
                    _(this._config.clickCallback);
                }),
                (this._isAppended = !0));
        }
        dispose() {
            this._isAppended &&
                (j.off(this._element, _i),
                this._element.remove(),
                (this._isAppended = !1));
        }
        _emulateAnimation(t) {
            b(t, this._getElement(), this._config.isAnimated);
        }
    }
    const vi = { trapElement: null, autofocus: !0 },
        yi = { trapElement: "element", autofocus: "boolean" },
        wi = ".bs.focustrap",
        Ei = "backward";
    class Ai {
        constructor(t) {
            (this._config = this._getConfig(t)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
        }
        activate() {
            const { trapElement: t, autofocus: e } = this._config;
            this._isActive ||
                (e && t.focus(),
                j.off(document, wi),
                j.on(document, "focusin.bs.focustrap", (t) =>
                    this._handleFocusin(t)
                ),
                j.on(document, "keydown.tab.bs.focustrap", (t) =>
                    this._handleKeydown(t)
                ),
                (this._isActive = !0));
        }
        deactivate() {
            this._isActive && ((this._isActive = !1), j.off(document, wi));
        }
        _handleFocusin(t) {
            const { target: e } = t,
                { trapElement: i } = this._config;
            if (e === document || e === i || i.contains(e)) return;
            const n = V.focusableChildren(i);
            0 === n.length
                ? i.focus()
                : this._lastTabNavDirection === Ei
                ? n[n.length - 1].focus()
                : n[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key &&
                (this._lastTabNavDirection = t.shiftKey ? Ei : "forward");
        }
        _getConfig(t) {
            return (
                (t = { ...vi, ...("object" == typeof t ? t : {}) }),
                a("focustrap", t, yi),
                t
            );
        }
    }
    const Ti = "modal",
        Oi = "Escape",
        Ci = { backdrop: !0, keyboard: !0, focus: !0 },
        ki = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
        },
        Li = "hidden.bs.modal",
        xi = "show.bs.modal",
        Di = "resize.bs.modal",
        Si = "click.dismiss.bs.modal",
        Ni = "keydown.dismiss.bs.modal",
        Ii = "mousedown.dismiss.bs.modal",
        Pi = "modal-open",
        ji = "show",
        Mi = "modal-static";
    class Hi extends B {
        constructor(t, e) {
            super(t),
                (this._config = this._getConfig(e)),
                (this._dialog = V.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._ignoreBackdropClick = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new fi());
        }
        static get Default() {
            return Ci;
        }
        static get NAME() {
            return Ti;
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
                this._isTransitioning ||
                j.trigger(this._element, xi, { relatedTarget: t })
                    .defaultPrevented ||
                ((this._isShown = !0),
                this._isAnimated() && (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(Pi),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                j.on(this._dialog, Ii, () => {
                    j.one(this._element, "mouseup.dismiss.bs.modal", (t) => {
                        t.target === this._element &&
                            (this._ignoreBackdropClick = !0);
                    });
                }),
                this._showBackdrop(() => this._showElement(t)));
        }
        hide() {
            if (!this._isShown || this._isTransitioning) return;
            if (j.trigger(this._element, "hide.bs.modal").defaultPrevented)
                return;
            this._isShown = !1;
            const t = this._isAnimated();
            t && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                this._focustrap.deactivate(),
                this._element.classList.remove(ji),
                j.off(this._element, Si),
                j.off(this._dialog, Ii),
                this._queueCallback(() => this._hideModal(), this._element, t);
        }
        dispose() {
            [window, this._dialog].forEach((t) => j.off(t, ".bs.modal")),
                this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new bi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated(),
            });
        }
        _initializeFocusTrap() {
            return new Ai({ trapElement: this._element });
        }
        _getConfig(t) {
            return (
                (t = {
                    ...Ci,
                    ...U.getDataAttributes(this._element),
                    ...("object" == typeof t ? t : {}),
                }),
                a(Ti, t, ki),
                t
            );
        }
        _showElement(t) {
            const e = this._isAnimated(),
                i = V.findOne(".modal-body", this._dialog);
            (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0),
                i && (i.scrollTop = 0),
                e && u(this._element),
                this._element.classList.add(ji),
                this._queueCallback(
                    () => {
                        this._config.focus && this._focustrap.activate(),
                            (this._isTransitioning = !1),
                            j.trigger(this._element, "shown.bs.modal", {
                                relatedTarget: t,
                            });
                    },
                    this._dialog,
                    e
                );
        }
        _setEscapeEvent() {
            this._isShown
                ? j.on(this._element, Ni, (t) => {
                      this._config.keyboard && t.key === Oi
                          ? (t.preventDefault(), this.hide())
                          : this._config.keyboard ||
                            t.key !== Oi ||
                            this._triggerBackdropTransition();
                  })
                : j.off(this._element, Ni);
        }
        _setResizeEvent() {
            this._isShown
                ? j.on(window, Di, () => this._adjustDialog())
                : j.off(window, Di);
        }
        _hideModal() {
            (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                    document.body.classList.remove(Pi),
                        this._resetAdjustments(),
                        this._scrollBar.reset(),
                        j.trigger(this._element, Li);
                });
        }
        _showBackdrop(t) {
            j.on(this._element, Si, (t) => {
                this._ignoreBackdropClick
                    ? (this._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      (!0 === this._config.backdrop
                          ? this.hide()
                          : "static" === this._config.backdrop &&
                            this._triggerBackdropTransition());
            }),
                this._backdrop.show(t);
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (
                j.trigger(this._element, "hidePrevented.bs.modal")
                    .defaultPrevented
            )
                return;
            const { classList: t, scrollHeight: e, style: i } = this._element,
                n = e > document.documentElement.clientHeight;
            (!n && "hidden" === i.overflowY) ||
                t.contains(Mi) ||
                (n || (i.overflowY = "hidden"),
                t.add(Mi),
                this._queueCallback(() => {
                    t.remove(Mi),
                        n ||
                            this._queueCallback(() => {
                                i.overflowY = "";
                            }, this._dialog);
                }, this._dialog),
                this._element.focus());
        }
        _adjustDialog() {
            const t =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
            ((!i && t && !m()) || (i && !t && m())) &&
                (this._element.style.paddingLeft = `${e}px`),
                ((i && !t && !m()) || (!i && t && m())) &&
                    (this._element.style.paddingRight = `${e}px`);
        }
        _resetAdjustments() {
            (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
        }
        static jQueryInterface(t, e) {
            return this.each(function () {
                const i = Hi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t])
                        throw new TypeError(`No method named "${t}"`);
                    i[t](e);
                }
            });
        }
    }
    j.on(
        document,
        "click.bs.modal.data-api",
        '[data-bs-toggle="modal"]',
        function (t) {
            const e = n(this);
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                j.one(e, xi, (t) => {
                    t.defaultPrevented ||
                        j.one(e, Li, () => {
                            l(this) && this.focus();
                        });
                });
            const i = V.findOne(".modal.show");
            i && Hi.getInstance(i).hide(),
                Hi.getOrCreateInstance(e).toggle(this);
        }
    ),
        R(Hi),
        g(Hi);
    const Bi = "offcanvas",
        Ri = { backdrop: !0, keyboard: !0, scroll: !1 },
        Wi = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
        $i = "show",
        zi = ".offcanvas.show",
        qi = "hidden.bs.offcanvas";
    class Fi extends B {
        constructor(t, e) {
            super(t),
                (this._config = this._getConfig(e)),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                this._addEventListeners();
        }
        static get NAME() {
            return Bi;
        }
        static get Default() {
            return Ri;
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            this._isShown ||
                j.trigger(this._element, "show.bs.offcanvas", {
                    relatedTarget: t,
                }).defaultPrevented ||
                ((this._isShown = !0),
                (this._element.style.visibility = "visible"),
                this._backdrop.show(),
                this._config.scroll || new fi().hide(),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add($i),
                this._queueCallback(
                    () => {
                        this._config.scroll || this._focustrap.activate(),
                            j.trigger(this._element, "shown.bs.offcanvas", {
                                relatedTarget: t,
                            });
                    },
                    this._element,
                    !0
                ));
        }
        hide() {
            this._isShown &&
                (j.trigger(this._element, "hide.bs.offcanvas")
                    .defaultPrevented ||
                    (this._focustrap.deactivate(),
                    this._element.blur(),
                    (this._isShown = !1),
                    this._element.classList.remove($i),
                    this._backdrop.hide(),
                    this._queueCallback(
                        () => {
                            this._element.setAttribute("aria-hidden", !0),
                                this._element.removeAttribute("aria-modal"),
                                this._element.removeAttribute("role"),
                                (this._element.style.visibility = "hidden"),
                                this._config.scroll || new fi().reset(),
                                j.trigger(this._element, qi);
                        },
                        this._element,
                        !0
                    )));
        }
        dispose() {
            this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
        }
        _getConfig(t) {
            return (
                (t = {
                    ...Ri,
                    ...U.getDataAttributes(this._element),
                    ...("object" == typeof t ? t : {}),
                }),
                a(Bi, t, Wi),
                t
            );
        }
        _initializeBackDrop() {
            return new bi({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide(),
            });
        }
        _initializeFocusTrap() {
            return new Ai({ trapElement: this._element });
        }
        _addEventListeners() {
            j.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
                this._config.keyboard && "Escape" === t.key && this.hide();
            });
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Fi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (
                        void 0 === e[t] ||
                        t.startsWith("_") ||
                        "constructor" === t
                    )
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    j.on(
        document,
        "click.bs.offcanvas.data-api",
        '[data-bs-toggle="offcanvas"]',
        function (t) {
            const e = n(this);
            if (
                (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                c(this))
            )
                return;
            j.one(e, qi, () => {
                l(this) && this.focus();
            });
            const i = V.findOne(zi);
            i && i !== e && Fi.getInstance(i).hide(),
                Fi.getOrCreateInstance(e).toggle(this);
        }
    ),
        j.on(window, "load.bs.offcanvas.data-api", () =>
            V.find(zi).forEach((t) => Fi.getOrCreateInstance(t).show())
        ),
        R(Fi),
        g(Fi);
    const Ui = new Set([
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
        ]),
        Vi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        Ki =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Xi = (t, e) => {
            const i = t.nodeName.toLowerCase();
            if (e.includes(i))
                return (
                    !Ui.has(i) ||
                    Boolean(Vi.test(t.nodeValue) || Ki.test(t.nodeValue))
                );
            const n = e.filter((t) => t instanceof RegExp);
            for (let t = 0, e = n.length; t < e; t++)
                if (n[t].test(i)) return !0;
            return !1;
        };
    function Yi(t, e, i) {
        if (!t.length) return t;
        if (i && "function" == typeof i) return i(t);
        const n = new window.DOMParser().parseFromString(t, "text/html"),
            s = [].concat(...n.body.querySelectorAll("*"));
        for (let t = 0, i = s.length; t < i; t++) {
            const i = s[t],
                n = i.nodeName.toLowerCase();
            if (!Object.keys(e).includes(n)) {
                i.remove();
                continue;
            }
            const o = [].concat(...i.attributes),
                r = [].concat(e["*"] || [], e[n] || []);
            o.forEach((t) => {
                Xi(t, r) || i.removeAttribute(t.nodeName);
            });
        }
        return n.body.innerHTML;
    }
    const Qi = "tooltip",
        Gi = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Zi = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)",
        },
        Ji = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: m() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: m() ? "right" : "left",
        },
        tn = {
            animation: !0,
            template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            },
            popperConfig: null,
        },
        en = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip",
        },
        nn = "fade",
        sn = "show",
        on = "show",
        rn = "out",
        an = ".tooltip-inner",
        ln = ".modal",
        cn = "hide.bs.modal",
        hn = "hover",
        dn = "focus";
    class un extends B {
        constructor(t, e) {
            if (void 0 === Fe)
                throw new TypeError(
                    "Bootstrap's tooltips require Popper (https://popper.js.org)"
                );
            super(t),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._hoverState = ""),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._config = this._getConfig(e)),
                (this.tip = null),
                this._setListeners();
        }
        static get Default() {
            return tn;
        }
        static get NAME() {
            return Qi;
        }
        static get Event() {
            return en;
        }
        static get DefaultType() {
            return Zi;
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle(t) {
            if (this._isEnabled)
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    (e._activeTrigger.click = !e._activeTrigger.click),
                        e._isWithActiveTrigger()
                            ? e._enter(null, e)
                            : e._leave(null, e);
                } else {
                    if (this.getTipElement().classList.contains(sn))
                        return void this._leave(null, this);
                    this._enter(null, this);
                }
        }
        dispose() {
            clearTimeout(this._timeout),
                j.off(this._element.closest(ln), cn, this._hideModalHandler),
                this.tip && this.tip.remove(),
                this._disposePopper(),
                super.dispose();
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const t = j.trigger(this._element, this.constructor.Event.SHOW),
                e = h(this._element),
                i =
                    null === e
                        ? this._element.ownerDocument.documentElement.contains(
                              this._element
                          )
                        : e.contains(this._element);
            if (t.defaultPrevented || !i) return;
            "tooltip" === this.constructor.NAME &&
                this.tip &&
                this.getTitle() !== this.tip.querySelector(an).innerHTML &&
                (this._disposePopper(), this.tip.remove(), (this.tip = null));
            const n = this.getTipElement(),
                s = ((t) => {
                    do {
                        t += Math.floor(1e6 * Math.random());
                    } while (document.getElementById(t));
                    return t;
                })(this.constructor.NAME);
            n.setAttribute("id", s),
                this._element.setAttribute("aria-describedby", s),
                this._config.animation && n.classList.add(nn);
            const o =
                    "function" == typeof this._config.placement
                        ? this._config.placement.call(this, n, this._element)
                        : this._config.placement,
                r = this._getAttachment(o);
            this._addAttachmentClass(r);
            const { container: a } = this._config;
            H.set(n, this.constructor.DATA_KEY, this),
                this._element.ownerDocument.documentElement.contains(
                    this.tip
                ) ||
                    (a.append(n),
                    j.trigger(this._element, this.constructor.Event.INSERTED)),
                this._popper
                    ? this._popper.update()
                    : (this._popper = qe(
                          this._element,
                          n,
                          this._getPopperConfig(r)
                      )),
                n.classList.add(sn);
            const l = this._resolvePossibleFunction(this._config.customClass);
            l && n.classList.add(...l.split(" ")),
                "ontouchstart" in document.documentElement &&
                    [].concat(...document.body.children).forEach((t) => {
                        j.on(t, "mouseover", d);
                    });
            const c = this.tip.classList.contains(nn);
            this._queueCallback(
                () => {
                    const t = this._hoverState;
                    (this._hoverState = null),
                        j.trigger(this._element, this.constructor.Event.SHOWN),
                        t === rn && this._leave(null, this);
                },
                this.tip,
                c
            );
        }
        hide() {
            if (!this._popper) return;
            const t = this.getTipElement();
            if (
                j.trigger(this._element, this.constructor.Event.HIDE)
                    .defaultPrevented
            )
                return;
            t.classList.remove(sn),
                "ontouchstart" in document.documentElement &&
                    []
                        .concat(...document.body.children)
                        .forEach((t) => j.off(t, "mouseover", d)),
                (this._activeTrigger.click = !1),
                (this._activeTrigger.focus = !1),
                (this._activeTrigger.hover = !1);
            const e = this.tip.classList.contains(nn);
            this._queueCallback(
                () => {
                    this._isWithActiveTrigger() ||
                        (this._hoverState !== on && t.remove(),
                        this._cleanTipClass(),
                        this._element.removeAttribute("aria-describedby"),
                        j.trigger(this._element, this.constructor.Event.HIDDEN),
                        this._disposePopper());
                },
                this.tip,
                e
            ),
                (this._hoverState = "");
        }
        update() {
            null !== this._popper && this._popper.update();
        }
        isWithContent() {
            return Boolean(this.getTitle());
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const t = document.createElement("div");
            t.innerHTML = this._config.template;
            const e = t.children[0];
            return (
                this.setContent(e),
                e.classList.remove(nn, sn),
                (this.tip = e),
                this.tip
            );
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), an);
        }
        _sanitizeAndSetContent(t, e, i) {
            const n = V.findOne(i, t);
            e || !n ? this.setElementContent(n, e) : n.remove();
        }
        setElementContent(t, e) {
            if (null !== t)
                return o(e)
                    ? ((e = r(e)),
                      void (this._config.html
                          ? e.parentNode !== t &&
                            ((t.innerHTML = ""), t.append(e))
                          : (t.textContent = e.textContent)))
                    : void (this._config.html
                          ? (this._config.sanitize &&
                                (e = Yi(
                                    e,
                                    this._config.allowList,
                                    this._config.sanitizeFn
                                )),
                            (t.innerHTML = e))
                          : (t.textContent = e));
        }
        getTitle() {
            const t =
                this._element.getAttribute("data-bs-original-title") ||
                this._config.title;
            return this._resolvePossibleFunction(t);
        }
        updateAttachment(t) {
            return "right" === t ? "end" : "left" === t ? "start" : t;
        }
        _initializeOnDelegatedTarget(t, e) {
            return (
                e ||
                this.constructor.getOrCreateInstance(
                    t.delegateTarget,
                    this._getDelegateConfig()
                )
            );
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t
                ? t.split(",").map((t) => Number.parseInt(t, 10))
                : "function" == typeof t
                ? (e) => t(e, this._element)
                : t;
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t;
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements,
                        },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    {
                        name: "arrow",
                        options: { element: `.${this.constructor.NAME}-arrow` },
                    },
                    {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: (t) => this._handlePopperPlacementChange(t),
                    },
                ],
                onFirstUpdate: (t) => {
                    t.options.placement !== t.placement &&
                        this._handlePopperPlacementChange(t);
                },
            };
            return {
                ...e,
                ...("function" == typeof this._config.popperConfig
                    ? this._config.popperConfig(e)
                    : this._config.popperConfig),
            };
        }
        _addAttachmentClass(t) {
            this.getTipElement().classList.add(
                `${this._getBasicClassPrefix()}-${this.updateAttachment(t)}`
            );
        }
        _getAttachment(t) {
            return Ji[t.toUpperCase()];
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((t) => {
                if ("click" === t)
                    j.on(
                        this._element,
                        this.constructor.Event.CLICK,
                        this._config.selector,
                        (t) => this.toggle(t)
                    );
                else if ("manual" !== t) {
                    const e =
                            t === hn
                                ? this.constructor.Event.MOUSEENTER
                                : this.constructor.Event.FOCUSIN,
                        i =
                            t === hn
                                ? this.constructor.Event.MOUSELEAVE
                                : this.constructor.Event.FOCUSOUT;
                    j.on(this._element, e, this._config.selector, (t) =>
                        this._enter(t)
                    ),
                        j.on(this._element, i, this._config.selector, (t) =>
                            this._leave(t)
                        );
                }
            }),
                (this._hideModalHandler = () => {
                    this._element && this.hide();
                }),
                j.on(this._element.closest(ln), cn, this._hideModalHandler),
                this._config.selector
                    ? (this._config = {
                          ...this._config,
                          trigger: "manual",
                          selector: "",
                      })
                    : this._fixTitle();
        }
        _fixTitle() {
            const t = this._element.getAttribute("title"),
                e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) &&
                (this._element.setAttribute("data-bs-original-title", t || ""),
                !t ||
                    this._element.getAttribute("aria-label") ||
                    this._element.textContent ||
                    this._element.setAttribute("aria-label", t),
                this._element.setAttribute("title", ""));
        }
        _enter(t, e) {
            (e = this._initializeOnDelegatedTarget(t, e)),
                t && (e._activeTrigger["focusin" === t.type ? dn : hn] = !0),
                e.getTipElement().classList.contains(sn) || e._hoverState === on
                    ? (e._hoverState = on)
                    : (clearTimeout(e._timeout),
                      (e._hoverState = on),
                      e._config.delay && e._config.delay.show
                          ? (e._timeout = setTimeout(() => {
                                e._hoverState === on && e.show();
                            }, e._config.delay.show))
                          : e.show());
        }
        _leave(t, e) {
            (e = this._initializeOnDelegatedTarget(t, e)),
                t &&
                    (e._activeTrigger["focusout" === t.type ? dn : hn] =
                        e._element.contains(t.relatedTarget)),
                e._isWithActiveTrigger() ||
                    (clearTimeout(e._timeout),
                    (e._hoverState = rn),
                    e._config.delay && e._config.delay.hide
                        ? (e._timeout = setTimeout(() => {
                              e._hoverState === rn && e.hide();
                          }, e._config.delay.hide))
                        : e.hide());
        }
        _isWithActiveTrigger() {
            for (const t in this._activeTrigger)
                if (this._activeTrigger[t]) return !0;
            return !1;
        }
        _getConfig(t) {
            const e = U.getDataAttributes(this._element);
            return (
                Object.keys(e).forEach((t) => {
                    Gi.has(t) && delete e[t];
                }),
                ((t = {
                    ...this.constructor.Default,
                    ...e,
                    ...("object" == typeof t && t ? t : {}),
                }).container =
                    !1 === t.container ? document.body : r(t.container)),
                "number" == typeof t.delay &&
                    (t.delay = { show: t.delay, hide: t.delay }),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content &&
                    (t.content = t.content.toString()),
                a(Qi, t, this.constructor.DefaultType),
                t.sanitize &&
                    (t.template = Yi(t.template, t.allowList, t.sanitizeFn)),
                t
            );
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config)
                this.constructor.Default[e] !== this._config[e] &&
                    (t[e] = this._config[e]);
            return t;
        }
        _cleanTipClass() {
            const t = this.getTipElement(),
                e = new RegExp(
                    `(^|\\s)${this._getBasicClassPrefix()}\\S+`,
                    "g"
                ),
                i = t.getAttribute("class").match(e);
            null !== i &&
                i.length > 0 &&
                i.map((t) => t.trim()).forEach((e) => t.classList.remove(e));
        }
        _getBasicClassPrefix() {
            return "bs-tooltip";
        }
        _handlePopperPlacementChange(t) {
            const { state: e } = t;
            e &&
                ((this.tip = e.elements.popper),
                this._cleanTipClass(),
                this._addAttachmentClass(this._getAttachment(e.placement)));
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), (this._popper = null));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = un.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    g(un);
    const fn = {
            ...un.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        },
        pn = { ...un.DefaultType, content: "(string|element|function)" },
        mn = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover",
        };
    class gn extends un {
        static get Default() {
            return fn;
        }
        static get NAME() {
            return "popover";
        }
        static get Event() {
            return mn;
        }
        static get DefaultType() {
            return pn;
        }
        isWithContent() {
            return this.getTitle() || this._getContent();
        }
        setContent(t) {
            this._sanitizeAndSetContent(t, this.getTitle(), ".popover-header"),
                this._sanitizeAndSetContent(
                    t,
                    this._getContent(),
                    ".popover-body"
                );
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        _getBasicClassPrefix() {
            return "bs-popover";
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = gn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    g(gn);
    const _n = "scrollspy",
        bn = { offset: 10, method: "auto", target: "" },
        vn = { offset: "number", method: "string", target: "(string|element)" },
        yn = "active",
        wn = ".nav-link, .list-group-item, .dropdown-item",
        En = "position";
    class An extends B {
        constructor(t, e) {
            super(t),
                (this._scrollElement =
                    "BODY" === this._element.tagName ? window : this._element),
                (this._config = this._getConfig(e)),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                j.on(this._scrollElement, "scroll.bs.scrollspy", () =>
                    this._process()
                ),
                this.refresh(),
                this._process();
        }
        static get Default() {
            return bn;
        }
        static get NAME() {
            return _n;
        }
        refresh() {
            const t =
                    this._scrollElement === this._scrollElement.window
                        ? "offset"
                        : En,
                e = "auto" === this._config.method ? t : this._config.method,
                n = e === En ? this._getScrollTop() : 0;
            (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                V.find(wn, this._config.target)
                    .map((t) => {
                        const s = i(t),
                            o = s ? V.findOne(s) : null;
                        if (o) {
                            const t = o.getBoundingClientRect();
                            if (t.width || t.height)
                                return [U[e](o).top + n, s];
                        }
                        return null;
                    })
                    .filter((t) => t)
                    .sort((t, e) => t[0] - e[0])
                    .forEach((t) => {
                        this._offsets.push(t[0]), this._targets.push(t[1]);
                    });
        }
        dispose() {
            j.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
        }
        _getConfig(t) {
            return (
                ((t = {
                    ...bn,
                    ...U.getDataAttributes(this._element),
                    ...("object" == typeof t && t ? t : {}),
                }).target = r(t.target) || document.documentElement),
                a(_n, t, vn),
                t
            );
        }
        _getScrollTop() {
            return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
            return (
                this._scrollElement.scrollHeight ||
                Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                )
            );
        }
        _getOffsetHeight() {
            return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
            const t = this._getScrollTop() + this._config.offset,
                e = this._getScrollHeight(),
                i = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
                const t = this._targets[this._targets.length - 1];
                this._activeTarget !== t && this._activate(t);
            } else {
                if (
                    this._activeTarget &&
                    t < this._offsets[0] &&
                    this._offsets[0] > 0
                )
                    return (this._activeTarget = null), void this._clear();
                for (let e = this._offsets.length; e--; )
                    this._activeTarget !== this._targets[e] &&
                        t >= this._offsets[e] &&
                        (void 0 === this._offsets[e + 1] ||
                            t < this._offsets[e + 1]) &&
                        this._activate(this._targets[e]);
            }
        }
        _activate(t) {
            (this._activeTarget = t), this._clear();
            const e = wn
                    .split(",")
                    .map(
                        (e) => `${e}[data-bs-target="${t}"],${e}[href="${t}"]`
                    ),
                i = V.findOne(e.join(","), this._config.target);
            i.classList.add(yn),
                i.classList.contains("dropdown-item")
                    ? V.findOne(
                          ".dropdown-toggle",
                          i.closest(".dropdown")
                      ).classList.add(yn)
                    : V.parents(i, ".nav, .list-group").forEach((t) => {
                          V.prev(t, ".nav-link, .list-group-item").forEach(
                              (t) => t.classList.add(yn)
                          ),
                              V.prev(t, ".nav-item").forEach((t) => {
                                  V.children(t, ".nav-link").forEach((t) =>
                                      t.classList.add(yn)
                                  );
                              });
                      }),
                j.trigger(this._scrollElement, "activate.bs.scrollspy", {
                    relatedTarget: t,
                });
        }
        _clear() {
            V.find(wn, this._config.target)
                .filter((t) => t.classList.contains(yn))
                .forEach((t) => t.classList.remove(yn));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = An.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    j.on(window, "load.bs.scrollspy.data-api", () => {
        V.find('[data-bs-spy="scroll"]').forEach((t) => new An(t));
    }),
        g(An);
    const Tn = "active",
        On = "fade",
        Cn = "show",
        kn = ".active",
        Ln = ":scope > li > .active";
    class xn extends B {
        static get NAME() {
            return "tab";
        }
        show() {
            if (
                this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                this._element.classList.contains(Tn)
            )
                return;
            let t;
            const e = n(this._element),
                i = this._element.closest(".nav, .list-group");
            if (i) {
                const e = "UL" === i.nodeName || "OL" === i.nodeName ? Ln : kn;
                (t = V.find(e, i)), (t = t[t.length - 1]);
            }
            const s = t
                ? j.trigger(t, "hide.bs.tab", { relatedTarget: this._element })
                : null;
            if (
                j.trigger(this._element, "show.bs.tab", { relatedTarget: t })
                    .defaultPrevented ||
                (null !== s && s.defaultPrevented)
            )
                return;
            this._activate(this._element, i);
            const o = () => {
                j.trigger(t, "hidden.bs.tab", { relatedTarget: this._element }),
                    j.trigger(this._element, "shown.bs.tab", {
                        relatedTarget: t,
                    });
            };
            e ? this._activate(e, e.parentNode, o) : o();
        }
        _activate(t, e, i) {
            const n = (
                    !e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
                        ? V.children(e, kn)
                        : V.find(Ln, e)
                )[0],
                s = i && n && n.classList.contains(On),
                o = () => this._transitionComplete(t, n, i);
            n && s
                ? (n.classList.remove(Cn), this._queueCallback(o, t, !0))
                : o();
        }
        _transitionComplete(t, e, i) {
            if (e) {
                e.classList.remove(Tn);
                const t = V.findOne(
                    ":scope > .dropdown-menu .active",
                    e.parentNode
                );
                t && t.classList.remove(Tn),
                    "tab" === e.getAttribute("role") &&
                        e.setAttribute("aria-selected", !1);
            }
            t.classList.add(Tn),
                "tab" === t.getAttribute("role") &&
                    t.setAttribute("aria-selected", !0),
                u(t),
                t.classList.contains(On) && t.classList.add(Cn);
            let n = t.parentNode;
            if (
                (n && "LI" === n.nodeName && (n = n.parentNode),
                n && n.classList.contains("dropdown-menu"))
            ) {
                const e = t.closest(".dropdown");
                e &&
                    V.find(".dropdown-toggle", e).forEach((t) =>
                        t.classList.add(Tn)
                    ),
                    t.setAttribute("aria-expanded", !0);
            }
            i && i();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = xn.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    j.on(
        document,
        "click.bs.tab.data-api",
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        function (t) {
            ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                c(this) || xn.getOrCreateInstance(this).show();
        }
    ),
        g(xn);
    const Dn = "toast",
        Sn = "hide",
        Nn = "show",
        In = "showing",
        Pn = { animation: "boolean", autohide: "boolean", delay: "number" },
        jn = { animation: !0, autohide: !0, delay: 5e3 };
    class Mn extends B {
        constructor(t, e) {
            super(t),
                (this._config = this._getConfig(e)),
                (this._timeout = null),
                (this._hasMouseInteraction = !1),
                (this._hasKeyboardInteraction = !1),
                this._setListeners();
        }
        static get DefaultType() {
            return Pn;
        }
        static get Default() {
            return jn;
        }
        static get NAME() {
            return Dn;
        }
        show() {
            j.trigger(this._element, "show.bs.toast").defaultPrevented ||
                (this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade"),
                this._element.classList.remove(Sn),
                u(this._element),
                this._element.classList.add(Nn),
                this._element.classList.add(In),
                this._queueCallback(
                    () => {
                        this._element.classList.remove(In),
                            j.trigger(this._element, "shown.bs.toast"),
                            this._maybeScheduleHide();
                    },
                    this._element,
                    this._config.animation
                ));
        }
        hide() {
            this._element.classList.contains(Nn) &&
                (j.trigger(this._element, "hide.bs.toast").defaultPrevented ||
                    (this._element.classList.add(In),
                    this._queueCallback(
                        () => {
                            this._element.classList.add(Sn),
                                this._element.classList.remove(In),
                                this._element.classList.remove(Nn),
                                j.trigger(this._element, "hidden.bs.toast");
                        },
                        this._element,
                        this._config.animation
                    )));
        }
        dispose() {
            this._clearTimeout(),
                this._element.classList.contains(Nn) &&
                    this._element.classList.remove(Nn),
                super.dispose();
        }
        _getConfig(t) {
            return (
                (t = {
                    ...jn,
                    ...U.getDataAttributes(this._element),
                    ...("object" == typeof t && t ? t : {}),
                }),
                a(Dn, t, this.constructor.DefaultType),
                t
            );
        }
        _maybeScheduleHide() {
            this._config.autohide &&
                (this._hasMouseInteraction ||
                    this._hasKeyboardInteraction ||
                    (this._timeout = setTimeout(() => {
                        this.hide();
                    }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i ||
                this._element.contains(i) ||
                this._maybeScheduleHide();
        }
        _setListeners() {
            j.on(this._element, "mouseover.bs.toast", (t) =>
                this._onInteraction(t, !0)
            ),
                j.on(this._element, "mouseout.bs.toast", (t) =>
                    this._onInteraction(t, !1)
                ),
                j.on(this._element, "focusin.bs.toast", (t) =>
                    this._onInteraction(t, !0)
                ),
                j.on(this._element, "focusout.bs.toast", (t) =>
                    this._onInteraction(t, !1)
                );
        }
        _clearTimeout() {
            clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Mn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    return (
        R(Mn),
        g(Mn),
        {
            Alert: W,
            Button: z,
            Carousel: st,
            Collapse: pt,
            Dropdown: hi,
            Modal: Hi,
            Offcanvas: Fi,
            Popover: gn,
            ScrollSpy: An,
            Tab: xn,
            Toast: Mn,
            Tooltip: un,
        }
    );
});
(function () {
    "use strict";

    var tinyslider = function () {
        var el = document.querySelectorAll(".testimonial-slider");

        if (el.length > 0) {
            var slider = tns({
                container: ".testimonial-slider",
                items: 1,
                axis: "horizontal",
                controlsContainer: "#testimonial-nav",
                swipeAngle: false,
                speed: 700,
                nav: true,
                controls: true,
                autoplay: true,
                autoplayHoverPause: true,
                autoplayTimeout: 3500,
                autoplayButtonOutput: false,
            });
        }
    };
    tinyslider();

    var sitePlusMinus = function () {
        var value,
            quantity = document.getElementsByClassName("quantity-container");

        function createBindings(quantityContainer) {
            var quantityAmount =
                quantityContainer.getElementsByClassName("quantity-amount")[0];
            var increase =
                quantityContainer.getElementsByClassName("increase")[0];
            var decrease =
                quantityContainer.getElementsByClassName("decrease")[0];
            increase.addEventListener("click", function (e) {
                increaseValue(e, quantityAmount);
            });
            decrease.addEventListener("click", function (e) {
                decreaseValue(e, quantityAmount);
            });
        }

        function init() {
            for (var i = 0; i < quantity.length; i++) {
                createBindings(quantity[i]);
            }
        }

        function increaseValue(event, quantityAmount) {
            value = parseInt(quantityAmount.value, 10);

            console.log(quantityAmount, quantityAmount.value);

            value = isNaN(value) ? 0 : value;
            value++;
            quantityAmount.value = value;
        }

        function decreaseValue(event, quantityAmount) {
            value = parseInt(quantityAmount.value, 10);

            value = isNaN(value) ? 0 : value;
            if (value > 0) value--;

            quantityAmount.value = value;
        }

        init();
    };
    sitePlusMinus();
})();


var tns = (function () {
    Object.keys ||
        (Object.keys = function (t) {
            var e = [];
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
            return e;
        }),
        "remove" in Element.prototype ||
            (Element.prototype.remove = function () {
                this.parentNode && this.parentNode.removeChild(this);
            });
    var t = window,
        Oi =
            t.requestAnimationFrame ||
            t.webkitRequestAnimationFrame ||
            t.mozRequestAnimationFrame ||
            t.msRequestAnimationFrame ||
            function (t) {
                return setTimeout(t, 16);
            },
        e = window,
        Di =
            e.cancelAnimationFrame ||
            e.mozCancelAnimationFrame ||
            function (t) {
                clearTimeout(t);
            };
    function Hi() {
        for (
            var t, e, n, i = arguments[0] || {}, a = 1, r = arguments.length;
            a < r;
            a++
        )
            if (null !== (t = arguments[a]))
                for (e in t) i !== (n = t[e]) && void 0 !== n && (i[e] = n);
        return i;
    }
    function ki(t) {
        return 0 <= ["true", "false"].indexOf(t) ? JSON.parse(t) : t;
    }
    function Ri(t, e, n, i) {
        if (i)
            try {
                t.setItem(e, n);
            } catch (t) {}
        return n;
    }
    function Ii() {
        var t = document,
            e = t.body;
        return e || ((e = t.createElement("body")).fake = !0), e;
    }
    var n = document.documentElement;
    function Pi(t) {
        var e = "";
        return (
            t.fake &&
                ((e = n.style.overflow),
                (t.style.background = ""),
                (t.style.overflow = n.style.overflow = "hidden"),
                n.appendChild(t)),
            e
        );
    }
    function zi(t, e) {
        t.fake && (t.remove(), (n.style.overflow = e), n.offsetHeight);
    }
    function Wi(t, e, n, i) {
        "insertRule" in t
            ? t.insertRule(e + "{" + n + "}", i)
            : t.addRule(e, n, i);
    }
    function Fi(t) {
        return ("insertRule" in t ? t.cssRules : t.rules).length;
    }
    function qi(t, e, n) {
        for (var i = 0, a = t.length; i < a; i++) e.call(n, t[i], i);
    }
    var i = "classList" in document.createElement("_"),
        ji = i
            ? function (t, e) {
                  return t.classList.contains(e);
              }
            : function (t, e) {
                  return 0 <= t.className.indexOf(e);
              },
        Vi = i
            ? function (t, e) {
                  ji(t, e) || t.classList.add(e);
              }
            : function (t, e) {
                  ji(t, e) || (t.className += " " + e);
              },
        Gi = i
            ? function (t, e) {
                  ji(t, e) && t.classList.remove(e);
              }
            : function (t, e) {
                  ji(t, e) && (t.className = t.className.replace(e, ""));
              };
    function Qi(t, e) {
        return t.hasAttribute(e);
    }
    function Xi(t, e) {
        return t.getAttribute(e);
    }
    function r(t) {
        return void 0 !== t.item;
    }
    function Yi(t, e) {
        if (
            ((t = r(t) || t instanceof Array ? t : [t]),
            "[object Object]" === Object.prototype.toString.call(e))
        )
            for (var n = t.length; n--; )
                for (var i in e) t[n].setAttribute(i, e[i]);
    }
    function Ki(t, e) {
        t = r(t) || t instanceof Array ? t : [t];
        for (
            var n = (e = e instanceof Array ? e : [e]).length, i = t.length;
            i--;

        )
            for (var a = n; a--; ) t[i].removeAttribute(e[a]);
    }
    function Ji(t) {
        for (var e = [], n = 0, i = t.length; n < i; n++) e.push(t[n]);
        return e;
    }
    function Ui(t, e) {
        "none" !== t.style.display && (t.style.display = "none");
    }
    function _i(t, e) {
        "none" === t.style.display && (t.style.display = "");
    }
    function Zi(t) {
        return "none" !== window.getComputedStyle(t).display;
    }
    function $i(e) {
        if ("string" == typeof e) {
            var n = [e],
                i = e.charAt(0).toUpperCase() + e.substr(1);
            ["Webkit", "Moz", "ms", "O"].forEach(function (t) {
                ("ms" === t && "transform" !== e) || n.push(t + i);
            }),
                (e = n);
        }
        for (
            var t = document.createElement("fakeelement"), a = (e.length, 0);
            a < e.length;
            a++
        ) {
            var r = e[a];
            if (void 0 !== t.style[r]) return r;
        }
        return !1;
    }
    function ta(t, e) {
        var n = !1;
        return (
            /^Webkit/.test(t)
                ? (n = "webkit" + e + "End")
                : /^O/.test(t)
                ? (n = "o" + e + "End")
                : t && (n = e.toLowerCase() + "end"),
            n
        );
    }
    var a = !1;
    try {
        var o = Object.defineProperty({}, "passive", {
            get: function () {
                a = !0;
            },
        });
        window.addEventListener("test", null, o);
    } catch (t) {}
    var u = !!a && { passive: !0 };
    function ea(t, e, n) {
        for (var i in e) {
            var a = 0 <= ["touchstart", "touchmove"].indexOf(i) && !n && u;
            t.addEventListener(i, e[i], a);
        }
    }
    function na(t, e) {
        for (var n in e) {
            var i = 0 <= ["touchstart", "touchmove"].indexOf(n) && u;
            t.removeEventListener(n, e[n], i);
        }
    }
    function ia() {
        return {
            topics: {},
            on: function (t, e) {
                (this.topics[t] = this.topics[t] || []), this.topics[t].push(e);
            },
            off: function (t, e) {
                if (this.topics[t])
                    for (var n = 0; n < this.topics[t].length; n++)
                        if (this.topics[t][n] === e) {
                            this.topics[t].splice(n, 1);
                            break;
                        }
            },
            emit: function (e, n) {
                (n.type = e),
                    this.topics[e] &&
                        this.topics[e].forEach(function (t) {
                            t(n, e);
                        });
            },
        };
    }
    var aa = function (O) {
        O = Hi(
            {
                container: ".slider",
                mode: "carousel",
                axis: "horizontal",
                items: 1,
                gutter: 0,
                edgePadding: 0,
                fixedWidth: !1,
                autoWidth: !1,
                viewportMax: !1,
                slideBy: 1,
                center: !1,
                controls: !0,
                controlsPosition: "top",
                controlsText: ["prev", "next"],
                controlsContainer: !1,
                prevButton: !1,
                nextButton: !1,
                nav: !0,
                navPosition: "top",
                navContainer: !1,
                navAsThumbnails: !1,
                arrowKeys: !1,
                speed: 300,
                autoplay: !1,
                autoplayPosition: "top",
                autoplayTimeout: 5e3,
                autoplayDirection: "forward",
                autoplayText: ["start", "stop"],
                autoplayHoverPause: !1,
                autoplayButton: !1,
                autoplayButtonOutput: !0,
                autoplayResetOnVisibility: !0,
                animateIn: "tns-fadeIn",
                animateOut: "tns-fadeOut",
                animateNormal: "tns-normal",
                animateDelay: !1,
                loop: !0,
                rewind: !1,
                autoHeight: !1,
                responsive: !1,
                lazyload: !1,
                lazyloadSelector: ".tns-lazy-img",
                touch: !0,
                mouseDrag: !1,
                swipeAngle: 15,
                nested: !1,
                preventActionWhenRunning: !1,
                preventScrollOnTouch: !1,
                freezable: !0,
                onInit: !1,
                useLocalStorage: !0,
            },
            O || {}
        );
        var D = document,
            h = window,
            a = { ENTER: 13, SPACE: 32, LEFT: 37, RIGHT: 39 },
            e = {},
            n = O.useLocalStorage;
        if (n) {
            var t = navigator.userAgent,
                i = new Date();
            try {
                (e = h.localStorage)
                    ? (e.setItem(i, i),
                      (n = e.getItem(i) == i),
                      e.removeItem(i))
                    : (n = !1),
                    n || (e = {});
            } catch (t) {
                n = !1;
            }
            n &&
                (e.tnsApp &&
                    e.tnsApp !== t &&
                    [
                        "tC",
                        "tPL",
                        "tMQ",
                        "tTf",
                        "t3D",
                        "tTDu",
                        "tTDe",
                        "tADu",
                        "tADe",
                        "tTE",
                        "tAE",
                    ].forEach(function (t) {
                        e.removeItem(t);
                    }),
                (localStorage.tnsApp = t));
        }
        var r,
            o,
            u,
            l,
            s,
            c,
            f,
            y = e.tC
                ? ki(e.tC)
                : Ri(
                      e,
                      "tC",
                      (function () {
                          var t = document,
                              e = Ii(),
                              n = Pi(e),
                              i = t.createElement("div"),
                              a = !1;
                          e.appendChild(i);
                          try {
                              for (
                                  var r,
                                      o = "(10px * 10)",
                                      u = [
                                          "calc" + o,
                                          "-moz-calc" + o,
                                          "-webkit-calc" + o,
                                      ],
                                      l = 0;
                                  l < 3;
                                  l++
                              )
                                  if (
                                      ((r = u[l]),
                                      (i.style.width = r),
                                      100 === i.offsetWidth)
                                  ) {
                                      a = r.replace(o, "");
                                      break;
                                  }
                          } catch (t) {}
                          return e.fake ? zi(e, n) : i.remove(), a;
                      })(),
                      n
                  ),
            g = e.tPL
                ? ki(e.tPL)
                : Ri(
                      e,
                      "tPL",
                      (function () {
                          var t,
                              e = document,
                              n = Ii(),
                              i = Pi(n),
                              a = e.createElement("div"),
                              r = e.createElement("div"),
                              o = "";
                          (a.className = "tns-t-subp2"),
                              (r.className = "tns-t-ct");
                          for (var u = 0; u < 70; u++) o += "<div></div>";
                          return (
                              (r.innerHTML = o),
                              a.appendChild(r),
                              n.appendChild(a),
                              (t =
                                  Math.abs(
                                      a.getBoundingClientRect().left -
                                          r.children[67].getBoundingClientRect()
                                              .left
                                  ) < 2),
                              n.fake ? zi(n, i) : a.remove(),
                              t
                          );
                      })(),
                      n
                  ),
            H = e.tMQ
                ? ki(e.tMQ)
                : Ri(
                      e,
                      "tMQ",
                      ((o = document),
                      (u = Ii()),
                      (l = Pi(u)),
                      (s = o.createElement("div")),
                      (c = o.createElement("style")),
                      (f =
                          "@media all and (min-width:1px){.tns-mq-test{position:absolute}}"),
                      (c.type = "text/css"),
                      (s.className = "tns-mq-test"),
                      u.appendChild(c),
                      u.appendChild(s),
                      c.styleSheet
                          ? (c.styleSheet.cssText = f)
                          : c.appendChild(o.createTextNode(f)),
                      (r = window.getComputedStyle
                          ? window.getComputedStyle(s).position
                          : s.currentStyle.position),
                      u.fake ? zi(u, l) : s.remove(),
                      "absolute" === r),
                      n
                  ),
            d = e.tTf ? ki(e.tTf) : Ri(e, "tTf", $i("transform"), n),
            v = e.t3D
                ? ki(e.t3D)
                : Ri(
                      e,
                      "t3D",
                      (function (t) {
                          if (!t) return !1;
                          if (!window.getComputedStyle) return !1;
                          var e,
                              n = document,
                              i = Ii(),
                              a = Pi(i),
                              r = n.createElement("p"),
                              o =
                                  9 < t.length
                                      ? "-" + t.slice(0, -9).toLowerCase() + "-"
                                      : "";
                          return (
                              (o += "transform"),
                              i.insertBefore(r, null),
                              (r.style[t] = "translate3d(1px,1px,1px)"),
                              (e = window
                                  .getComputedStyle(r)
                                  .getPropertyValue(o)),
                              i.fake ? zi(i, a) : r.remove(),
                              void 0 !== e && 0 < e.length && "none" !== e
                          );
                      })(d),
                      n
                  ),
            x = e.tTDu
                ? ki(e.tTDu)
                : Ri(e, "tTDu", $i("transitionDuration"), n),
            p = e.tTDe ? ki(e.tTDe) : Ri(e, "tTDe", $i("transitionDelay"), n),
            b = e.tADu ? ki(e.tADu) : Ri(e, "tADu", $i("animationDuration"), n),
            m = e.tADe ? ki(e.tADe) : Ri(e, "tADe", $i("animationDelay"), n),
            C = e.tTE ? ki(e.tTE) : Ri(e, "tTE", ta(x, "Transition"), n),
            w = e.tAE ? ki(e.tAE) : Ri(e, "tAE", ta(b, "Animation"), n),
            M = h.console && "function" == typeof h.console.warn,
            T = [
                "container",
                "controlsContainer",
                "prevButton",
                "nextButton",
                "navContainer",
                "autoplayButton",
            ],
            E = {};
        if (
            (T.forEach(function (t) {
                if ("string" == typeof O[t]) {
                    var e = O[t],
                        n = D.querySelector(e);
                    if (((E[t] = e), !n || !n.nodeName))
                        return void (M && console.warn("Can't find", O[t]));
                    O[t] = n;
                }
            }),
            !(O.container.children.length < 1))
        ) {
            var k = O.responsive,
                R = O.nested,
                I = "carousel" === O.mode;
            if (k) {
                0 in k && ((O = Hi(O, k[0])), delete k[0]);
                var A = {};
                for (var N in k) {
                    var L = k[N];
                    (L = "number" == typeof L ? { items: L } : L), (A[N] = L);
                }
                (k = A), (A = null);
            }
            if (
                (I ||
                    (function t(e) {
                        for (var n in e)
                            I ||
                                ("slideBy" === n && (e[n] = "page"),
                                "edgePadding" === n && (e[n] = !1),
                                "autoHeight" === n && (e[n] = !1)),
                                "responsive" === n && t(e[n]);
                    })(O),
                !I)
            ) {
                (O.axis = "horizontal"),
                    (O.slideBy = "page"),
                    (O.edgePadding = !1);
                var P = O.animateIn,
                    z = O.animateOut,
                    B = O.animateDelay,
                    W = O.animateNormal;
            }
            var S,
                F,
                q = "horizontal" === O.axis,
                j = D.createElement("div"),
                V = D.createElement("div"),
                G = O.container,
                Q = G.parentNode,
                X = G.outerHTML,
                Y = G.children,
                K = Y.length,
                J = sn(),
                U = !1;
            k && Bn(), I && (G.className += " tns-vpfix");
            var _,
                Z,
                $,
                tt,
                et,
                nt,
                it,
                at,
                rt = O.autoWidth,
                ot = vn("fixedWidth"),
                ut = vn("edgePadding"),
                lt = vn("gutter"),
                st = fn(),
                ct = vn("center"),
                ft = rt ? 1 : Math.floor(vn("items")),
                dt = vn("slideBy"),
                vt = O.viewportMax || O.fixedWidthViewportWidth,
                pt = vn("arrowKeys"),
                mt = vn("speed"),
                ht = O.rewind,
                yt = !ht && O.loop,
                gt = vn("autoHeight"),
                xt = vn("controls"),
                bt = vn("controlsText"),
                Ct = vn("nav"),
                wt = vn("touch"),
                Mt = vn("mouseDrag"),
                Tt = vn("autoplay"),
                Et = vn("autoplayTimeout"),
                At = vn("autoplayText"),
                Nt = vn("autoplayHoverPause"),
                Lt = vn("autoplayResetOnVisibility"),
                Bt =
                    ((at = document.createElement("style")),
                    it && at.setAttribute("media", it),
                    document.querySelector("head").appendChild(at),
                    at.sheet ? at.sheet : at.styleSheet),
                St = O.lazyload,
                Ot = (O.lazyloadSelector, []),
                Dt = yt
                    ? ((et = (function () {
                          {
                              if (rt || (ot && !vt)) return K - 1;
                              var t = ot ? "fixedWidth" : "items",
                                  e = [];
                              if (((ot || O[t] < K) && e.push(O[t]), k))
                                  for (var n in k) {
                                      var i = k[n][t];
                                      i && (ot || i < K) && e.push(i);
                                  }
                              return (
                                  e.length || e.push(0),
                                  Math.ceil(
                                      ot
                                          ? vt / Math.min.apply(null, e)
                                          : Math.max.apply(null, e)
                                  )
                              );
                          }
                      })()),
                      (nt = I ? Math.ceil((5 * et - K) / 2) : 4 * et - K),
                      (nt = Math.max(et, nt)),
                      dn("edgePadding") ? nt + 1 : nt)
                    : 0,
                Ht = I ? K + 2 * Dt : K + Dt,
                kt = !((!ot && !rt) || yt),
                Rt = ot ? ni() : null,
                It = !I || !yt,
                Pt = q ? "left" : "top",
                zt = "",
                Wt = "",
                Ft = ot
                    ? function () {
                          return ct && !yt ? K - 1 : Math.ceil(-Rt / (ot + lt));
                      }
                    : rt
                    ? function () {
                          for (var t = Ht; t--; ) if (_[t] >= -Rt) return t;
                      }
                    : function () {
                          return ct && I && !yt
                              ? K - 1
                              : yt || I
                              ? Math.max(0, Ht - Math.ceil(ft))
                              : Ht - 1;
                      },
                qt = on(vn("startIndex")),
                jt = qt,
                Vt = (rn(), 0),
                Gt = rt ? null : Ft(),
                Qt = O.preventActionWhenRunning,
                Xt = O.swipeAngle,
                Yt = !Xt || "?",
                Kt = !1,
                Jt = O.onInit,
                Ut = new ia(),
                _t = " tns-slider tns-" + O.mode,
                Zt =
                    G.id ||
                    ((tt = window.tnsId),
                    (window.tnsId = tt ? tt + 1 : 1),
                    "tns" + window.tnsId),
                $t = vn("disable"),
                te = !1,
                ee = O.freezable,
                ne = !(!ee || rt) && Ln(),
                ie = !1,
                ae = {
                    click: fi,
                    keydown: function (t) {
                        t = xi(t);
                        var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
                        0 <= e &&
                            (0 === e
                                ? Ee.disabled || fi(t, -1)
                                : Ae.disabled || fi(t, 1));
                    },
                },
                re = {
                    click: function (t) {
                        if (Kt) {
                            if (Qt) return;
                            si();
                        }
                        var e = bi((t = xi(t)));
                        for (; e !== Se && !Qi(e, "data-nav"); )
                            e = e.parentNode;
                        if (Qi(e, "data-nav")) {
                            var n = (ke = Number(Xi(e, "data-nav"))),
                                i = ot || rt ? (n * K) / De : n * ft,
                                a = ve ? n : Math.min(Math.ceil(i), K - 1);
                            ci(a, t), Re === n && (qe && hi(), (ke = -1));
                        }
                    },
                    keydown: function (t) {
                        t = xi(t);
                        var e = D.activeElement;
                        if (!Qi(e, "data-nav")) return;
                        var n = [a.LEFT, a.RIGHT, a.ENTER, a.SPACE].indexOf(
                                t.keyCode
                            ),
                            i = Number(Xi(e, "data-nav"));
                        0 <= n &&
                            (0 === n
                                ? 0 < i && gi(Be[i - 1])
                                : 1 === n
                                ? i < De - 1 && gi(Be[i + 1])
                                : ci((ke = i), t));
                    },
                },
                oe = {
                    mouseover: function () {
                        qe && (vi(), (je = !0));
                    },
                    mouseout: function () {
                        je && (di(), (je = !1));
                    },
                },
                ue = {
                    visibilitychange: function () {
                        D.hidden
                            ? qe && (vi(), (Ge = !0))
                            : Ge && (di(), (Ge = !1));
                    },
                },
                le = {
                    keydown: function (t) {
                        t = xi(t);
                        var e = [a.LEFT, a.RIGHT].indexOf(t.keyCode);
                        0 <= e && fi(t, 0 === e ? -1 : 1);
                    },
                },
                se = {
                    touchstart: Ti,
                    touchmove: Ei,
                    touchend: Ai,
                    touchcancel: Ai,
                },
                ce = {
                    mousedown: Ti,
                    mousemove: Ei,
                    mouseup: Ai,
                    mouseleave: Ai,
                },
                fe = dn("controls"),
                de = dn("nav"),
                ve = !!rt || O.navAsThumbnails,
                pe = dn("autoplay"),
                me = dn("touch"),
                he = dn("mouseDrag"),
                ye = "tns-slide-active",
                ge = "tns-complete",
                xe = {
                    load: function (t) {
                        zn(bi(t));
                    },
                    error: function (t) {
                        (e = bi(t)), Vi(e, "failed"), Wn(e);
                        var e;
                    },
                },
                be = "force" === O.preventScrollOnTouch;
            if (fe)
                var Ce,
                    we,
                    Me = O.controlsContainer,
                    Te = O.controlsContainer
                        ? O.controlsContainer.outerHTML
                        : "",
                    Ee = O.prevButton,
                    Ae = O.nextButton,
                    Ne = O.prevButton ? O.prevButton.outerHTML : "",
                    Le = O.nextButton ? O.nextButton.outerHTML : "";
            if (de)
                var Be,
                    Se = O.navContainer,
                    Oe = O.navContainer ? O.navContainer.outerHTML : "",
                    De = rt ? K : Li(),
                    He = 0,
                    ke = -1,
                    Re = ln(),
                    Ie = Re,
                    Pe = "tns-nav-active",
                    ze = "Carousel Page ",
                    We = " (Current Slide)";
            if (pe)
                var Fe,
                    qe,
                    je,
                    Ve,
                    Ge,
                    Qe = "forward" === O.autoplayDirection ? 1 : -1,
                    Xe = O.autoplayButton,
                    Ye = O.autoplayButton ? O.autoplayButton.outerHTML : "",
                    Ke = [
                        "<span class='tns-visually-hidden'>",
                        " animation</span>",
                    ];
            if (me || he)
                var Je,
                    Ue,
                    _e = {},
                    Ze = {},
                    $e = !1,
                    tn = q
                        ? function (t, e) {
                              return t.x - e.x;
                          }
                        : function (t, e) {
                              return t.y - e.y;
                          };
            rt || an($t || ne),
                d &&
                    ((Pt = d),
                    (zt = "translate"),
                    v
                        ? ((zt += q ? "3d(" : "3d(0px, "),
                          (Wt = q ? ", 0px, 0px)" : ", 0px)"))
                        : ((zt += q ? "X(" : "Y("), (Wt = ")"))),
                I && (G.className = G.className.replace("tns-vpfix", "")),
                (function () {
                    dn("gutter");
                    (j.className = "tns-outer"),
                        (V.className = "tns-inner"),
                        (j.id = Zt + "-ow"),
                        (V.id = Zt + "-iw"),
                        "" === G.id && (G.id = Zt);
                    (_t += g || rt ? " tns-subpixel" : " tns-no-subpixel"),
                        (_t += y ? " tns-calc" : " tns-no-calc"),
                        rt && (_t += " tns-autowidth");
                    (_t += " tns-" + O.axis),
                        (G.className += _t),
                        I
                            ? (((S = D.createElement("div")).id = Zt + "-mw"),
                              (S.className = "tns-ovh"),
                              j.appendChild(S),
                              S.appendChild(V))
                            : j.appendChild(V);
                    if (gt) {
                        var t = S || V;
                        t.className += " tns-ah";
                    }
                    if (
                        (Q.insertBefore(j, G),
                        V.appendChild(G),
                        qi(Y, function (t, e) {
                            Vi(t, "tns-item"),
                                t.id || (t.id = Zt + "-item" + e),
                                !I && W && Vi(t, W),
                                Yi(t, {
                                    "aria-hidden": "true",
                                    tabindex: "-1",
                                });
                        }),
                        Dt)
                    ) {
                        for (
                            var e = D.createDocumentFragment(),
                                n = D.createDocumentFragment(),
                                i = Dt;
                            i--;

                        ) {
                            var a = i % K,
                                r = Y[a].cloneNode(!0);
                            if (
                                (Ki(r, "id"),
                                n.insertBefore(r, n.firstChild),
                                I)
                            ) {
                                var o = Y[K - 1 - a].cloneNode(!0);
                                Ki(o, "id"), e.appendChild(o);
                            }
                        }
                        G.insertBefore(e, G.firstChild),
                            G.appendChild(n),
                            (Y = G.children);
                    }
                })(),
                (function () {
                    if (!I)
                        for (var t = qt, e = qt + Math.min(K, ft); t < e; t++) {
                            var n = Y[t];
                            (n.style.left = (100 * (t - qt)) / ft + "%"),
                                Vi(n, P),
                                Gi(n, W);
                        }
                    q &&
                        (g || rt
                            ? (Wi(
                                  Bt,
                                  "#" + Zt + " > .tns-item",
                                  "font-size:" +
                                      h.getComputedStyle(Y[0]).fontSize +
                                      ";",
                                  Fi(Bt)
                              ),
                              Wi(Bt, "#" + Zt, "font-size:0;", Fi(Bt)))
                            : I &&
                              qi(Y, function (t, e) {
                                  var n;
                                  t.style.marginLeft =
                                      ((n = e),
                                      y
                                          ? y +
                                            "(" +
                                            100 * n +
                                            "% / " +
                                            Ht +
                                            ")"
                                          : (100 * n) / Ht + "%");
                              }));
                    if (H) {
                        if (x) {
                            var i = S && O.autoHeight ? xn(O.speed) : "";
                            Wi(Bt, "#" + Zt + "-mw", i, Fi(Bt));
                        }
                        (i = pn(
                            O.edgePadding,
                            O.gutter,
                            O.fixedWidth,
                            O.speed,
                            O.autoHeight
                        )),
                            Wi(Bt, "#" + Zt + "-iw", i, Fi(Bt)),
                            I &&
                                ((i =
                                    q && !rt
                                        ? "width:" +
                                          mn(O.fixedWidth, O.gutter, O.items) +
                                          ";"
                                        : ""),
                                x && (i += xn(mt)),
                                Wi(Bt, "#" + Zt, i, Fi(Bt))),
                            (i =
                                q && !rt
                                    ? hn(O.fixedWidth, O.gutter, O.items)
                                    : ""),
                            O.gutter && (i += yn(O.gutter)),
                            I || (x && (i += xn(mt)), b && (i += bn(mt))),
                            i && Wi(Bt, "#" + Zt + " > .tns-item", i, Fi(Bt));
                    } else {
                        Gn(),
                            (V.style.cssText = pn(ut, lt, ot, gt)),
                            I && q && !rt && (G.style.width = mn(ot, lt, ft));
                        var i = q && !rt ? hn(ot, lt, ft) : "";
                        lt && (i += yn(lt)),
                            i && Wi(Bt, "#" + Zt + " > .tns-item", i, Fi(Bt));
                    }
                    if (k && H)
                        for (var a in k) {
                            a = parseInt(a);
                            var r = k[a],
                                i = "",
                                o = "",
                                u = "",
                                l = "",
                                s = "",
                                c = rt ? null : vn("items", a),
                                f = vn("fixedWidth", a),
                                d = vn("speed", a),
                                v = vn("edgePadding", a),
                                p = vn("autoHeight", a),
                                m = vn("gutter", a);
                            x &&
                                S &&
                                vn("autoHeight", a) &&
                                "speed" in r &&
                                (o = "#" + Zt + "-mw{" + xn(d) + "}"),
                                ("edgePadding" in r || "gutter" in r) &&
                                    (u =
                                        "#" +
                                        Zt +
                                        "-iw{" +
                                        pn(v, m, f, d, p) +
                                        "}"),
                                I &&
                                    q &&
                                    !rt &&
                                    ("fixedWidth" in r ||
                                        "items" in r ||
                                        (ot && "gutter" in r)) &&
                                    (l = "width:" + mn(f, m, c) + ";"),
                                x && "speed" in r && (l += xn(d)),
                                l && (l = "#" + Zt + "{" + l + "}"),
                                ("fixedWidth" in r ||
                                    (ot && "gutter" in r) ||
                                    (!I && "items" in r)) &&
                                    (s += hn(f, m, c)),
                                "gutter" in r && (s += yn(m)),
                                !I &&
                                    "speed" in r &&
                                    (x && (s += xn(d)), b && (s += bn(d))),
                                s && (s = "#" + Zt + " > .tns-item{" + s + "}"),
                                (i = o + u + l + s) &&
                                    Bt.insertRule(
                                        "@media (min-width: " +
                                            a / 16 +
                                            "em) {" +
                                            i +
                                            "}",
                                        Bt.cssRules.length
                                    );
                        }
                })(),
                Cn();
            var en = yt
                    ? I
                        ? function () {
                              var t = Vt,
                                  e = Gt;
                              (t += dt),
                                  (e -= dt),
                                  ut
                                      ? ((t += 1), (e -= 1))
                                      : ot && (st + lt) % (ot + lt) && (e -= 1),
                                  Dt &&
                                      (e < qt
                                          ? (qt -= K)
                                          : qt < t && (qt += K));
                          }
                        : function () {
                              if (Gt < qt) for (; Vt + K <= qt; ) qt -= K;
                              else if (qt < Vt) for (; qt <= Gt - K; ) qt += K;
                          }
                    : function () {
                          qt = Math.max(Vt, Math.min(Gt, qt));
                      },
                nn = I
                    ? function () {
                          var e, n, i, a, t, r, o, u, l, s, c;
                          ti(G, ""),
                              x || !mt
                                  ? (ri(), (mt && Zi(G)) || si())
                                  : ((e = G),
                                    (n = Pt),
                                    (i = zt),
                                    (a = Wt),
                                    (t = ii()),
                                    (r = mt),
                                    (o = si),
                                    (u = Math.min(r, 10)),
                                    (l = 0 <= t.indexOf("%") ? "%" : "px"),
                                    (t = t.replace(l, "")),
                                    (s = Number(
                                        e.style[n]
                                            .replace(i, "")
                                            .replace(a, "")
                                            .replace(l, "")
                                    )),
                                    (c = ((t - s) / r) * u),
                                    setTimeout(function t() {
                                        (r -= u),
                                            (s += c),
                                            (e.style[n] = i + s + l + a),
                                            0 < r ? setTimeout(t, u) : o();
                                    }, u)),
                              q || Ni();
                      }
                    : function () {
                          Ot = [];
                          var t = {};
                          (t[C] = t[w] = si),
                              na(Y[jt], t),
                              ea(Y[qt], t),
                              oi(jt, P, z, !0),
                              oi(qt, W, P),
                              (C && w && mt && Zi(G)) || si();
                      };
            return {
                version: "2.9.2",
                getInfo: Si,
                events: Ut,
                goTo: ci,
                play: function () {
                    Tt && !qe && (mi(), (Ve = !1));
                },
                pause: function () {
                    qe && (hi(), (Ve = !0));
                },
                isOn: U,
                updateSliderHeight: Xn,
                refresh: Cn,
                destroy: function () {
                    if (
                        ((Bt.disabled = !0),
                        Bt.ownerNode && Bt.ownerNode.remove(),
                        na(h, { resize: An }),
                        pt && na(D, le),
                        Me && na(Me, ae),
                        Se && na(Se, re),
                        na(G, oe),
                        na(G, ue),
                        Xe && na(Xe, { click: yi }),
                        Tt && clearInterval(Fe),
                        I && C)
                    ) {
                        var t = {};
                        (t[C] = si), na(G, t);
                    }
                    wt && na(G, se), Mt && na(G, ce);
                    var r = [X, Te, Ne, Le, Oe, Ye];
                    for (var e in (T.forEach(function (t, e) {
                        var n = "container" === t ? j : O[t];
                        if ("object" == typeof n) {
                            var i =
                                    !!n.previousElementSibling &&
                                    n.previousElementSibling,
                                a = n.parentNode;
                            (n.outerHTML = r[e]),
                                (O[t] = i
                                    ? i.nextElementSibling
                                    : a.firstElementChild);
                        }
                    }),
                    (T =
                        P =
                        z =
                        B =
                        W =
                        q =
                        j =
                        V =
                        G =
                        Q =
                        X =
                        Y =
                        K =
                        F =
                        J =
                        rt =
                        ot =
                        ut =
                        lt =
                        st =
                        ft =
                        dt =
                        vt =
                        pt =
                        mt =
                        ht =
                        yt =
                        gt =
                        Bt =
                        St =
                        _ =
                        Ot =
                        Dt =
                        Ht =
                        kt =
                        Rt =
                        It =
                        Pt =
                        zt =
                        Wt =
                        Ft =
                        qt =
                        jt =
                        Vt =
                        Gt =
                        Xt =
                        Yt =
                        Kt =
                        Jt =
                        Ut =
                        _t =
                        Zt =
                        $t =
                        te =
                        ee =
                        ne =
                        ie =
                        ae =
                        re =
                        oe =
                        ue =
                        le =
                        se =
                        ce =
                        fe =
                        de =
                        ve =
                        pe =
                        me =
                        he =
                        ye =
                        ge =
                        xe =
                        Z =
                        xt =
                        bt =
                        Me =
                        Te =
                        Ee =
                        Ae =
                        Ce =
                        we =
                        Ct =
                        Se =
                        Oe =
                        Be =
                        De =
                        He =
                        ke =
                        Re =
                        Ie =
                        Pe =
                        ze =
                        We =
                        Tt =
                        Et =
                        Qe =
                        At =
                        Nt =
                        Xe =
                        Ye =
                        Lt =
                        Ke =
                        Fe =
                        qe =
                        je =
                        Ve =
                        Ge =
                        _e =
                        Ze =
                        Je =
                        $e =
                        Ue =
                        tn =
                        wt =
                        Mt =
                            null),
                    this))
                        "rebuild" !== e && (this[e] = null);
                    U = !1;
                },
                rebuild: function () {
                    return aa(Hi(O, E));
                },
            };
        }
        function an(t) {
            t && (xt = Ct = wt = Mt = pt = Tt = Nt = Lt = !1);
        }
        function rn() {
            for (var t = I ? qt - Dt : qt; t < 0; ) t += K;
            return (t % K) + 1;
        }
        function on(t) {
            return (
                (t = t ? Math.max(0, Math.min(yt ? K - 1 : K - ft, t)) : 0),
                I ? t + Dt : t
            );
        }
        function un(t) {
            for (null == t && (t = qt), I && (t -= Dt); t < 0; ) t += K;
            return Math.floor(t % K);
        }
        function ln() {
            var t,
                e = un();
            return (
                (t = ve
                    ? e
                    : ot || rt
                    ? Math.ceil(((e + 1) * De) / K - 1)
                    : Math.floor(e / ft)),
                !yt && I && qt === Gt && (t = De - 1),
                t
            );
        }
        function sn() {
            return (
                h.innerWidth ||
                D.documentElement.clientWidth ||
                D.body.clientWidth
            );
        }
        function cn(t) {
            return "top" === t ? "afterbegin" : "beforeend";
        }
        function fn() {
            var t = ut ? 2 * ut - lt : 0;
            return (
                (function t(e) {
                    var n,
                        i,
                        a = D.createElement("div");
                    return (
                        e.appendChild(a),
                        (i = (n = a.getBoundingClientRect()).right - n.left),
                        a.remove(),
                        i || t(e.parentNode)
                    );
                })(Q) - t
            );
        }
        function dn(t) {
            if (O[t]) return !0;
            if (k) for (var e in k) if (k[e][t]) return !0;
            return !1;
        }
        function vn(t, e) {
            if ((null == e && (e = J), "items" === t && ot))
                return Math.floor((st + lt) / (ot + lt)) || 1;
            var n = O[t];
            if (k)
                for (var i in k) e >= parseInt(i) && t in k[i] && (n = k[i][t]);
            return (
                "slideBy" === t && "page" === n && (n = vn("items")),
                I || ("slideBy" !== t && "items" !== t) || (n = Math.floor(n)),
                n
            );
        }
        function pn(t, e, n, i, a) {
            var r = "";
            if (void 0 !== t) {
                var o = t;
                e && (o -= e),
                    (r = q
                        ? "margin: 0 " + o + "px 0 " + t + "px;"
                        : "margin: " + t + "px 0 " + o + "px 0;");
            } else if (e && !n) {
                var u = "-" + e + "px";
                r = "margin: 0 " + (q ? u + " 0 0" : "0 " + u + " 0") + ";";
            }
            return !I && a && x && i && (r += xn(i)), r;
        }
        function mn(t, e, n) {
            return t
                ? (t + e) * Ht + "px"
                : y
                ? y + "(" + 100 * Ht + "% / " + n + ")"
                : (100 * Ht) / n + "%";
        }
        function hn(t, e, n) {
            var i;
            if (t) i = t + e + "px";
            else {
                I || (n = Math.floor(n));
                var a = I ? Ht : n;
                i = y ? y + "(100% / " + a + ")" : 100 / a + "%";
            }
            return (
                (i = "width:" + i), "inner" !== R ? i + ";" : i + " !important;"
            );
        }
        function yn(t) {
            var e = "";
            !1 !== t &&
                (e =
                    (q ? "padding-" : "margin-") +
                    (q ? "right" : "bottom") +
                    ": " +
                    t +
                    "px;");
            return e;
        }
        function gn(t, e) {
            var n = t.substring(0, t.length - e).toLowerCase();
            return n && (n = "-" + n + "-"), n;
        }
        function xn(t) {
            return gn(x, 18) + "transition-duration:" + t / 1e3 + "s;";
        }
        function bn(t) {
            return gn(b, 17) + "animation-duration:" + t / 1e3 + "s;";
        }
        function Cn() {
            if (dn("autoHeight") || rt || !q) {
                var t = G.querySelectorAll("img");
                qi(t, function (t) {
                    var e = t.src;
                    e && e.indexOf("data:image") < 0
                        ? (ea(t, xe),
                          (t.src = ""),
                          (t.src = e),
                          Vi(t, "loading"))
                        : St || zn(t);
                }),
                    Oi(function () {
                        jn(Ji(t), function () {
                            Z = !0;
                        });
                    }),
                    !rt && q && (t = Fn(qt, Math.min(qt + ft - 1, Ht - 1))),
                    St
                        ? wn()
                        : Oi(function () {
                              jn(Ji(t), wn);
                          });
            } else I && ai(), Tn(), En();
        }
        function wn() {
            if (rt) {
                var e = yt ? qt : K - 1;
                !(function t() {
                    Y[e - 1].getBoundingClientRect().right.toFixed(2) ===
                    Y[e].getBoundingClientRect().left.toFixed(2)
                        ? Mn()
                        : setTimeout(function () {
                              t();
                          }, 16);
                })();
            } else Mn();
        }
        function Mn() {
            (q && !rt) ||
                (Yn(),
                rt
                    ? ((Rt = ni()),
                      ee && (ne = Ln()),
                      (Gt = Ft()),
                      an($t || ne))
                    : Ni()),
                I && ai(),
                Tn(),
                En();
        }
        function Tn() {
            if (
                (Kn(),
                j.insertAdjacentHTML(
                    "afterbegin",
                    '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' +
                        Rn() +
                        "</span>  of " +
                        K +
                        "</div>"
                ),
                ($ = j.querySelector(".tns-liveregion .current")),
                pe)
            ) {
                var t = Tt ? "stop" : "start";
                Xe
                    ? Yi(Xe, { "data-action": t })
                    : O.autoplayButtonOutput &&
                      (j.insertAdjacentHTML(
                          cn(O.autoplayPosition),
                          '<button data-action="' +
                              t +
                              '">' +
                              Ke[0] +
                              t +
                              Ke[1] +
                              At[0] +
                              "</button>"
                      ),
                      (Xe = j.querySelector("[data-action]"))),
                    Xe && ea(Xe, { click: yi }),
                    Tt && (mi(), Nt && ea(G, oe), Lt && ea(G, ue));
            }
            if (de) {
                if (Se)
                    Yi(Se, { "aria-label": "Carousel Pagination" }),
                        qi((Be = Se.children), function (t, e) {
                            Yi(t, {
                                "data-nav": e,
                                tabindex: "-1",
                                "aria-label": ze + (e + 1),
                                "aria-controls": Zt,
                            });
                        });
                else {
                    for (
                        var e = "", n = ve ? "" : 'style="display:none"', i = 0;
                        i < K;
                        i++
                    )
                        e +=
                            '<button data-nav="' +
                            i +
                            '" tabindex="-1" aria-controls="' +
                            Zt +
                            '" ' +
                            n +
                            ' aria-label="' +
                            ze +
                            (i + 1) +
                            '"></button>';
                    (e =
                        '<div class="tns-nav" aria-label="Carousel Pagination">' +
                        e +
                        "</div>"),
                        j.insertAdjacentHTML(cn(O.navPosition), e),
                        (Se = j.querySelector(".tns-nav")),
                        (Be = Se.children);
                }
                if ((Bi(), x)) {
                    var a = x.substring(0, x.length - 18).toLowerCase(),
                        r = "transition: all " + mt / 1e3 + "s";
                    a && (r = "-" + a + "-" + r),
                        Wi(Bt, "[aria-controls^=" + Zt + "-item]", r, Fi(Bt));
                }
                Yi(Be[Re], { "aria-label": ze + (Re + 1) + We }),
                    Ki(Be[Re], "tabindex"),
                    Vi(Be[Re], Pe),
                    ea(Se, re);
            }
            fe &&
                (Me ||
                    (Ee && Ae) ||
                    (j.insertAdjacentHTML(
                        cn(O.controlsPosition),
                        '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' +
                            Zt +
                            '">' +
                            bt[0] +
                            '</button><button data-controls="next" tabindex="-1" aria-controls="' +
                            Zt +
                            '">' +
                            bt[1] +
                            "</button></div>"
                    ),
                    (Me = j.querySelector(".tns-controls"))),
                (Ee && Ae) || ((Ee = Me.children[0]), (Ae = Me.children[1])),
                O.controlsContainer &&
                    Yi(Me, {
                        "aria-label": "Carousel Navigation",
                        tabindex: "0",
                    }),
                (O.controlsContainer || (O.prevButton && O.nextButton)) &&
                    Yi([Ee, Ae], { "aria-controls": Zt, tabindex: "-1" }),
                (O.controlsContainer || (O.prevButton && O.nextButton)) &&
                    (Yi(Ee, { "data-controls": "prev" }),
                    Yi(Ae, { "data-controls": "next" })),
                (Ce = Un(Ee)),
                (we = Un(Ae)),
                $n(),
                Me ? ea(Me, ae) : (ea(Ee, ae), ea(Ae, ae))),
                Sn();
        }
        function En() {
            if (I && C) {
                var t = {};
                (t[C] = si), ea(G, t);
            }
            wt && ea(G, se, O.preventScrollOnTouch),
                Mt && ea(G, ce),
                pt && ea(D, le),
                "inner" === R
                    ? Ut.on("outerResized", function () {
                          Nn(), Ut.emit("innerLoaded", Si());
                      })
                    : (k || ot || rt || gt || !q) && ea(h, { resize: An }),
                gt && ("outer" === R ? Ut.on("innerLoaded", qn) : $t || qn()),
                Pn(),
                $t ? Hn() : ne && Dn(),
                Ut.on("indexChanged", Vn),
                "inner" === R && Ut.emit("innerLoaded", Si()),
                "function" == typeof Jt && Jt(Si()),
                (U = !0);
        }
        function An(t) {
            Oi(function () {
                Nn(xi(t));
            });
        }
        function Nn(t) {
            if (U) {
                "outer" === R && Ut.emit("outerResized", Si(t)), (J = sn());
                var e,
                    n = F,
                    i = !1;
                k &&
                    (Bn(),
                    (e = n !== F) && Ut.emit("newBreakpointStart", Si(t)));
                var a,
                    r,
                    o,
                    u,
                    l = ft,
                    s = $t,
                    c = ne,
                    f = pt,
                    d = xt,
                    v = Ct,
                    p = wt,
                    m = Mt,
                    h = Tt,
                    y = Nt,
                    g = Lt,
                    x = qt;
                if (e) {
                    var b = ot,
                        C = gt,
                        w = bt,
                        M = ct,
                        T = At;
                    if (!H)
                        var E = lt,
                            A = ut;
                }
                if (
                    ((pt = vn("arrowKeys")),
                    (xt = vn("controls")),
                    (Ct = vn("nav")),
                    (wt = vn("touch")),
                    (ct = vn("center")),
                    (Mt = vn("mouseDrag")),
                    (Tt = vn("autoplay")),
                    (Nt = vn("autoplayHoverPause")),
                    (Lt = vn("autoplayResetOnVisibility")),
                    e &&
                        (($t = vn("disable")),
                        (ot = vn("fixedWidth")),
                        (mt = vn("speed")),
                        (gt = vn("autoHeight")),
                        (bt = vn("controlsText")),
                        (At = vn("autoplayText")),
                        (Et = vn("autoplayTimeout")),
                        H || ((ut = vn("edgePadding")), (lt = vn("gutter")))),
                    an($t),
                    (st = fn()),
                    (q && !rt) || $t || (Yn(), q || (Ni(), (i = !0))),
                    (ot || rt) && ((Rt = ni()), (Gt = Ft())),
                    (e || ot) &&
                        ((ft = vn("items")),
                        (dt = vn("slideBy")),
                        (r = ft !== l) && (ot || rt || (Gt = Ft()), en())),
                    e &&
                        $t !== s &&
                        ($t
                            ? Hn()
                            : (function () {
                                  if (!te) return;
                                  if (
                                      ((Bt.disabled = !1),
                                      (G.className += _t),
                                      ai(),
                                      yt)
                                  )
                                      for (var t = Dt; t--; )
                                          I && _i(Y[t]), _i(Y[Ht - t - 1]);
                                  if (!I)
                                      for (var e = qt, n = qt + K; e < n; e++) {
                                          var i = Y[e],
                                              a = e < qt + ft ? P : W;
                                          (i.style.left =
                                              (100 * (e - qt)) / ft + "%"),
                                              Vi(i, a);
                                      }
                                  On(), (te = !1);
                              })()),
                    ee &&
                        (e || ot || rt) &&
                        (ne = Ln()) !== c &&
                        (ne
                            ? (ri(ii(on(0))), Dn())
                            : (!(function () {
                                  if (!ie) return;
                                  ut && H && (V.style.margin = "");
                                  if (Dt)
                                      for (
                                          var t = "tns-transparent", e = Dt;
                                          e--;

                                      )
                                          I && Gi(Y[e], t),
                                              Gi(Y[Ht - e - 1], t);
                                  On(), (ie = !1);
                              })(),
                              (i = !0))),
                    an($t || ne),
                    Tt || (Nt = Lt = !1),
                    pt !== f && (pt ? ea(D, le) : na(D, le)),
                    xt !== d &&
                        (xt
                            ? Me
                                ? _i(Me)
                                : (Ee && _i(Ee), Ae && _i(Ae))
                            : Me
                            ? Ui(Me)
                            : (Ee && Ui(Ee), Ae && Ui(Ae))),
                    Ct !== v && (Ct ? _i(Se) : Ui(Se)),
                    wt !== p &&
                        (wt ? ea(G, se, O.preventScrollOnTouch) : na(G, se)),
                    Mt !== m && (Mt ? ea(G, ce) : na(G, ce)),
                    Tt !== h &&
                        (Tt
                            ? (Xe && _i(Xe), qe || Ve || mi())
                            : (Xe && Ui(Xe), qe && hi())),
                    Nt !== y && (Nt ? ea(G, oe) : na(G, oe)),
                    Lt !== g && (Lt ? ea(D, ue) : na(D, ue)),
                    e)
                ) {
                    if (
                        ((ot === b && ct === M) || (i = !0),
                        gt !== C && (gt || (V.style.height = "")),
                        xt &&
                            bt !== w &&
                            ((Ee.innerHTML = bt[0]), (Ae.innerHTML = bt[1])),
                        Xe && At !== T)
                    ) {
                        var N = Tt ? 1 : 0,
                            L = Xe.innerHTML,
                            B = L.length - T[N].length;
                        L.substring(B) === T[N] &&
                            (Xe.innerHTML = L.substring(0, B) + At[N]);
                    }
                } else ct && (ot || rt) && (i = !0);
                if (
                    ((r || (ot && !rt)) && ((De = Li()), Bi()),
                    (a = qt !== x)
                        ? (Ut.emit("indexChanged", Si()), (i = !0))
                        : r
                        ? a || Vn()
                        : (ot || rt) && (Pn(), Kn(), kn()),
                    r &&
                        !I &&
                        (function () {
                            for (var t = qt + Math.min(K, ft), e = Ht; e--; ) {
                                var n = Y[e];
                                qt <= e && e < t
                                    ? (Vi(n, "tns-moving"),
                                      (n.style.left =
                                          (100 * (e - qt)) / ft + "%"),
                                      Vi(n, P),
                                      Gi(n, W))
                                    : n.style.left &&
                                      ((n.style.left = ""), Vi(n, W), Gi(n, P)),
                                    Gi(n, z);
                            }
                            setTimeout(function () {
                                qi(Y, function (t) {
                                    Gi(t, "tns-moving");
                                });
                            }, 300);
                        })(),
                    !$t && !ne)
                ) {
                    if (
                        e &&
                        !H &&
                        ((gt === autoheightTem && mt === speedTem) || Gn(),
                        (ut === A && lt === E) ||
                            (V.style.cssText = pn(ut, lt, ot, mt, gt)),
                        q)
                    ) {
                        I && (G.style.width = mn(ot, lt, ft));
                        var S = hn(ot, lt, ft) + yn(lt);
                        (u = Fi((o = Bt)) - 1),
                            "deleteRule" in o
                                ? o.deleteRule(u)
                                : o.removeRule(u),
                            Wi(Bt, "#" + Zt + " > .tns-item", S, Fi(Bt));
                    }
                    gt && qn(), i && (ai(), (jt = qt));
                }
                e && Ut.emit("newBreakpointEnd", Si(t));
            }
        }
        function Ln() {
            if (!ot && !rt) return K <= (ct ? ft - (ft - 1) / 2 : ft);
            var t = ot ? (ot + lt) * K : _[K],
                e = ut ? st + 2 * ut : st + lt;
            return (
                ct &&
                    (e -= ot
                        ? (st - ot) / 2
                        : (st - (_[qt + 1] - _[qt] - lt)) / 2),
                t <= e
            );
        }
        function Bn() {
            for (var t in ((F = 0), k)) (t = parseInt(t)) <= J && (F = t);
        }
        function Sn() {
            !Tt && Xe && Ui(Xe),
                !Ct && Se && Ui(Se),
                xt || (Me ? Ui(Me) : (Ee && Ui(Ee), Ae && Ui(Ae)));
        }
        function On() {
            Tt && Xe && _i(Xe),
                Ct && Se && _i(Se),
                xt && (Me ? _i(Me) : (Ee && _i(Ee), Ae && _i(Ae)));
        }
        function Dn() {
            if (!ie) {
                if ((ut && (V.style.margin = "0px"), Dt))
                    for (var t = "tns-transparent", e = Dt; e--; )
                        I && Vi(Y[e], t), Vi(Y[Ht - e - 1], t);
                Sn(), (ie = !0);
            }
        }
        function Hn() {
            if (!te) {
                if (
                    ((Bt.disabled = !0),
                    (G.className = G.className.replace(_t.substring(1), "")),
                    Ki(G, ["style"]),
                    yt)
                )
                    for (var t = Dt; t--; ) I && Ui(Y[t]), Ui(Y[Ht - t - 1]);
                if (((q && I) || Ki(V, ["style"]), !I))
                    for (var e = qt, n = qt + K; e < n; e++) {
                        var i = Y[e];
                        Ki(i, ["style"]), Gi(i, P), Gi(i, W);
                    }
                Sn(), (te = !0);
            }
        }
        function kn() {
            var t = Rn();
            $.innerHTML !== t && ($.innerHTML = t);
        }
        function Rn() {
            var t = In(),
                e = t[0] + 1,
                n = t[1] + 1;
            return e === n ? e + "" : e + " to " + n;
        }
        function In(t) {
            null == t && (t = ii());
            var n,
                i,
                a,
                r = qt;
            if (
                (ct || ut
                    ? (rt || ot) &&
                      ((i = -(parseFloat(t) + ut)), (a = i + st + 2 * ut))
                    : rt && ((i = _[qt]), (a = i + st)),
                rt)
            )
                _.forEach(function (t, e) {
                    e < Ht &&
                        ((ct || ut) && t <= i + 0.5 && (r = e),
                        0.5 <= a - t && (n = e));
                });
            else {
                if (ot) {
                    var e = ot + lt;
                    ct || ut
                        ? ((r = Math.floor(i / e)), (n = Math.ceil(a / e - 1)))
                        : (n = r + Math.ceil(st / e) - 1);
                } else if (ct || ut) {
                    var o = ft - 1;
                    if (
                        (ct ? ((r -= o / 2), (n = qt + o / 2)) : (n = qt + o),
                        ut)
                    ) {
                        var u = (ut * ft) / st;
                        (r -= u), (n += u);
                    }
                    (r = Math.floor(r)), (n = Math.ceil(n));
                } else n = r + ft - 1;
                (r = Math.max(r, 0)), (n = Math.min(n, Ht - 1));
            }
            return [r, n];
        }
        function Pn() {
            St &&
                !$t &&
                Fn.apply(null, In()).forEach(function (t) {
                    if (!ji(t, ge)) {
                        var e = {};
                        (e[C] = function (t) {
                            t.stopPropagation();
                        }),
                            ea(t, e),
                            ea(t, xe),
                            (t.src = Xi(t, "data-src"));
                        var n = Xi(t, "data-srcset");
                        n && (t.srcset = n), Vi(t, "loading");
                    }
                });
        }
        function zn(t) {
            Vi(t, "loaded"), Wn(t);
        }
        function Wn(t) {
            Vi(t, "tns-complete"), Gi(t, "loading"), na(t, xe);
        }
        function Fn(t, e) {
            for (var n = []; t <= e; )
                qi(Y[t].querySelectorAll("img"), function (t) {
                    n.push(t);
                }),
                    t++;
            return n;
        }
        function qn() {
            var t = Fn.apply(null, In());
            Oi(function () {
                jn(t, Xn);
            });
        }
        function jn(n, t) {
            return Z
                ? t()
                : (n.forEach(function (t, e) {
                      ji(t, ge) && n.splice(e, 1);
                  }),
                  n.length
                      ? void Oi(function () {
                            jn(n, t);
                        })
                      : t());
        }
        function Vn() {
            Pn(),
                Kn(),
                kn(),
                $n(),
                (function () {
                    if (
                        Ct &&
                        ((Re = 0 <= ke ? ke : ln()), (ke = -1), Re !== Ie)
                    ) {
                        var t = Be[Ie],
                            e = Be[Re];
                        Yi(t, { tabindex: "-1", "aria-label": ze + (Ie + 1) }),
                            Gi(t, Pe),
                            Yi(e, { "aria-label": ze + (Re + 1) + We }),
                            Ki(e, "tabindex"),
                            Vi(e, Pe),
                            (Ie = Re);
                    }
                })();
        }
        function Gn() {
            I && gt && (S.style[x] = mt / 1e3 + "s");
        }
        function Qn(t, e) {
            for (var n = [], i = t, a = Math.min(t + e, Ht); i < a; i++)
                n.push(Y[i].offsetHeight);
            return Math.max.apply(null, n);
        }
        function Xn() {
            var t = gt ? Qn(qt, ft) : Qn(Dt, K),
                e = S || V;
            e.style.height !== t && (e.style.height = t + "px");
        }
        function Yn() {
            _ = [0];
            var n = q ? "left" : "top",
                i = q ? "right" : "bottom",
                a = Y[0].getBoundingClientRect()[n];
            qi(Y, function (t, e) {
                e && _.push(t.getBoundingClientRect()[n] - a),
                    e === Ht - 1 && _.push(t.getBoundingClientRect()[i] - a);
            });
        }
        function Kn() {
            var t = In(),
                n = t[0],
                i = t[1];
            qi(Y, function (t, e) {
                n <= e && e <= i
                    ? Qi(t, "aria-hidden") &&
                      (Ki(t, ["aria-hidden", "tabindex"]), Vi(t, ye))
                    : Qi(t, "aria-hidden") ||
                      (Yi(t, { "aria-hidden": "true", tabindex: "-1" }),
                      Gi(t, ye));
            });
        }
        function Jn(t) {
            return t.nodeName.toLowerCase();
        }
        function Un(t) {
            return "button" === Jn(t);
        }
        function _n(t) {
            return "true" === t.getAttribute("aria-disabled");
        }
        function Zn(t, e, n) {
            t
                ? (e.disabled = n)
                : e.setAttribute("aria-disabled", n.toString());
        }
        function $n() {
            if (xt && !ht && !yt) {
                var t = Ce ? Ee.disabled : _n(Ee),
                    e = we ? Ae.disabled : _n(Ae),
                    n = qt <= Vt,
                    i = !ht && Gt <= qt;
                n && !t && Zn(Ce, Ee, !0),
                    !n && t && Zn(Ce, Ee, !1),
                    i && !e && Zn(we, Ae, !0),
                    !i && e && Zn(we, Ae, !1);
            }
        }
        function ti(t, e) {
            x && (t.style[x] = e);
        }
        function ei(t) {
            return (
                null == t && (t = qt),
                rt
                    ? (st - (ut ? lt : 0) - (_[t + 1] - _[t] - lt)) / 2
                    : ot
                    ? (st - ot) / 2
                    : (ft - 1) / 2
            );
        }
        function ni() {
            var t = st + (ut ? lt : 0) - (ot ? (ot + lt) * Ht : _[Ht]);
            return (
                ct &&
                    !yt &&
                    (t = ot
                        ? -(ot + lt) * (Ht - 1) - ei()
                        : ei(Ht - 1) - _[Ht - 1]),
                0 < t && (t = 0),
                t
            );
        }
        function ii(t) {
            var e;
            if ((null == t && (t = qt), q && !rt))
                if (ot) (e = -(ot + lt) * t), ct && (e += ei());
                else {
                    var n = d ? Ht : ft;
                    ct && (t -= ei()), (e = (100 * -t) / n);
                }
            else (e = -_[t]), ct && rt && (e += ei());
            return (
                kt && (e = Math.max(e, Rt)), (e += !q || rt || ot ? "px" : "%")
            );
        }
        function ai(t) {
            ti(G, "0s"), ri(t);
        }
        function ri(t) {
            null == t && (t = ii()), (G.style[Pt] = zt + t + Wt);
        }
        function oi(t, e, n, i) {
            var a = t + ft;
            yt || (a = Math.min(a, Ht));
            for (var r = t; r < a; r++) {
                var o = Y[r];
                i || (o.style.left = (100 * (r - qt)) / ft + "%"),
                    B &&
                        p &&
                        (o.style[p] = o.style[m] = (B * (r - t)) / 1e3 + "s"),
                    Gi(o, e),
                    Vi(o, n),
                    i && Ot.push(o);
            }
        }
        function ui(t, e) {
            It && en(),
                (qt !== jt || e) &&
                    (Ut.emit("indexChanged", Si()),
                    Ut.emit("transitionStart", Si()),
                    gt && qn(),
                    qe &&
                        t &&
                        0 <= ["click", "keydown"].indexOf(t.type) &&
                        hi(),
                    (Kt = !0),
                    nn());
        }
        function li(t) {
            return t.toLowerCase().replace(/-/g, "");
        }
        function si(t) {
            if (I || Kt) {
                if ((Ut.emit("transitionEnd", Si(t)), !I && 0 < Ot.length))
                    for (var e = 0; e < Ot.length; e++) {
                        var n = Ot[e];
                        (n.style.left = ""),
                            m && p && ((n.style[m] = ""), (n.style[p] = "")),
                            Gi(n, z),
                            Vi(n, W);
                    }
                if (
                    !t ||
                    (!I && t.target.parentNode === G) ||
                    (t.target === G && li(t.propertyName) === li(Pt))
                ) {
                    if (!It) {
                        var i = qt;
                        en(), qt !== i && (Ut.emit("indexChanged", Si()), ai());
                    }
                    "inner" === R && Ut.emit("innerLoaded", Si()),
                        (Kt = !1),
                        (jt = qt);
                }
            }
        }
        function ci(t, e) {
            if (!ne)
                if ("prev" === t) fi(e, -1);
                else if ("next" === t) fi(e, 1);
                else {
                    if (Kt) {
                        if (Qt) return;
                        si();
                    }
                    var n = un(),
                        i = 0;
                    if (
                        ("first" === t
                            ? (i = -n)
                            : "last" === t
                            ? (i = I ? K - ft - n : K - 1 - n)
                            : ("number" != typeof t && (t = parseInt(t)),
                              isNaN(t) ||
                                  (e || (t = Math.max(0, Math.min(K - 1, t))),
                                  (i = t - n))),
                        !I && i && Math.abs(i) < ft)
                    ) {
                        var a = 0 < i ? 1 : -1;
                        i += Vt <= qt + i - K ? K * a : 2 * K * a * -1;
                    }
                    (qt += i),
                        I && yt && (qt < Vt && (qt += K), Gt < qt && (qt -= K)),
                        un(qt) !== un(jt) && ui(e);
                }
        }
        function fi(t, e) {
            if (Kt) {
                if (Qt) return;
                si();
            }
            var n;
            if (!e) {
                for (
                    var i = bi((t = xi(t)));
                    i !== Me && [Ee, Ae].indexOf(i) < 0;

                )
                    i = i.parentNode;
                var a = [Ee, Ae].indexOf(i);
                0 <= a && ((n = !0), (e = 0 === a ? -1 : 1));
            }
            if (ht) {
                if (qt === Vt && -1 === e) return void ci("last", t);
                if (qt === Gt && 1 === e) return void ci("first", t);
            }
            e &&
                ((qt += dt * e),
                rt && (qt = Math.floor(qt)),
                ui(n || (t && "keydown" === t.type) ? t : null));
        }
        function di() {
            (Fe = setInterval(function () {
                fi(null, Qe);
            }, Et)),
                (qe = !0);
        }
        function vi() {
            clearInterval(Fe), (qe = !1);
        }
        function pi(t, e) {
            Yi(Xe, { "data-action": t }),
                (Xe.innerHTML = Ke[0] + t + Ke[1] + e);
        }
        function mi() {
            di(), Xe && pi("stop", At[1]);
        }
        function hi() {
            vi(), Xe && pi("start", At[0]);
        }
        function yi() {
            qe ? (hi(), (Ve = !0)) : (mi(), (Ve = !1));
        }
        function gi(t) {
            t.focus();
        }
        function xi(t) {
            return Ci((t = t || h.event)) ? t.changedTouches[0] : t;
        }
        function bi(t) {
            return t.target || h.event.srcElement;
        }
        function Ci(t) {
            return 0 <= t.type.indexOf("touch");
        }
        function wi(t) {
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
        }
        function Mi() {
            return (
                (a = Ze.y - _e.y),
                (r = Ze.x - _e.x),
                (t = Math.atan2(a, r) * (180 / Math.PI)),
                (e = Xt),
                (n = !1),
                (i = Math.abs(90 - Math.abs(t))),
                90 - e <= i ? (n = "horizontal") : i <= e && (n = "vertical"),
                n === O.axis
            );
            var t, e, n, i, a, r;
        }
        function Ti(t) {
            if (Kt) {
                if (Qt) return;
                si();
            }
            Tt && qe && vi(), ($e = !0), Ue && (Di(Ue), (Ue = null));
            var e = xi(t);
            Ut.emit(Ci(t) ? "touchStart" : "dragStart", Si(t)),
                !Ci(t) && 0 <= ["img", "a"].indexOf(Jn(bi(t))) && wi(t),
                (Ze.x = _e.x = e.clientX),
                (Ze.y = _e.y = e.clientY),
                I &&
                    ((Je = parseFloat(G.style[Pt].replace(zt, ""))),
                    ti(G, "0s"));
        }
        function Ei(t) {
            if ($e) {
                var e = xi(t);
                (Ze.x = e.clientX),
                    (Ze.y = e.clientY),
                    I
                        ? Ue ||
                          (Ue = Oi(function () {
                              !(function t(e) {
                                  if (!Yt) return void ($e = !1);
                                  Di(Ue);
                                  $e &&
                                      (Ue = Oi(function () {
                                          t(e);
                                      }));
                                  "?" === Yt && (Yt = Mi());
                                  if (Yt) {
                                      !be && Ci(e) && (be = !0);
                                      try {
                                          e.type &&
                                              Ut.emit(
                                                  Ci(e)
                                                      ? "touchMove"
                                                      : "dragMove",
                                                  Si(e)
                                              );
                                      } catch (t) {}
                                      var n = Je,
                                          i = tn(Ze, _e);
                                      if (!q || ot || rt) (n += i), (n += "px");
                                      else {
                                          var a = d
                                              ? (i * ft * 100) /
                                                ((st + lt) * Ht)
                                              : (100 * i) / (st + lt);
                                          (n += a), (n += "%");
                                      }
                                      G.style[Pt] = zt + n + Wt;
                                  }
                              })(t);
                          }))
                        : ("?" === Yt && (Yt = Mi()), Yt && (be = !0)),
                    be && t.preventDefault();
            }
        }
        function Ai(i) {
            if ($e) {
                Ue && (Di(Ue), (Ue = null)), I && ti(G, ""), ($e = !1);
                var t = xi(i);
                (Ze.x = t.clientX), (Ze.y = t.clientY);
                var a = tn(Ze, _e);
                if (Math.abs(a)) {
                    if (!Ci(i)) {
                        var n = bi(i);
                        ea(n, {
                            click: function t(e) {
                                wi(e), na(n, { click: t });
                            },
                        });
                    }
                    I
                        ? (Ue = Oi(function () {
                              if (q && !rt) {
                                  var t = (-a * ft) / (st + lt);
                                  (t = 0 < a ? Math.floor(t) : Math.ceil(t)),
                                      (qt += t);
                              } else {
                                  var e = -(Je + a);
                                  if (e <= 0) qt = Vt;
                                  else if (e >= _[Ht - 1]) qt = Gt;
                                  else
                                      for (var n = 0; n < Ht && e >= _[n]; )
                                          e > _[(qt = n)] && a < 0 && (qt += 1),
                                              n++;
                              }
                              ui(i, a),
                                  Ut.emit(
                                      Ci(i) ? "touchEnd" : "dragEnd",
                                      Si(i)
                                  );
                          }))
                        : Yt && fi(i, 0 < a ? -1 : 1);
                }
            }
            "auto" === O.preventScrollOnTouch && (be = !1),
                Xt && (Yt = "?"),
                Tt && !qe && di();
        }
        function Ni() {
            (S || V).style.height = _[qt + ft] - _[qt] + "px";
        }
        function Li() {
            var t = ot ? ((ot + lt) * K) / st : K / ft;
            return Math.min(Math.ceil(t), K);
        }
        function Bi() {
            if (Ct && !ve && De !== He) {
                var t = He,
                    e = De,
                    n = _i;
                for (De < He && ((t = De), (e = He), (n = Ui)); t < e; )
                    n(Be[t]), t++;
                He = De;
            }
        }
        function Si(t) {
            return {
                container: G,
                slideItems: Y,
                navContainer: Se,
                navItems: Be,
                controlsContainer: Me,
                hasControls: fe,
                prevButton: Ee,
                nextButton: Ae,
                items: ft,
                slideBy: dt,
                cloneCount: Dt,
                slideCount: K,
                slideCountNew: Ht,
                index: qt,
                indexCached: jt,
                displayIndex: rn(),
                navCurrentIndex: Re,
                navCurrentIndexCached: Ie,
                pages: De,
                pagesCached: He,
                sheet: Bt,
                isOn: U,
                event: t || {},
            };
        }
        M && console.warn("No slides found in", O.container);
    };
    return aa;
})();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map

