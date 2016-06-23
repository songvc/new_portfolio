// const styles = {
//   "default": {
//     "display": "flex",
//     "flexDirection": "row",
//     "flexWrap": "wrap"
//   },
//   "non-nested": {
//     "height": "100%"
//   },
//   "nested": {
//     "flex": "1 50%",
//     "height": "50%",
//     "@media (max-Width: 540px)": {
//       "flexDirection": "column",
//       "height": "25%"
//     }
//   }
// }
//
// const mediaQueries = {
//   "@media (maxWidth: 540px)":{
//     "flex": '1 100%',
//     "width": "100%",
//     "height": "25%"
//   }
// }

const styles = {
  divStyle: {
    "base": {
      "position":"relative",
      "weight": "100%",
      "height": "100%",
      "cursor": "pointer",
      "justifyContent": "center",
      "alignItems": "center",
      "@media (max-Width: 540px)":{
        "flex": '1 100%',
        "height": "25%"
      }
    },
  },
  linkStyle: {
    "base": {
      "textDecoration": "none"
    },
    "isHovering": {
      "display": "none"
    },
    "isNotHovering": {
      "display": "block"
    }
  },
  iconStyle: {
    "base":{
      "position":"absolute",
      "display": "none"
    },
    "isHovering": {
      "display": "inline-block"
    },
    "isNotHovering": {
      "display": "none"
    }
  }
}

export default styles;
