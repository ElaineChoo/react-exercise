import React from 'react';
import {hot} from 'react-hot-loader';
import {Route, Link} from 'react-router-dom';

import Counter from './components/counter/counter';
import Form from './components/form/form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // message: 'hello'
    };
  }

  render() {
    return (
      <div>
        <nav>
          <h1>React Router</h1>
          <Link href="/form">Bananas</Link>
          <Link href="/counter">Oranges</Link>
        </nav>
        <main>
          <Route path="/form" render={() => <Form />} />
          <Route path="/counter" render={() => <Counter />} />
        </main>
      </div>
    );
  }
}

export default hot(module)(App);
