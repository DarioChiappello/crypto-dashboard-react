import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Currency extends Component {
	
	

	render(){
		
		const {name} = this.props;
        const {symbol} = this.props;
        const {rank} = this.props;
        const {is_active} = this.props;
        const {is_new} = this.props;
        const {type} = this.props;
        const {color} = this.props;
        let new_currency = "New";
        if(is_new == false){
            new_currency = "";
        }
        
		

		return(
           
                
                
              <div className={color}>
                  <div className="row">
                    <div className="col-md-1">
                        <p>{rank}</p>
                    </div>
                    <div className="col-md-2">
                        <p>{name}</p>
                    </div>
                    <div className="col-md-2">
                        <p>{symbol}</p>
                    </div>
                    <div className="col-md-2">
                        <p>{type}</p>
                    </div>
                    <div className="col-md-2">
                        <p>{new_currency}</p>
                    </div>
                  </div>
                  
                  
                  
                  
                  
                  
              
              </div>
                    
			)
	}
}

export default Currency;