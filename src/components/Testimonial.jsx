import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
class Testimonial extends React.Component {
render() {
return (
<div className="tcont">
    <div className="tcont1">
    <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_k9HomGHQxI.json"  background="transparent"  speed="1"    loop  autoplay></lottie-player>
    </div>
<div className= 'starkcont container-fluid ' >
    

<div className="row">
<div className="col-12">
<Carousel className="caroushwp" style={{height:"230px",width:"350px",paddingLeft:"40px"}}>

<Carousel.Item>
    <h4>"We have been using this service to book flights and can't imagine working without it. "</h4>
    <h3>Olivia</h3>
<p>Brand Manager "yatra"</p>


</Carousel.Item>

<Carousel.Item>
<h4>"We have been using this service to book flights and can't imagine working without it. "</h4>
    <h3>Olivia2</h3>
<p>Brand Manager "yatra"</p>

</Carousel.Item>
<Carousel.Item>
<h4>"We have been using this service to book flights and can't imagine working without it. "</h4>
    <h3>Olivia3</h3>
<p>Brand Manager "yatra"</p>

</Carousel.Item>
</Carousel>
</div>
</div>
</div>
</div>
)
};
}
export default Testimonial;