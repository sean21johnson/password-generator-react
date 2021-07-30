import React, { useState } from "react";

import DisplayPassword from "./DisplayPassword";
import Form from "./Form";

import "./App.css";

/*
  Components
    -Form component
    -DisplayPassword component

  State
    -randomPassword



*/

function App() {
	// Variables
	const uppercaseValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const lowercaseValues = uppercaseValues.toLowerCase();
	const numberValues = "1234567890";
	const symbolValues = "!@#$%^&*";

	// State
	const [randomPassword, setRandomPassword] = useState("l823Zs78#Css09@");

	const handleFormSubmit = (e) => {
		e.preventDefault();

		// target the values from the form submission
		const passwordLength = e.target.len.value;
		const containsUppercase = e.target.uppercase.checked;
		const containsLowercase = e.target.lowercase.checked;
		const containsNumbers = e.target.numbers.checked;
		const containsSymbols = e.target.symbols.checked;

		if (
			!containsUppercase &&
			!containsLowercase &&
			!containsNumbers &&
			!containsSymbols
		) {
			updatePasswordContainer("");
		}

		generateRandomPassword(
			passwordLength,
			containsUppercase,
			containsLowercase,
			containsNumbers,
			containsSymbols
		);
	};

	// Method to generate the random password
	const generateRandomPassword = (
		length,
		containsUppercase,
		containsLowercase,
		containsNumbers,
		containsSymbols
	) => {
		let resultPassword = "";

		if (containsUppercase)
			resultPassword += generateRandomCharacter(uppercaseValues);
		if (containsLowercase)
			resultPassword += generateRandomCharacter(lowercaseValues);
		if (containsNumbers)
			resultPassword += generateRandomCharacter(numberValues);
		if (containsSymbols)
			resultPassword += generateRandomCharacter(symbolValues);

		let possibleCharacterSelections = [];

		if (containsUppercase) possibleCharacterSelections.push("uppercaseValues");
		if (containsLowercase) possibleCharacterSelections.push("lowercaseValues");
		if (containsNumbers) possibleCharacterSelections.push("numberValues");
		if (containsSymbols) possibleCharacterSelections.push("symbolValues");

		let currentPasswordLength = resultPassword.length;

		while (currentPasswordLength < length) {
			let strCharacterChoice = randomArrSelector(possibleCharacterSelections);

			if (strCharacterChoice === "uppercaseValues") {
				resultPassword += generateRandomCharacter(uppercaseValues);
				currentPasswordLength++;
			} else if (strCharacterChoice === "lowercaseValues") {
				resultPassword += generateRandomCharacter(lowercaseValues);
				currentPasswordLength++;
			} else if (strCharacterChoice === "numberValues") {
				resultPassword += generateRandomCharacter(numberValues);
				currentPasswordLength++;
			} else {
				resultPassword += generateRandomCharacter(symbolValues);
				currentPasswordLength++;
			}
		}

		resultPassword = randomizeStringCharacters(resultPassword);

    updatePasswordContainer(resultPassword);
	};

	// Method to update the random password
	const updatePasswordContainer = (newPassword) => {
		setRandomPassword(newPassword);
	};

	// Randomize a string of characters
	const randomizeStringCharacters = (str) => {
		return str
			.split("")
			.sort(() => {
				return 0.5 - Math.random();
			})
			.join("");
	};

	// Choose a random element from an array
	const randomArrSelector = (arr) => {
		const randomIndex = Math.floor(Math.random() * arr.length);
		const randomSelection = arr[randomIndex];

		return randomSelection;
	};

	// Method to generate a random character from a string input
	const generateRandomCharacter = (str) => {
		const randomIndex = Math.floor(Math.random() * (str.length - 1));
		const randomCharacter = str[randomIndex];

		return randomCharacter;
	};

	return (
		<div className="App">
			<main>
				<div className="full_container">
					<section className="upper_container">
						<DisplayPassword password={randomPassword} />
					</section>
					<section className="lower_container">
						<Form onFormSubmit={handleFormSubmit} />
					</section>
				</div>
			</main>
		</div>
	);
}

export default App;
