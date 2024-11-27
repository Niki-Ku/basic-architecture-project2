import { useTranslation } from "react-i18next";
import { doCreateUserWithEmailAndPassword } from "../../services/firebaseAuth";
import { useState } from "react";
import { ReactComponent as PasswordShow } from "../../assets/icons/passwordShow.svg";
import { ReactComponent as PasswordHide } from "../../assets/icons/passwordHide.svg";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
	const { t } = useTranslation();
	const [passwordType, setPasswordType] = useState<string>("password");
	const [emailError, setEmailError] = useState<string>("");
	const [passwordError, setPasswordError] = useState<string>("");
	const [passwordRepeatError, setPasswordRepeatError] = useState<string>("");
	const [termsService, setTermsService] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const passwordRegex =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
	const navigate = useNavigate();

	const showPassClick = () => {
		setPasswordType((prev) => (prev === "password" ? "text" : "password"));
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const passwordRepeat = formData.get("repeat") as string;

		const emailIsValid = emailRegex.test(email);
		const passwordIsValid = passwordRegex.test(password);
		const passwordsMatch = password === passwordRepeat;

		setEmailError(emailIsValid ? "" : "email-error");
		setPasswordError(passwordIsValid ? "" : "password-error");
		setPasswordRepeatError(passwordsMatch ? "" : "password-repeat-error");

		if (emailIsValid && passwordIsValid && passwordsMatch) {
			try {
				setLoading(true);
				await doCreateUserWithEmailAndPassword(email, password);
				setLoading(false);
				navigate("/");
			} catch (error) {
				console.log(error);
			}
		}
  };

	return (
		<div className="relative">
			<div
				className="
        w-full h-[calc(100svh-70px)] md:h-[calc(100svh-78px)]
        bg-posters absolute"
			></div>
			<div className="w-full h-[calc(100svh-70px)] sm:rounded sm:h-[500px] sm:mt-10 sm:w-[450px] mx-auto px-[5%] bg-black-default sm:bg-black-70 z-10 relative">
				<h1 className="text-2xl sm:pt-10 sm:text-4xl text-white">{t("sign-up")}</h1>
				{loading ? (
					<div>Loading</div>
				) : (
					<form onSubmit={onSubmit} className="flex flex-col gap-5 mt-6">
						<div>
							<input
								type="text"
								placeholder={t("email")}
								name="email"
								className={`w-full h-10 border ${
									emailError ? "border-red-default" : "border-bg-hover"
								} px-4 rounded bg-transparent`}
							/>
							<div className="text-red-default font-light text-sm">
								{emailError && <span>{t(emailError)}</span>}
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
								placeholder={t("password")}
								name="password"
								className={`w-full h-10 border ${
									passwordError ? "border-red-default" : "border-bg-hover"
								} px-4 rounded bg-transparent`}
							/>
							<div className="text-red-default font-light text-sm">
								{passwordError && <span>{t(passwordError)}</span>}
							</div>
						</div>
						<div>
							<input
								type={passwordType}
								placeholder={t("repeat-password")}
								name="repeat"
								className={`w-full h-10 border ${
									passwordRepeatError ? "border-red-default" : "border-bg-hover"
								} px-4 rounded bg-transparent`}
							/>
							<div className="text-red-default font-light text-sm">
								{passwordRepeatError && <span>{t(passwordRepeatError)}</span>}
							</div>
						</div>
						<div className="text-sm flex">
							<input
								checked={termsService}
								onChange={() => setTermsService((prev) => !prev)}
								name="terms and service"
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
							disabled={!termsService}
						/>
					</form>
				)}
			</div>
		</div>
	);
};

export default SignUpPage;
