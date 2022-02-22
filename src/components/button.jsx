import React from 'react';
import classNames from 'classnames';
import './button.scss';

// size : large, medium, small
// color : blue, pink, gray
const Button = ({children, size, color, outline, fullWidth, className, ...rest}) => {
    return (        
        <button className={classNames('Button', size, color, {outline, fullWidth}, className)} {...rest}>
            {/* <button className={['Button', size].join(' ')}> */}
            {children}
        </button>
    )
};
Button.defaultProps = {
    size:'medium',
    color:'blue'
}
export default Button;