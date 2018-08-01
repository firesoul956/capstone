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
                    the magic of the legends: {this.renderLabel(data.king)} King has illusions,  
                    {this.renderLabel(data.judge)} Judge has time, 
                    {this.renderLabel(data.ledeade)} Le Deade has necromancy, 
                    {this.renderLabel(data.song)} Song has life, 
                    {this.renderLabel(data.balled)} Balled has sound, 
                    {this.renderLabel(data.phantom)} Phantom has dreams, 
                    {this.renderLabel(data.force)} Force has space, 
                    {this.renderLabel(data.storm)} Storm has air,
                    {this.renderLabel(data.terra)} Terra has earth, 
                    {this.renderLabel(data.truth)} Truth has reflections, 
                    {this.renderLabel(data.dawn)} Dawn is light, 
                    {this.renderLabel(data.dusk)} Dusk is darkness, 
                    {this.renderLabel(data.royal)} Royal is magnetism, 
                    {this.renderLabel(data.guard)} Guard is gravity, 
                    {this.renderLabel(data.north)} North has ice, 
                    {this.renderLabel(data.pride)} Pride has decay,
                    {this.renderLabel(data.stream)} Stream has water,
                    {this.renderLabel(data.sun)} Sun has fire,
                    {this.renderLabel(data.mech)} Mech is technology,
                    {this.renderLabel(data.aether)} Aether has lightining
                </p>
            </div>
        )
    }
}

export default Content;