import React from "react";
import { IDatabase } from "./type";

export const Database = React.createContext<IDatabase>({
  name: "",
});