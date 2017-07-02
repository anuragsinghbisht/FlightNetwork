import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    loading: state.loading
  };
}
class LoadingComponent extends React.Component {
  render(){
    return(
        this.props.loading &&
        <div className="loading-div">
          <div className="loader"></div>
        </div>
    );
  }
}

export default connect(mapStateToProps, null)(LoadingComponent);
