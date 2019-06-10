import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

// This component exports both the List and ListItem components

export const Table = ({className, children }) => (
  <table className={`table table-striped border ${className}`}>
    {children}
  </table>
);

export const TableHeader = ({ children }) => (
    <thead> 
        <tr>{children}</tr>
    </thead>
);

export const TableCoachesHeader = () => (
    <thead>
        <tr>
            <th>NAME</th>
            <th>TITLE</th>
        </tr>
    </thead>
);

export const TableCoachesBody = ({name, position}) => (
    <tr>
        <td>{name}</td>
        <td>{position}</td>
    </tr>
);

export const TableRosterHeader = () => (
    <thead>
        <tr className= "text-center">
            <th></th>
            <th>NO.</th>
            <th>NAME</th>
            <th>POS.</th>
            <th>YR.</th>
            <th>HT.</th>
            <th>WT.</th>
            <th>HOMETOWN</th>
        </tr>
    </thead>
);

export const TableRosterBody = ({id, number, name, position, year, height, weight, hometown, image}) => (
    <tr className= "text-center">
        <td className = "img-col"><img className= "roster-img" src= {require(`./../../images/placeholder.jpg`)}/></td>
        <td>{number}</td>
        <td className= "name-col">
            <a className= "roster-name" href= {`/profile/${id}`}>{name}</a>
        </td>
        <td>{position}</td>
        <td>{year}</td>
        <td>{height}</td>
        <td>{weight}</td>
        <td>{hometown}</td>
    </tr>
);

export const TableHeaderItem = ({ children }) => (
    <th> {children} </th>
);

export const TableBody = ({ children }) => (
    <tbody> {children} </tbody>
);

export const TableScoreBody = (props) => (
    <tbody>
        {props.data.map( data => (
            <tr>
                <td>{data.Data_GameSync[0].date}</td>
                <td>{data.Data_GameSync[0].home_team} ({data.Data_GameSync[0].home_score})</td>
                <td>{data.Data_GameSync[0].away_team} ({data.Data_GameSync[0].away_score})</td>
                <td>{data.shots}</td>
                <td>{data.goals}</td>
                <td>{data.assists}</td>
            </tr>
        ))}
    </tbody>
);

export const TableStatsBody = (props) => (
    <tbody>
        <tr>
            <td>{props.data.games_played}</td>
            <td>{props.data.shots}</td>
            <td>{props.data.goals}</td>
            <td>{props.data.assists}</td>
        </tr>
    </tbody>
);
