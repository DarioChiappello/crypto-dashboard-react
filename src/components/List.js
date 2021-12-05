import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';
import { NavLink } from 'react-router-dom';



const axios = require('axios');

class List extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 20,
            currentPage: 0,
            total: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    receivedData() {
        axios
            .get(`https://api.coinpaprika.com/v1/coins`)
            .then(res => {

                const data = res.data;
                const total = res.data.length
                console.log(total)
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(pd => 
                    {
                        if(pd.is_active === false)
                            return <React.Fragment>
                    
                            <div  className="row text-crypto-error m-1">
                            <div className="col-md-1">
                                <p>{pd.rank}</p>
                            </div>
                            <div className="col-md-2">
                                <p>{pd.name}</p>
                            </div>
                            <div className="col-md-2">
                                <p>{pd.symbol}</p>
                            </div>
                            <div className="col-md-2">
                                <p>{pd.type}</p>
                            </div>
                            <div className="col-md-4">
                                <button className="btn btn-success text-white" ><NavLink className="text-white" to={'/detail/'+pd.id}>Detail</NavLink></button>
                            </div>
                            
                            </div>
                            
                            
                        </React.Fragment>
                        return <React.Fragment>
                    
                        <div  className="row text-crypto m-1">
                        <div className="col-md-1">
                            <p id="text-crypto">{pd.rank}</p>
                        </div>
                        <div className="col-md-2">
                            <p>{pd.name}</p>
                        </div>
                        <div className="col-md-2">
                            <p>{pd.symbol}</p>
                        </div>
                        <div className="col-md-2">
                            <p>{pd.type}</p>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-success text-white" ><NavLink className="text-white" to={'/detail/'+pd.id}>Detail</NavLink></button>
                        </div>
                        
                        </div>
                        
                        
                    </React.Fragment>
                    }
                    
                )

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    total: total,
                    postData
                })
            });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <div className="container align-self-stretch bg-dark text-white">
                
                
                
                <div className="card-body mt-4 mb-4">
                    
                    <div class="alert alert-warning" role="alert">
                        <p>{this.state.total} Currencies</p>
                    </div>
                    
                    <h4>Cryptocurrencies List</h4>
                    <hr></hr>
                    <ul className="list-group mt-4">
                        
                    <div>
                        {this.state.postData}
                        <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={this.state.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={"pagination"}
                            subContainerClassName={"pages pagination"}
                            activeClassName={"active"}/>
                    </div>
                        
                    </ul>
                    
                </div>
                
            </div>
            
            

        )
    }
    }

 export default List;