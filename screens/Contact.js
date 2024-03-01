import { useState } from "react"
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity} from "react-native"




const Contact = () => {

    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAdress] = useState('')
    const [city, setCity] = useState('')
    const [date, setDate] = useState('')

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View>
                    <Text>Contact</Text>
                </View>
                <View style={styles.border}>
                    <View style={styles.textCon}>
                        <TextInput onChangeText={text => setName(text)} value={name}  style={styles.text} placeholder="Enter name"/>
                    </View>
                   <View style={styles.textCon}>
                        <TextInput onChangeText={text => setNumber(text)}  value={number} style={styles.text} placeholder="Phone number" />
                   </View>
                   <View style={styles.textCon}>
                        <TextInput onChangeText={text => setAdress(text)}  value={address} style={styles.text} placeholder="Address"/>
                   </View>
                   <View style={styles.textCon}>
                    <TextInput onChangeText={text => setCity(text)}  value={city} style={styles.text} placeholder="City"/>
                   </View>
                   <View style={styles.textCon}>
                    <TextInput onChangeText={text => setCity(text)} style={styles.text} value={date} placeholder="Date"/>
                   </View>
                    <TouchableOpacity ><Text>Save Contact</Text></TouchableOpacity>
                </View>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    border: {
        borderRadius: 20,
        borderColor: 'red',
        gap: 10
    },
    textCon: {
        borderColor: 'black',
        borderRadius: 3,
        borderWidth: 2
    },
    text: {
        width: 300,
        height:30,
        color: 'black'

    }
})

export default Contact;