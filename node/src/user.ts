export type User = {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
};

export function getUsers(): User[] {
  return [
    {
      id: 1,
      firstName: "Angela",
      lastName: "Davis",
      role: "Professor",
    },
    {
      id: 2,
      firstName: "Gabriele",
      lastName: "Campi",
      role: "Developer",
    },
  ];
}
