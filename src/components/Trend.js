import React, {Component} from 'react';



class Trend extends Component {
	
	

	render(){
		
		
    const {data} = this.props;
    
    
    var listItems;
    if(data){
      listItems = data.map((trend) =>
      <tr id="row"><td >{trend.item.score}</td><td>{trend.item.coin_id}</td><td>{trend.item.name}</td><td>{trend.item.symbol}</td><td>{trend.item.price_btc}</td><td>{trend.item.market_cap_rank}</td></tr>
       
        
    );
    }else{
      const dataFalse = [];
      listItems = dataFalse.map((trend) =>
      <tr id="row"><td>{trend.item.score}</td><td>{trend.item.coin_id}</td><td>{trend.item.name}</td><td>{trend.item.symbol}</td><td>{trend.item.price_btc}</td><td>{trend.item.market_cap_rank}</td></tr>
      );
    }
    
    
		return(
           
                
                
              <div >
                  
                <table class="table table-hover text-white">
                <thead>
                        <tr>
                        <th scope="col">Score</th>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Price BTC</th>
                        <th scope="col">Market Cap Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
                    
                  
                  
                  
                  
                  
                  
                  
              
              </div>
                    
			)
	}
}

export default Trend;