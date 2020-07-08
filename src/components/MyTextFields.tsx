import React from "react";
import { makeStyles, createStyles, TextField } from "@material-ui/core";

const useStyle = makeStyles(theme => createStyles({}));

type ITextInput = {
  fullWidth: boolean,
  value: string,
  placeholder: string,
  func: React.Dispatch<React.SetStateAction<string>>
}
export const TextInput = (P: ITextInput) => {
  const classes = useStyle();
  const hundle = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => P.func(e.target.value);
  return <TextField fullWidth={P.fullWidth} placeholder={P.placeholder} value={P.value} onChange={hundle} />
}
