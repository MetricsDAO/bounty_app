import { parseCookies } from "nookies";
import React, { useEffect } from "react";

type Props = {
  boardToken: string | string[];
};

export const CannyWidget = (props: Props) => {
  useEffect(() => {
    const authorization = parseCookies()["Authorization"];
    (function (w, d, i, s) {
      function l() {
        if (!d.getElementById(i)) {
          var f = d.getElementsByTagName(s)[0],
            e = d.createElement(s);
          // @ts-ignore
          (e.type = "text/javascript"),
            // @ts-ignore
            (e.async = !0),
            // @ts-ignore
            (e.src = "https://canny.io/sdk.js"),
            // @ts-ignore
            f.parentNode.insertBefore(e, f);
        }
      }
      // @ts-ignore
      if ("function" != typeof w.Canny) {
        var c = function () {
          // @ts-ignore
          c.q.push(arguments);
        };
        // @ts-ignore
        (c.q = []),
          // @ts-ignore
          (w.Canny = c),
          "complete" === d.readyState
            ? l()
            : // @ts-ignore
            w.attachEvent
            ? // @ts-ignore
              w.attachEvent("onload", l)
            : w.addEventListener("load", l, !1);
      }
    })(window, document, "canny-jssdk", "script");
    // @ts-ignore
    Canny("render", {
      // @ts-ignore
      boardToken: props.boardToken,
      basePath: null, // See step 2
      ssoToken: authorization, // See step 3
    });
  }, []);

  return <div data-canny />;
};
