import React, { Component } from 'react';
import { IconList } from 'components';
import PropTypes from 'prop-types';
<<<<<<< HEAD

class TechIcon extends Component {
  render() {
  const { jsTechnology, dbTechnology, mobileTechnology} = this.props;
  const horizontal=true;
=======
class TechIcon extends Component {
  render() {
  const { array1, array2, array3} = this.props;
  const horizontal=true;
  
>>>>>>> 042f3e40d9a991d122cfa159685c1c1e76216494
  return (
    <div className="App">
      <div>
        <h1>TECHNOLOGY EXPERTISE</h1>
        <p>For the past 4 years NearShore Code has been providing software development
        services to businesses of differents areas and sizes. Thus, we have a range
        of specialist experienced in JS technologies, .Net Core and Mobile.
        Over time, we demonstrated capability to develop applications with the best quality</p>
      </div>
      <div>
        <h1>JS TECHNOLOGY</h1>
<<<<<<< HEAD
        <IconList images={jsTechnology} flow={horizontal?'':'vertical'}/>
      </div>
      <div>
        <h1>DB TECHNOLOGY</h1>
        <IconList images={dbTechnology} flow={horizontal?'':'vertical'}/>
      </div>
      <div>
        <h1>MOBILE TECHNOLOGY</h1>
        <IconList images={mobileTechnology} flow={horizontal?'':'vertical'}/>
=======
        <IconList images={array1} flow={horizontal?'horizontal':'vertical'}/>
      </div>
      <div>
        <h1>DB TECHNOLOGY</h1>
        <IconList images={array2} flow={horizontal?'horizontal':'vertical'}/>
      </div>
      <div>
        <h1>MOBILE TECHNOLOGY</h1>
        <IconList images={array3} flow={horizontal?'horizontal':'vertical'}/>
>>>>>>> 042f3e40d9a991d122cfa159685c1c1e76216494
      </div>
    </div>
);
}
}
TechIcon.propTypes = {
array1: PropTypes.array,
array2: PropTypes.array,
array3: PropTypes.array,
horizontal: PropTypes.bool,
};  
export default TechIcon;