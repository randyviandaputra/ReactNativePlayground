import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker, Slider } from 'react-native';

class PickerComponent extends Component {
    
    state = {
        country: "Inggris",
        value: 50
    }

    handleSliderChange = (value) => {
        this.setState({
            value: value
        })
    }

    render() {
        return(
            <View style={{width: '100%'}}>
                <Picker
                    style={{width: '100%'}}
                    selectedValue={this.state.country}
                    onValueChange={(itemValue, itemIndex) => {
                        this.setState({
                            country: itemValue
                        })
                    }}
                >
                    <Picker.Item label="Indonesia" value="Indonesia"/>
                    <Picker.Item label="Singapure" value="Singapure"/>
                    <Picker.Item label="Inggris" value="Inggris"/>
                </Picker>
                
                <Slider
                    value={this.state.value}
                    maximumValue={100}
                    minimumValue={1}
                    step={20}
                    onValueChange={this.handleSliderChange}
                />
            </View>
        )
    }
}

export default PickerComponent