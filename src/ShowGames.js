/* TODO
 - accent flag for today
*/
import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/fi';
import SportImage from './SportImage.js';

const d = moment();
const datum = moment();
const lastDate = d.add(6, 'month').format();

export default class ShowGames extends Component {
  constructor(props) {
    super(props);
    this.sortByKey = this.sortByKey.bind(this);
  }
  
  sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  };
  
  /* TO BE IMPLEMENTED
  isDateToday(datetime) {
    if (moment(d).format("DD-MM-YYYY") === moment(datetime).format("DD-MM-YYYY")) {
        return true;
        } else {
        return false;
        }
  }*/

  render() {

    const gamesByDate = this.sortByKey(this.props.data, 'datetime');
    
    const gameList = gamesByDate.filter(function(value) {
               return ((moment(value['datetime']).format() >= datum.format()) && (moment(value['datetime']).format() <= lastDate));                     
              });
    
    const games = gameList.map((game) => {
      return (
        <li className="list-group-item" key={game.key}>
          <div className="main">
            <div className="dateblock">
              <span className="kk">{moment(game.datetime).format("MMM")}</span>
              <h1>{moment(game.datetime).format("D")}</h1>
              <span className="date">{moment(game.datetime).format("dd")}</span>
            </div>
            <div className="infoblock"> 
              <h2>{game.home} - {game.away}</h2>
              <div className="metadata">
                <span className="glyphicon glyphicon-time"></span> {moment(game.datetime).format("HH:mm")}
                <span className="glyphicon glyphicon-map-marker"></span> {game.arena}
              </div>
            </div>
            <div className="imageblock">
              <SportImage sport={game.sport} />
            </div>
          </div>
        </li>
      );
    })
    return (
      <div className="container paper">
        <h2>Tulevat ottelut</h2>
        <ul className="list-group sportitems">
          {games}
        </ul>
        <p className="pull-right">JämsäSport ei vastaa ottelutietojen oikeellisuudesta.</p>
      </div>
    );
  }
}