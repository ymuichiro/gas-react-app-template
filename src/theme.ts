import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#4169e1",
            contrastText: "#fff",
            light: "#a6d4fa",
            dark: "#648dae",
        },
        secondary: {
            main: "#696969",
            contrastText: "#fff",
            light: "#f6a5c0",
            dark: "#aa647b",
        },
        error: {
            main: "#f44336",
            light: "#e57373",
            dark: "#d32f2f",
            contrastText: "#fff",
        },
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.54)",
        },
    },
})