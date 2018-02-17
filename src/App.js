import React, { Component } from 'react';
import './App.css';
import { TechIcon } from 'components';
import android from './images/android.png';
import angular from './images/angular.png';
import apple from './images/apple.png';
import aws from './images/aws.png';
import azure from './images/azure.png';
import doker from './images/doker.png';
import ionic from './images/ionic.png';
import js from './images/js.png';
import meteor from './images/meteor.png';
import mongodb from './images/mongodb.png';
import mysql from './images/mysql.png';
import node from './images/node.png';
import pgdb from './images/pgdb.png';
import ravendb from './images/ravendb.png';
import react from './images/react.png';
import redux from './images/redux.png';
import sqlserver from './images/sqlserver.png';
import xamarin from './images/xamarin.png';

var jsTechnology = [
  {imgSrc:angular, width:'78px', height: '78px'},
  {imgSrc:react, width:'78px', height: '78px'},
  {imgSrc:js,  width:'78px', height: '78px'},
  {imgSrc:node, width:'78px', height: '78px'},
  {imgSrc:ionic, width:'78px', height: '78px'},
  {imgSrc:redux, width:'78px', height: '78px'},
  {imgSrc:meteor, width:'78px', height: '78px'},
];
var dbTechnology = [
  {imgSrc:pgdb, width:'78px', height: '78px'},
  {imgSrc:mysql, width:'78px', height: '78px'},
  {imgSrc:mongodb, width:'78px', height: '78px'},
  {imgSrc:ravendb, width:'78px', height: '78px'},
  {imgSrc:sqlserver, width:'78px', height: '78px'},
];
var mobileTechnology = [
  {imgSrc:xamarin, width:'78px', height: '78px'},
  {imgSrc:android, width:'78px', height: '78px'},
  {imgSrc:apple, width:'78px', height: '78px'},
  {imgSrc:doker, width:'78px', height: '78px'},
  {imgSrc:azure, width:'78px', height: '78px'},
  {imgSrc:aws, width:'78px', height: '78px'},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <TechIcon jsTechnology={jsTechnology} dbTechnology={dbTechnology} mobileTechnology={mobileTechnology}  />
      </div>
    );
  }
}
export default App;