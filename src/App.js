import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, Redirect,Prompt} from 'react-router-dom';
import {Button, WhiteSpace, WingBlank} from 'antd-mobile';

class App extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path="/a" component={Home} />
          <Route path="/add" component={Roster} />
          <Route path="/anc" component={Roster2} />
          <Redirect from="/*" to="/anc" />
        </Switch>
      </div>
    );
  }
}

class Home extends Component {
  render () {
    console.log (this.props);
    return (
      <div>

        <Switch>
          <Route exact path="/a" component={Home1} />
          {
            // Route path 后面可以写正则表达式
          }
          <Route path="/a/add/:wfid([0-9]+)" component={Roster1} />
        </Switch>
      </div>
    );
  }
}

class Home1 extends Component {
  render () {
    return (
      <div>
        Welcome....
        <Button
          type="primary"
          onClick={() => {
            this.props.history.push (
              '/a/add/' + Math.floor (Math.random () * 100)
            );
            //this.pushToadd();
          }}
        >
          this is button
        </Button>

      </div>
    );
  }
}

let formIsHalfFilledOut=(a,b,c,d)=>{
  alert('test')
  console.log  (a,b,c,d);

}

const Roster1 = prop => {
  console.log (prop);

  return (
    <div
      onClick={() => {
        prop.history.push ('/a');
      }}
    >
      <Prompt
        when={false}
        message="Are you sure you want to leave?"
      />
      workflowid:{prop.match.params.wfid}

      <Button
        type="primary"
        onClick={() => {
          prop.history.push ('/a');
          //this.pushToadd();
        }}
      >
        button2
      </Button>

    </div>
  );
};

const Roster = prop => {
  return (
    <div>
      Roster...
      <Switch>
        <Route exact path="/roster1" component={Roster1} />
      </Switch>

    </div>
  );
};

const Roster2 = match => {
  return (
    <div>
      Roster2...
    </div>
  );
};

const Home2 = () => (
  <WingBlank>
    <Button>default</Button><WhiteSpace />
    <Button disabled>default disabled</Button><WhiteSpace />

    <Button type="primary">primary</Button><WhiteSpace />
    <Button type="primary" disabled>primary disabled</Button><WhiteSpace />

    <Button type="warning">warning</Button><WhiteSpace />
    <Button type="warning" disabled>warning disabled</Button><WhiteSpace />

    <Button loading>loading button</Button><WhiteSpace />
    <Button icon="check-circle-o">with icon</Button><WhiteSpace />
    <Button
      icon={
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg"
          alt=""
        />
      }
    >
      with custom icon
    </Button>
    <WhiteSpace />

    {/* <Button activeStyle={false}>无点击反馈</Button><WhiteSpace /> */}
    {/* <Button activeStyle={{ backgroundColor: 'red' }}>custom feedback style</Button><WhiteSpace /> */}

    <WhiteSpace />
    <Button type="primary" inline style={{marginRight: '4px'}}>
      inline primary
    </Button>
    {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
    <Button
      type="ghost"
      inline
      style={{marginRight: '4px'}}
      className="am-button-borderfix"
    >
      inline ghost
    </Button>

    <WhiteSpace />
    <Button type="primary" inline size="small" style={{marginRight: '4px'}}>
      primary
    </Button>
    <Button type="primary" inline size="small" disabled>
      primary disabled
    </Button>
    <WhiteSpace />
    <Button type="ghost" inline size="small" style={{marginRight: '4px'}}>
      ghost
    </Button>
    {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
    <Button
      type="ghost"
      inline
      size="small"
      className="am-button-borderfix"
      disabled
    >
      ghost disabled
    </Button>
  </WingBlank>
);

export default App;
