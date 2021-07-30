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
	const [randomPassword, setRandomPassword] = useState("l823Zs78#Css09@");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    console.log('form submitted');
  }


	return (
		<div className="App">
			<main>
				<div className="full_container">
					<section className="upper_container">
						<DisplayPassword password={randomPassword} />
					</section>
					<section className="lower_container">
						<Form onFormSubmit={handleFormSubmit}/>
					</section>
				</div>
			</main>
		</div>
	);
}

export default App;
