import React from 'react';
import { useState } from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,Dimensions,TouchableOpacity,Modal,FlatList
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const HEIGHT = Dimensions.get('screen').height;
export const WIDTH = Dimensions.get('screen').width;


const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState(null);
  return (
    <SafeAreaView>
    <View style={{marginBottom:-35}}><Text style={styles.titleText}>Today's Game</Text></View>
      <View style={styles.header}>
        <View style={styles.cardView}>
          
          <View style={{backgroundColor:'#6A0DAD',padding:10,paddingLeft:20}}>
          <View  style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row',paddingBottom:10}}>
          <Text style={{fontSize:10}}>UNDER OR OVER</Text><FontAwesome5 name={'info-circle'} solid marginLeft={10} marginTop={2}/>
          </View>
           
          <View style={{flexDirection:'row',marginRight:20}}>
          <Text style={{fontSize:12}}>Starting in</Text><FontAwesome5 name={'clock'} solid marginLeft={10} marginTop={2}/>
          <Text style={{fontSize:12,marginLeft:10}}>03:23:12</Text>
          </View>
          </View>
          <Text style={{paddingBottom:10}}>Bitcoin price will be under</Text>
          <View style={{flexDirection:'row'}}>
          <Text style={{fontWeight:500,color:"white"}}>$24,524</Text><Text>  at 7 a ET on 22nd Jan'21</Text>
          </View>
          </View>
          <View style={{flexDirection:'row',paddingHorizontal:20,backgroundColor:'#F2F3F5',paddingVertical:15}}>
          <View style={{flexDirection:'column',marginRight:10}}>
         <Text style={{color:'grey',paddingBottom:10}}>PRIZE POOL</Text>
         <Text style={{textAlign:'center',color:'black'}}>$12000</Text>
         </View>
         <View style={{flexDirection:'column',marginRight:10}}>
         <Text style={{color:'grey',paddingBottom:10}}>UNDER</Text>
         <Text style={{textAlign:'center',color:'black'}}>3.25x</Text>
         </View>
         <View style={{flexDirection:'column',marginRight:10}}>
         <Text style={{color:'grey',paddingBottom:10}}>OVER</Text>
         <Text style={{textAlign:'center',color:'black'}} >1.25x</Text>
         </View>
         <View style={{flexDirection:'column',marginRight:10,paddingHorizontal:10}}>
         <Text style={{color:'grey',paddingBottom:10}}>ENTRY FEES</Text>
         <View style={{flexDirection:'row',paddingLeft:40}}>
         <Text style={{textAlign:'center',color:'black',paddingRight:5}}>5</Text>
         <FontAwesome5 name={'clock'} style={{color:'#FFA700'}} marginTop={3} solid/>
         </View>
         </View>
         </View>
         <View style={{backgroundColor:'#F2F3F5'}} >
         <Text style={{paddingLeft:18,paddingBottom:10,color:'grey',fontWeight:'500'}} >Whats your prediction ?</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{marginLeft:40}}>
         <TouchableOpacity>
        <Text style={{...styles.buttonStyle,backgroundColor:'#2c041C'}} ><FontAwesome5 name={'arrow-down'} marginTop={3}  style={{color:'white'}}/> Under</Text>
       </TouchableOpacity>
       </View>
       <View style={{marginRight:40,paddingBottom:10}}>
       <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={{...styles.buttonStyle,backgroundColor:'#6A0DAD'}} ><FontAwesome5 name={'arrow-up'} marginTop={3}  style={{color:'white'}}/> Over</Text>
        </TouchableOpacity>
        </View>
      </View>
      </View>
      <View style={{backgroundColor:'#E4E4E4'}} >
      <View style={{flexDirection:'row',paddingTop:10,justifyContent:'space-between',paddingBottom:10}}>
      <View style={{flexDirection:'row',marginLeft:15}}>
        <FontAwesome5 name='user' solid marginTop={3} style={{color:'grey'}} /><Text style={{paddingLeft:10,color:'grey'}}>355 players</Text>
        </View>
        <View style={{flexDirection:'row',marginRight:15}}>
        <FontAwesome5 name='chart-area' solid marginTop={3} style={{color:'grey'}} /><Text style={{paddingLeft:10,color:'grey'}}>View chart</Text>
        </View>
      </View>
      <View  style={{justifyContent:'center',alignItems:'center',flexDirection:'row',paddingBottom:10,}}>
      <View style={{width:WIDTH*0.60,backgroundColor:'#FF007F',height:10}}/>
      <View style={{width:WIDTH*0.20,backgroundColor:'#0b8b87',height:10}}/>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingBottom:20}}>
        <Text style={{marginLeft:15,color:'grey'}}>232 predicted under</Text>
        <Text  style={{marginRight:15,color:'grey'}}>123 predicted over</Text>
      </View>
      </View>
        </View>  
        </View>
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
       >
        <View style={{backgroundColor:'#000000aa',flex:1}}>
          <View style={{ marginTop: 0, borderColor: '#e8ecf8', borderWidth: 1, borderRadius: 30, paddingHorizontal: '3%', paddingVertical: 5, width: WIDTH, height: HEIGHT*0.07 ,marginTop:350,backgroundColor:'white',flex:1, }}>
          
            <Text style={{color:'black' , paddingTop:25,fontWeight:500}}>Your Prediction is Under</Text>
            <Text style={{color:'grey',paddingTop:15,fontWeight:500}}>Entry Ticket</Text>
            <View style={{paddingTop:10,paddingBottom:40,width:WIDTH*0.9,marginBottom:170,marginTop:30}}>
            <FlatList
             data={data}
              keyExtractor={item => item.toString()}
               renderItem={({ item }) => (
               <TouchableOpacity
                onPress={() => setSelected(item)}
               style={[
              styles.item,
              selected === item && styles.selectedItem
            ]}
          >
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:10,paddingBottom:10}}>
        <View style={{flexDirection:'column',marginLeft:10}}>
          <Text style={{color:'grey'}}>You can win</Text>
          <Text style={{color:'green'}}>$2000</Text>
        </View>
        <View style={{flexDirection:'row',marginRight:10}}>
         <Text style={{color:'grey'}}>Total  </Text><FontAwesome5 name={'clock'} style={{color:'#FFA700'}} marginTop={3} solid/><Text style={{color:'black'}}>  5</Text>
         </View>
      </View>
      <View style={{justifyContent:'center',alignItems:'center',paddingTop:10,paddingBottom:50}}>
       <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{...styles.buttonStyle,backgroundColor:'#6A0DAD',width:WIDTH*0.8}}>Submit my prediction</Text>
            </TouchableOpacity>
            </View>
      </View>
          </View>
        </View>
      </Modal>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    header:{
      padding:20,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    cardView: {
        borderRadius: 6,
        backgroundColor: 'red',
        // backgroundColor: '#F2F3F5',
        elevation: 4,
        margin: 10,
        width: WIDTH*0.90,
        shadowOpacity: 0.7,
        shadowRadius: 5,
        shadowColor: '#c3cff0' ,
        shadowOffset: { 
          height: 1, 
          width: 1 
        }
    },
    titleText: {
        fontFamily: 'bold',
        marginLeft: 19,
        margin: 15,
        color: 'black',
        fontSize: 15
      },
      buttonStyle:{
        textAlign:"center",
        color:"white",
        padding:5,
        width:WIDTH*0.3,
        borderRadius:15
      },
      item: {
        
        marginVertical: 5,
        // backgroundColor: '#f9c2ff',
        color:'black',
        width:WIDTH,
      },
      selectedItem: {
        backgroundColor: '#f2f2f2',
        transform: [{ scale: 1.1,  }],
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // elevation: 5,
      },
      itemText: {
        fontSize: 20,
        textAlign: 'center',
        color:'black',
        marginRight:20
      },
});

export default Home;

