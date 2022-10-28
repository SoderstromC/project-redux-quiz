import React from 'react';

const ProgressBar = (props) => {
  const { completed } = props;
  const containerStyles = {
    height: 20,
    width: '35%',
    backgroundColor: '#FFE4FF',
    borderRadius: 50,
    margin: 10
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: '#67456C',
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;