import React from 'react';
import styledComponents from 'styled-components';
import styled from 'styled-components';
import './App.css';
import Task from './components/Task';



const Title = styled.h1`
    margin-right: 15px;
    font-size: 4em;
    color: #356285;
    text-align: center;
    
    `;

const Input = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 10px;
    
    
    input {
      padding: 20px 25px;
      font-size: 1.2em;
      width: 300px;
      border-style: none;
      border-radius: 25px 25px;
      background-color: #D4ECFF;    
      ::placeholder {
        color: black;
        font-size: 1em;
        opacity: 0.5;
      }

      &:focus {
        outline: none;
        color: black;
        ::placeholder {
        color: black;
        
      }
      }
    }

    button {
      margin-left: 10px;
      font-weight: bolder;
      font-size: 32px;
      border-radius: 25px 25px;
      border: none;
      background-color: #356285;
      color: white;
      padding: 10px 20px;
      cursor: pointer;  

      &:hover {
        background-color: #D4ECFF;
        color: #126485;
        
        
      }
    }

`



class App extends React.Component {

  state = {
    tasks: [],
    task: '',
    editingText: '',
    editingTask: null
  }

  
 handleInput = (e) =>{
     this.setState({
       task: e.target.value
      })
  }

  handleBtn = () =>{
    this.state.task === '' ?
     (alert('campo vazio!')) 
     : 
     (this.setState({
      tasks: [...this.state.tasks, this.state.task]
    }))
    this.setState({task: ''})
  }


  deleteTask = (id) =>{
    if(this.state.editingTask === true){
      this.setState({
        editingText: null
      })
    }

    const filter = this.state.tasks.filter( (task, index)=> index !== id)
    this.setState({
      tasks: [...filter]
    })

   }
  


  editTask = (task, id) =>{
      this.setState( {
      editingTask: id,
      editingText: task
    })
  }


  saveTask = (id) =>{
    const newTask = this.state.editingText
    this.state.tasks[id] = newTask
    this.setState({
      tasks: this.state.tasks
    })

    this.setState( {
      editingText: '',
      editingTask: null
    })

  }


  handleEditing = (e) =>{
    this.setState({
      editingText: e.target.value
    })
  }

 
  
 


  render () {
    
  return (
    
    <>
         <Title>Tasks </Title>
        <Input>
          <input 
            value={this.state.task}
            onChange={e=>{this.handleInput(e)}}
            placeholder={'Add task..'}
          />
          <button onClick={this.handleBtn}> + </button>
        </Input>

        <Task  
        tasks={this.state.tasks}
        task={this.state.task}
        editingText={this.state.editingText}
        editingTask={this.state.editingTask}
        handleEditing={this.handleEditing}
        saveTask={this.saveTask}
        deleteTask={this.deleteTask}
        editTask={this.editTask}
        />
      
    </>
  );
}
}

export default App;
