import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, TouchableOpacity, SafeAreaView} from 'react-native';
import { Icon, ListItem } from 'react-native-elements'
import {HomeScreen} from '../stack/stack'

const Drawer = createDrawerNavigator();

export default function MyDrowner(props){
    return(
      <Drawer.Navigator drawerContent={(props)=> CustomDrawerContent(props)}>
        <Drawer.Screen name='HomeScreen' component={HomeScreen}/>
      </Drawer.Navigator>
    )
  }
  
function CustomDrawerContent({navigation}){
    return(
        <SafeAreaView style={{flex:1,justifyContent:'space-between'}}>
            <View>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen',{screen:'Tarjetas'})}>
                <ListItem bottomDivider>
                <Icon name='credit-card' type='fontisto'/>
                <ListItem.Content>
                    <ListItem.Title>Tarjetas</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron/>
                </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen',{screen:'Balance'})}>
                <ListItem bottomDivider>
                <Icon name='bar-chart' type='fontisto'/>
                <ListItem.Content>
                    <ListItem.Title>Balance</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron/>
                </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen',{screen:'Movimientos'})}>
                <ListItem bottomDivider>
                <Icon name='list-2' type='fontisto'/>
                <ListItem.Content>
                    <ListItem.Title>Movimientos</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron/>
                </ListItem>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen',{screen:'Pagos'})}>
                <ListItem bottomDivider>
                <Icon name='lightbulb' type='fontisto'/>
                <ListItem.Content>
                    <ListItem.Title>Servicios</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron/>
                </ListItem>
            </TouchableOpacity>
            <ListItem bottomDivider onPress={()=>navigation.navigate('HomeScreen',{screen:'Amigos'})}>
                <Icon name='persons' type='fontisto'/>
                <ListItem.Content>
                    <ListItem.Title>Contactos</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron/>
            </ListItem>
            <ListItem bottomDivider onPress={()=>navigation.navigate('HomeScreen',{screen:'Configuracion'})}>
                <Icon name='player-settings' type='fontisto'/>
                <ListItem.Content>
                    <ListItem.Title>Configuración</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron/>
            </ListItem>
            <ListItem bottomDivider onPress={()=>navigation.navigate('HomeScreen',{screen:'Ayuda'})}>
                <Icon name='info' type='fontisto'/>
                <ListItem.Content>
                    <ListItem.Title>Ayuda</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron/>
            </ListItem>
            </View>
            <View>
            <ListItem topDivider onPress={()=>navigation.navigate('Login')}>
                <Icon name='ios-log-out' type='ionicon'/>
                <ListItem.Content>
                    <ListItem.Title>Cerrar sesión</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron/>
            </ListItem>
            </View>
        </SafeAreaView>
    )
}