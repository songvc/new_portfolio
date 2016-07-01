const styles = {
  divStyle: {
    base: {
      position: 'relative',
      weight:  '100%',
      height:  '100%',
      cursor:  'pointer'
    },
  },
  linkStyle: {
    base: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate3d(-50%,-50%,0)',
      textDecoration: 'none',
      fontSize: '1.2em',
      textTransform:'uppercase',
      letterSpacing: '0.1em',
      display: 'block'
    },
    hover: {
      visibility: 'hidden'
    }
  },
  iconStyle: {
    base:{
      position:'absolute',
      top: '50%',
      transform: 'translate3d(-50%,-50%,0)',
      left:'10%',
      visibility: 'hidden',
      transition:'left 0.3s',
    },
    hover: {
      visibility: 'visible',
      left: '50%'
    }
  }
}

export default styles;
