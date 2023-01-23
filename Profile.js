import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,Image,FlatList
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { HEIGHT, WIDTH } from './Home';

const data = [
  { key: 'First Stripe Earned ',key2:'Top 10% of highest spending players in a month',key3:' x 3', image: require('../Bit/assets/R.jpg') },
  { key: 'Born Winner ',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  { key: 'Trader of the Month ',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  { key: 'Rising Star ',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  { key: 'Jackpot ',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  { key: 'Impossible ',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  { key: 'First Stripe Earned',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  { key: 'Born Winner',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  { key: 'Trader of the Month',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  { key: 'Rising Star',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  { key: 'Jackpot',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  { key: 'Impossible',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  { key: 'First Stripe Earned  ',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  { key: 'Born Winner  ',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  { key: 'Trader of the Month  ',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  { key: 'Rising Star  ',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  { key: 'Jackpot  ',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  { key: 'Impossible  ',key2:'Top 10% of highest spending players in a month', image: require('../Bit/assets/R.jpg') },
  
];

const Card = ({ title,title3,title2, image }) => (
  <View style={{backgroundColor:'#f2f2f2'}}>
  <View style={styles.cardContainer}>
    <Image source={image} style={styles.cardImage} />
    <View style={{flexDirection:'column',width:WIDTH*0.7,marginTop:-15,marginRight:20,marginLeft:10}}>
    <View style={{flexDirection:'row'}}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={{...styles.cardTitle,color:'#FFA700'}}>{title3}</Text>
    </View>
    <Text style={{color:'grey'}}>{title2}</Text>
    </View>
  </View>
  </View>
);

const Profile = () => {
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <FontAwesome5 name={'coins'} style={{color:'purple',marginLeft:15,marginTop:3}} size={20}/>
          <Text style={{color:'black'}}>Profile</Text>
          <FontAwesome5 name={'sms'} style={{color:'grey',marginRight:15,marginTop:3}} size={20}/>
        </View>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image 
              style={styles.avatar}
              source={require('../Bit/assets/OIP.jpg')}
            />
          </TouchableOpacity>
          <View style={styles.headerContent}>
            <Text style={styles.name}>Sougata Singha</Text>
            <Text style={styles.subtitle}>6000 Pts</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.bio}>
              I'm a software developer that has been in the crypto space since 2012,And I've seen it grow 
              and falter over a period of time .Really happy to be here!
            </Text>
            <View style={{...styles.editButton,flexDirection:'row',paddingTop:-19}}>
               <FontAwesome5 name={'sign-out-alt'} marginTop={3}  style={{color:'grey',paddingHorizontal:5}}/>
              <Text style={styles.editText}>Log Out</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={{ flexDirection: 'row', marginTop: 0, borderColor: '#e8ecf8', borderWidth: 1, borderRadius: 5, paddingHorizontal: '3%', paddingVertical: 5, width: WIDTH*0.80, height: HEIGHT*0.08,justifyContent:'space-between',paddingLeft:10 }}>
                 <View style={{flexDirection:'column',marginLeft:15}}>
                  <Text style={{color:'grey',paddingBottom:5,fontWeight:700}}>Under or Over</Text>
                  <View style={{flexDirection:'row'}}>
                  <FontAwesome5 name={'arrow-up'} marginTop={3} size={20} style={{color:'green',paddingHorizontal:5,marginRight:5, backgroundColor:'#bcf5a6',borderRadius:100}}/>
                  <Text style={{color:'black' ,fontSize:20,fontWeight:'bold'}}>81%</Text>
                  </View>
                 </View>
                 <View style={{flexDirection:'column',marginRight:35}}>
                  <Text style={{color:'grey',paddingBottom:5,fontWeight:700}}>Top 5</Text>
                  <View style={{flexDirection:'row'}}>
                  <FontAwesome5 name={'arrow-down'} marginTop={3} size={20} style={{color:'red',marginRight:5,paddingHorizontal:5,backgroundColor:'#f3d3d9',borderRadius:100}}/>
                  <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>-51%</Text>
                  </View>
                 </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 0, borderColor: '#e8ecf8', borderWidth: 1, borderRadius: 5, paddingHorizontal: '3%', paddingVertical: 5, width: WIDTH, height: HEIGHT*0.07 ,justifyContent:'space-between',marginTop:20,marginBottom:-20 }}>
            <View style={{flexDirection:'column',marginLeft:15,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'grey'}}>Games played</Text>
                 </View>
                 <View style={{flexDirection:'column',marginRight:50 ,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{color:'purple'}}>Badges</Text>
                 </View>
                 
            </View>
            </View>
           
          </View>
          <FlatList
             data={data}
              renderItem={({ item }) => <Card title={item.key} title2={item.key2} title3={item?.key3} image={item.image} />}
              />
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  headerContent: {
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '400',
  },
  subtitle: {
    fontSize: 15,
    color: 'grey',
    marginTop: 5,
    marginBottom:-5
  },
  body: {
    marginTop: -40,
  },
  bodyContent: {
    padding: 20,
  },
  bio: {
    fontSize: 14,
    color: '#999',
    marginTop: 10,
  },
  editButton: {
  
    padding: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  editText: {
    color: 'grey',
    fontWeight: '600',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
    flexDirection:'row',
    padding:10
  },
  cardImage: {
    width: WIDTH*0.13,
    height: HEIGHT*0.05,
     borderRadius: 40,

  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
    color:'black'
  },
});

export default Profile;

