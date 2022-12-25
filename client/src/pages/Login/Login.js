import React, {useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Login.module.scss";
import LoginMainIcon from "../../assets/icons/LoginMainIcon";
import PasswordIcon from "../../assets/icons/PasswordIcon";
const schema = yup.object().shape({
	username: yup
		.string()
		.trim()
		.required("Username bo'sh bo'lishi mumkin emas")
		.min(5, "Username xato kiritildi")
		.max(20, "Username xato kiritildi"),
	password: yup
		.string()
		.trim()
		.required("Parol bo'sh bo'lishi mumkin emas")
		.min(6, "Parol  xato kiritildi")
		.max(20, "Parol xato kiritildi"),
});

function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const [typeState, setTypeState] = useState(null);
	const typeChangeHandler = () => {
		setTypeState(!typeState);
	};
	const login = async (data) => {
		console.log(data)
	};

	return (
		<div className={styles.container}>
			<div className={styles["left-page"]}>
				<LoginMainIcon classname={styles["login-icon"]} />
			</div>
			<div className={styles["right-page"]}>
				<div className={styles["right-page-main-content"]}>
					<h1>Sign Up</h1>
					<form onSubmit={
						handleSubmit(login)
					}>
						<div>
							<label htmlFor="username">
								Login
							</label>
								<input
									style={{ borderBottom: errors.username && "1px solid red" }}
									type="text"
									id="username"
									name="username"
									{...register("username")}
								/>
							{errors.username && (
								<span style={{ color: "red" }}>{errors.username.message}</span>
							)}
						</div>
						<div className={styles.password}>
							<label htmlFor="password">
								Parol
							</label>
							<div>
								<div className={styles.spandiv}>
									<div className={styles.changeType}>
										<div onClick={typeChangeHandler}>
											<PasswordIcon />
										</div>
									</div>
								</div>
								<input
									style={{ borderBottom: errors.password && "1px solid red" }}
									type={typeState ? "text" : "password"}
									name="password"
									id="password"
									{...register("password")}
								/>
							</div>
								
							{errors.password && (
								<span style={{ color: "red" }}>{errors.password.message}</span>
							)}
						</div>
						<div style={{ marginTop: "1rem" }}>

							<button className={styles.buttonLogin} type="submit" >
								Kirish
							</button>

						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
