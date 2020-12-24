Best guide - https://reactjs.org/


React concepts
Changing the dom is expensive operation

1. Dont touch the dom, i will do it
2. build websites like lego blocks (components can have components)
3. unidirectional data flow - if change happened in one component, it can only trigger changes in itself and its child components. rest of dom is untouched
4. react is ui library(and not framework) - so add new libraries for more functionalities

# React keywords
State
component
props
jsx
virtual dom - javascript objects that describes our app

state changed, combine new state and components we have and render the dom

# Key decisions:
1. Decide on components
2. Decide on state and where it lives
3. What changes when state changes

# Buzzwords
npm - package manager (like pip)
npx - new way to run and execute npm command. you can execute a package without installing it using npx
nvm - like pyenv (to switch node versions)
node - 
babel & webpack - use the react code we write and convert to older versions of javascript that browsers understand



npm install == yarn
npm install package --save == yarn add package

# package.json config
react-scripts build - this reads react code from `src` directory and compiles to older javascript (see babel and webpack) and puts them under `public` directory
react-scripts eject - remove webpack and babel in case we want to manage them ourselves

