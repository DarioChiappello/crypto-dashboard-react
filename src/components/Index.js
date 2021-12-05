import React, {Component} from 'react';

import Trend from './Trend';




const axios = require('axios');

class Index extends Component{
    state = {
		data: false,
		status: null,
        //total_market_cap:null,
        //total_volume: null,
        trends: null

	}

	componentWillMount(){
		this.data();
        
        
	}

    data(){
        axios.get(`https://api.coingecko.com/api/v3/global`)
			.then(res => {
				console.log(res.data.data)
                let total_market_cap = [];
                let total_volume = [];
                Object.getOwnPropertyNames(res.data.data.total_market_cap).forEach(function(val, idx, array) {
                    
                    let crypto = {
                        "name": val,
                        "value": res.data.data.total_market_cap[val]
                    }
                    total_market_cap.push(crypto)
                });
                Object.getOwnPropertyNames(res.data.data.total_volume).forEach(function(val, idx, array) {
                    
                    let crypto = {
                        "name": val,
                        "value": res.data.data.total_volume[val]
                    }
                    total_volume.push(crypto)
                });
                this.setState({
					data: res.data.data,
					status: 'success',
                    total_market_cap: total_market_cap ,
                    total_volume: total_volume
				});
			})
			.catch(err => {
				this.setState({
					data: false,
					status: 'success',
                    total_market_cap:null,
                    total_volume:null

				});
			});

        axios.get(`https://api.coingecko.com/api/v3/search/trending`)
            .then(res => {
                
                this.setState({ trends: res.data.coins });
                console.log(this.state.trends);
                
               
            })
    }

    


    render(){
        var data = this.state.data;
        const total_market_cap = this.state.total_market_cap;
        const  total_volume = this.state.total_volume;
        const trends = this.state.trends;
        //console.log(total_market_cap);
        //console.log(total_market_cap);
        

        return(
            <div className="container text-white  pt-4">
                  
                <h1 className="text-center mb-2">Crypto Dashboard</h1>
                <div className="row d-flex justify-content-center pt-4">
                    <div className="col-md-3 mr-2 card text-white bg-dark mb-3 border-primary" >
                    <div className="card-header">Active Cryptocurrencies</div>
                    <div className="card-body">
                        <h5 className="card-title">Active Cryptocurrencies</h5>
                        <p className="card-text">{data.active_cryptocurrencies} Cryptocurrencies</p>
                        
                    </div>
                    </div> 
                    <div className="col-md-3 mr-2 card text-white bg-dark mb-3 border-danger" >
                    <div className="card-header">Icos</div>
                    <div className="card-body">
                    
                        <p className="card-text">Ended Icos: {data.ended_icos} </p>
                        <p className="card-text">On going Icos: {data.ongoing_icos} </p>
                    </div>
                    </div> 
                    <div className="col-md-3 mr-2 card text-white bg-dark mb-3 border-success" >
                    <div className="card-header">Markets</div>
                    <div className="card-body">
                        
                        <p className="card-text">Markets: {data.markets}</p>
                        <p className="card-text">Market cap change percentage 24H (USD): {data.market_cap_change_percentage_24h_usd}</p>
                    </div>
                    </div> 
                    <div className="container">
                        {/*<Charts
                        final_data={final_data}
                        />*/}

                       <h3>Trends</h3>
                       <Trend
                       data={trends}
                       />
                    </div>

                </div>
                
                
                  
                  
                  
              
              </div>
        )
    }
}

export default Index