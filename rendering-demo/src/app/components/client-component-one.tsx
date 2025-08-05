"use client";

import { useState } from "react";


export const ClientComponentOne = ({ children } : {
    children: React.ReactNode
}) => {
  const [name, setName] = useState();

  return (
    <>
      <h1>Client Component One</h1>
      {children}
    </>
  ); 
};
 