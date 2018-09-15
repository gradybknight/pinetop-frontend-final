import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import PotStillButtons from './PotStillButtons'

class PotStillPassPhrase extends Component {
    state = {
        enteredPassPhrase:'',
    };

    handleChange = name => event => {
        console.log(event.target.value)
        console.log(name)
        this.setState({
            [name]: event.target.value,
        });
    };
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    
    constructor(props) {
        super(props);
        
        this.onChange = this.onChange.bind(this);
    }

    render() {
        return (
            <div>
                <Paper>
                    <TextField
                        id="enteredPassPhrase"
                        name="enteredPassPhrase"
                        label="Passphrase"
                        defaultValue=""
                        helperText="Please enter the passphrase"
                        margin="normal"
                        onChange={this.onChange}
                    />
                    <br />
                    {this.state.enteredPassPhrase === 'Bacon911' ? <PotStillButtons /> : <div></div>}
                </Paper>
            </div>
        )
  }
}



export default (PotStillPassPhrase);