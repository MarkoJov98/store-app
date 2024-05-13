import React, { FC } from "react"
import { User } from "../pages/AppCustomers"

interface UserProps {
    customers: User;
    handleDeleteCustomer: () => void;
}

const CustomersList: FC<UserProps> = ({customers, handleDeleteCustomer}: UserProps) => {
    return (
        <div>
        <ul>
            <li key={customers.id}>
              Ime: {customers.name} Prezime: {customers.surname}
              <button onClick={(handleDeleteCustomer)}>
                Delete Customer
              </button>
            </li>
        </ul>
      </div>
    )
}

export default CustomersList;