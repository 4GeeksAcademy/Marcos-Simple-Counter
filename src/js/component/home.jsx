import React, { useEffect, useState } from "react";
import Digit from "./digit";

//create your first component
const Home = () => {
	//estados sin asincronos
	const [timer, setTimer] = useState(0)
	const [active, setActive] = useState(false)
	const [isCountdown, setIsCountdown] = useState(false)
	const [alert, setAlert] = useState(0)


	useEffect(() => {
		if (timer == alert && alert != 0) {
			window.alert("Se acabó el tiempo!!")
		}
		if (active) {	
			setTimeout(() => {
				setTimer(value => value + 1)
			}, 1000);
		}
		if (isCountdown) {
			setTimeout(() => {
				setTimer(value => value - 1)
			}, 1000);
		}
		
	}, [timer, active, isCountdown])//array de dependencias 

	const startStop = () => setActive(value => !value)
	const resetTimer = () => setTimer(value => value=0)
	const handleChange = e => setTimer(value => value= e.target.value)

	return (
		<main className="text-center">

			<section className="counter-holder my-5">
			<Digit number={<span className="fa fa-clock"></span>}/>
			<Digit number={Math.floor(timer / 100000) % 10}/>
			<Digit number={Math.floor(timer / 10000) % 10}/>
			<Digit number={Math.floor(timer / 1000) % 10}/>
			<Digit number={Math.floor(timer / 100) % 10}/>
			<Digit number={Math.floor(timer / 10) % 10}/>
			<Digit number={Math.floor(timer % 10)}/>
			</section>

			<section className="container text-center my-5">
				<h2>Controller</h2>
				<div>
					<button 
					disabled={active} 
					onClick={startStop} className="mx-1 btn btn-success">Start</button>
					<button 
					disabled={!active} 
					onClick={startStop} className="mx-1 btn btn-secondary">Stop</button>
					<button onClick={resetTimer} className="mx-1 btn btn-danger">Reset</button>
				</div>
			</section>

			<section className="container text-center">
				<h2>Cuenta regresiva</h2>
				<form className="form-control" onSubmit={e=>e.preventDefault()}>
					<label className="form-text">Donde quieres empezar?
					<input 
					className="form-control" 
					type="number" 
					value={timer}
					onChange={e=> handleChange(e)}
					/>
					</label>

					<div>
					<input
					disabled={isCountdown} 
					onClick={() => setIsCountdown(value => !value)}
					className=" my-3 mx-1 btn btn-success" type="submit" value={"Start"} />

					<input
					disabled={!isCountdown}  
					onClick={() => setIsCountdown(value => !value)}
					className="my-3 mx-1 btn btn-secondary" type="submit" value={"Stop"} />
					</div>
				</form>
			</section>

			<section className="container text-center">
				<h2>Crear alerta</h2>
					<form className="form-control" onSubmit={e=>e.preventDefault()}>
						<label className="form-text">Donde quieres la alerta?
						<input 
						className="form-control" 
						type="number" 
						onChange={e=> setAlert(value => value= e.target.value)}
						/>
						</label>

						<div>
						<input
						
						onClick={()=> window.alert("Alerta creada")}
						className=" my-3 mx-1 btn btn-success" type="submit" value={"Crear"} />
						</div>
						
					</form>
			</section>
		</main>
	);
};

export default Home;
