import React from 'react';

const dropDownButton = (props) => {

  return (
    <div>
      <div className="book-shelf-changer">
        <select value={props.currentStatus.shelf ? props.currentStatus.shelf : "none"}
          onChange={(event) => props.selectStatus(props.currentStatus, event)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
  )
}
export default dropDownButton;