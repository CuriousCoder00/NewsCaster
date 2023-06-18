import React, { Component } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
// import Loading from './Spinner.gif';
export default class Spinner extends Component {
  
  render() {
    return (
      // <div className='text-center'>
      //   <img src={Loading} alt="Loading..." />
      // </div>
      <div className='text-center'>
        <ClipLoader
        color={this.props.mode==='dark'?'rgb(255 255 255)':'rgb(4, 17, 33)'}
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
    )
  }
}
