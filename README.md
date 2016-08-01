## Important Stuff

1. Communication, always from parent to child, and child to parent
2. Props, these are passed down to each children
3. If it can be in props, it should be in props
4. refs, Use this to refrence form inputs, eg.
  ```jsx
  /* In render function */
  <input type="text" ref="email" placeholder="Enter your email here" />

  /* In component Event */
  this.refs.emails // this points to the element described above
  ```

5. State, every component has it, but should only be updated in one place (the parent, or a flux store)
6. Components render each time they
  * Receive new props
  * Update their state

7. Routes, There can be nested routes through `<Route>`, however we must manually render `this.props.children`
8. Cloninig, When cloning childre and passing down props, we should always remove the children  we're rendering from the list, i.e.:

  ```javascript
    /* in JSX */

    { React.cloneElement( this.props.children, this.cleanProps() ) }

    /* Component Event */

    cleanProps() {
      return Object.assign( {}, this.props, { children: this.props.children.props.children });
    }
  ```

9. `activeClassName` will always apply to `<IndexRoute />` unless we add the flag `onlyActiveOnIndex`
10. In ES6 we should create constructors
11. In ES6 we don't need `setInitialState` instead we set state in the constructor, i.e. `this.state = { initialProperties: [] ... }`
12. Events and callbacks are also sent from the parent to the children, i.e.

  ```es6
    import React from "react";

    class Parent extends React.Component {
      doSomething() {
        alert( "DID SOMETHING" );
      }

      render() {
        return <Child doSomething={ this.doSomething } />

      }
    }

    class Child extends React.Component {
      render() {
        return <div id="child">
          <input type="button" value="Something" onClick={ this.props.doSomething } />
        </div>
      }
    }
  ```

13. We always need to bind `this` to the component housing the events, i.e. 

  ```es6
    import React from "react";

    class App extends React.Component {
      constructor(props) {
        super( props );

        this.state = {};

        // NOTICE: if we don't do this, this will be null inside the method itself.
        this.doSomething = this.doSomething.bind( this );
      }

      doSomething() {
        // this would fail with undefined method steState in null
        this.setState({ didSomething: true });
      }

      render() {
        return <input type="button" value="Update State" onClick={ this.doSomething } />
      }
    }
  ```

14. When dealing with children or nested components we should bind this to the parent component

  ```es6
    import React from "react";

    class Parent extends React.Component {
      constructor( props ) {
        super( props );

        this.state = {};

        // NOTICE: binding to Parent!!!
        this.doSomething = this.doSomething.bind( this );
      }

      doSomething() {
        alert( "DID SOMETHING" );

        // Even if executed from Child, it updates the Parent state
        this.setState({ didSomething: true });
      }

      render() {
        return <Child doSomething={ this.doSomething } />

      }
    }

    class Child extends React.Component {
      render() {
        return <div id="child">
          <input type="button" value="Something" onClick={ this.props.doSomething } />
        </div>
      }
    }
  ```


## Properties to keep an eye on

* props, `this.props` maps to any prop sent int the component `<MyComponent foo="bar" />` where `this.props.foo` equals `"bar"`
* refs, `this.refs` maps to any dom element with the ref prop `<input ref={email} type="button" />` where `this.refs.email` equals said component
* state, `this.state` in react components, should always be modified via `this.setState`

## Component's lifecycle

Every component has the same lifecycle regardles of hierarchy, most commonly used methods `componentWillMount`, `componentDidMount`, `componentWillReceiveProps`,
`componentWillUpdate`, `componentDidUpdate`, and `componentWillUnmount`

[Here](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods) is the full list in order of execution and with param descriptions.


## Event system

React support events similarly to how the DOM does, many have the same name, [here's](https://facebook.github.io/react/docs/events.html#supported-events) the list of events we can use in our components.
