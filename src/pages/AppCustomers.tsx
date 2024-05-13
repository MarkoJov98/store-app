import React, { ReactElement } from "react";
import { User } from "../App";

interface UserProps {
  users: User;
}

const AppCustomers: React.FC = (): ReactElement => {
  const customers: User[] = [
    { name: "Marko", surname: "Jovanovic", id: 1 },
    { name: "Milan", surname: "Jovano", id: 1 },
    { name: "Milos", surname: "Jovanovi", id: 3 },
  ];
  return <h1>Customer Strana</h1>;
};

export default AppCustomers;
