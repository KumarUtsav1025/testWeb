import PropTypes from 'prop-types';

const Card = ({imageUrl }) => {
    return (
        <div style={{ height: '265px', width: '160px', margin:'2px', borderRadius:'20px',backgroundImage:imageUrl, backgroundSize:'cover', backgroundPosition:'center'}}>
        </div>      
    )
  }

  Card.propTypes = {
    imageUrl: PropTypes.string.isRequired
  };
  
  export default Card;