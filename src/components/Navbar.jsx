import React, { Component } from 'react';


//stateless functional component
const Navbar = ({ totalCounters }) => {
    return ( 
        <nav class="navbar navbar-light bg-light">

        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar 
        <span className="badge badge-pill badge-secondary">{totalCounters}</span> </a>
      </nav>
      </nav>
     );
};
 
// export default ;
// class Navbar extends Component {
    
//     render() { 
//         return (
           
//           );
//     }
// }
 
export default Navbar;
