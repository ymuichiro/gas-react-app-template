import React, { RefObject, CSSProperties } from "react";
import { TextField, Grid, InputAdornment, Typography, } from "@material-ui/core";

type IZipCodeForm = {
    name: string,
    label: string,
    variant: "standard" | "filled" | "outlined",
    setValue: Function,
    register: ((instance: any) => void) | RefObject<any> | null | undefined,
    class?: string,
    css?: CSSProperties,
}

export const ZipCodeForm = (props: IZipCodeForm) => {

    /** 桁数の制御を行う */
    const numsHundle = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, nums: number) => {
        const value = e.currentTarget.value;
        const name = e.currentTarget.getAttribute("name");
        if (name === null) throw new Error("System Error: getAttributeへの引数が適切ではありません");
        if (value.length > nums) {
            props.setValue(name, value.slice(0, nums));
        }
    }

    /** 正しい数値に都度変換する */
    const blurHundle = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = e.currentTarget.value;
        const name = e.currentTarget.getAttribute("name");
        if (name === null) throw new Error("System Error: getAttributeへの引数が適切ではありません");
        // 数値以外の文字が含まれていた場合、入力値を削除する
        for (const v of value.split("")) {
            if (Number(v).toString() === "NaN") {
                props.setValue(name, "");
                alert("入力が正しくありません");
                return;
            }
        }
    }

    return <Grid container justify="center" alignItems="center" spacing={1}>
        <Grid item xs={5}>
            <TextField
                name={`${props.name}[0]`}
                label={props.label}
                margin="dense"
                variant={props.variant}
                onChange={(e) => numsHundle(e, 3)}
                onBlur={blurHundle}
                inputRef={props.register}
                fullWidth
                className={props.class === undefined ? "" : props.class}
                style={props.css === undefined ? {} : props.css}
                InputProps={{
                    startAdornment: <InputAdornment position="start">〒</InputAdornment>,
                }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Grid>
        <Grid item xs={1}>
            <Typography align="center">ー</Typography>
        </Grid>
        <Grid item xs={6}>
            <TextField
                name={`${props.name}[1]`}
                label={props.label}
                margin="dense"
                variant={props.variant}
                onChange={(e) => numsHundle(e, 4)}
                onBlur={blurHundle}
                inputRef={props.register}
                fullWidth
                className={props.class === undefined ? "" : props.class}
                style={props.css === undefined ? {} : props.css}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Grid>
    </Grid>

}