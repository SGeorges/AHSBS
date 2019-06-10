import React from "react";
import {Container, Row, Col} from "./../Grid";
import {Table, TableHeader, TableHeaderItem, TableScoreBody} from "./../Table";

import "./style.css";


export function PlayerCard(props) {
  return (
    <div className="card mt-4">
      <Row>
        <Col size= "md-4">
          <div className = "player-profile-image m-2">
            <img src= {require("./../../images/placeholder.jpg")}/>
          </div>
        </Col>
        <Col size= "md-4">
          <div className = "card-title m-2">
            <h5><strong>{props.name}</strong></h5>
          </div>
          <div className= "card-subtitle mb2 text-muted">
            <ul className= "list">
            <img className= "profile-logo" src= {require(`./../../images/logo_400.png`)}/>
              <li class= "f-12 player-items">{props.number}</li>
              <li class= "f-12 player-items">{props.position}</li>
              <li class= "f-12 player-items">{props.year} </li>
            </ul>
          </div>
          <ul>
            <li>
              <Row>
                <Col size= "md-5">
                  <div class= "f-12 text-muted player-meas-title">HT/WT</div>
                </Col>
                <Col size= "md-7">
                  <div class= "f-12 player-meas">{props.height}, {props.weight} lbs</div>
                </Col>
              </Row>            
            </li>
            <li>
              <Row>
                <Col size= "md-5">
                  <div class= "f-12 text-muted player-meas-title"> DOB </div>
                </Col>
                <Col size= "md-7">
                  <div class= "f-12 player-meas"> 07/03/1990 </div>
                </Col>
              </Row>
            </li>
            <li>
              <Row>
                <Col size= "md-5">
                  <div class= "f-12 text-muted player-meas-title">HOMETOWN</div>
                </Col>
                <Col size= "md-7">
                  <div class= "f-12 player-meas">Audubon, NJ</div>
                </Col>
              </Row>
            </li>
          </ul>
        </Col>
        <Col size= "md-4">
        </Col>
      </Row>
    </div>
  );
}

export function StatCard(props) {
  return(
    <div className="card text-center">
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs" id="tabs">
                <li className="nav-item">
                    <a className="active nav-link active" href="#about" data-toggle="tab">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#game-stats" data-toggle="tab">Game Stats</a>
                </li>
            </ul>
        </div>
        <div className="card-body">
            <div className="tab-content">
                <div className="tab-pane active" id="about">
                  {props.text}
                </div>
                <div className="tab-pane" id="game-stats">
                  <Table>
                    <TableHeader>
                      <TableHeaderItem>Date</TableHeaderItem>
                      <TableHeaderItem>Home</TableHeaderItem>
                      <TableHeaderItem>Away</TableHeaderItem>
                      <TableHeaderItem>Shots</TableHeaderItem>
                      <TableHeaderItem>Goals</TableHeaderItem>
                      <TableHeaderItem>Assists</TableHeaderItem>
                    </TableHeader>
                    <TableScoreBody
                      data= {props.data}
                    />
                  </Table>

                </div>
            </div>
        </div>
    </div>  
  );
}

export function HomeCard(props) {

  if (props.position === "M") {
    var position = "Midfield";
  }
  else if (props.position === "B") {
    var position = "Defender";
  }
  else if (props.position === "F") {
    var position = "Forward";
  }
  else if (props.position === "GK") {
    var position = "GoalKeeper"
  }

  return(
    <div className="card home-card">
      <img className="card-img-top" src= {require("./../../images/placeholder.jpg")} alt="Card image cap"/>
      <div className="card-body home-body">
        <h6 className="f-12 text-center card-title home-name">{props.number} {props.name}</h6>
        <p className= "f-12 text-center text-muted">{position}</p>
      </div>
    </div>
  );
}

export function Announcement(props) {
  return(
    <div class="card bg-dark text-white ann-card">
      <img class="card-img ann-img" src={props.image} alt="Card image"/>
      <div class="card-img-overlay ann-overlay">
        <h5 class="card-title ann-text">{props.title}</h5>
        <p class="card-text ann-text">{props.text}</p>
      </div>
    </div>
  );
}
