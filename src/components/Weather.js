import React, { Component }from 'react';

class Weather extends Component {

    showWeather = () => {
        //  obtener los datos
        const { name, weather, main} = this.props.result

        if(!name || !weather || !main) {
            return null;
        }

        const kelvin = 273.15
        const urlIcon = `http://openweathermap.org/img/w/${weather[0].icon}.png`
        const alt = `clima de ${name}`

        return(
            <div className="row justify-content-center">
                <div className="card col-md-6 info-color-dark mt-3">
					<div className="card-body text-center">
                        <span>
                            <h2>Resultado clima de: {name}</h2>
                            <p>
                                Temperatura:
                                Actual: { (main.temp - kelvin).toFixed(2) } &deg;C
                                <img src={urlIcon} alt={alt}></img>
                            </p>
                            <p>Maxima: { (main.temp_max - kelvin).toFixed(2) } &deg;C</p>
                            <p>minima: { (main.temp_min - kelvin).toFixed(2) } &deg;C</p>
                        </span>
                    </div>
                </div>
     
            </div>
            
        )
    }

    render() { 
        return (
            <div className="container">
               {this.showWeather()}
            </div>
        )
    }
}

export default Weather;