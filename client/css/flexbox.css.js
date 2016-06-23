const styles = {
  "base": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "height": "100%"
  },
  "nested": {
    "flex": "1 50%",
    "height": "50%",
    "@media (maxWidth: 540px)": {
      "flexDirection": "column",
      "height": "25%"
    }
  }
}

// "flexDirection":"row",
// "flexWrap":"wrap",
// "minHeight":"100%",
// "width":"100%"

// "flexDirection":"row",
// "flexWrap":"wrap",
// "minHeight":"100%"

export default styles;
