import React, { Component } from "react";

class Table extends Component{


    render(){
        const {info} = this.props;
        var listItems;
        if(info){
            listItems = info.map((curr) =>
            <tr id="row"><td >{curr.base}</td><td>{curr.converted_last.btc} - {curr.converted_last.eth} - {curr.converted_last.usd}</td><td>{curr.converted_volume.btc} - {curr.converted_volume.eth} - {curr.converted_volume.usd}</td><td>{curr.target}</td><td>{curr.market.name}</td><td>{curr.bid_ask_spread_percentage}</td><td>{curr.volume}</td></tr>
             
              //console.log(trend.item)
              //console.log(trend.item.coin_id)
          );
        }

        return(
            <div className=" mt-4 table-responsive w-100 d-block d-md-table " styles="min-width:100%;">
                <h5 className="text-white">Tickers</h5>
                <table className="table table-hover text-white ">
                <thead>
                        <tr> 
                        <th  className="col">Base</th>
                        <th className="col">Converted Last</th>
                        <th className="col">Converted Volume</th>
                        
                        <th className="col">Target</th>
                        <th className="col">Market</th>
                        <th className="col">Bid ask spread percentage</th>
                        <th className="col">Volume</th>
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

export default Table