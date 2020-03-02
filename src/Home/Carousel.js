import React, { Component } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./assets/slider-animated.css";
import "./assets/style.css";
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  carouselContent:{
    padding: theme.spacing(9, 0, 9),
  }
})

const carousel = [
  {
    title: "hey hey hey hey no bad",
    description: "hey hey hey hey hey hey hey hey no bad",
    button: "Read More!!!",
    image: 'https://i.imgur.com/DvmN8Hx.jpg',
  },
  {
    title: "hey hey hey hey hey hey hey hey hey hey no bad",
    description: "hey hey hey hey hey hey hey hey hey hey hey hey no bad",
    button: "Alucard",
    image: 'https://i.imgur.com/DCdBXcq.jpg',
  },
  {
    title: "hey hey hey hey ehy ehy ehy ehyehyehy no badddd",
    description: "hey hey ehy ehye hey hey hey hey",
    button: "Read More",
    image: 'https://i.imgur.com/DvmN8Hx.jpg',
  }
];

class Carousel extends Component {
  render(){
    const { classes } = this.props;
    return(
      <div className={classes.carouselContent}>
        <Slider className="slider-wrapper">
          {carousel.map((item,index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

export default withStyles(styles)(Carousel);
