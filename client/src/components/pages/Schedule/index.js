import React, { Component } from "react";
import {Dropdown} from "react-bootstrap";
import { Col, Row, Container } from "./../../parts/Grid";
import NavTabs from "./../../parts/NavTabs";
import {Table, TableBody, TableCoachesHeader, TableCoachesBody, TableRosterHeader, TableRosterBody} from "./../../parts/Table";

import API from "./../../../utils/API";
import "./style.css";

class Schedule extends Component {
  state=  {
    season: [],
    years: [2004, 2005],
    currYear: 2005,
  };

  componentDidMount() {
    this.updateSeason(this.state.currYear);
  }

  updateSeason = (year) => {
    API.getSeason(year)
      .then(res=> {
        console.log(res);
        this.setState({
          season: res.data,
          currYear: year,
        })
      })
      .catch(() =>
      this.setState({
        games: []
      })
    );
  }

  change = (year) => {
    this.updateSeason(year);
  }

  render() {
    return (
      <Container>
        <NavTabs 
          page= {this.state.currYear + " Schedule"}
        />

        <Row>
          <Col fluid= "className= 'mt-2'" size="md-12">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                {this.state.currYear}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {this.state.years.map( year => (
                  <Dropdown.Item onClick = {() => this.change(year)}>
                    {year}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

        <Row>
            <Col size= "md-3"/>
            <Col size= "md-6">
                {this.state.season.map( game => (
                    <div className= "row game">
                        <div className= "col-md-9 border">
                            <div className= "text-muted game-date">{game.date}</div>
                            <div className= "row away">
                                <div className= "col-md-10">{game.away_team}</div>
                                <div className= "col-md-2">{game.away_score}</div>
                            </div>
                            <div className= "row home">
                                <div className= "col-md-10">{game.home_team}</div>
                                <div className= "col-md-2">{game.home_score}</div>
                            </div>
                        </div>
                        <div className= "col-md-3 border">
                            <div className= "f-12 text-center recap"><a href= "#">FULL MATCH RECAP</a></div>
                        </div>
                    </div>
                ))}
            </Col>
        </Row>

      </Container>
    );
  } 
}

export default Schedule;
