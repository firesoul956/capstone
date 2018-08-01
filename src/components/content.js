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
                    the lineage of the legends: {this.renderLabel(data.king)} king has illusions,  
                    {this.renderLabel(data.judge)} judge has time, 
                    {this.renderLabel(data.ledeade)} le deade has necromancy, 
                    {this.renderLabel(data.song)} song has life, 
                    {this.renderLabel(data.balled)} Balled has sound, 
                    {this.renderLabel(data.phantom)} phantom has dreams, 
                    {this.renderLabel(data.force)} force has space, 
                    {this.renderLabel(data.storm)} storm has air,
                    {this.renderLabel(data.terra)} terra has earth, 
                    {this.renderLabel(data.truth)} truth has reflections, 
                    {this.renderLabel(data.dawn)} dawn is light, 
                    {this.renderLabel(data.dusk)} dusk is darkness, 
                    {this.renderLabel(data.royal)} Royal is magnetism, 
                    {this.renderLabel(data.guard)} guard is gravity, 
                    {this.renderLabel(data.north)} north has ice, 
                    {this.renderLabel(data.pride)} pride has decay,
                    {this.renderLabel(data.stream)} stream has water,
                    {this.renderLabel(data.sun)} sun has fire,
                    {this.renderLabel(data.aether)} aether has lightining
                </p>
            </div>
        )
    }
}

export default Content;