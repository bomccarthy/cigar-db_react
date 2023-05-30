import React, { Component } from 'react'
import '../main.css';

export default class CigarCard extends Component {

  render() {
    const c = this.props.card
    return (
      <div className="card px-5 border-0" style={{ backgroundColor: '#343a40', color: '#FFFFFF', fontSize: '1.5rem' }}>
        <img src={c.img_url} className="card-img-top mx-auto" alt={c.cigar} style={{ width: '15rem' }} />
        <div className="card-body">
          <h2 className="card-title">{c.cigar}</h2>
          <div className="row">
            <div className="col-sm-3"><span className="card-text">Length: {c.length} inches</span></div>
            <div className="col-sm-9"><span className="card-text">Ring Gauge: {c.ring_gauge}</span></div>
          </div>
          <div className="row">
            <div className="col-sm-3"><span className="card-text">Origin: {c.country}</span></div>
            <div className="col-sm-9"><span className="card-text">Shape: {c.shape}</span></div>
          </div>
          <div className="row">
            <div className="col-sm-3"><span className="card-text">Wrapper: {c.wrapper}</span></div>
            <div className="col-sm-3"><span className="card-text">Binder: {c.binder}</span></div>
            <div className="col-sm-6"><span className="card-text">Filler: {c.filler}</span></div>
          </div>
          <div className="row">
            <div className="col-sm-3"><span className="card-text">Color: {c.color}</span></div>
            <div className="col-sm-9"><span className="card-text">Strength: {c.strength}</span></div>
          </div>
          <div className="row">
            <div className="col-sm-3"><span className="card-text">Start Mfg Year: {c.start_mfg_yr}</span></div>
            <div className="col-sm-9"><span className="card-text">Last Mfg Year: {c.end_mfg_yr}</span></div>
          </div>
          <p className="card-text">Image of Cigar: </p>
          <img src={c.img_cigar} alt='None' />
          <p className="card-text">More information can be found at...</p>
          <a href={c.mfg_website} target='_blank' rel='noreferrer'>{c.mfg_website}</a>
        </div>
      </div>
    )
  }
}
