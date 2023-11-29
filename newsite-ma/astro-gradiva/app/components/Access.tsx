import Image from "next/image";
import crypto from "crypto";
import { Dispatch, SetStateAction, useState } from "react";
import logo from "@/public/logo-nubia.png";
import { EyeIcon, EyeOff } from "lucide-react";

export const Access = ({
	setAccess,
}: {
	setAccess: Dispatch<SetStateAction<boolean>>;
}) => {
	const [code, setCode] = useState("");
	const [hash, setHash] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleClick = () => {
		const hash = crypto.createHash("sha256"); // Vous pouvez choisir un algorithme de hachage différent si nécessaire
		hash.update(code);

		if (
			hash.digest("hex") ===
			"f1264fe082ef163498687cf3d9ba5f33ea3a56c46a22c83bd50d0c8cd2059e02"
		) {
			setAccess(true);
		} else {
			alert("Código incorrecto");
		}
	};

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<div className="flex min-h-screen items-center justify-center">
			<div className="min-h-1/2 login-container  rounded-2xl ">
				<div className="md:mx-34 mx-4 mx-auto flex flex-col  items-center space-y-4 py-16 font-semibold text-gray-500 sm:mx-24 lg:mx-56">
					<Image src={logo} alt={"logo"} width={150} />
					<h1 className="text-2xl text-white">Conexion de acceso</h1>
					<div className="bg-white flex">
						<input
							type={showPassword ? "text" : "password"}
							value={code}
							onChange={(e) => setCode(e.target.value)}
							placeholder="Password"
						/>
						<span className="eye-icon" onClick={togglePasswordVisibility}>
							{showPassword ? <EyeIcon /> : <EyeOff />}
						</span>
					</div>
					<button
						className="w-full rounded-full border border-blue-950 bg-blue-950 p-2 font-bold text-gray-100 hover:bg-blue-800"
						onClick={() => handleClick()}
					>
						Entrar
					</button>
				</div>
			</div>
		</div>
	);
};
