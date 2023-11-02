import React from 'react';
import { Link } from 'react-router-dom'

export const HomeCard = (props) => {
    return (
        <div className="card" style={{minWidth:"13rem"}}>
            <object data={props.image} className="card-img-top" type="image/jpg">
                <img src="https://via.placeholder.com/400x400.png?text=This+image+was+not+found" className="card-img-top" alt="..."/>
            </object>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div className='mx-auto'>
                    <Link to={`/learn-more/${props.uid}`}>
                        <button type="button" className="btn btn-outline-primary">Learn More!</button>
                    </Link>
                    <button type="button" className="btn btn-outline-warning float-end">
                        <i className='fa fa-heart'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}