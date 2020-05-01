import React, { Component } from 'react';
import './App.css';
import Person from './Person/person';

class App extends Component {
  constructor (props){
  super (props);
  console.log('aap js constructor');
  
}
  state = {
    persons: [
      {id:1, name: 'Max', age: 28 },
      {id:2,  name: 'Manu', age: 29 },
      {id:3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
	showPerson:false
  }
  
  static getDerivedStateFromProps(props,state){
     console.log('aap js getDerivedStateFromProps',props);
    return state;
  }
  
  componentDidMount(){
    console.log('aap js componentDidMount');
  }
  
  componentDidUpdate(prevProps) {
 
  // Typical usage (don't forget to compare props):
  if (this.props.id !== prevProps.id) {
    this.fetchData(this.props.id);
  }
}

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        {name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }
/*********delete the record *********/
 deleteHandler = (Personindex) => {
   const persons= this.state.persons;
   persons.splice(Personindex,1);
   this.setState({persons:persons});
  }
  
 /*********toggle the record *********/
	toggleNameHandler=()=>{
		//console.log('test');
		const doesshow= this.state.showPerson;
		this.setState({showPerson:!doesshow});
	}
  
 /*********name change the record *********/	
	nameChangedHandler=(event,id)=>{
	 const personIndex= this.state.persons.findIndex(p=>{ 
	    return p.id===id;
	 });
	 
	const person = {...this.state.persons[personIndex]};
	person.name= event.target.value;
	const persons =[...this.state.persons];
	persons[personIndex]=person;
	this.setState( {persons: persons} )
		
	}
/**************************************/
	
  render () {
    const style={
			  background:'green',
			  color:'white',
			  font:'inherit',
			  border:'1px solid blue',
			  cursor:'pointer'
       };
	 let person=null;
    if(this.state.showPerson){
        person=(   <div>
				
			 {this.state.persons.map((person,index) =>{
			    return  <Person click={()=>this.deleteHandler(index)}
				  name={person.name} 
				  age={person.age}
                  key={person.id}
				  changed={(event)=>this.nameChangedHandler(event,person.id)}
				  />
			 })
			 }
			</div>
			);
			style.background='red';
			
      }	
   
		const classes=[];
		if(this.state.persons.length<=6){
		  classes.push('red');
		}
		if(this.state.persons.length<=8){
		  classes.push('bold');
		}
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button  style={style} onClick={this.toggleNameHandler}>Toggle Name</button>
        {person}  
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
