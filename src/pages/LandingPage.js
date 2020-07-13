import React, { Component } from 'react'
import Button from 'elements/Button'
import img1 from 'assets/images/1.jpg'
import img2 from 'assets/images/2.jpg'
import img3 from 'assets/images/3.jpg'
import img4 from 'assets/images/4.jpg'
import img5 from 'assets/images/5.jpg'
import img6 from 'assets/images/6.png'
import img7 from 'assets/images/7.jpg'

export default class LandingPage extends Component {
    render() {
        return (
            <section className="container">
                <div className="container-grid">
                    <div className="item column-4 row-2">
                        <div className="card">Card 1</div>
                    </div>
                    <div className="item column-4 row-1">
                        <div className="card">Card 2</div>
                    </div>
                    <div className="item column-4 row-1">
                        <div className="card">Card 3</div>
                    </div>
                    <div className="item column-4 row-1">
                        <div className="card">Card 4</div>
                    </div>
                    <div className="item column-4 row-1">
                        <div className="card">Card 5</div>
                    </div>
                </div>
            </section>
        );
    }
}