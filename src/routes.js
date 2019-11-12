import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import DefaultLayout from "./layouts/Default";
// import SigupLayout from "./layouts/SigupLayout";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/ChatStudent";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Signin from "./views/Signin";

export const notAuthenticatedRoutes = [
  {
    path: "/",
    component: Signin
  }
];

export default [
  // {
  //   path: "/",
  // layout: DefaultLayout, ******** is ka commt hata kar dekhna zara**  ye mene alag se component bnaya hay
  //   component: Signin
  // },

  // {
  //   path: "/",
  //   exact: true,
  //   layout: DefaultLayout,
  //   component: () => <Redirect to="/blog-overview" />
  // },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
