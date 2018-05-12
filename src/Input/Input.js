import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView
} from 'react-native';

class Input extends Component {

    state = {
        myInput: "",
        users: ['Randy', 'Vianda', 'Putra', 'John', 'Doe', 'Steve']
    }

    onChangeInput = (value) => {
        this.setState({
            myInput: value
        })
    }

    onAddUser = () => {
        this.setState(prevState => {
            return {
                myInput: '',
                users: [...prevState.users, prevState.myInput]
            }
        })
    }

    render() {
        return(
            <View style={styles.inputWrapper}>
                <TextInput
                    value={this.state.myInput}
                    style={styles.input}
                    onChangeText={this.onChangeInput}
                />
                <Button
                    title="Add User"
                    onPress={this.onAddUser}
                />
                    {
                        this.state.users.map(item => (
                            <Text style={styles.users} key={item}>{item}</Text>
                        ))
                    }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        backgroundColor: '#f2f2f2',
        padding: 10,
        marginTop: 10,
        fontSize: 12
    },
    inputWrapper: {
        width: '100%'
    },
    users: {
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#cecece',
        padding: 10,
        marginBottom: 5
    }
})

export default Input;