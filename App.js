import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import memes from './utils/memes';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [image, setImage] = useState(null);
  const addCounter = () => {

    if (counter == 50) {
      setCounter(0);
      setImage(null)
    } else {
      setCounter(counter + 1);
    }
    if ((counter + 1) % 10 === 0) {
      setImage((lastImage) => (lastImage + 1) % memes.length)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
      {image && (
        <Image source={memes[image]} style={styles.img} resizeMode='contain'/>
      )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={addCounter}>
          <FontAwesomeIcon icon={faPlus} size={70} color='black' />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        {counter}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 20,
  },
  button: {
    alignContent: 'center',
    padding: 5,
  },
  buttonContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    color: 'white',
    borderRadius: 20,
  },
  imgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    height: 300,
    width: 300,
  },
  img: {
    margin: 10,
    height: '100%',
    width: '100%', 
    marginBottom: 100,
    borderRadius: 50, 
  }
});
