"use client";

import { useState } from "react";

export const NavSearch = () => {
  const [serach, setSearch] = useState("");
  
  console.log(`NavSearch rendered`);
  return <div>Nav search input</div>;
};
