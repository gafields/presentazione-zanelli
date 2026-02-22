import { getUsers } from "./user.js";

const users = getUsers();

users.forEach((user) => {
  console.log(`${user.firstName} ${user.lastName} è un ${user.role}`);
});
