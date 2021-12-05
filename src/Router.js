import React, {Component} from 'react';
// importar el react router dom
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Content from './components/Content';
import List from './components/List';
import Detail from './components/Detail';
import Index from './components/Index';
import Navbar from './components/Navbar';
import Links from './components/Links';
import Footer from './components/Footer';
import Graph from './components/Graph';




class Router extends Component{

	render(){
		
		return (
				
				<BrowserRouter>
					
					<div id="content">

					<Navbar>
                    <Links></Links>
                    </Navbar>
					<div className="container-fluid bg-dark">
					<div className="row">
							
	       			
				{/* Configurar rutas y paginas   */}
				<Switch>
					
					
					<Route exact path="/" component={Index} />
					
                    <Route exact path="/list" component={List} />
					<Route exact path="/detail/:id" component={Detail} />
					<Route exact path="/graph" component={Graph} />
					{/*<Route exact path="/content" component={Content} />*/}
				</ Switch>
					

			       
				
				{/*
				<Content></Content>
				<Main></Main> */}
				</div>
				</div>
				
			</div>
			
			<Footer></Footer>
			      	

			      	
				</ BrowserRouter>

			);
	}
}

export default Router;