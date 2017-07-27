import React from 'react';
import {Link, IndexLink} from 'react-router';

export class Navigation extends React.Component {
// var Navigation = React.createClass({

  componentDidMount() {
    $(document).foundation();
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Boilerplate App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >First Link</IndexLink>
            </li>
            <li>
              <IndexLink to="/SecondLink" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >SecondLink</IndexLink>
            </li>
            <li>
              <IndexLink to="/ThirdLink" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >DropdownLink</IndexLink>
              <ul className="menu">
                <li>
                  <IndexLink to="/item1" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Item1</IndexLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Designed by <a href="http://www.recoverycoffees.com" target="_blank">Michael Evans</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

};

export default Navigation;
//module.exports = Navigation;

{/* <DocumentTitle title='My Web App'>
  <this.props.activeRouteHandler />
</DocumentTitle> */}

// import React from 'react';
//
// export default class Layout extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   componentWillUpdate(nextProps) {
//     document.title = nextProps.title;
//   }
//   render(){
//     return null;
//   }
// }

 // <div className="top-bar">
 //   <div className="top-bar-left">
 //     <ul className="menu">
 //       <li className="menu-text">Boilerplate App</li>
 //     </ul>
 //   </div>
 //   <div className="top-bar-right">
 //     <ul className="menu">
 //       <li className="menu-text">
 //         Designed by <a href="http://www.recoverycoffees.com" target="_blank">Michael Evans</a>
 //       </li>
 //     </ul>
 //   </div>
 // </div>


{/* <li>
  <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >First Link</IndexLink>
</li>
<li>
  <IndexLink to="/SecondLink" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >SecondLink</IndexLink>
</li>
<li>
  <IndexLink to="/ThirdLink" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >DropdownLink</IndexLink>
  <ul className="menu">
    <li>
      <IndexLink to="/item1" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Item1</IndexLink>
    </li>
  </ul>
</li> */}
