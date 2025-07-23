// File: pages/Members.jsx
import React from 'react';

const members = [
  { id: 1, name: 'Karthick', bio: 'Software Engineer', image: 'https://picsum.photos/id/1/100/150' },
  { id: 2, name: 'Loks', bio: 'Fashion Designer', image: 'https://picsum.photos/id/65/100/150' },
  { id: 3, name: 'Dr Sathish', bio: 'Anaesthetist', image: 'https://picsum.photos/id/63/200/300' },
  { id: 4, name: 'Lokesh', bio: 'Telecom Engineer', image: 'https://picsum.photos/id/67/200/300' },
  { id: 5, name: 'Bhuvana', bio: 'Software Engineer', image: 'https://picsum.photos/id/68/200/300' },
  { id: 6, name: 'Mithun', bio: 'Production Manager', image: 'https://picsum.photos/id/69/200/300' },
  { id: 7, name: 'Shruthi', bio: 'Incident Manager', image: 'https://picsum.photos/id/70/200/300' },
  { id: 8, name: 'Chak', bio: 'General Manager', image: 'https://picsum.photos/id/71/200/300' },
  { id: 9, name: 'Priya', bio: 'General Manager', image: 'https://picsum.photos/id/72/200/300' },
  { id: 10, name: 'Suvathi', bio: 'Software Engineer', image: 'https://picsum.photos/id/60/200/300' },
  { id: 11, name: 'Avinesh', bio: 'Software Engineer', image: 'https://picsum.photos/id/74/200/300' },
  { id: 12, name: 'Dr Sharmila', bio: 'Dentist', image: 'https://picsum.photos/id/75/200/300' },
];

function Members() {
  return (
    <div>
      <h2>Community Members</h2>
      <div className="row">
        {members.map(member => (
          <div className="col-md-4" key={member.id}>
            <div className="card mb-4">
              <img src={member.image} className="card-img-top" alt={member.name} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
