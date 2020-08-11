import React, { useState } from "react";
import { Container, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { SimpleTextForm } from "./SimpleTextForm";
import { NumForm } from "./NumForm";
import { TableForm } from "./TableForm";
import { ZipCodeForm } from "./ZipCode";
import { EmailForm } from "./EmailForm";
import { SelectForm } from "./SelectForm";

export type IFormInputs = {
	name: string,
	address: string,
	gender: string,
	email: string,
	work: string,
	age: number,
	table: string,
}


/** 基本のフォームを組み立てるComponent群 */
export const BaseForm = () => {
	const { register, handleSubmit, setValue, errors } = useForm<IFormInputs>({
		// 再バリデーションタイミング（DefaultはonChangeであるが、フォーム数が多いと重い
		reValidateMode: "onSubmit",
	});
	const [formVariant] = useState<"standard" | "filled" | "outlined">("standard");

	const onSubmitHundle = handleSubmit((e: IFormInputs) => {
		console.log(e);
	})

	return <Container>
		<form onSubmit={onSubmitHundle} >
			<SimpleTextForm {...{
				name: "name",
				label: "名前",
				register: register({ required: true }),
				variant: formVariant,
				errors: errors.name,
				errorMsgs: "名前を入力して下さい",
				css: { width: "100%" }
			}} />
			<SelectForm {...{
				name: "gender",
				label: "性別",
				register: register,
				setValue,
				optionsKey: ["男", "女", "その他"],
				css: { width: "100%" },
			}} />
			<SimpleTextForm {...{
				name: "address",
				label: "住所",
				register,
				errors: errors.address,
				variant: formVariant,
				css: { width: "100%" }
			}} />
			<EmailForm {...{
				name: "email",
				label: "メールアドレス",
				register,
				errors: errors.email,
				variant: formVariant,
				css: { width: "100%" }
			}} />
			<SimpleTextForm {...{
				name: "work",
				label: "仕事",
				register,
				errors: errors.work,
				variant: formVariant,
				css: { width: "100%" }
			}} />
			<ZipCodeForm {...{
				name: "zip",
				label: "郵便番号",
				setValue,
				register,
				variant: formVariant
			}} />
			<NumForm {...{
				name: "age",
				label: "年齢",
				register,
				errors: errors.age,
				variant: formVariant,
				setValue,
				css: { width: "100%" }
			}} />
			<TableForm {...{
				name: "table",
				label: "テーブル",
				maxRows: 10,
				setValue,
				variant: formVariant,
				register
			}} />
			<Button
				style={{ marginTop: "1em" }}
				size="small"
				type="submit"
				variant="contained"
				color="primary"
				fullWidth
			>
				Submit
            </Button>
		</form>
	</Container>
}
