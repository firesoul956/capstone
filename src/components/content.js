import React, { Component } from 'react';

class Content extends Component {

    constructor() {
        super()
        this.count = 1;
    }

    componentWillReceiveProps() {
        this.count = 1;
    }


    renderLabel(data) {
        return [
            <div className="card__content__label">{this.count++}</div>,
            <b>{data}</b>
        ]
    }

    render() {
        const data = this.props.data;
        // this.props.data.map((object,index) => {
        //     console.log(index);
        // })
        // <span>{data.indexOf(data.color)}</span>
        return (
            <div className="card__content">
                <p>
                    the magic of the legends: {this.renderLabel(data.King)} King has illusions,  
                    {this.renderLabel(data.Judge)} Judge has time, 
                    {this.renderLabel(data.Le_Deade)} Le Deade has necromancy, 
                    {this.renderLabel(data.Song)} Song has life, 
                    {this.renderLabel(data.Balled)} Balled has sound, 
                    {this.renderLabel(data.Phantom)} Phantom has dreams, 
                    {this.renderLabel(data.Force)} Force has space, 
                    {this.renderLabel(data.Storm)} Storm has air,
                    {this.renderLabel(data.Terra)} Terra has earth, 
                    {this.renderLabel(data.Truth)} Truth has reflections, 
                    {this.renderLabel(data.Dawn)} Dawn is light, 
                    {this.renderLabel(data.Dusk)} Dusk is darkness, 
                    {this.renderLabel(data.Royal)} Royal is magnetism, 
                    {this.renderLabel(data.Guard)} Guard is gravity, 
                    {this.renderLabel(data.North)} North has ice, 
                    {this.renderLabel(data.Pride)} Pride has decay,
                    {this.renderLabel(data.Stream)} Stream has water,
                    {this.renderLabel(data.Sun)} Sun has fire,
                    {this.renderLabel(data.Mech)} Mech is technology,
                    {this.renderLabel(data.Aether)} Aether has lightining
                </p>
            </div>
        )
    }
}

export default Content;