import { useTranslation } from "react-i18next";
import { doSignInWithEmailAndPassword } from "../../services/firebaseAuth";
import { useEffect, useState } from "react";
import { ReactComponent as PasswordShow } from "../../assets/icons/passwordShow.svg";
import { ReactComponent as PasswordHide } from "../../assets/icons/passwordHide.svg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signInSchema } from "../../schemas/yupSchemas";
import ReCAPTCHA from "react-google-recaptcha";
import { useAuth } from "../../context/AuthContext";

interface ISignIn {
	email: string;
	password: string;
}

const SignInPage = () => {
	const { t } = useTranslation();
	const [passwordType, setPasswordType] = useState<string>("password");
	const [passwordError, setPasswordError] = useState("");
	const [loading, setLoading] = useState<boolean>(false);
  const [passwordErrorCount, setPasswordErrorCount] = useState<number>(0);
  const [captchaValue, setCaptchaValue] = useState<string | null>('');
	const navigate = useNavigate();
  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;
  const { userLoggedIn } = useAuth();
  
  useEffect(() => {
    userLoggedIn && navigate('/')
  }, [])

	const showPassClick = () => {
		setPasswordType((prev) => (prev === "password" ? "text" : "password"));
	};

	const onSubmit = async () => {
		try {
			setLoading(true);
			await doSignInWithEmailAndPassword(values.email, values.password);
			navigate("/");
		} catch (error: any) {
      if (error.code === "auth/invalid-credential") {
				setPasswordError("invalid-credential");
				setPasswordErrorCount((prev) => prev + 1);
			} else {
        setPasswordError(error.code);
				console.log(error.code);
			}
    } finally {
			setLoading(false);
    }
	};

	const {
		values,
		handleBlur,
		isSubmitting,
		handleChange,
		handleSubmit,
	} = useFormik<ISignIn>({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit,
		validationSchema: signInSchema,
	});

	return (
		<div className="relative">
			<div
				className="
        w-full h-[calc(100svh-70px)] md:h-[calc(100svh-78px)] min-h-[550px]
        bg-posters absolute"
			></div>
			<div className="w-full h-[calc(100svh-70px)] md:h-[calc(100svh-78px)] min-h-[550px]">
				<div className="w-full h-[calc(100svh-70px)] sm:rounded sm:h-[500px] sm:mt-10 sm:w-[450px] mx-auto px-[5%] bg-black-default sm:bg-black-70 z-10 relative">
					<h1 className="text-2xl sm:pt-10 sm:text-4xl text-white">
						{t("sign-in")}
					</h1>
					{loading ? (
						<div>Loading</div>
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
									className="w-full h-10 border px-4 rounded bg-transparent border-bg-hover"
								/>
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
									className="w-full h-10 border px-4 rounded bg-transparent border-bg-hover"
								/>
								<div className="text-red-default font-light text-sm">
									{passwordError && <span>{t(passwordError)}</span>}
								</div>
							</div>
							{passwordErrorCount > 2 && (
								<div>
									<ReCAPTCHA sitekey={`${siteKey}`} onChange={(val) => setCaptchaValue(val)} />
								</div>
							)}
							<Button
								label={t("sign-in")}
								type="submit"
								disabled={isSubmitting || (passwordErrorCount > 2 && !captchaValue)}
							/>
						</form>
					)}
				</div>
			</div>
		</div>
	);
};

export default SignInPage;
