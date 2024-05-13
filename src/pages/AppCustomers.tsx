import React, { ReactElement } from "react";
import { useState } from "react";
import CustomersList from "../components/Customers";

export interface User {
  name: string;
  surname: string;
  id: number;
}
const customersList: User[] = [
  { name: "Marko", surname: "Jovanovic", id: 1 },
  { name: "Milan", surname: "Jovano", id: 2 },
  { name: "Milos", surname: "Jovanovi", id: 3 },
];

const AppCustomers: React.FC = (): ReactElement => {
  const [customers, setCustomers] = useState<User[]>(customersList);

  const handleDeleteCustomer = (customerId: number) => {
    setCustomers(customers.filter((customer) => customer.id !== customerId));
  };
  return (
    <div>
      {customers.map((customer, id) => (
        <CustomersList key={id} customers={customer} handleDeleteCustomer={() =>handleDeleteCustomer(customer.id)} />
      ))}
    </div>
  );
};

export default AppCustomers;
