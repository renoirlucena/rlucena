"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [341],
  {
    4341: function (e, s, a) {
      a.d(s, {
        Z: function () {
          return w;
        },
      });
      var n = a(5893),
        l = a(7294);
      let r = (e) => {
          let s = (0, l.useRef)();
          return (
            (0, l.useEffect)(() => {
              let a = (a) => {
                s.current.contains(a.target) || e();
              };
              return (
                document.addEventListener("mousedown", a),
                () => {
                  document.removeEventListener("mousedown", a);
                }
              );
            }),
            s
          );
        },
        t = (e) => {
          let { content: s, close: a } = e,
            t = r(() => {
              a(!1);
            });
          return (0, n.jsxs)(l.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: "mfp-bg mfp-fade popup-box-inline mfp-ready",
              }),
              (0, n.jsx)("div", {
                className:
                  "mfp-wrap content_popup_warp mfp-close-btn-in mfp-auto-cursor mfp-fade popup-box-inline mfp-ready",
                tabIndex: -1,
                style: { overflow: "hidden auto" },
                children: (0, n.jsxs)("div", {
                  className: "mfp-container mfp-s-ready mfp-inline-holder",
                  children: [
                    (0, n.jsx)("div", {
                      className: "mfp-content",
                      ref: t,
                      children: (0, n.jsxs)("div", {
                        id: "popup-2",
                        className: "popup-box mfp-fade",
                        children: [
                          (0, n.jsx)("div", {
                            dangerouslySetInnerHTML: { __html: s.outerHTML },
                          }),
                          (0, n.jsx)("button", {
                            onClick: () => a(),
                            title: "Close (Esc)",
                            type: "button",
                            className: "mfp-close",
                            children: "\xd7",
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "mfp-preloader",
                      children: "Loading...",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        c = () => {
          let [e, s] = (0, l.useState)(!1),
            [a, r] = (0, l.useState)(null);
          return (
            (0, l.useEffect)(() => {
              setTimeout(() => {
                let e = document.querySelectorAll(".has-popup-media");
                for (let a = 0; a < e.length; a++) {
                  let n = e[a];
                  n.addEventListener("click", () => {
                    s(!0);
                    let e = n.closest(".box-item"),
                      a = e.getElementsByClassName("mfp-hide")[0],
                      l = a.getElementsByClassName("content")[0];
                    r(l);
                  });
                }
              }, 500);
            }, []),
            (0, n.jsx)(l.Fragment, {
              children:
                e &&
                (0, n.jsx)(t, {
                  content: a,
                  close: () => {
                    r(null), s(!1);
                  },
                }),
            })
          );
        },
        i = (e) => {
          let { close: s, imgs: a } = e,
            r =
              a.length > 0
                ? a
                : [
                    "images/works/work6.jpg",
                    "images/works/work1.jpg",
                    "images/works/work5.jpg",
                  ],
            [t, c] = (0, l.useState)(0);
          return (0, n.jsxs)("div", {
            className: "postion-realtive",
            children: [
              (0, n.jsx)("div", {
                className: "mfp-bg mfp-fade mfp-ready",
                onClick: () => s(),
              }),
              (0, n.jsx)("div", {
                tabIndex: -1,
                style: { overflow: "hidden auto" },
                className:
                  "mfp-wrap mfp-gallery mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready",
                children: (0, n.jsxs)("div", {
                  className: "mfp-container mfp-s-ready mfp-image-holder",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",
                      children: [
                        (0, n.jsx)("div", {
                          className: "mfp-content imgGallery_popup",
                          children: (0, n.jsx)("div", {
                            className: "mfp-iframe-scaler",
                            children: (0, n.jsx)("div", {
                              className: "img-container",
                              children: (0, n.jsx)("img", {
                                style: { width: "100%" },
                                className: "mfp-img",
                                src: r[t],
                              }),
                            }),
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: "mfp-preloader",
                          children: "Loading...",
                        }),
                      ],
                    }),
                    (0, n.jsx)("button", {
                      title: "Previous (Left arrow key)",
                      type: "button",
                      className: "mfp-arrow mfp-arrow-left mfp-prevent-close",
                      onClick: () => c((t + r.length - 1) % r.length),
                    }),
                    (0, n.jsx)("button", {
                      title: "Next (Right arrow key)",
                      type: "button",
                      className: "mfp-arrow mfp-arrow-right mfp-prevent-close",
                      onClick: () => {
                        c((t + 1) % r.length);
                      },
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        o = () => {
          let [e, s] = (0, l.useState)([]),
            [a, r] = (0, l.useState)(!1),
            [t, c] = (0, l.useState)([]);
          return (
            (0, l.useEffect)(() => {
              setTimeout(() => {
                let e = document.querySelectorAll(".has-popup-gallery");
                for (let a = 0; a < e.length; a++) {
                  let n = e[a];
                  n.addEventListener("click", () => {
                    r(!0);
                    let e = [],
                      a = n
                        .closest(".image")
                        .getElementsByClassName("mfp-hide")[0]
                        .getElementsByTagName("a");
                    for (let l = 0; l < a.length; l++) {
                      let t = a[l].getAttribute("href");
                      e.push(t);
                    }
                    s(e);
                  });
                }
              }, 1e3),
                console.log(e);
            }, [a]),
            (0, n.jsx)(l.Fragment, {
              children:
                a &&
                (0, n.jsx)(i, {
                  imgs: e,
                  close: () => {
                    r(!1), s([]);
                  },
                }),
            })
          );
        },
        d = (e) => {
          let { close: s, src: a } = e,
            t = r(() => {
              s(!1);
            });
          return (0, n.jsxs)(l.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: "mfp-bg mfp-ready",
                onClick: () => s(!1),
              }),
              (0, n.jsx)("div", {
                className:
                  "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: { overflow: "hidden auto" },
                children: (0, n.jsxs)("div", {
                  className:
                    " popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",
                  children: [
                    (0, n.jsx)("div", {
                      className: "mfp-content",
                      ref: t,
                      children: (0, n.jsx)("div", {
                        className: "mfp-iframe-scaler",
                        children: (0, n.jsx)("img", {
                          className: "mfp-img",
                          src: a,
                        }),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "mfp-preloader",
                      children: "Loading...",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        m = () => {
          let [e, s] = (0, l.useState)(!1),
            [a, r] = (0, l.useState)(null);
          return (
            (0, l.useEffect)(() => {
              setTimeout(() => {
                let e = document.querySelectorAll("a");
                e.forEach((e) => {
                  e.href.includes("/images") &&
                    null === e.getAttribute("download") &&
                    e.addEventListener("click", (a) => {
                      a.preventDefault(), r(e.href), s(!0);
                    });
                });
              }, 1500);
            }, []),
            (0, n.jsx)(l.Fragment, {
              children: e && (0, n.jsx)(d, { close: () => s(!1), src: a }),
            })
          );
        },
        p = (e) => {
          let { close: s, videoID: a } = e,
            t = r(() => {
              s(!1);
            });
          return (0, n.jsxs)(l.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: "mfp-bg mfp-ready",
                onClick: () => s(!1),
              }),
              (0, n.jsx)("div", {
                className:
                  "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: { overflow: "hidden auto" },
                children: (0, n.jsxs)("div", {
                  className:
                    "mfp-container popup-container mfp-s-ready mfp-iframe-holder",
                  children: [
                    (0, n.jsx)("div", {
                      className: "mfp-content",
                      ref: t,
                      children: (0, n.jsxs)("div", {
                        className: "mfp-iframe-scaler",
                        children: [
                          (0, n.jsx)("button", {
                            title: "Close (Esc)",
                            type: "button",
                            className: "mfp-close",
                            onClick: () => s(),
                            children: "\xd7",
                          }),
                          (0, n.jsx)("iframe", {
                            src: a,
                            title: "YouTube video player",
                            frameBorder: "0",
                            allow:
                              "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: !0,
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className: "mfp-preloader",
                      children: "Loading...",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        u = () => {
          let [e, s] = (0, l.useState)(!1),
            [a, r] = (0, l.useState)(null);
          return (
            (0, l.useEffect)(() => {
              setTimeout(() => {
                let e = document.querySelectorAll("a");
                e.forEach((e) => {
                  (e.href.includes("www.youtube.com") ||
                    e.href.includes("vimeo.com") ||
                    e.href.includes("soundcloud.com")) &&
                    e.addEventListener("click", (a) => {
                      a.preventDefault(), r(e.href), s(!0);
                    });
                });
              }, 1500);
            }, []),
            (0, n.jsx)(l.Fragment, {
              children: e && (0, n.jsx)(p, { close: () => s(!1), videoID: a }),
            })
          );
        };
      var f = a(8603);
      let h = () =>
        (0, n.jsxs)("footer", {
          className: "footer",
          children: [
            (0, n.jsxs)("div", {
              className: "soc-box",
              children: [
                (0, n.jsx)("div", {
                  className: "follow-label",
                  children: "Follow Me",
                }),
                (0, n.jsxs)("div", {
                  className: "soc",
                  children: [
                    (0, n.jsx)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      href: "https://www.github.com/renoirlucena",
                      children: (0, n.jsx)("span", {
                        className: "icon fab fa-github",
                      }),
                    }),
                    (0, n.jsx)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      href: "https://www.instagram.com/renoirlucena",
                      children: (0, n.jsx)("span", {
                        className: "icon fab fa-instagram",
                      }),
                    }),
                    (0, n.jsx)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      href: "https://linkedin.com/in/renoirlucena",
                      children: (0, n.jsx)("span", {
                        className: "icon fab fa-linkedin",
                      }),
                    }),
                    (0, n.jsx)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      href: "https://wa.me/5511973753155",
                      children: (0, n.jsx)("span", {
                        className: "icon fab fa-whatsapp",
                      }),
                    }),
                    (0, n.jsx)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      href: "tel:13475719001",
                      children: (0, n.jsx)("span", {
                        className: "icon fab fa-skype",
                      }),
                    }),
                    (0, n.jsx)("a", {
                      target: "_blank",
                      rel: "noreferrer",
                      href: "mailto:hi@renoirlucena.dev",
                      children: (0, n.jsx)("span", {
                        className: "icon fa fa-envelope",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", { className: "clear" }),
          ],
        });
      var x = a(1664),
        j = a.n(x);
      let v = () =>
          (0, n.jsxs)(l.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: "logo hover-masks-logo",
                children: (0, n.jsxs)("a", {
                  href: "#",
                  children: [
                    (0, n.jsxs)("span", {
                      className: "mask-lnk",
                      children: [
                        "Renoir ",
                        (0, n.jsx)("strong", { children: "Lucena" }),
                      ],
                    }),
                    (0, n.jsxs)("span", {
                      className: "mask-lnk mask-lnk-hover",
                      children: [
                        "Download ",
                        (0, n.jsx)("strong", { children: "CV" }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("div", {
                className: "top-menu hover-masks",
                children: (0, n.jsx)("div", {
                  className: "top-menu-nav",
                  children: (0, n.jsx)("div", {
                    className: "menu-topmenu-container",
                    children: (0, n.jsxs)("ul", {
                      className: "menu",
                      children: [
                        (0, n.jsx)("li", {
                          className: "menu-item menu-item-has-children",
                          children: (0, n.jsx)(j(), {
                            href: "/",
                            children: (0, n.jsxs)("a", {
                              children: [
                                (0, n.jsx)("span", {
                                  className: "mask-lnk",
                                  children: "Home",
                                }),
                                (0, n.jsx)("span", {
                                  className: "mask-lnk mask-lnk-hover",
                                  children: "Home",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, n.jsx)("li", {
                          className: "menu-item menu-item-has-children",
                          children: (0, n.jsx)(j(), {
                            href: "/resume",
                            children: (0, n.jsxs)("a", {
                              children: [
                                (0, n.jsx)("span", {
                                  className: "mask-lnk",
                                  children: "Resume",
                                }),
                                (0, n.jsx)("span", {
                                  className: "mask-lnk mask-lnk-hover",
                                  children: "Resume",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, n.jsx)("li", {
                          className: "menu-item menu-item-has-children",
                          children: (0, n.jsx)(j(), {
                            href: "/works",
                            children: (0, n.jsxs)("a", {
                              children: [
                                (0, n.jsx)("span", {
                                  className: "mask-lnk",
                                  children: "Portfolio",
                                }),
                                (0, n.jsx)("span", {
                                  className: "mask-lnk mask-lnk-hover",
                                  children: "Portfolio",
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, n.jsx)("li", {
                          className: "menu-item menu-item-has-children",
                          children: (0, n.jsx)(j(), {
                            href: "/contacts",
                            children: (0, n.jsxs)("a", {
                              children: [
                                (0, n.jsx)("span", {
                                  className: "mask-lnk",
                                  children: "Contact",
                                }),
                                (0, n.jsx)("span", {
                                  className: "mask-lnk mask-lnk-hover",
                                  children: "Contact",
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        N = () =>
          (0, n.jsxs)(l.Fragment, {
            children: [(0, n.jsx)(k, {}), (0, n.jsx)(g, {})],
          }),
        g = () =>
          (0, n.jsx)("header", {
            className: "header desktopHeader",
            children: (0, n.jsx)("div", {
              className: "head-top",
              children: (0, n.jsx)(v, {}),
            }),
          }),
        k = () => {
          let [e, s] = (0, l.useState)(!1);
          return (0, n.jsx)("header", {
            className: "header mobileHeader ".concat(e ? "active" : ""),
            children: (0, n.jsxs)("div", {
              className: "head-top",
              children: [
                (0, n.jsx)("a", {
                  href: "#",
                  className: "menu-btn",
                  onClick: () => s(!e),
                  children: (0, n.jsx)("span", {}),
                }),
                (0, n.jsx)(v, {}),
              ],
            }),
          });
        },
        y = () => {
          let [e, s] = (0, l.useState)(!0);
          return (
            (0, l.useEffect)(() => {
              setTimeout(() => {
                document.querySelector(".lines").classList.add("ready");
              }, 3e3),
                setTimeout(() => {
                  s(!1),
                    document.querySelector(".lines").classList.add("finish");
                }, 1e3);
            }, []),
            (0, n.jsx)(l.Fragment, {
              children: (0, n.jsx)("div", {
                className: "preloader",
                style: { display: e ? "block" : "none" },
                children: (0, n.jsx)("div", {
                  className: "centrize full-width",
                  children: (0, n.jsx)("div", {
                    className: "vertical-center",
                    children: (0, n.jsxs)("div", {
                      className: "spinner",
                      children: [
                        (0, n.jsx)("div", { className: "double-bounce1" }),
                        (0, n.jsx)("div", { className: "double-bounce2" }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        },
        b = (e) => {
          let { children: s, noHeader: a } = e;
          return (
            (0, l.useEffect)(() => {
              (0, f.oc)();
            }, []),
            (0, l.useEffect)(() => {
              window.addEventListener("scroll", f.h4);
            }, []),
            (0, n.jsxs)(l.Fragment, {
              children: [
                (0, n.jsx)(u, {}),
                (0, n.jsx)(m, {}),
                (0, n.jsx)(o, {}),
                (0, n.jsx)(c, {}),
                (0, n.jsx)(y, {}),
                (0, n.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, n.jsx)("div", { className: "cursor-follower" }),
                    !a && (0, n.jsx)(N, {}),
                    (0, n.jsx)("div", { className: "wrapper", children: s }),
                    (0, n.jsx)(h, {}),
                    (0, n.jsx)("div", {
                      className: "lines",
                      children: (0, n.jsxs)("div", {
                        className: "content",
                        children: [
                          (0, n.jsx)("div", { className: "line-col" }),
                          (0, n.jsx)("div", { className: "line-col" }),
                          (0, n.jsx)("div", { className: "line-col" }),
                          (0, n.jsx)("div", { className: "line-col" }),
                          (0, n.jsx)("div", { className: "line-col" }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
      var w = b;
    },
    8603: function (e, s, a) {
      a.d(s, {
        Tk: function () {
          return l;
        },
        av: function () {
          return c;
        },
        bR: function () {
          return t;
        },
        h4: function () {
          return r;
        },
        oc: function () {
          return n;
        },
      });
      let n = () => {
          document.addEventListener("mousemove", function (e) {
            var s = e.pageX,
              a = e.pageY;
            let n = document.querySelector(".cursor-follower");
            (n.style.transform = "translate3d("
              .concat(s, "px,")
              .concat(a, "px,0px)")),
              document.querySelectorAll("a").forEach((e) => {
                e.addEventListener("mouseenter", function () {
                  n.classList.add("cursor-hover");
                }),
                  e.addEventListener("mouseleave", function () {
                    n.classList.remove("cursor-hover");
                  });
              });
          });
        },
        l = () => {
          let e = a(4102);
          var s = document.getElementsByClassName("wp-post-image");
          new e(s);
        },
        r = () => {
          let e = window.scrollY,
            s = document.querySelectorAll(".header");
          s.forEach((s) => {
            s &&
              (e > 100
                ? (s.classList.add("fixed"),
                  document
                    .querySelector("body")
                    .classList.remove("background-enabled"))
                : (s.classList.remove("fixed"),
                  document
                    .querySelector("body")
                    .classList.add("background-enabled")));
          });
        },
        t = () => {
          document.querySelectorAll(".skills .progress").forEach((e) => {
            e.insertAdjacentHTML(
              "beforeend",
              '<span class="dg"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
            );
            let s = e.getElementsByClassName("percentage")[0];
            s.insertAdjacentHTML(
              "beforeend",
              '<span class="da"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>'
            );
            let a = e.clientWidth;
            s.getElementsByClassName("da")[0].style.width = "".concat(a, "px");
          });
        },
        c = () => {
          window.addEventListener("resize", () => {
            document
              .querySelectorAll(".skills-list.dotted .progress")
              .forEach((e) => {
                let s = e.clientWidth;
                e.getElementsByClassName("da")[0].style.width = "".concat(
                  s + 1,
                  "px"
                );
              });
          });
        };
    },
  },
]);
