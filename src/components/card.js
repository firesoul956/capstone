import React, { Component } from 'react';

import Input from './input';
import Content from './content';




const INITIAL_STATE = {
    king: '',
    judge: '',
    ledeade: '',
    song: '',
    balled: '',
    phantom: '',
    force: '',
    storm: '',
    terra: '',
    truth: '',
    dawn: '',
    dusk: '',
    royal: '',
    guard: '',
    north: '',
    pride: '',
    stream: '',
    sun: '',
    mech: '',
    aether: '',
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

        if(this.state.contentVisible) {
            this.setState(INITIAL_STATE)
        } else {
            this.setState({ contentVisible: true })
        }
    }

    render() {

        const inputData = [
            {title: 'king', state: this.state.king, name: 'king'},
            {title: 'judge', state: this.state.judge, name: 'judge'},
            {title: 'ledeade', state: this.state.ledeade, name: 'ledeade'},
            {title: 'song', state: this.state.song, name: 'song'},

            {title: 'balled', state: this.state.balled, name: 'balled'},
            {title: 'phantom', state: this.state.phantom, name: 'phantom'},
            {title: 'force', state: this.state.force, name: 'force'},
            {title: 'storm', state: this.state.storm, name: 'storm'},

            {title: 'terra', state: this.state.terra, name: 'terra'},
            {title: 'truth', state: this.state.truth, name: 'truth'},
            {title: 'dawn', state: this.state.dawn, name: 'dawn'},
            {title: 'dusk', state: this.state.dusk, name: 'dusk'},

            {title: 'royal', state: this.state.royal, name: 'royal'},
            {title: 'guard', state: this.state.guard, name: 'guard'},
            {title: 'north', state: this.state.north, name: 'north'},
            {title: 'pride', state: this.state.pride, name: 'pride'},

            {title: 'stream', state: this.state.stream, name: 'stream'},
            {title: 'sun', state: this.state.sun, name: 'sun'},
            {title: 'mech', state: this.state.mech, name: 'mech'},
            {title: 'aether', state: this.state.aether, name: 'aether'},
        ]

        return (
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card__inputs">
                {
                    inputData.map((data, index) => {
                        return Input( (data), this.handleInputChange, index) 
                    })
                }
                </div>
                <button className={`card__${!this.state.contentVisible ? 'generate' : 'clear'}`} type="submit">{!this.state.contentVisible ? 'Find our lineage' : 'Clear Form'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
            </form>
        )
    }
}

export default Card;