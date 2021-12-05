import React, {Component} from 'react';
import Currency from './Currency';


const axios = require('axios');

class Content extends Component {
    
    constructor(props) {
        super(props);
        this.state = { currencies: [],
            /*loading: <div className="text-center mt-4">
            <img src="assets/31.gif" />
          </div>*/
                        
                     };
      }

      componentWillMount() {

        
        axios.get(`https://api.coinpaprika.com/v1/coins`)
        .then(res => {
            const currencies = res.data;
            this.setState({ currencies: currencies });
            //console.log(this.state.currencies);
            
        
        })

        
      }

    render () {
        
        return (
            <div className="container align-self-stretch">
                <h2 className="text-white mt-2">All Cryptocurrencies</h2>
                {this.state.loading}
                
                
                <ul>
                    
                    {
                            this.state.currencies.map((currency, i) => {
                                let color = "text-success";
                                if(currency.is_active == true){
                                    color = "text-crypto";
                                }else{
                                    color = "text-crypto-error";
                                }
                                return(
                                    <li className="list-group-item list-group-item-action bg-dark border-light">
                                    <Currency
                                    rank={currency.rank}
                                    name={currency.name}
                                    is_active={currency.is_active}
                                    is_new={currency.is_new}
                                    symbol={currency.symbol}
                                    type={currency.type}
                                    color= {color}
                                    
                                    />
                                    </li>
                                )
                            })
                        }
                    
                </ul>
                
                        
                        
                    
                
            </div>
         );
    }
    }

 export default Content;