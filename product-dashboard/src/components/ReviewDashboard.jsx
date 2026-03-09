import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

export class ReviewDashboard extends Component {
    render() {
        return (
            <div>
                <h1>Product Dashboard</h1>
                <div className="d-flex gap-3 flex wrap">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ0ns_mGhP3dDcZx7d2A-cV1E-xSOcEECdFdZ7ueLdVRb9emsP0oR3EhahKp7nYtCB8ucIlt55CDiCgEcQLHF_o2zpW0-hiRmUd8F79QN4xvEXbMF3VPCd8Sw" />
                        <Card.Body>
                            <Card.Title>Campus Men's Running Shoes</Card.Title>
                            <Card.Text>
                                Lightweight running shoes designed for daily training and comfort.Features breathable mesh and durable rubber sole for superior grip.
                            </Card.Text>

                            <Button variant="primary" style={{margin:"20px"}}>Show Reviews</Button>
                            <Button variant="primary">Add Review</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTW_rYTON4yA4fZbuAwXA9s2a2hgBBsQwbJCBp2mwlje6kk-pT6QattXavttAUaUsjMIU6Pnn6OEkXYnlnSZIvNdKgUJ86VR49OeStkg8lldALQrIv6tkOACQ" />
                        <Card.Body>
                            <Card.Title>Elevarse Sport Shoes</Card.Title>
                            <Card.Text>
                                Stylish sport shoes built for both performance and casual wear. Offers cushioned support and flexible movement for all-day comfort.
                            </Card.Text>
                            <Button variant="primary" style={{margin:"20px"}}>Show Reviews</Button>
                            <Button variant="primary">Add Review</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTGwvUsk5k8AWWSb4x9aihLKMAUeHrZJaKLz0codhMtYlJMqvMCGrrAAkL7aJQ_awxvTOUqLWCjAUDuWwOwj_OJeJiBbqWnMnSGzNnNTeYSIVS4s5IOLUiDrg" />
                        <Card.Body>
                            <Card.Title>Sparx Shoes</Card.Title>
                            <Card.Text>
                                Rugged and sporty footwear made for outdoor activities. Delivers great traction, long-lasting durability, and a modern look.
                            </Card.Text>
                            <Button variant="primary" style={{margin:"20px"}}>Show Reviews</Button>
                            <Button variant="primary">Add Review</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTCuJuIa7j1_JyLJfl2PaAZxrvaJYx4a4k70_y1UDFuMnubAGMJ4wPhOU1uyOS0Gp2kxAvyDiJ_go164oMSbvDIQAhTmfyMgWJkT6Ys5tr8_MrWCkDcGjTHqg" />
                        <Card.Body>
                            <Card.Title>Neemans Walk Glide</Card.Title>
                            <Card.Text>
                               Eco-friendly sneakers crafted from sustainable materials. Soft cushioning ensures a smooth, effortless walking experience.
                            </Card.Text>
                            <Button variant="primary" style={{margin:"20px"}}>Show Reviews</Button>
                            <Button variant="primary">Add Review</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default ReviewDashboard
