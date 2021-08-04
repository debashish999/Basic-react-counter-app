import React, { Component } from 'react';



class  Counter extends Component {
    state = { 
        value : this.props.counter.value ,
        tags : ['tag1' , 'tag2', 'tag3'],
        product: "brown"
        
     };
     styles = {
         fontSize : 50,
         fontWeight: "bold"
     };
     renderTags(){

        if(this.state.tags.length === 0) return <p>there are no tags</p>

        return  <ul>
        { this.state.tags.map(tag =>
            <li key={tag}>{tag}</li>
            )}
    </ul>;


     }
    //  handleIncreament = (product)=>{
    //     // console.log("increment clicked",this);
    //     console.log(product);
    //     this.setState({value: this.state.value + 1 });
    //  };
     dohandleIncreament = () =>{
         this.handleIncreament({ id: 1});
     };
    render() {
        console.log(this.props);
        let classes = this.getbadgeMethod(); 
        return (
        //      <div>
        //     <h1>Hello World</h1>
        //     <button>increment</button>
        // </div>
        <React.Fragment>
             {/* <span>{ this.formatCount() }Hello World</span><br></br> */}
                        {/* {{ pass inline styles }} */}
                        {/* style={ this.styles } */}

                        
                        {this.props.children}
             <span className={this.getbadgeMethod()}>{ this.formatCount() }</span>
           
            <button onClick={ ()=> this.props.onIncreament(this.props.counter)} className= "btn btn-secondary btn-sm">increment</button>
            <button className = "btn btn-danger btn-sm m-2" onClick={ ()=> this.props.onDelete(this.props.counter.id)}>Delete</button>

            {this.state.tags.length === 0 && "create new tags"}
           {this.renderTags()}
         </React.Fragment>
        );
    }

    getbadgeMethod() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value: count } = this.props.counter;
        return count === 0 ? 'ZERO' : count;

    }
}
 
export default Counter;