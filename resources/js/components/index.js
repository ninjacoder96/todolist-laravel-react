import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            list:{
                id:'',
                name:'',
                task:{
                    name:'',
                }
            },
            lists:[],
            isListInEditMode: false,
            isTaskInAddMode: false,
        };
        
          // bind function to constructor
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.addList.bind(this);
        this.changeEditMode = this.changeEditMode.bind(this);
        this.updateList = this.updateList.bind(this);

        
        this.renderList = this.renderList.bind(this);

        //add task
        this.handleAddChange = this.handleAddChange.bind(this);
        this.changeTaskAddMode = this.changeTaskAddMode.bind(this);
        this.addNewTask = this.addNewTask.bind(this);
      }
      componentDidMount() {
        this.getLists();
    }
    getLists(){
        axios.get('/api/lists')
        .then(response => {
            this.setState({
                lists: response.data
            });
        });
    }
    changeTaskAddMode(event){
        this.setState({
            list:{
                id: event.target.getAttribute('data-id'),
                task:{
                    name:event.target.value
                }
            },
            isTaskInAddMode: !this.state.isTaskInAddMode
        });
        console.log('onChange', this.state.list);
    }
    handleAddChange(e){
        this.state.list.task.name = e.target.value;
        
    }
    addNewTask(e){
        axios.post('/api/task',{
            task_id: this.state.list.id,
            task_name: this.state.list.task.name
        })
        .then(response => {
            this.getLists();
            this.setState({
                isTaskInAddMode:false,
            });
        });
    }
    updateList(event){
        axios.patch('/api/lists/' + this.state.list.id, {
            name: this.state.list.name
        })
        .then(response => {
            this.getLists();
            this.setState({
                isListInEditMode:false,
            });
        });
    }
    changeEditMode(event){
        this.setState({
            list:{
                id: event.target.getAttribute('data-id'),
                name: event.target.innerText
            },
            isListInEditMode: !this.state.isListInEditMode
        });
    }
    handleChange(e) {

        this.setState({
            list:{
                id: e.target.getAttribute('data-id'),
                name: e.target.value
            }
        });
        console.log('onChange', this.state.list);
    }
    addList(e) {
        e.preventDefault();
        axios.post('/api/lists', {
                name: this.state.list.name
            })
            .then(response => {
                alert('Successfully Added');
            });
    }
    render(){
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3>Todo List</h3>
                        <hr></hr>
                        <Button color="primary" data-toggle="modal" data-target="#myModal">Add List</Button>
                        <hr/>
                            { this.renderList() }
                    </div>
                </div>
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog">
                        <form className="modal-content" onSubmit={this.handleSubmit}>
                        <input type="hidden" name="_method" value="PUT"/>
                        <div className="modal-header">
                            <h4 className="modal-title">Add List</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                        <textarea
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.list.name}
                            className="form-control"
                            rows="5"
                            maxLength="255"
                            placeholder="Create new list"
                            />
                        </div>
                    
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    
                        </form>
                    </div>
                </div>
                
            </div>  
        );
    }
    renderList() {
        return (
            <div className="row">
                {
                   this.state.lists.map(list =>
                     <div class="col-md-4" key={list.id}>
                         <div className="card">
                            <div className="card-header">
                            { this.state.isListInEditMode ?  
                            <div>
                                <input type="text" defaultValue={list.name} data-id={this.state.list.id} onChange={this.handleChange}/>
                                <button  className="btn btn-dark" onClick={this.changeEditMode}>X</button>
                                <button className="btn btn-primary" onClick={this.updateList}>OK</button>
                            </div>
                            : !this.state.isListInEditMode ?
                            <p id="listTitle" className={'editList'+  list.id} onDoubleClick={this.changeEditMode} data-id={list.id}>{list.name }</p>
                            : ""
                        }

                        { this.state.isTaskInAddMode ?   
                           <div>
                                <input type="text" value={this.state.list.task.name} onChange={this.handleAddChange}/>
                                <button className="btn btn-dark" onClick={this.changeTaskAddMode}>X</button>
                                <button className="btn btn-primary" data-list-id={list.id} onClick={this.addNewTask}>Add Task</button>
                            </div> 
                            : !this.state.isListInEditMode ?
                            <p onDoubleClick={this.changeTaskAddMode} data-id={list.id}>Add task</p>
                            : ""
                        }

                        <p>Delete List</p>
                            </div>
                            <h3 class="text-justify">Task</h3>
                            {list.task.map(val =>
                             <ul className="list-group" key={val.id}>
                                <li className="list-group-item">{val.task_name}</li>

                             </ul>
                         )}
                         </div>
                         {/* {list.name} */}
                        
                     </div>
                    )
                }
            </div>
        );
    }
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
