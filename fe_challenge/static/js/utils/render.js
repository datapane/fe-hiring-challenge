import React from 'react';
import ReactDOM from 'react-dom';

export const withWindowProps = (UnwrappedComponent) => {
    return <UnwrappedComponent {...window.props}/>
};

export const reactDomRender = (UnwrappedComponent) => {
	ReactDOM.render(
	  withWindowProps(UnwrappedComponent),
	  document.getElementById('react')
	);
};