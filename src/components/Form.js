import React, { Component } from 'react';

	class Form extends Component {

		//	Ref
		cityRef = React.createRef();
		countryRef = React.createRef();

		weatherSearch = (e) => {
			//	prevenir el default
			e.preventDefault();			
			
			//	leer los Ref y crear el objeto
			const search = {
				city: this.cityRef.current.value,
				country: this.countryRef.current.value
			};
			
			//	enviar por props
			this.props.queryData(search);

			//	reset formulario
			e.currentTarget.reset();
		}

		render() {
			return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="card col-md-4">
						<div className="card-body">
							<form onSubmit={this.weatherSearch}>

								<div className="md-form mb-3">
									<label htmlFor="citynput">Ciudad:</label>
									<input  ref={this.cityRef} type="text" id="cityInput" className="form-control"/>
								</div>

								<div className="md-form mt-5 pt-5">
									<label htmlFor="countrySelect" className="">Pais:</label>
									<select ref={this.countryRef} className="custom-select mb-3" id="countrySelect">
										<option value="" defaultValue>Elije un Pais</option>
										<option value="AR">Argentina</option>
										<option value="AU">Australia</option>
										<option value="BO">Bolivia</option>
										<option value="BR">Brasil</option>
										<option value="CA">Canada</option>
										<option value="CL">Chile</option>
										<option value="CO">Colombia</option>
										<option value="ES">España</option>
										<option value="MX">Mexico</option>
										<option value="US">Estados Unidos</option>
										<option value="VE">Venezuela</option>
									</select>
								</div>								

								<div className="form-group text-center mt-2 mb-3 pt-2">
          							<button type="submit" className="btn btn-block rounded-pill  blue-gradient">Buscar</button>
       							</div>					
							</form>
						</div>						
					</div>		
				</div>
			</div>
			)
		}
	}

export default Form;