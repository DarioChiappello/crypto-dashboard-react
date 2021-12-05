import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Member from './Member';
const axios = require('axios');


class Detail extends Component {
	
    state = {
		currency: false,
		status: null,
        team: null,
        links: null 
	}

	componentWillMount(){
		this.getCurrency();
        //const members = this.state.currency.team;
        
	}

	getCurrency = () => {
		var id = this.props.match.params.id;

		axios.get(`https://api.coinpaprika.com/v1/coins/` + id)
			.then(res => {
				//console.log(res.data)
                this.setState({
					currency: res.data,
					status: 'success',
                    team: res.data.team,
                    links: res.data.whitepaper.link
				});
			})
			.catch(err => {
				this.setState({
					currency: false,
					status: 'success',
                    team: null,
                    links: null
				});
			});
	}

    

	render(){
		
		
        
		var currency = this.state.currency;
        var status;
        if(currency.is_active == true){
            status = "Active ";
        }else{
            status = "Inactive" ;
        }
        var members = this.state.team
        var links = this.state.links
        console.log(currency)

		return(
           
                
                
              <div className="container text-white  pt-4">
                  
                <h1 className="text-center">{currency.symbol} - {currency.name}</h1>
                <p className="mt-2">{currency.description}</p>

                <div className="container ">
                    <div className="row">
                        <div className="col-md-6 mt-4">
                            <p>Symbol: {currency.symbol}</p>
                            <p>Rank: {currency.rank}</p>
                            <p>Type: {currency.type}</p>
                            <p>Status: {currency.development_status}</p>
                            <p>Active Status: {status}</p>
                            <p>Hash: {currency.hash_algorithm}</p>
                        </div>
                        <div className="col-md-6 mt-3 float-right">
                            <p>Started at: {currency.started_at}</p>
                            <p>First data: {currency.first_data_at}</p>
                            <p>Last data: {currency.last_data_at}</p>
                            
                            
                            <p>Structure: {currency.org_structure}</p>
                            <p>Proof type: {currency.proof_type}</p>
                        </div>
                    </div>
                    
                    <div className="container p-3 text-center">
                        <h5>Read about {currency.name}</h5>
                        <a className="link-light text-white" href={links}>
                        
                        Here
                            
                        </a>
                    </div>
                    
                    
                </div>
                <div className="container mt-2">
                   
                    <Member
                    name={currency.name}
                    data={members}
                    
                    />

                </div>
                  
                  
                  
                  
              
              </div>
                    
			)
	}
}

export default Detail;