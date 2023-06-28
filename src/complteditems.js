import React, { Component } from 'react';

class CompletedItems extends Component {
    state = {  } 
    render() { 
        let tasks = this.props.items;
        return (
            tasks.map((item,index)=>{
                if(item.status===1){
                    return <div key={index} className='mt-3'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <h5><span>{item.title}</span><span className="float-end"><a href="#" className='text-danger' onClick={(e)=>this.props.deleteTask(e,item.id)}>x</a></span></h5>
                                    </div>
                                </div>
                            </div>
                }
            })    
        );
    }
}
 
export default CompletedItems;