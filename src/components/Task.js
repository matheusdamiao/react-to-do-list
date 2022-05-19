import React from 'react'
import styled from 'styled-components';



   


const Tasks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    width: 450px;
    margin: 0 auto;
    text-align: center;
    margin-top: 50px;
    
   

    div { 
        display: flex;
        width: 100%;
        padding: 10px 10px;
        border-radius: 15px 15px;
        align-items: center;
        }

`

const TaskBlock = styled.div`
        background-color: #D4ECFF;       
        color: black;
        padding: 20px 10px;
        display: flex;
        

        li {
            list-style: none;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            font-size: 1.2em;
            margin-left: 10px;
            
            input {
                font-size: 1em;
                border-style: none;
                border-radius: 25px 25px;
                background-color: white;
                width: 80%;
                outline: none;
                padding: 0px 20px;
            }
            button {
                border-radius: 25px 25px;
                border: none;
                background-color: #356285;
                color: white;
                padding: 10px 20px;
                cursor: pointer;
            }
        }

`

const Botoes = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        
        button {
            border-radius: 25px 25px;
            border: none;
            background-color: #356285;
            color: white;
            padding: 10px 15px;
            cursor: pointer;
            margin-left: 5px;

        }

`



const Task = ({tasks, editingText, editingTask, handleEditing, saveTask, deleteTask, editTask}) => {
  return (
    <div>

       

       <Tasks> {tasks.map( (task, index)=> 
            <div>
                {editingTask === index ? 
                <TaskBlock>
                    <li key={index}>
                        <input value={editingText} onChange={e =>{handleEditing(e)}}/>
                        <button onClick={()=>{saveTask(index)}}> Save</button>  
                    </li>
                </TaskBlock>
                :
                <TaskBlock>
                    <li key={index}>
                    {task} 
                    </li>
                    <Botoes>
                        <button onClick={()=>{deleteTask(index)}}> X </button> 
                        <button  onClick={() =>{editTask(task, index)}}> Edit </button> 
                    </Botoes>    
                </TaskBlock>
                }         
            </div>
        
        )}         
        </Tasks>

    </div>
  )
}

export default Task
