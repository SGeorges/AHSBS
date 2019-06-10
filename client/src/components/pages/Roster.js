import React, { Component } from "react";
import {Dropdown} from "react-bootstrap";
import { Col, Row, Container } from "./../parts/Grid";
import NavTabs from "./../parts/NavTabs";
import {Table, TableBody, TableCoachesHeader, TableCoachesBody, TableRosterHeader, TableRosterBody} from "./../parts/Table";

import API from "./../../utils/API";

class Roster extends Component {
  state=  {
    roster: [],
    coaches: [],
    years: [2004, 2005],
    currYear: 2005,
  };

  componentDidMount() {
    this.change(this.state.currYear);
  }

  updateRoster = (year) => {
    API.getRoster(year)
    .then(res => {
      console.log(res);
      this.setState({
        currYear: year,
        roster: res.data.Player_SeasonSync
      })
    })
    .catch(() => 
      this.setState({
        roster: []
      })
    );
  }

  updateCoaches = (year) => {
    API.getCoaches(year)
      .then(res=> {
        console.log(res);
        this.setState({
          coaches: res.data
        })
      })
      .catch(() =>
      this.setState({
        coaches: []
      })
    );
  }

  change = (year) => {
    this.updateRoster(year);
    this.updateCoaches(year);
  }

  render() {
    return (
      <Container>
        <NavTabs 
          page= {this.state.currYear + " Team Roster"}
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
          <Col size="md-12">
            <h4> Roster </h4>
            <Table>
              <TableRosterHeader/>

              <TableBody>
                {this.state.roster.map( roster => (
                  <TableRosterBody
                     key= {roster.id}
                     id= {roster.id}
                     number= {roster.num}
                     name= {roster.name}
                     position= {roster.pos}
                     year= {roster.yr}
                     height= {roster.ht}
                     weight= {roster.wt}
                     hometown= {roster.hometown}
                     image= {roster.img}
                  />
                ))}
              </TableBody>

            </Table>
          </Col>
        </Row>

        <Row>
          <Col size= "md-6">
            <h4> Coaching Staff </h4>
            <Table>
              <TableCoachesHeader/>

              <TableBody>
                {this.state.coaches.map( coaches => (
                  <TableCoachesBody
                    key= {coaches.id}
                    name= {coaches.coach_name}
                    position= {coaches.coach_role}
                  />
                ))}
              </TableBody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  } 
}

export default Roster;
