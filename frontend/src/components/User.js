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
                            <h3 style={{ backgroundColor: 'ghostwhite', alignSelf: 'flex-start'}}>{event.name}</h3>
                            <Moment style={{ backgroundColor: 'ghostwhite', alignSelf: 'flex-start'}} format="DD/MM/YYYY">{event.event_date}</Moment>
                            <hr />
                            <p style={{ backgroundColor: 'ghostwhite', alignSelf: 'flex-start'}}>The Sample Room is a one-room suite with queen-size bed and comfortable seating area. It is located downstairs with an outside entrance and is wheelchair assessable. It has a 39-inch flat screen TV and electric fireplace.</p>
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