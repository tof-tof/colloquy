import firebase from "firebase/app";
import "firebase/auth";
import { AuthAction, withAuthUser } from "next-firebase-auth";
import Head from "next/head";
import { useState } from "react";
import { createUser } from "../utils/chatApi";

function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const isNewUser = async () => {
		const methods = await firebase.auth().fetchSignInMethodsForEmail(email);
		return methods.length == 0;
	};

	const handleSubmit = async () => {
		if (await isNewUser()) {
			await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password)
				.then(async (userCredential) => {
					await createUser(email, userCredential.user.uid);
				});
		} else {
			await firebase.auth().signInWithEmailAndPassword(email, password);
		}
	};

	return (
		<>
			<Head>
				<title>Sign in - Colloquy</title>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest"></link>
			</Head>
			<div className="flex flex-col justify-center align-middle min-h-screen bg-gradient-to-br from-transparent via-secondary to-transparent text-primary ">
				<div className=" mx-auto p-5 border rounded-xl shadow-lg w-min whitespace-pre space-y-5 bg-gray-50">
					<h1 className="text-3xl text-center pb-3 font-medium">
						Login or Register
        </h1>
					<div className="mb-3">
						<label className="block pl-1 font-light text-lg text-themeDarkBlue" htmlFor="Email">
							Email
          </label>
						<input
							id="Email"
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="oneLineInput bg-gray-50"
						/>
					</div>
					<div>
						<label className="block pl-1 font-light text-lg text-themeDarkBlue" htmlFor="Password">
							Password
          </label>
						<input
							id="Password"
							type="password"
							value={password}
							className="oneLineInput bg-gray-50"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="flex justify-center pt-4">
						<button
							className="btn py-2 focus:ring-primary border-0 bg-primary uppercase tracking-wider font-semibold text-white shadow-lg hover:bg-themeDarkBlue"
							onClick={() => handleSubmit()}
						>
							Submit
          </button>
					</div>
				</div>
			</div>
		</>
	);
}

export default withAuthUser({ whenAuthed: AuthAction.REDIRECT_TO_APP })(Auth);
