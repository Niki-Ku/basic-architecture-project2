import { useTranslation } from "react-i18next";
import { doCreateUserWithEmailAndPassword } from "../../services/firebaseAuth";
import { useState } from "react";
import { ReactComponent as PasswordShow } from "../../assets/icons/passwordShow.svg";
import { ReactComponent as PasswordHide } from "../../assets/icons/passwordHide.svg";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { registrationSchema } from "../../schemas/yupSchemas";

interface IRegistration {
	email: string;
	password: string;
	passwordRepeat: string;
	termsAndService: boolean;
}

const SignUpPage = () => {
	const { t } = useTranslation();
	const [passwordType, setPasswordType] = useState<string>("password");
	const [loading, setLoading] = useState<boolean>(false);
	const navigate = useNavigate();

	const showPassClick = () => {
		setPasswordType((prev) => (prev === "password" ? "text" : "password"));
	};

	const onSubmit = async () => {
		try {
			setLoading(true);
			await doCreateUserWithEmailAndPassword(values.email, values.password);
			setLoading(false);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	}

	const {values, handleBlur, isSubmitting, errors, touched, handleChange, handleSubmit} = useFormik<IRegistration>({
		initialValues: {
			email: "",
			password: "",
			passwordRepeat: "",
			termsAndService: false
		},
		onSubmit,
		validationSchema: registrationSchema
	})

	return (
		<div className="relative">
			<div
				className="
        w-full h-[calc(100svh-70px)] md:h-[calc(100svh-78px)]
        bg-posters absolute"
			></div>
			<div className="w-full h-[calc(100svh-70px)] md:h-[calc(100svh-78px)]">
				<div className="w-full h-[calc(100svh-70px)] sm:rounded sm:h-[500px] sm:mt-10 sm:w-[450px] mx-auto px-[5%] bg-black-default sm:bg-black-70 z-10 relative">
					<h1 className="text-2xl sm:pt-10 sm:text-4xl text-white">{t("sign-up")}</h1>
					{loading ? (
						<div>Loadingg</div>
					) : (
						<form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-6">
							<div>
								<input
									type="text"
									value={values.email}	
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder={t("email")}
									name="email"
									className={`w-full h-10 border ${
										errors.email && touched.email ? "border-red-default" : "border-bg-hover"
									} px-4 rounded bg-transparent`}
								/>
								<div className="text-red-default font-light text-sm">
									{errors.email && touched.email && <span>{t(errors.email)}</span>}
								</div>
							</div>
							<div className="relative">
								<div
									onClick={showPassClick}
									className="absolute top-0 right-0 h-10 w-10  flex justify-center items-center"
								>
									<button
										type="button"
										aria-label={t("show-hide-password")}
										className="hover:bg-gray-secondary p-1 rounded-full"
									>
										{passwordType === "password" ? (
											<PasswordShow className="w-5 h-4 stroke-white" />
										) : (
											<PasswordHide className="w-5 h-4 stroke-white" />
										)}
									</button>
								</div>
								<input
									type={passwordType}
									value={values.password}	
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder={t("password")}
									name="password"
									className={`w-full h-10 border px-4 rounded bg-transparent ${
										errors.password && touched.password ? "border-red-default" : "border-bg-hover"
									}`}
								/>
								<div className="text-red-default font-light text-sm">
									{errors.password && touched.password && <span>{t(errors.password)}</span>}
								</div>
							</div>
							<div>
								<input
									type={passwordType}
									value={values.passwordRepeat}	
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder={t("repeat-password")}
									name="passwordRepeat"
									className={`w-full h-10 border ${
										errors.passwordRepeat && touched.passwordRepeat ? "border-red-default" : "border-bg-hover"
									} px-4 rounded bg-transparent`}
								/>
								<div className="text-red-default font-light text-sm">
									{errors.passwordRepeat && touched.passwordRepeat && <span>{t(errors.passwordRepeat)}</span>}
								</div>
							</div>
							<div className="text-sm flex">
								<input
									checked={values.termsAndService}
									onChange={handleChange}
									onBlur={handleBlur}
									name="termsAndService"
									type="checkbox"
									id="terms-and-service"
									className="self-start mt-[5px] mr-2"
								/>
								<label className="text-white" htmlFor="terms-and-service">
									{t("i-agree-to")}
									{" "}
									<Link
										to="/termsofuse"
										target="blank"
										className="text-blue-600 hover:underline"
									>
										{t("termsOfUse")}
									</Link>
									{" "}
									{t("and")}
									{" "}
									<Link
										to="/privacy"
										target="blank"
										className="text-blue-600 hover:underline"
									>
										{t("privacy-policy")}
									</Link>
								</label>
							</div>
							<Button
								label={t("register")}
								type="submit"
								disabled={!values.termsAndService || isSubmitting}
							/>
						</form>
					)}
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
