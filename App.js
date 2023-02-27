import { View, Text,StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'

const App = () => {
  
  const checkanswer = (cardindex)=>{
    alert(cardindex)
  }
   let randomColor =[];
   let color = [];
   let random = Math.floor(Math.random() * 9);
  //  let cards = document.querySelectorAll('card');
  //  let rgbColor = document.querySelector('rgbText');

  let randomColor1 = Math.floor(Math.random()* 256);
  let randomColor2 = Math.floor(Math.random()* 256);
  let randomColor3 = Math.floor(Math.random()* 256);
  let randomColor4 = Math.floor(Math.random()* 256);
  let randomColor5 = Math.floor(Math.random()* 256);
  let randomColor6 = Math.floor(Math.random()* 256);
  let randomColor7 = Math.floor(Math.random()* 256);
  let randomColor8 = Math.floor(Math.random()* 256);
  let randomColor9 = Math.floor(Math.random()* 256);
  let randomColor10 = Math.floor(Math.random()* 256);
  let randomColor11 = Math.floor(Math.random()*256);
  // console.log(randomColor)

  randomColor.push(
    randomColor1, randomColor2, randomColor3,
    randomColor4, randomColor5, randomColor6,
    randomColor7, randomColor8, randomColor9,
    randomColor10,randomColor11
  )

  for (let i = 0; i < randomColor.length; i++){
  cards[i].style.backgroundColor = "rgb("+ randomColor[i]+ ","
  + randomColor[i+1]+ "," + randomColor[i+2]+")"
    color.push(cards[i].style.backgroundColor)
  }



 

  // const checkanswer = (cardindex)=>{
  //   // if( checkanswer == '0')
  //   alert("Suceess",checkanswer)
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View >
      <Text style ={styles.titleStyle}>Gess The Color Game</Text>
      </View>
      <View style={styles.rgbTextBox}>
        <Text style={styles.rgbText}>RGB (232,134,243) </Text>
      </View>
      {/* onPress={()=>checkanswer(0)} */}
      <View style={styles.cardOuter}>
        <TouchableOpacity onPress={()=>checkanswer(0)} style={styles.card} />
        <TouchableOpacity onPress={()=>checkanswer(1)} style={styles.card}/>
        <TouchableOpacity onPress={()=>checkanswer(2)} style={styles.card}/>
        <TouchableOpacity onPress={()=>checkanswer('3')} style={styles.card}/>
        <TouchableOpacity onPress={()=>checkanswer('4')} style={styles.card}/>
        <TouchableOpacity onPress={()=>checkanswer('5')} style={styles.card}/>
        <TouchableOpacity onPress={()=>checkanswer('6')} style={styles.card}/>
        <TouchableOpacity onPress={()=>checkanswer('7')} style={styles.card}/>
        <TouchableOpacity onPress={()=>checkanswer('8')} style={styles.card}/>
      </View>
    </SafeAreaView>
  )
}

const  styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    marginTop:'25%'
  },
  rgbText:{
    fontSize:'18%',
    color:'white',
    paddingVertical:'5%'
  },
  titleStyle:{
    fontSize: '26%',
    fontWeight:'bold',
    color:'#5ce1e6',
  },

  rgbTextBox:{
      width:'70%',
      backgroundColor:'#000',
      alignItems:'center',
      height:'7%',
      marginVertical:'5%',
      borderRadius:'20%',
  },

  card:{
    width:95,
    height:95,
    backgroundColor:'red',
    borderRadius:'20%',
    margin:'1%',

  },
  cardOuter:{
    width:'80%',
    height:'50%',
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent: 'center',
    paddingHorizontal:'1%',
    paddingVertical: '0%',
  }

})
export default App

