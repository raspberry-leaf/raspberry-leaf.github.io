import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from "./data.json";
import desc from "./dataDesc"
import rates from "./dataRates";
import Favicon from 'react-favicon';


ReactDOM.render((
	<div>
		<Favicon url={require(`./img/favicon.ico`).default}/>
		<App data={data}
			 rates={rates}
			 desc={desc}/>
	</div>
), document.getElementById('root'));

