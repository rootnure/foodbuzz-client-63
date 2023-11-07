import PropTypes from 'prop-types';

const SectionHeading = ({ children }) => {
    return (
        <>
            <h2 className="text-center text-4xl font-bold mb-12">{children}</h2>
        </>
    );
};

SectionHeading.propTypes = {
    children: PropTypes.string.isRequired
}

export default SectionHeading;