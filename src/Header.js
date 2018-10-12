import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';


const Header = () => {
  return(
    <div className={css(styles.headerContainerStyle)}>
    Header
    </div>
  )
}

const styles = StyleSheet.create({
  headerContainerStyle: {
    backgroundColor: 'blue',
    width: '100vw',
    height: '30vh',
    borderBottom: 'solid',
    borderWidth: 'thick',
    textAlign: 'center',
    fontSize: '5em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  }
});

export default Header;
