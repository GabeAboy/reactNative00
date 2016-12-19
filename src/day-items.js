import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
var DayItem = React.createClass({
  render:function() {
    return(
          <Text style = {styles.day}>
            {this.props.day}
          </Text>
    )
  }
});
  var styles = StyleSheet.create({
    day:{
      fontSize:18,
      color:'#00CCFF'
    }
  });

module.exports=DayItem;
