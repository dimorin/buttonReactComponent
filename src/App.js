import React, { useState } from 'react';
import Button from './components/button';
import './app.scss';
import Checkbox from './components/checkbox';

const App = (props) => {
  const [check, setCheck] = useState(false);
  const onChange = (event) => {
    setCheck(event.target.checked);
  }
  return (
    <>
      <div className="App">
        <h1>button component with SCSS</h1>
        <div className="buttons">
          <Button size="large">Button</Button>
          <Button>Button</Button>
          <Button size="small">Button</Button>
        </div>
        <div className="buttons">
          <Button size="large" color="pink">Button</Button>
          <Button color="pink">Button</Button>
          <Button size="small" color="pink">Button</Button>
        </div>
        <div className="buttons">
          <Button size="large" color="gray">Button</Button>
          <Button color="gray">Button</Button>
          <Button size="small" color="gray">Button</Button>
        </div>
        <div className="buttons">
          <Button size="large" outline={true}>Button</Button>
          <Button outline={true}>Button</Button>
          <Button size="small" outline={true}>Button</Button>
        </div>
        <div className="buttons">
          <Button size="large" fullWidth={true}>Button</Button>
          <Button fullWidth={true}>Button</Button>
          <Button size="small" fullWidth={true}>Button</Button>
        </div>
        <div className="buttons">
          <Button size="large" fullWidth={true} className="customized-button">custom Button</Button>
          <Button size="small" fullWidth={true} onClick={() => console.log('click')} onMouseMove={() => console.log('mousemove')} >Button click</Button>
        </div>
      </div>
      <div>
        <div className="App">
          <h1>checkbox with postCSS</h1>
          <Checkbox onChange={onChange} checked={check}>다음 약관에 모두 동의</Checkbox>
        </div>
      </div>
    </>
    
  )
};

export default App;