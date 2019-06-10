import axios from "axios";

export default {
  // Gets roster from the Roster API
  getRoster: function(season) {
    return axios.get("/api/roster/" + season);
  },
  // Gets all games in a year from the Season API
  getSeason: function(year) {
    return axios.get("/api/season/" + year);
  },
  // Gets the player information from the Profile API
  getProfile: function(id) {
    return axios.get("/api/profile/" + id);
  },
  // Gets the data in a game from the Game API
  getGame: function(id) {
    return axios.get("/api/game/", id);
  },
  getCoaches: function(season) {
    return axios.get("/api/coaches/" + season);
  }
};
