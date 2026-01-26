"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    onUsersnapCXLoad?: (api: { init: (opts: object) => void }) => void;
  }
}

export function UsersnapScript() {
  useEffect(() => {
    window.onUsersnapCXLoad = function (api) {
      api.init({
        tools: { colors: ["#000000"] },
        custom: {
          user_email: "Logged out user",
          page_name: "Page",
          project_id: "1768258714615x851486300912222200",
        },
      });
    };
    const s = document.createElement("script");
    s.defer = true;
    s.src =
      "https://widget.usersnap.com/global/load/c138dc0d-80d3-4fb4-b06c-aefa8d386761?onload=onUsersnapCXLoad";
    document.head.appendChild(s);
    return () => {
      s.remove();
      delete window.onUsersnapCXLoad;
    };
  }, []);
  return null;
}
