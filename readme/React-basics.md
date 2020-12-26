Best guide - https://reactjs.org/


React concepts
Changing the dom is expensive operation

1. Dont touch the dom, i will do it
2. build websites like lego blocks (components can have components)
3. unidirectional data flow - if change happened in one component, it can only trigger changes in itself and its child components. rest of dom is untouched
4. react is ui library(and not framework) - so add new libraries for more functionalities

# React keywords
State
component - classes or functions that return jsx
props
jsx
virtual dom - javascript objects that describes our app. React creates a new dom called virtual dom with the updated component. Then it compares the real dom with virtual dom and just updates the real dom component that needs a change.

state changed, combine new state and components we have and render the dom. Whenever state changes rerender components

# Javascript keywords
Callbacks

# Key decisions:
1. Decide on components - make it small enough so they can be reused elsewhere
2. Decide on state and where it lives
3. What changes when state changes

# Buzzwords
npm - package manager (like pip)
npx - new way to run and execute npm command. you can execute a package without installing it using npx
nvm - like pyenv (to switch node versions)
node - 
babel - use the react code we write and convert to older versions of javascript that browsers understand
webpack - module bundler


npm install == yarn
npm install package --save == yarn add package

# package.json config
react-scripts build - this reads react code from `src` directory and compiles to older javascript (see babel and webpack) and puts them under `public` directory
react-scripts eject - remove webpack and babel in case we want to manage them ourselves (not recommended)

## Props
https://www.w3schools.com/react/react_props.asp

## Components:
Functional vs Class
- Functional Components
    - Unlike Class components, they do not have access to state or dont have lifecycle methods
    - Not all the time we need to have state or need lifecycle methods, just rendering html is enough
    - Functional component just gets some props and renders some html

`React Hook` useState was introduced to allow developers to write stateful functional components. 
``` javascript
import React from "react";

const FunctionalComponent = () => {
 return <h1>Hello, world</h1>;
};

# With props
const FunctionalComponent = (props) => {
 return <h1>Hello, {props.name}</h1>;
};
```
- Class - extends Component and that gives access to state. 
```javascript
import React, { Component } from "react";

class ClassComponent extends Component {
 render() {
   return <h1>Hello, world</h1>;
 }
}

# With props
class ClassComponent extends React.Component {
  render() {
    const { name } = this.props;
    return <h1>Hello, { name }</h1>;
 }
}
```

# JSX
Comments 
```javascript
{/* MyComment block */}
```

Component lifecycle
componentDidMount() - called once component is rendered

Promises

## State vs Props
State generally lives in one location and it trickles down to related components as props. (unidirectional data flow)