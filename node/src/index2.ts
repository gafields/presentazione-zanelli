import { getUsers } from "./user";

const users = getUsers();

users.forEach((user) => {
  console.log(`${user.firstName} ${user.lastName} è un ${user.role}`);
});
