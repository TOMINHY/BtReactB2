import React, { Component } from 'react'
import data from "../data/dataGlasses.json"
export default class BTDoiKinh extends Component {
    state = {
        glassesList: data
    }

    renderglassList = () => {
        return data.map((glass) => {
            let { id, url } = glass
            return <div className='col-4' key={`glass-${id}`}>
                <img className='glass' onClick={() => { this.changeGlass(glass) }} src={url} alt="" style={{ cursor: 'pointer' }} />
            </div>
        })
    }

    changeGlass = (gl) => {
        this.setState({
          glassesList: gl
        }, () => {
          console.log(gl)
        })
      }

   
    render() {
        return (
            <div className='container-fluid'>
                <h2 className='title text-center'>TRY GLASS APP ONLINE</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className='model'>
                                <img className='img-fluid' src="./glassesImage/model.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='model'>
                                <img className='img-fluid' src="./glassesImage/model.jpg" alt="" />
                            </div>
                            <div className='overlay-img'>
                                <img className='img-right' src={this.state.glassesList.url} alt="" />
                                <div className='intro'>
                                    <h5 className='text-title'>{this.state.glassesList.name}</h5>
                                    <p className='text'>{this.state.glassesList.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row renderGlass">
                        {this.renderglassList()}
                    </div>
                </div>

            </div>
        )
    }
}
