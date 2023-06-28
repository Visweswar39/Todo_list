import React, { Component } from 'react';
import Form from './form';
import ActiveItems from './activeitems';
import CompletedItems from './complteditems';
class App extends Component {
    state = { 
        tasks : []
     } 

    handleSubmit(e){
        var title = document.querySelector('#task').value;
        document.querySelector('#task').value = '';
        let allTasks = this.state.tasks;
        allTasks.push({id:Date.now(), title:title , status : 0});
        this.setState({tasks:allTasks});

        //console.log(this.state.tasks);
        e.preventDefault();
    }


    handleChecks(id){

        let allTasks = this.state.tasks;
        allTasks.forEach(function(task){
            if(task.id === id){
                task.status = 1;
            }
        });

        this.setState({tasks:allTasks});

        console.log(this.state.tasks);
        
    }

    deleteTask(e,id){
        let allTasks = this.state.tasks;
        allTasks.forEach(function(task,index){
            if(task.id===id){
                allTasks.splice(index,1);
            }
        })
        this.setState({tasks:allTasks});
        e.preventDefault();
    }
    
    render() { 
        return (
            <div>
                <nav className='navbar bg-primary center'>
                    <h4 className='navbar-brand text-white' >To-Do</h4>
                </nav>

                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-12'>
                            <Form handleSubmit={this.handleSubmit.bind(this)}/>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-6'>
                            <h3>Active Tasks </h3>
                            <ActiveItems items={this.state.tasks} handleChecks={this.handleChecks.bind(this)}/>
                        </div>
                        <div className='col-6'>
                            <h3>Completed Tasks</h3>
                            <CompletedItems items={this.state.tasks} deleteTask = {this.deleteTask.bind(this)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default App;