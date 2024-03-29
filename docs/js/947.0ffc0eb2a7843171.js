"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [947],
  {
    9947: function (e, s, a) {
      a.r(s);
      var i = a(5893),
        t = a(3391),
        l = a.n(t);
      a(1664);
      var n = a(7294),
        c = a(8603);
      let r = () => {
        (0, n.useEffect)(() => {
          (0, c.Tk)();
        }, []);
        let e = (0, n.useRef)(),
          [s, a] = (0, n.useState)("box-item");
        (0, n.useEffect)(() => {
          setTimeout(() => {
            e.current = new (l())(".portfolio-items", {
              itemSelector: ".box-item",
              percentPosition: !0,
              masonry: { columnWidth: ".box-item" },
              animationOptions: { duration: 750, easing: "linear", queue: !1 },
            });
          }, 1e3);
        }, []),
          (0, n.useEffect)(() => {
            e.current &&
              ("*" === s
                ? e.current.arrange({ filter: "*" })
                : e.current.arrange({ filter: ".".concat(s) }));
          }, [s]);
        let t = (e) => () => {
            a(e);
          },
          r = (e) => (e === s ? "glitch-effect" : "");
        return (
          (0, n.useEffect)(() => {
            let e = document.querySelectorAll(".circle");
            e.forEach((e) => {
              e.addEventListener("mouseenter", (s) => {
                if (
                  (console.log(
                    s.pageY,
                    e.offsetParent.offsetParent.offsetParent.offsetParent
                      .offsetLeft,
                    e.offsetTop
                  ),
                  !e.getElementsByClassName("ink")[0])
                ) {
                  let a = document.createElement("span");
                  a.classList.add("ink"),
                    e.appendChild(a),
                    a.classList.add("ink-animate");
                }
              }),
                e.addEventListener("mouseleave", (e) => {
                  let s = document.querySelector(".ink");
                  s && s.classList.remove("ink-animate");
                });
            });
          }, []),
          (0, i.jsxs)(n.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: "box-items portfolio-items",
                children: [
                  (0, i.jsxs)("div", {
                    className: "box-item f-links",
                    children: [
                      " ",
                      (0, i.jsx)("div", {
                        className: "image",
                        children: (0, i.jsxs)("a", {
                          href: "https://vintage-auto-a09e81a72c30.herokuapp.com/",
                          target: "_blank",
                          rel: "noreferrer",
                          className: "has-popup-gallery hover-animated",
                          children: [
                            (0, i.jsx)("img", {
                              src: "images/vintage-garage.png",
                              className: "wp-post-image",
                              alt: "",
                            }),
                            (0, i.jsx)("span", {
                              className: "info circle",
                              children: (0, i.jsx)("span", {
                                className: "centrize full-width",
                                children: (0, i.jsxs)("span", {
                                  className: "vertical-center",
                                  children: [
                                    (0, i.jsx)("span", {
                                      className: "icon fas fa-links",
                                    }),
                                    (0, i.jsxs)("span", {
                                      className: "desc",
                                      children: [
                                        (0, i.jsx)("span", {
                                          className: "category",
                                          children: "Web App",
                                        }),
                                        (0, i.jsx)("span", {
                                          className: "name",
                                          children: "Vintage Garage",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "box-item f-links",
                    children: (0, i.jsx)("div", {
                      className: "image",
                      children: (0, i.jsxs)("a", {
                        href: "https://my-shift-f6b2e23fa4f1.herokuapp.com/",
                        className: "has-popup-link hover-animated",
                        target: "_blank",
                        rel: "noreferrer",
                        children: [
                          (0, i.jsx)("img", {
                            src: "images/myshift.png",
                            className: "wp-post-image",
                            alt: "",
                          }),
                          (0, i.jsx)("span", {
                            className: "info circle",
                            children: (0, i.jsx)("span", {
                              className: "centrize full-width",
                              children: (0, i.jsxs)("span", {
                                className: "vertical-center",
                                children: [
                                  (0, i.jsx)("span", {
                                    className: "icon fas fa-link",
                                  }),
                                  (0, i.jsxs)("span", {
                                    className: "desc",
                                    children: [
                                      (0, i.jsx)("span", {
                                        className: "category",
                                        children: "Web App",
                                      }),
                                      (0, i.jsx)("span", {
                                        className: "name",
                                        children: "My Shift",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      s.default = r;
    },
  },
]);
