import React from 'react';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container'>
      <div className='top-bar'>
        <h3>
          Notifications <Badge bg="danger">3</Badge>
        </h3>
        <div>
          Mark all as read
        </div>
      </div>

      <div className='notification'>
      Mark Webber reacted to your recent post My first tournament today!
      1m ago
      </div>

      <div className='notification'>
      Angela Gray followed you
      5m ago
      </div>

      <div className='notification'>
      Jacob Thompson has joined your group Chess Club
      1 day ago
      </div>

      <div className='notification'>
      Rizky Hasanuddin sent you a private message
      5 days ago
      Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
      I'm already having lots of fun and improving my game.
      </div>

      <div className='notification'>
      Kimberly Smith commented on your picture
      1 week ago
      </div>

      <div className='notification'>
      Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate
      2 weeks ago
      </div>

      <div className='notification'>
      Anna Kim left the group Chess Club
      2 weeks ago
      </div>

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>.
        Coded by <a href='https://www.linkedin.com/in/elinzer/' target='_blank' rel='noreferrer'>El Linzer</a>.
      </div>
    </div>
  );
}

export default App;
