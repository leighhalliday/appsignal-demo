import Appsignal from "@appsignal/javascript";

export const appsignal = new Appsignal({
  key: process.env.NEXT_PUBLIC_APPSIGNAL_FRONTEND_KEY,
  revision: process.env.HEROKU_SLUG_COMMIT,
});
