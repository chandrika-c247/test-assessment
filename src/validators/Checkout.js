/** @format */

const Yup = require("yup");
import { Messages } from "../common";

const schema = {
  firstName: Yup.string()
    .trim()
    .required(Messages.Required.replace(":item", "First name")),
  lastName: Yup.string()
    .trim()
    .required(Messages.Required.replace(":item", "Last name")),
  email: Yup.string()
    .trim()
    .required(Messages.Required.replace(":item", "Email address"))
    .email(Messages.InvalidEmail),
  address: Yup.string()
    .trim()
    .required(Messages.Required.replace(":item", "Address")),
  country: Yup.string()
    .trim()
    .required(Messages.Required.replace(":item", "Country")),
  state: Yup.string()
    .trim()
    .required(Messages.Required.replace(":item", "State")),
  zip: Yup.string()
    .trim()
    .required(Messages.Required.replace(":item", "Zip")),
  service: Yup.string()
    .trim()
    .required(Messages.Required.replace(":item", "Service ID")),
  tier: Yup.string()
    .trim()
    .required(Messages.Required.replace(":item", "Tier ID")),
};

module.exports = {
  schema,
};
