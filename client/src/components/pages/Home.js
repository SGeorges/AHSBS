import React, { Component } from "react";
import { Col, Row, Container } from "./../parts/Grid";
import NavTabs from "./../parts/NavTabs";

import API from "./../../utils/API";
import { HomeCard, Announcement } from "../parts/Card";

class Home extends Component {
  state=  {
    announcements: [
      {title: "Summer Practices", img: "http://www.njpen.com/wp-content/uploads/2017/01/Green-Wave-Sports-Complex.jpg", content: "Summer practices are taking place on Mondays and Wednesdays at Green Wave Park for the summer. Practices start at 10am. Please bring both running shoes, cleats, and shin guards to all practices."},
      {title: "Summer League", img: "https://expo.advance.net/img/a7a8a69f6f/width960/085_001.jpeg", content: "Summer league games start for the Pitman High School Summer Soccer League. Schedules will be given to all players who have signed up. Sign-up paperwork and fees are due on Tuesday June 11th."}
    ],
    roster: [],
    years: [2004, 2005],
    currYear: 2005,
  };

  componentDidMount() {
    this.getRoster(this.state.currYear);
  }

  getRoster = (year) => {
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

  render() {
    return (
      <Container>
        <NavTabs 
          page= "Home"
        />
        <hr/>
        <span className= "f-12">ANNOUNCEMENTS</span>
        <hr/>
        <Row className= "announcements">
          <Col size= "md-1"/>
          <Col size= "md-10">
            {this.state.announcements.map( notice => (
              <Announcement image= {notice.img} title= {notice.title} text= {notice.content}/>
            ))}
          </Col>
        </Row>

        <hr/>
        <span className= "f-12">CURRENT ROSTER</span>
        <hr/>
        <div className= "home-cards">
          {this.state.roster.map( roster => (
            <HomeCard name= {roster.name} position= {roster.pos} number= {roster.num}/>
          ))}
        </div>

      </Container>
    );
  } 
}

export default Home;

