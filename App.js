import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Sorteado from './src/Sorteado';
const App = () => {
  const vetor = Array.from({length: 90}, (_, i) => i + 1);
  const [bolinhas, setBolinhas] = useState(vetor);
  const [sorteadas, setSorteadas] = useState([]);
  const [modoNorturno, setModoNoturno] = useState(false);
  const corDoFundo = modoNorturno ? '#323732' : '#F3D98C';
  const remover = bola => {
    setBolinhas(prevState => prevState.filter(prevItem => prevItem !== bola));
  };
  const sortear = () => {
    let numero = Math.floor(Math.random() * bolinhas.length);
    if (bolinhas.length < 1) {
      alert('Todas as bolas foram sorteadas');
    } else {
      const todasSorteadas = [...sorteadas, bolinhas[numero]];
      setSorteadas(todasSorteadas);
      remover(bolinhas[numero]);
    }
  };
  const resetar = () => {
    setBolinhas(vetor);
    setSorteadas([]);
  };

  return (
    <View style={{flex: 1, backgroundColor: corDoFundo}}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 40,
          backgroundColor: '#656561',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.header}>BINGO!</Text>
      </View>
      <Switch
        value={modoNorturno}
        onValueChange={valor => setModoNoturno(valor)}
        trackColor={{false: 'grey', true: 'white'}}
        thumbColor={modoNorturno ? 'grey' : '#121212'}
      />
      <View style={styles.botaoExt}>
        <TouchableOpacity style={styles.botao1} onPress={sortear}>
          <View style={styles.botaoArea}>
            <Text style={styles.botaoTexto}>Sortear</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao2} onPress={resetar}>
          <View style={styles.botaoArea}>
            <Text style={styles.botaoTexto}>Reiniciar</Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.direcaoSorteado}>
          {sorteadas.map(number => (
            <Sorteado key={number} numero={number} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 29,
    color: '#DEAB17',
    fontFamily: 'cursive',
    fontWeight: 'bold',
  },
  botaoArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao1: {
    backgroundColor: '#5FD53C',
    height: 90,
    width: 90,
    justifyContent: 'center',
    borderRadius: 45,
    alignItems: 'center',
    borderWidth: 2,
  },
  botao2: {
    backgroundColor: '#E3E912',
    height: 90,
    width: 90,
    justifyContent: 'center',
    borderRadius: 45,
    alignItems: 'center',
    borderWidth: 2,
  },
  botaoTexto: {
    fontSize: 18,
    color: '#1D231B',
    fontWeight: 'bold',
  },
  botaoExt: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 150,
    marginBottom: 30,
    flexDirection: 'row',
  },
  direcaoSorteado: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    flexWrap: 'wrap',
  },
});

export default App;
