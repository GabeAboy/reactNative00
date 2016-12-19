//imports code we need

import React, {Component } from 'react'
import {View,Text,AppRegistry,StyleSheet} from 'react-native'
var DayItem = require('./src/day-items')
var Moment = require('moment');
// var AppRegistry = React.AppRegistry;
// var Text = React.Text;
// var View = React.View;
// const days = ['Sunday','Monday','Teusday','Wednesday','Thursday','Friday','Saturday']
//creat react Component
var weekDays = React.createClass({
  render:function() {
    return(
        <View style = {styles.container}>


          {this.days()}

        </View>
    )
  },
  days:function() {
    var daysItem = [];
    for (var i = 0; i < 7; i++) {
      var day = Moment().add(i,'days').format('dddd')
      daysItem.push(<DayItem day = {day} daysUntil={i}/>)
    }
    return daysItem
    // return days.map(function(x) {
    //   return <DayItem day = {x}/>
    // })
  }
});
//style react Component
const styles = StyleSheet.create({
  container:{
    flex:1,//height width 100%
    // flexDirection:'row'defailt is column,
    justifyContent:'center',//horizontal alignment flex-end start
    alignItems:'center' //vertical alignment
  }
});

//show the react component on screen
AppRegistry.registerComponent('weekdays',function() {
  return weekDays;
});
