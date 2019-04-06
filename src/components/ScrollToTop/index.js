import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

const ScrollToTop = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location.pathname]);
  return props.children;
};

export default withRouter(ScrollToTop);

ScrollToTop.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
