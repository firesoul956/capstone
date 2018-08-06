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
                         King has the magic of illusions, the clan is load by master Xian King. this is the oldest clan of the magi
                </p>
                </div>
            )
        }
        if (data.legends == 'judge') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                         Judge has the magic of time, the clan is lead by the head judge Kronifar Judge. they were picked by the hand of the people to be the officators of the court
                </p>
                </div>
            )
        }
        if (data.legends == 'le deade') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                         Le Deade has the magic of necromancy otherwise known as death magic, it is lead by the first necromancer. his name is Mortimus Le Deade.
                </p>
                </div>
            )
        }
        if (data.legends == 'song') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                         Song has the magic of life, the leader of the song clan is Esure Song, brother of Dimitry Balled the master of sound. he took the name of song in reverence for dimitry at a time where Esure thought Dimitry had died.
                         they are healers of the greatest caliber renown by all.

                </p>
                </div>
            )
        }
        if (data.legends == 'balled') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                        Balled has the magic of  sound, their clan leader is Dimitry Balled. Dimitry is credited for bringing the elementals of sound back from extinction. balleds are natural born leaders, as such in a meeting of many clans they lead.
                </p>
                </div>
            )
        }
        if (data.legends == 'phantom') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                         Phantom has the magic of dreams, they are lead by the assasin Noxi Phantom. a mysterious clan that keeps to themselves they are known for being able to enter people dreams and wreak havoc.
                </p>
                </div>
            )
        }
        if (data.legends == 'force') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                         Force has the magic of space, they are lead by the honnorable Yytol Force. Space magic is the art of teleporting, as such they are the quickest, most reliable, and most expensive modes of transport.
                </p>
                </div>
            )
        }
        if (data.legends == 'storm') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                        Storm has the magic of air. they are lead by master Gale Storm. This clan is unique in the fact that at some points it melds together with the clan of Aether. this is due to the death of Rayo Aether, after which Gale promised to look after his family.
                </p>
                </div>
            )
        }
        if (data.legends == 'terra') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:

                       Terra has the magic of earth, Their leader is Raze Terra. A clan of few words, they do not activly engage with other clans.

                </p>
                </div>
            )
        }
        if (data.legends == 'truth') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:

                       Truth has the magic of reflections, Although he has yet to be seen the truth clan is lead by master Mira Truth. the clan abores violance and whenever colfict does break out they are the ones convince the warring clans to make peace.
                    </p>
                </div>
            )
        }
        if (data.legends == 'dawn') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:

                       Dawn is the magic of light, they are lead by Zeezrai Dawn, the constant enemy of the clan of dusk, the clans of dawn and dusk are the most likley to fight.

                </p>
                </div>
            )
        }
        if (data.legends == 'dusk') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:

                        Dusk is the magic of darkness, they are lead by Ozemi dusk, the constant enemy of the clan of dawn, the clans of dawn and dusk are the most likley to fight.

                </p>
                </div>
            )
        }
        if (data.legends == 'royal') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                       Royal is the magic of magnetism, they are lead by a former warlord by the name if Arkeantus Royal. They are the most militaristic of the clans. they tend to be the police force of all the clans

                </p>
                </div>
            )
        }
        if (data.legends == 'guard') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                        Guard is the magic of gravity, they are lead by Torrac Guard. the guard clan tends to be the hired protectors. however the people they protect the most is the people who have not joined a clan. they are the defenders of the innocent and the weak.
                </p>
                </div>
            )
        }
        if (data.legends == 'north') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:

                        North has the magic of ice, they are lead by Forzeno North. They tend to be the jailkeepers of troublesome forces.

                </p>
                </div>
            )
        }
        if (data.legends == 'pride') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                        Pride has the magic of decay, they are lead by the Vile Gentleman Rygar Pride. they are scientists and their only goal is advancement. they are a loyal clan and anyone who earns the loyalty of one of them has the entire clan backing them.
                </p>
                </div>
            )
        }
        if (data.legends == 'stream') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                        Stream has the magic of water, one of the most carefree clans, they are lead by Mizuki Stream. their main income comes from trade over the seas.

                </p>
                </div>
            )
        }
        if (data.legends == 'sun') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                        Sun has the magic of fire, another militaristic clan. they are lead by Wildfire Sun. the clan of sun are strategic masterminds. they may be lacking the diciplin of the Roayls, but their brilliance is hard to match.

                </p>
                </div>
            )
        }
        if (data.legends == 'mech') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                        Mech is the art of technology, the clan is lead by the A.V.I.S. system. because they do not have magic they are builders. they will take in anybody who has a wish to improve, it doesn't matter if they have magic or not.

                </p>
                </div>
            )
        }
        if (data.legends == 'aether') {

            return (
                <div className="card__content">
                    <p>
                        the magic of the legends:
                         Aether has the magic of lightining, they were lead by the late Rayo Aether. This clan has all but merged with the clan of Storm, Rayos last wish was for someone to protect his family and Gale Storm and his clan took up that responsibility.
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