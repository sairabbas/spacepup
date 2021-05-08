import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Moment from 'react-moment';

import AppNav from './AppNav';

class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            Events: []
        }
        this.bookEvent = this.bookEvent.bind(this);
    }

    bookEvent(id) {
        window.localStorage.setItem("eventId", id);
        this.props.history.push('/booking');
    }

    async componentDidMount() {
        const response = await fetch('/api/events');
        const body = await response.json();
        this.setState({Events: body, isLoading: false});
    }

    render() {
        const {Events, isLoading} = this.state;
        if(isLoading)
            return (<div>Loading...</div>);

        return (
            <div>
                <AppNav />
                <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >Available Rooms</h1>
                {
                    Events.map(event => 
                        <div id={event.id} className="boxed" style={{ justifyContent: 'center'}}>
                            <h3>{event.name}</h3>
                            <Moment format="DD/MM/YYYY">{event.event_date}</Moment>
                            <hr />
                            <p>Blew up and I'm in the city still, I'm still here, dawg</p>
                            <Button 
                                color="primary"
                                onClick={() => this.bookEvent(event.id)}
                                >
                                Book
                                </Button>
                        </div>    
                    )
                }   
            </div>
        );
    }
}

export default User;