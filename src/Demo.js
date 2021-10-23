import React from 'react';
import './App.css';
import { Component } from 'react';


class Demo extends Component{
render() {
  return (
    <div>
      <h1 className="text-center">Movie List </h1>
       <table className="table table-striped">
         <thead>
           <tr>
             <td>Movie ID</td>
             <td>Movie Name</td>
             <td>Type of Movie</td>
           </tr>
         </thead>
       </table>
    </div>
  );
}
}
export default Demo;
