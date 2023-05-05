import React, { Children } from 'react';
import { Link, useMatch } from 'react-router-dom';

const CustomLink = (props) => {
    const match = useMatch(props.to);
  return (
    <Link 
        to={props.to}

        style={{
            color: match ? 'var(--color-active)' : 'white'
        }}
        >
        {props.children}

    </Link>
  )
}

export default CustomLink