import React from "react";
import { IDatabase } from "../types/CommonType";

export const Database = React.createContext<IDatabase>({
    nowPosition: 0,
    name: "",
    setName: () => { },
});