import React from 'react';

const MyComponent = props =>{
    return (
        <div>{props.name}</div>
    )
}

MyComponent.defaultProps = {
    name:'기본값'
}

export default MyComponent;