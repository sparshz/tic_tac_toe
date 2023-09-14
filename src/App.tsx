import React, { useState } from 'react';

import {
  FlatList,
  Pressable,
  SafeAreaView,
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  Text,

  View,
  Image,
} from 'react-native';

// import { PropsWithChildren } from 'react'

// import cir from './assest/circle.png'
// import cros from './assest/cross.png'
// import pen from './assest/pencil.png'

import Snackbar from 'react-native-snackbar';
import Icons from './componemts/Icons';


// type shapeProp = PropsWithChildren<{
//   imageUrl: ImageSourcePropType
// }>




function App(): JSX.Element {
  const [isCross, setIsCross] = useState<boolean>(false)
  const [gameWinner, setGameWinner] = useState<string>('')
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9))
  // const [symbol , setSymbol] = useState<ImageSourcePropType>(pen)
  

  const reloadGame = () => {
    setIsCross(false)
    setGameState(new Array(9).fill('empty', 0, 9))
    setGameWinner('')
    // setSymbol(pen)
  }

  const renderImage = (item: string) => {
    if (item === 'cross') {
      return <Text style={styles.playerX}> X </Text>
    } else if (item === 'circle') {
      return <Text style={styles.playerO}>O</Text>
    } else {
      return null; // Render nothing for 'empty' cells
    }
  }



  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
      return Snackbar.show({
        text: "jeet gya bkl",
        backgroundColor: "red",
        textColor: "#FFF"

      })
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
      return Snackbar.show({
        text: "jeet gya bkl",
        backgroundColor: "red",
        textColor: "#FFF"

      })
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
      return Snackbar.show({
        text: "jeet gya bkl",
        backgroundColor: "red",
        textColor: "#FFF"

      })
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
      return Snackbar.show({
        text: "jeet gya bkl",
        backgroundColor: "red",
        textColor: "#FFF"

      })
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
      return Snackbar.show({
        text: "jeet gya bkl",
        backgroundColor: "red",
        textColor: "#FFF"

      })
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
      return Snackbar.show({
        text: "jeet gya bkl",
        backgroundColor: "red",
        textColor: "#FFF"

      })
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
      return Snackbar.show({
        text: "jeet gya bkl",
        backgroundColor: "red",
        textColor: "#FFF"

      })
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
      return Snackbar.show({
        text: "jeet gya bkl",
        backgroundColor: "red",
        textColor: "#FFF"

      })
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
      return Snackbar.show({
        text: "dono apni ma chudao",
        backgroundColor: "red",
        textColor: "#FFF"

      })
    }
  }

  // const onChangeItem = (itemNUmber: number) => {
  //   if (gameWinner) {
  //     return Snackbar.show({
  //       text: gameWinner,
  //       backgroundColor: '#000000',
  //       textColor: "#FFFFFF"
  //     })
  //   }


  //   if (gameState[itemNUmber] === 'empty') {
  //     gameState[itemNUmber] = isCross ? 'cross' : 'circle'
  //     setIsCross(!isCross)


  //   } else {
  //     return Snackbar.show({
  //       text: 'already marked , make move to empty block',
  //       backgroundColor: "red",
  //       textColor: "#FFF"
  //     })
  //   }
  //   checkIsWinner()

  // }

  const onChangeItem = (itemNumber: number) => {
    if (gameWinner) {
      return Snackbar.show({
        text: gameWinner,
        backgroundColor: '#000000',
        textColor: "#FFFFFF"
      });
    }

    if (gameState[itemNumber] === 'empty') {
      // const updatedGameState = [...gameState];
      gameState[itemNumber] = isCross ? 'cross' : 'circle';
      // setGameState(updatedGameState);
      setIsCross(!isCross);

    } else {
      return Snackbar.show({
        text: 'Already marked, make a move to an empty block',
        backgroundColor: "red",
        textColor: "#FFF"
      });
    }
    checkIsWinner();
  }

  return (
    <SafeAreaView>
      <StatusBar  />
      
        {gameWinner ? (
          <View style={[styles.playerInfo, styles.winnerInfo]}>
            <Text style={styles.winnerTxt}>{gameWinner}</Text>
          </View>
        ) : (
          <View style={[styles.playerInfo, isCross ? styles.topPart1 : styles.topPart2]}>
            <Text style={styles.gameTurnTxt}>
              Player {isCross ? 'X' : 'O'}'s Turn
            </Text>

          </View>
        )}

        <FlatList
          numColumns={3}
          data={gameState}
          style={styles.grid}
          renderItem={({ item, index }) => (
            <Pressable
              key={index}
              style={styles.card}
              onPress={() => onChangeItem(index)}
            >
              {renderImage(item)}



            </Pressable>
          )}
        />
        <Pressable
          style={styles.gameBtn}
          onPress={reloadGame}
        >
          <Text style={styles.gameBtnText}>
            {gameWinner ? "start new game" : "reload the game"}
          </Text>
        </Pressable>
   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  playerInfo: {
    height: 56,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 4,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    color: '#38CC77',
    fontSize: 40,
    fontWeight: 'bold'
  },
  playerO: {
    color: '#F7CD2E',
    fontSize: 40,
    fontWeight: 'bold'
  },
  grid: {
    margin: 12,
  },
  card: {
    height: 100,
    width: '33.33%',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#333',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',

    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#8D3DAF',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  topPart1: {
    backgroundColor: '#38CC77'
  },

  topPart2: {
    backgroundColor: '#F7CD2E'
  }

});


export default App;




