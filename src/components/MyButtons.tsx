import React from "react";
import { makeStyles, createStyles, Button } from "@material-ui/core";

const useStyle = makeStyles(theme => createStyles({}));

export const PrimaryButton = (P: { fullWidth: boolean, innerText: string, func: Function }) => {
  const classes = useStyle();
  return <Button
    color="primary"
    variant="contained"
    fullWidth={P.fullWidth}
    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => P.func(e)}
  >
    {P.innerText}
  </Button>
}

export const SecondaryButton = (P: { fullWidth: boolean, innerText: string, func: Function }) => {
  const classes = useStyle();
  return <Button
    color="secondary"
    variant="contained"
    fullWidth={P.fullWidth}
    onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => P.func(e)}
  >
    {P.innerText}
  </Button>
}
