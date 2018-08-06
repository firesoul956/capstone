import React, { Component } from 'react';

import Input from './input';
import Content from './content';




const INITIAL_STATE = {
    legends: '',
    //King: '',
    //Judge: '',
    //Le_Deade: '',
    //Song: '',
    //Balled: '',
    //Phantom: '',
    //Force: '',
    //Storm: '',
    //Terra: '',
    //Truth: '',
    //Dawn: '',
    //Dusk: '',
    //Royal: '',
    //Guard: '',
    //North: '',
    //Pride: '',
    //Stream: '',
    //Sun: '',
    //Mech: '',
    //Aether: '',
    contentVisible: false
}

class Card extends Component {

    constructor() {
        super()

        this.state = INITIAL_STATE;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleFormSubmit(event) {
        event.preventDefault()

        if (this.state.contentVisible) {
            this.setState(INITIAL_STATE)
        } else {
            this.setState({ contentVisible: true })
        }
    }

    render() {

        const inputData = [
            { title: 'legends', state: this.state.legends, name: 'legends' }
            /* {title: 'King', state: this.state.King, name: 'King'},
             {title: 'Judge', state: this.state.Judge, name: 'Judge'},
             {title: 'Le_Deade', state: this.state.Le_Deade, name: 'Le_Deade'},
             {title: 'Song', state: this.state.Song, name: 'Song'},
 
             {title: 'Balled', state: this.state.Balled, name: 'Balled'},
             {title: 'Phantom', state: this.state.Phantom, name: 'Phantom'},
             {title: 'Force', state: this.state.Force, name: 'Force'},
             {title: 'Storm', state: this.state.Storm, name: 'Storm'},
 
             {title: 'Terra', state: this.state.Terra, name: 'Terra'},
             {title: 'Truth', state: this.state.Truth, name: 'Truth'},
             {title: 'Dawn', state: this.state.Dawn, name: 'Dawn'},
             {title: 'Dusk', state: this.state.Dusk, name: 'Dusk'},
 
             {title: 'Royal', state: this.state.Royal, name: 'Royal'},
             {title: 'Guard', state: this.state.Guard, name: 'Guard'},
             {title: 'North', state: this.state.North, name: 'North'},
             {title: 'Pride', state: this.state.Pride, name: 'Pride'},
 
             {title: 'Stream', state: this.state.Stream, name: 'Stream'},
             {title: 'Sun', state: this.state.Sun, name: 'Sun'},
             {title: 'Mech', state: this.state.Mech, name: 'Mech'},
             {title: 'Aether', state: this.state.Aether, name: 'Aether'},*/
        ]

        return (
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card__inputs">
                    {
                        inputData.map((data, index) => {
                            return Input((data), this.handleInputChange, index)
                        })
                    }
                </div>
                <button className={`card__${!this.state.contentVisible ? 'generate' : 'clear'}`} type="submit">{!this.state.contentVisible ? 'Find the clan' : 'try another clan'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state} /> : ''
                }
            </form>
        )
    }
}

export default Card;