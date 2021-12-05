import React, {Component} from 'react';



class Member extends Component {
	
	

	render(){
		
		const {name} = this.props;
    const {data} = this.props;
    
    //console.log(data)
    var listItems;
    if(data){
      listItems = data.map((member) =>
        <li className="list-unstyled bg-dark text-white" key={member.id}>{member.name} - {member.position}</li> 
    );
    }else{
      const dataFalse = [];
      listItems = dataFalse.map((member) =>
        <li className="list-unstyled bg-dark text-white" key={member.id}>{member.name} - {member.position}</li> 
      );
    }
    
    
		return(
           
                
                
              <div >
                  
                    <div >
                      <h5 className="text-center"> {name} Team </h5>
                      
                    </div>
                    <div className="text-center">
                      <ul>
                        {listItems}
                      </ul>
                    </div>
                    
                  
                  
                  
                  
                  
                  
                  
              
              </div>
                    
			)
	}
}

export default Member;