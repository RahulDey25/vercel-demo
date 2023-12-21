import { withIronSession } from "next-iron-session";

export function withSession(handler){
// cookie options is set to false as we use http, for https it will be true
    return withIronSession(handler, {
        password: 'somelong32charecterpasswordsomeRandompassword',
        cookieName: 'CookieCreatedByIronSessionForNextjsApp',
        cookieOptions: {
            secure: false
        },
    });
}