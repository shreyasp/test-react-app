import React from 'react';
// import './BusinessList.css';
// import Business from '../Business/Business';

class BusinessList extends React.Component{
    render(){
        const businesses = { ...this.props };
        return (<div>{businesses.businesses.map(b => b)}</div>);
    }
}

export { BusinessList };