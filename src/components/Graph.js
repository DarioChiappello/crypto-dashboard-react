import React, {Component} from "react";
//import { AreaChart, Area, YAxis, XAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Datachart from "./Datachart";

import Table from "./Table";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const axios = require('axios');

class Graph extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            currency: "bitcoin",
            name: "Bitcoin",
            status: null,
            data: null,
            prices: [],
            info:null,
            tickers: null
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    

    componentWillMount(){
		this.getCurrency();
        //const members = this.state.currency.team;
        
	}

    handleChange(event) {
        
        
        var date = new Date()
        
        var year = date.getFullYear();
        var month = date.getMonth() +1;
        var day = date.getDate();
        var string = year+'-'+month+'-'+(day-1)+' 00:00:00'
        //var string = '2020-01-01 00:00:00'
        
        let currency = event.target.value
        
        const now = new Date(string)  
        const secondsSinceEpoch2 = Math.round(now.getTime() / 1000)
        const secondsSinceEpoch = Math.round(Date.now() / 1000)
        console.log(secondsSinceEpoch2)
        console.log(secondsSinceEpoch)
        
        this.setState({
            currency: currency
        });
        axios.get(`https://api.coingecko.com/api/v3/coins/`+ currency)
			.then(res => {
				//console.log(res.data)
                this.setState({
					currency: res.data.id,
                    name:res.data.name,
					status: 'success',
                    info: res.data,
                    tickers: res.data.tickers
				});
			})
			.catch(err => {
				this.setState({
					currency: false,
					status: 'success'
				});
			});
            axios.get(`https://api.coingecko.com/api/v3/coins/`+ currency+'/market_chart/range?vs_currency=usd&from='+secondsSinceEpoch2+'&to='+secondsSinceEpoch)
            
			.then(res => {
				//console.log(res.data)
                let prices = [];
                Object.getOwnPropertyNames(res.data.prices).forEach(function(val, idx, array) {
                    
                    var timestamp = res.data.prices[val][0];
                    var date = new Date(timestamp * 1000);
                    
                    var hours = date.getHours();
                    
                    var minutes =  date.getMinutes();
                    
                    var seconds = date.getSeconds();
                    var string = hours+':'+minutes+':'+seconds
                    let name = string;

                    let crypto = {
                        name: name,
                        usd: parseFloat(res.data.prices[val][1]).toFixed(4)
                    }
                    prices.push(crypto)
                });
                this.setState({
                    data:res.data.prices,
                    prices: prices
				});
			})

      }


    

    handleSubmit(event){
        
        
        var date = new Date()
        
        var year = date.getFullYear();
        var month = date.getMonth() +1;
        var day = date.getDate();
        var string = year+'-'+month+'-'+(day-1)+' 00:00:00'
        //var string = '2020-01-01 00:00:00'
        const now = new Date(string)  
        const secondsSinceEpoch2 = Math.round(now.getTime() / 1000)
        const secondsSinceEpoch = Math.round(Date.now() / 1000)
        console.log(secondsSinceEpoch2)
        console.log(secondsSinceEpoch)
        
        let currency = this.state.currency
        
            this.setState({
                currency: currency
            });
            
            axios.get(`https://api.coingecko.com/api/v3/coins/`+ this.state.currency)
			.then(res => {
				//console.log(res.data)
                this.setState({
					currency: res.data.id,
                    name:res.data.name,
					status: 'success',
                    info: res.data,
                    tickers: res.data.tickers
				});
			})
			.catch(err => {
				this.setState({
					currency: false,
					status: 'success'
				});
			});
            axios.get(`https://api.coingecko.com/api/v3/coins/`+ currency+'/market_chart/range?vs_currency=usd&from='+secondsSinceEpoch2+'&to='+secondsSinceEpoch)
			.then(res => {
				//console.log(res.data)
                let prices = [];
                Object.getOwnPropertyNames(res.data.prices).forEach(function(val, idx, array) {
                    var timestamp = res.data.prices[val][0];
                    var date = new Date(timestamp * 1000);
                    
                    var hours = date.getHours();
                    
                    var minutes = date.getMinutes();
                    
                    var seconds =  date.getSeconds();
                    var string = hours+':'+minutes+':'+seconds
                    let name = string;

                    let crypto = {
                        name: name,
                        usd: parseFloat(res.data.prices[val][1]).toFixed(4)
                    }
                    prices.push(crypto)
                });
                this.setState({
                    data:res.data.prices,
                    prices: prices
				});
			})
        event.preventDefault();
    }

	getCurrency = () => {
		
        
        var date = new Date()
        
        var year = date.getFullYear();
        var month = date.getMonth() +1;
        var day = date.getDate();
        var string = year+'-'+month+'-'+(day-1)+' 00:00:00'
        
        //var string = '2020-01-01 00:00:00'

        const now = new Date(string)  
        const secondsSinceEpoch2 = Math.round(now.getTime() / 1000)
        const secondsSinceEpoch = Math.round(Date.now() / 1000)
        console.log(secondsSinceEpoch2)
        console.log(secondsSinceEpoch)
        
		axios.get(`https://api.coingecko.com/api/v3/coins/`+ this.state.currency)
			.then(res => {
				//console.log(res.data)
                this.setState({
					currency: res.data.id,
					name: res.data.name,
                    info: res.data,
                    tickers: res.data.tickers
                    
				});
			})
			.catch(err => {
				this.setState({
					currency: false,
					status: 'success'
				});
			});
            
            axios.get(`https://api.coingecko.com/api/v3/coins/`+ this.state.currency+'/market_chart/range?vs_currency=usd&from='+secondsSinceEpoch2+'&to='+secondsSinceEpoch)
			.then(res => {
				console.log(res.data)
                let prices = [];
                Object.getOwnPropertyNames(res.data.prices).forEach(function(val, idx, array) {
                    //console.log(res.data.prices[val][0])
                    var timestamp = res.data.prices[val][0];
                    var date = new Date(timestamp * 1000);
                    
                    var hours = date.getHours();
                    
                    var minutes =  date.getMinutes();
                    
                    var seconds =date.getSeconds();
                    var string = hours+':'+minutes+':'+seconds
                    let name = string;

                    let crypto = {
                        name: name,
                        usd: parseFloat(res.data.prices[val][1]).toFixed(4)
                    }
                    prices.push(crypto)
                });
                this.setState({
                    data:res.data.prices,
                    prices: prices
				});
			})
	}

    render() {
        var currency = this.state.currency;

        var coins = [['bitcoin', 'Bitcoin'], ["ethereum", "Ethereum"],["binancecoin", "Binance Coin"], ["tether", "Tether"],["cardano", "Cardano"],["hex","HEX"],["xrp", "XRP"],["solana", "Solana"],["polkadot", "Polkadot"],["dogecoin", "Dogecoin"]]

        const data = this.state.prices;
        //console.log(data);
        var listItems;
        if(currency != null){
        listItems = coins.map((coin) =>
        <option value={coin[0]}>{coin[1]}</option>
        

        )}

        //var listItems;
        const info =this.state.tickers;
    
        //console.log(this.state.info)
        return (
            
            <div className="container overflow-auto">
                <div >
                <h2 className="text-white text-center mt-3">Crypto Graph</h2>
                <div className="container">
                <form method="POST" onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label  className="form-label text-white">Select Crypto</label>
                    {/*<input type="text" className="form-control bg-dark text-white" />*/}
                    <select className=" form-control bg-dark text-white selectpicker" value={this.state.currency} onChange={this.handleChange}>
                        {listItems}
                    </select>
                </div>
                
                {/*<button type="submit" className="btn btn-primary">Send</button>*/}
                </form>

                </div>
                <h4 className="text-white">{this.state.name}</h4>
                <span className="text-white">Last 24 HS</span>
                <div className="container">
                    <Datachart
                    data={data}
                    />
                    
                </div>
                
                {/*<Example/>*/}
                <div>
                
                </div>
                </div>
                <Table
                info={info}
                />
            </div>
           
            
        )
    };
}

export default Graph;