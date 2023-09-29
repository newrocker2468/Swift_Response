// import express and hbs modules
import dotenv from "dotenv";
import Express from "express";
import passport from "passport";
import Strategy from "passport-google-oauth2";
const GoogleStrategy = Strategy.Strategy;
import cookieSession from "cookie-session";
import { engine } from "express-handlebars";
dotenv.config();
const app = Express();
import cookieParser from "cookie-parser";
app.use(Express.static("public"));
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(cookieParser());

let userProfile;
let action;

app.get("/", (req, res) => {
    res.render("index", { title: "Swift Response" });
});
app.get("/index", (req, res) => {
    res.render("index", { title: "Swift Response" });
});
app.get("/donateus", (req, res) => {
    res.render("donateus", { title: "Swift Response" });
});
app.get("/donateus-exp", (req, res) => {
    res.render("donateus-exp", { title: "Swift Response" });
});
app.get("/our-application", (req, res) => {
    res.render("our-application", { title: "Swift Response" });
});
app.get("/aboutus", (req, res) => {
    res.render("aboutus", { title: "About Us" });
});
app.get("/login", (req, res) => {


    res.render("login", { title: "Log In" });
});

app.get("/donateus", (req, res) => {
    res.render("donateus", { title: "Donate Us" });
});

app.get("/signup", (req, res) => {


    res.render("signup", { title: "Sign Up" });
});

app.use(
    cookieSession({
        name: "google-auth-session",
        keys: ["key1", "key2"],
    })
);
/* app.use(session({ secret: { name: "google-auth-session", keys: ["key1", "key2"] } })); */

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());

// ! GOOGLE OAUTH2.0

passport.use(
    new GoogleStrategy({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: process.env.CALLBACK_URL,
            passReqToCallback: true,
        },

        function(request, accessToken, refreshToken, profile, openid, done) {
            userProfile = openid.id;
            return done(null, openid, profile);
        }
    )
);

app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
);

/* app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/auth/google/success/signup",
    failureRedirect: "/auth/google/failure",
  })
);
 */
app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: "/auth/google/success/index",
        /*    successRedirect: "/auth/google/success/deleteac",
        successRedirect: "/auth/google/success/privacypolicy",
        successRedirect: "/auth/google/success/contactus", */
        /* successRedirect: "/auth/google/success/login", */
        failureRedirect: "/auth/google/failure",
    })
);
app.get("/deleteac", (req, res) => {
    res.render("deleteac", { title: "Delete" });
});

app.get("/auth/google/success/deleteac", (req, res) => {
    res.redirect("/deleteac");
});

app.get("/auth/google/success/privacypolicy", (req, res) => {
    res.render("privacypolicy", { title: "privacypolicy" });
});
app.get("/auth/google/success/index", (req, res) => {
    if (action === "login") {
        res.cookie("logged_in", userProfile);
        res.redirect("/index");
    } else {
        res.redirect("/login");
    }
});
app.get("/contactus", (req, res) => {
    res.render("contactus", { title: "Contact Us" });
});
app.get("/auth/google/success/contactus", (req, res) => {
    res.render("contactus", { title: "Contact Us" });
});
app.get("/privacypolicy", (req, res) => {
    res.render("privacypolicy", { title: "privacypolicy" });
});
/*app.get("/auth/google/success/signup", (req, res) => {
  res.render("signup", { title: "Sign Up" });
});

app.get("/auth/google/success/login", (req, res) => {
  res.render("login", { title: "Log in" });
}); */

app.get("/auth/google/failure", (req, res) => {
    res.render("index", { title: "index" });
});

/* app.get("/auth/google/success"),
  (req, res) => {
    res.render("index", { title: "index" });
  }; */

/* Handlebars.registerHelper("isAuthSuccess", function (url) {
  console.log(url);
  return url.indexOf("/auth/google/success") !== -1;
}); */

app.listen(2000, () => {
    console.log("Server is running on port 2000");
});