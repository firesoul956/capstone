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
        if (data.legends == 'king') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                        King has illusions
                </p>
                </div>
            )
        }
        if (data.legends == 'judge') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                        Judge has time
                </p>
                </div>
            )
        }
        if (data.legends == 'le deade') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                         Le Deade has necromancy
                </p>
                </div>
            )
        }
        if (data.legends == 'song') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
    
                        Song has life
    
                </p>
                </div>
            )
        }
        if (data.legends == 'balled') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                         Balled has sound
                </p>
                </div>
            )
        }
        if (data.legends == 'phantom') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                         Phantom has dreams
                </p>
                </div>
            )
        }
        if (data.legends == 'force') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                         Force has space
                </p>
                </div>
            )
        }
        if (data.legends == 'storm') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                        Storm has air
                </p>
                </div>
            )
        }
        if (data.legends == 'terra') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
    
                       Terra has earth,
    
                </p>
                </div>
            )
        }
        if (data.legends == 'truth') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
    
                       Truth has reflections,
                    </p>
                </div>
            )
        }
        if (data.legends == 'dawn') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
    
                       Dawn is light,
    
                </p>
                </div>
            )
        }
        if (data.legends == 'dusk') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
    
                        Dusk is darkness,
    
                </p>
                </div>
            )
        }
        if (data.legends == 'royal') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                       Royal is magnetism,
    
                </p>
                </div>
            )
        }
        if (data.legends == 'guard') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                        Guard is gravity,
                </p>
                </div>
            )
        }
        if (data.legends == 'north') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
    
                        North has ice,
    
                </p>
                </div>
            )
        }
        if (data.legends == 'pride') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                        Pride has decay,
                </p>
                </div>
            )
        }
        if (data.legends == 'stream') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                        Stream has water,
    
                </p>
                </div>
            )
        }
        if (data.legends == 'sun') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                        Sun has fire,
    
                </p>
                </div>
            )
        }
        if (data.legends == 'mech') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                        Mech is technology,
    
                </p>
                </div>
            )
        }
        if (data.legends == 'aether') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                         Aether has lightining
                </p>
                </div>
            )
        }
        return (
			<div className="card__content">
				<p>
					that is no magical line asscociated with that name
				</p>
			</div>
		)
    }
}

export default Content;