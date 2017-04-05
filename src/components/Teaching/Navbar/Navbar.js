/**
 * Created by xinzheng on 4/4/17.
 */

import React from "react";
import { Modal, Tooltip } from 'react-bootstrap';
import s from "./Navbar.css"
import IntroModal from "../Modal/IntroModal"
import ScenarioCreationModal from "../Modal/ScenarioCreationModal"
import ExitSurveyModal from "../Modal/ExitSurveyModal"



//import redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../../../reducers/action';

/**
 * The main view which include TopleftPanel, map and Bottom component
 */

class Navbar extends React.Component {
  constructor(){
    super();
    this.state = {
      showIntro: false,
      showScenario: false,
      showSurvey: false,
    };
    this.closeScenario = this.closeScenario.bind(this);
    this.closeIntro = this.closeIntro.bind(this);
    this.closeExitSurvey = this.closeExitSurvey.bind(this);

    this.handleClickScenario = this.handleClickScenario.bind(this);
    this.handleClickIntro = this.handleClickIntro.bind(this);
    this.handleClickSurvey = this.handleClickSurvey.bind(this);


  }


  closeScenario(){
    this.setState({ showScenario: false });
  }

  closeIntro(){
    this.setState({ showIntro: false });
  }

  closeExitSurvey(){
    this.setState({ showSurvey: false });
  }


  handleClickScenario(){
    this.setState({ showScenario: true });
  }

  handleClickIntro(){
    this.setState({ showIntro: true });
  }

  handleClickSurvey(){
    this.setState({ showSurvey: true });
  }


  render() {
    return (
      <div>
        <ul className="navbarTop">
          <li className="navitem blink">
            <a href="http://coaxs.mit.edu/" target="_blank" >Landing Page</a>
          </li>
          <li className="navitem">
            <a href="https://goo.gl/forms/3NEShdeKfTCBs0W22" target="_blank">Pre-survey</a>
          </li>
          <li className="navitem">
            <a href="#" onClick={this.handleClickIntro} >Intro to CoAXs</a>
          </li>
          <li className="navitem">
            <a href="#" onClick={this.handleClickScenario}>Scenario Creation</a>
          </li>
          <li className="navitem">
            <a className="active" href="#" onClick={this.handleClickSurvey}>Post-survey</a>
          </li>

        </ul>



        <IntroModal isShow={this.state.showIntro} closeModal={this.closeIntro}/>
        <ScenarioCreationModal isShow={this.state.showScenario} closeModal={this.closeScenario}/>
        <ExitSurveyModal isShow={this.state.showSurvey} closeModal={this.closeExitSurvey}/>
      </div>

    );
  }
}


//bind store and function to props
function mapStateToProps(state) {
  return {
  }
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispachToProps)(Navbar);



