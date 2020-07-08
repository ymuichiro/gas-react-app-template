import React from "react";
import { IDatabase } from "../types/CommonType";

export const Database = React.createContext<IDatabase>({
  name: "",
  setName: () => { },
});