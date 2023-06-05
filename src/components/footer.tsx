import React from "react";

function Footer(){
    return (
        <footer className="w-full bg-azulOscuro h-400 flex justify-center items-center flex-col">
            <h4 className="contacto">Contacta me</h4>
            <div className="container__network">
                <div>
                    <img src="" alt="Red social"/>
                    <span>twitter</span>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col">
                <span className="pie">Hecho con amor💓</span>
                <span id="rights">
                    Derechos Reservados &copy; 2023
                </span>
            </div>
	    </footer>
    )
}

export { Footer };