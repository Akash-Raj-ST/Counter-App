
import React,{useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


import Svg, { Path,Circle } from "react-native-svg"


export default function App() {
  const [count,setCount] = useState(0);

  const decrement = ()=> {
    var newCount = count-1;
    setCount(newCount)
  }

  const increment = ()=> {
    var newCount = count+1;
    setCount(newCount)
  }
  return (
    <View style={{flex:1,justifyContent:'space-around'}}>
        <Count count={count}/>
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
          <SvgLeftPolygon decrement={()=>decrement()}/>
          <SvgCircle setCount={setCount}/>
          <SvgRightPolygon increment={()=>increment()}/>
        </View>  
    </View>
  );
}

function Count({count}){
  return(
    <View>
      <Text style={[styles.count,styles.textShadow]}>{count}</Text>
    </View>
  )
}

function SvgCircle({setCount}){
  const handleRandom = () =>{
    setCount(Math.floor(Math.random()*100));
  }
  return(
    <TouchableOpacity 
      style={styles.outline}
      onPress={()=>handleRandom()}
      onLongPress={()=>setCount(0)}
    >
      <Svg
      width={80}
      height={80}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Circle
        cx={40}
        cy={40}
        r={35}
        fill="#fff"
        stroke="#F00082"
        strokeWidth={6}
      />
    </Svg>
    </TouchableOpacity>
  )
}

function SvgLeftPolygon({decrement}){
  return(
     <TouchableOpacity 
        onPress={()=>decrement()}
      >
      <Svg
        width={55}
        height={68}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M5.59 29.846 43.966 4.133c3.322-2.226 7.783.155 7.783 4.154v51.427c0 3.998-4.461 6.379-7.783 4.153L5.589 38.154c-2.956-1.98-2.956-6.327 0-8.308Z"
          fill="#fff"
          stroke="#F00082"
          strokeWidth={6}
        />
      </Svg>
    </TouchableOpacity>
  )
}

function SvgRightPolygon({increment}){
  return(
    <TouchableOpacity 
        // style={styles.outline}
        onPress={()=>increment()}
      >
      <Svg
      width={55}
      height={68}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    
    <Path
      d="M49.41 38.154 11.034 63.867c-3.322 2.226-7.783-.155-7.783-4.154V8.287c0-4 4.461-6.38 7.783-4.154l38.378 25.713c2.956 1.98 2.956 6.327 0 8.308Z"
      fill="#fff"
      stroke="#F00082"
      strokeWidth={6}
    />
    </Svg>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  outline:{
    backgroundColor:'white',
    borderRadius:20,
    elevation:10,
    borderWidth:0.1,
    padding:10,
    borderColor:"#eee"
  },
  count:{
    fontSize:150,
    fontWeight:'bold',
    color:'#F00082',
    textAlign:'center',
    fontFamily:'monospace'
  },
  textShadow:{
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: 6, height: 6},
    textShadowRadius: 10
  },
})
