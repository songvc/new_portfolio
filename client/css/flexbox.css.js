const styles = {
  base: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100'
  },
  nested:{
    flex: '1 50%'
  },
  flexItem: {
    flex: '1',
    width: '50'
  },
  mediaQueries: {
    '@media (maxWidth: 540px)': {
      backgroundColor: 'black',
      border: '1px solid black'
    }
  }
}

export default styles;
