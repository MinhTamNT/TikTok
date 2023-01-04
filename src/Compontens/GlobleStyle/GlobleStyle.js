import './GlobleStyle.scss';
import PropTypes from 'prop-types';
function GlobleStyle({ children }) {
    return children;
}
GlobleStyle.propTypes = {
    children: PropTypes.node.isRequired,
};
export default GlobleStyle;
