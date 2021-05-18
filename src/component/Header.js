import PropTypes from 'prop-types'
import Button from './Button' 
import Task from './components/Task'
const Header = ({title}) => {
    return (
        <header className ='header'>
          <h1 style ={headingStyle}>{title}</h1>  
           
        <Button color='green' text ='Hello' />
        </header>
    )
}
Header.defaultProps ={
    title : 'Task Tracker',
}

Header.propTypes ={
    title :PropTypes.string,
}
const headingStyle={
    color : 'red',
    background : 'black'
}
export default Header