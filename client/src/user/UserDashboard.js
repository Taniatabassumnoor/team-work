import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link as NavLink } from 'react-router-dom';
import { getPurchaseHistory } from './apiUser';
import moment from 'moment';
import AdminPanel from '../AdminPanel/AdminPanel/AdminPanel';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TimelineIcon from '@material-ui/icons/Timeline';
import RateReviewIcon from '@material-ui/icons/RateReview';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Analytics from './Analytics';

const Dashboard = () => {
  
  const [history, setHistory] = useState([]);

  const {
    user: { _id, name, email, role },
  } = isAuthenticated();

  const token = isAuthenticated().token;

  const init = (userId, token) => {
    getPurchaseHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setHistory(data);
      }
    });
  };

  useEffect(() => {
    init(_id, token);
  }, []);

  const userLinks = () => {
    return (
      <div className='card'>
        <div className='wrapper'>
        <h4 className='card-header'>User links</h4>
        <ul className='list-group'>
          <li style={{fontWeight:"bold",fontSize:20}} className='list-group-item'>
            <NavLink className='nav-link' to='/cart'>
            <IconButton aria-label='Cart'className='icons' color='inherit'>
              <ShoppingCartIcon />
            </IconButton>
             My Cart
            </NavLink>
          </li>
          <li style={{fontWeight:"bold",fontSize:20}} className='list-group-item'>
            <NavLink className='nav-link' to={`/profile/${_id}`}>
            <IconButton aria-label='Cart' color='inherit'>
              <AccountCircleRoundedIcon />
            </IconButton>
              Update profile
            </NavLink>
          </li>
          
          <li style={{fontWeight:"bold",fontSize:20}} className='list-group-item'>
            <NavLink className='nav-link' to={'/useranalytics'}>
            <IconButton aria-label='TimeLine' color='inherit'>
              <TimelineIcon />
            </IconButton>
              Analytics
            </NavLink>
          </li>
          <li style={{fontWeight:"bold",fontSize:20}} className='list-group-item'>
            <NavLink className='nav-link' to={`/profile/${_id}`}>
            <IconButton aria-label='TimeLine' color='inherit'>
              <RateReviewIcon />
            </IconButton>
              My Review
            </NavLink>
          </li>
        </ul>
        </div>
      </div>
    );
  };

  const userInfo = () => {
    return (
      <div className='card mb-5'>
        <h3 className='card-header'>User information</h3>
        <ul className='list-group'>
          <li className='list-group-item'>{name}</li>
          <li className='list-group-item'>{email}</li>
          <li className='list-group-item'>
            {role === 1 ? 'Admin' : 'Registered user'}
          </li>
          <Analytics></Analytics>
        </ul>
      </div>
    );
  };

  const purchaseHistory = (history) => {
    return (
      <div className='card mb-5'>
        <h3 className='card-header'>Purchase history</h3>
        <ul className='list-group'>
          <li className='list-group-item'>
            {history.map((h, i) => {
              return (
                <div>
                  <hr />
                  {h.products.map((p, i) => {
                    return (
                      <div key={i}>
                        <h6>Product name: {p.name}</h6>
                        <h6>Product price: ${p.price}</h6>
                        <h6>Purchased date: {moment(p.createdAt).fromNow()}</h6>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout
      title='Dashboard'
      description={`${name}`}
      className='container-fluid'
    >
      <div className='row'>
        <div className='col-md-3'>{userLinks()}</div>
        <div className='col-md-9'>
          {userInfo()}
          {purchaseHistory(history)}
        </div>
      </div>
      
    </Layout>
  );
};

export default Dashboard;
