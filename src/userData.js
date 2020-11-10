import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        terms: state.terms,
    };
};


class UserData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	users: [{name: "", email: ""}]
        };
      }

      addClick(){
        this.setState(prevState => ({
        	users: [...prevState.users, { firstName: "", lastName: "" }]
        }))
      }

      createUI(){
         return this.state.users.map((el, i) => (
           <div key={i}>
        	    <input defaultValue={el.name ||''}/>
              <input defaultValue={el.email ||''}/>
           </div>
         ))
      }



    render() {
        return (
            <div class="userContainer">
                <div class="adduser">
                    <button onClick={this.addClick.bind(this)}> Add Users </button>
                </div>
                {this.props.terms.map((term, index) => {
                    return (
                        <div key={index} >
                         <input type="text" defaultValue={term.name} onChange={this.handleChange} />
                         <input type="email" defaultValue={term.email} onChange={this.handleChange} />
                        </div>

                    );
                })}
                {this.createUI()}
            </div>
        )
    }
}
export default connect(mapStateToProps, null)(UserData);
