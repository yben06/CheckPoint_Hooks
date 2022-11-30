import React, { Component } from 'react';


class Profile extends Component {
    constructor(props){
        super(props)
        this.state={
        count: 0
        }  }

        componentDidMount() {
            this.myInterval = setInterval (()=>{
              this.setState(prevState => ({
                count: prevState.count + 1
            }))
          }, 1000)
          }
          componentWillUnmount() {
            clearInterval(this.myInterval)
          }
    render() {
        const count = this.state.count
        return (
            <div>
        <h2>Time of view: {count} second</h2>  
     </div>
        )
    }
}
export default Profile;