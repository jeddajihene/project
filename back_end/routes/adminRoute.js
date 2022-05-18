const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");
const mongoose = require("mongoose");
require("dotenv").config;
const users = require("../models/users");

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  databases: [mongoose],
  resources: [
    {
      resource: users,
      options: {
        properties: {
          password: {
            isVisible: false
          }
        }
      }
    }
  ],
  rootPath: "/admin"
});
const ADMIN = {
  email: process.env.ADMIN_EMAIL,
  password: process.env.ADMIN_PASSWORD
};
const adminRouter = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: "adminbro",
  cookiePassword: "some-secret-password-used-to-secure-cookie",
  authenticate: async (email, password) => {
    if (ADMIN.email === email && ADMIN.password === password) {
      return ADMIN;
    }
    return null;
  }
});

module.exports = adminRouter;
