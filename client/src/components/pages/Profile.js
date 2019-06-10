import React, { Component } from "react";
import { Col, Row, Container } from "./../parts/Grid";
import NavTabs from "./../parts/NavTabs";
import {PlayerCard, StatCard} from "./../parts/Card";
import {Table, TableHeader, TableHeaderItem, TableScoreBody, TableStatsBody} from "./../parts/Table";

import API from "../../utils/API";


class Profile extends Component {
  state=  {
    id: this.props.match.params.id,
    player_info: {},
    game_info: [],
    player_stats: {},
  };

  componentDidMount() {
    this.getProfileData(this.state.id);
  }

  getProfileData = id => {
    API.getProfile(id)
      .then(res => {
        console.log(res.data);
        this.CompleteStats(res.data[1]);
        this.setState({
          player_info: res.data[0],
          game_info: res.data[1]
        });
      })
        .then( () => {
          this.heightConverter(this.state.player_info)
        })
      .catch(err => console.log(err));
  };

  CompleteStats = ( data ) => {
    let shots = 0;
    let goals = 0; 
    let assists = 0;

    for( let i = 0; i < data.length; i++) {
      shots += data[i].shots;
      goals += data[i].goals;
      assists += data[i].assists;
    };

    let player_stats = {
      games_played: data.length,
      shots: shots,
      goals: goals,
      assists: assists,
    };

    this.setState({
      player_stats: player_stats
    });
  };

  heightConverter = ( player_info ) => {
    let conv = player_info.ht*0.393701;
    let feet = Math.floor(conv/12);
    let inch = Math.floor(conv%12);

    player_info.ht = feet + "\' " + inch + "\"";

    this.setState({
      player_info: player_info
    })
  };

  render() {
    return (
      <Container>
        <NavTabs 
          page= "Player Profile"
        />

        <PlayerCard
          name= {this.state.player_info.name}
          number= {this.state.player_info.num}
          position= {this.state.player_info.pos}
          year= {this.state.player_info.yr}
          height= {this.state.player_info.ht}
          weight= {this.state.player_info.wt}
        />

        <p>{''}</p>

        <Table className= "text-center">
          <TableHeader>
            <TableHeaderItem>Games Played</TableHeaderItem>
            <TableHeaderItem>Shots</TableHeaderItem>
            <TableHeaderItem>Goals</TableHeaderItem>
            <TableHeaderItem>Assists</TableHeaderItem>
          </TableHeader>
          <TableStatsBody
            data= {this.state.player_stats}
          />
        </Table>

        <p>{''}</p>

        <StatCard
          text= {this.state.player_info.about}
          data= {this.state.game_info}
        />


      </Container>
    );
  } 
}

export default Profile;

