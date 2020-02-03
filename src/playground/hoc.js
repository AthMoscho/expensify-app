//HIGHER ORDER COMPONENTS ------ HOC

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info. Please don't share!</p>
            <WrappedComponent {...props} />
        </div>
    );
};


const AdminInfo = withAdminWarning(Info);


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
                ) : (
                    <p>He is Not Authenticated</p>
                )}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo info='there are the details' />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} />,document.getElementById('app'));
