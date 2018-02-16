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

<<<<<<< HEAD
var jsTechnology = [
=======
var array1 = [
>>>>>>> 042f3e40d9a991d122cfa159685c1c1e76216494
  {imgSrc:angular, width:'78px', height: '78px'},
  {imgSrc:react, width:'78px', height: '78px'},
  {imgSrc:js,  width:'78px', height: '78px'},
  {imgSrc:node, width:'78px', height: '78px'},
  {imgSrc:ionic, width:'78px', height: '78px'},
  {imgSrc:redux, width:'78px', height: '78px'},
  {imgSrc:meteor, width:'78px', height: '78px'},
];
<<<<<<< HEAD
var dbTechnology = [
=======
var array2 = [
>>>>>>> 042f3e40d9a991d122cfa159685c1c1e76216494
  {imgSrc:pgdb, width:'78px', height: '78px'},
  {imgSrc:mysql, width:'78px', height: '78px'},
  {imgSrc:mongodb, width:'78px', height: '78px'},
  {imgSrc:ravendb, width:'78px', height: '78px'},
  {imgSrc:sqlserver, width:'78px', height: '78px'},
];
<<<<<<< HEAD
var mobileTechnology = [
=======
var array3 = [
>>>>>>> 042f3e40d9a991d122cfa159685c1c1e76216494
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
<<<<<<< HEAD
        <TechIcon jsTechnology={jsTechnology} dbTechnology={dbTechnology} mobileTechnology={mobileTechnology}  />
=======
        <TechIcon array1={array1} array2={array2} array3={array3}  />
>>>>>>> 042f3e40d9a991d122cfa159685c1c1e76216494
      </div>
    );
  }
}
export default App;