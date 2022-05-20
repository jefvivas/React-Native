/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Sorteado(props) {
  return (
    <View style={styles.areaSorteado}>
      <Text style={styles.numeroSorteado}>{props.numero}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  areaSorteado: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems:'center',
    borderWidth:4,
    borderRadius:20,
    marginRight:5,
    marginBottom:5,
  },
  numeroSorteado: {
    color: 'black',
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center',
  },
});

export default Sorteado;
