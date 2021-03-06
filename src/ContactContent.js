import React, { Component } from 'react';

class ContactContent extends Component {
    render() {
        const contact = this.props.contact;
        return (
            <React.Fragment>
                <strong>{contact.name}</strong>
                <br/>
                {contact.telephone}{contact.telephone && contact.email && ', '}{contact.email}
                <br/>
                {contact.category.map(categoryElement => "[" + categoryElement + "]").join(", ")}
                <br/>
                <button
                    onClick={() => this.props.removeContact(contact.id)}
                >
                    Delete contact
                </button>
            </React.Fragment>
        )
    }
}

export default ContactContent