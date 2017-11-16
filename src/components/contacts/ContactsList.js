import React, { Component } from 'react';
import Contact from './Contact';

import './ContactsList.less';

var CONTACTS = [
    {
      id: 1,
      name: 'Darth Vader',
      phoneNumber: '+2500457822',
      image: 'https://www.frogx3.com/wp-content/uploads/2015/11/la-vida-oculta-de-Darth-Vader-img-13.jpg'
    }, 
    {
      id: 2,
      name: 'Princess Leia',
      phoneNumber: '+354891389',
      image: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg'
    }, {
      id: 3,
      name: 'luke Skywalker',
      phoneNumber: '+987653686',
      image: 'https://static.comicvine.com/uploads/original/11117/111171111/4096052-2483041390-artic.jpg'
    }, {
      id: 4,
      name: 'Chewbacca',
      phoneNumber: '+784386457985',
      image: 'http://static2.wikia.nocookie.net/__cb20080815045821/starwars/images/7/73/Chewbaccaheadshot.jpg'
    },
  ];

export default class ContactsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedContacts: CONTACTS
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    var searchQuery = event.target.value.toLowerCase();
    var displayedContacts = CONTACTS.filter(function(elem) {
      var searchValue = elem.name.toLowerCase();
      return (searchValue.indexOf(searchQuery) !== -1);
    });
    this.setState({
      displayedContacts: displayedContacts
    });
  }

  render() {
    return (
      <div className="contacts">
        <input type="text" className="search-field" onChange={this.handleSearch}/>
        <ul className="contacts-list">
          {
            this.state.displayedContacts.map(function(elem) {
              return <Contact key={elem.id} 
                name={elem.name} 
                phone={elem.phoneNumber} 
                photo={elem.image} 
              />;
            })
          }
        </ul>
      </div>
    );
  }
}