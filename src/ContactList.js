import React, { Component } from 'react';
import ContactContent from "./ContactContent";

class ContactList extends Component {
    render() {
        return (
            <ul>
                {this.props.contacts.map(contact => (
                    <li key={contact.id}>
                        <ContactContent
                            contact={contact}
                            removeContact={this.props.removeContact}
                        />
                    </li>
                ))
                }
            </ul>
        )
    }
}

export default ContactList