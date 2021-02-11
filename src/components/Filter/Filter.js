import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { contactAction, contactsSelector } from '../../redux/contacts';

import './Filter.css';

const Filter = ({ filter, handleFilter }) => {
    return (
        <div className='filter_box'>
            <label className='input_label'>
                Find contact you need
                 <br></br>
                <input
                    className='filter_form'
                    type='text'
                    name='filter'
                    placeholder='Enter contact name'
                    value={filter}
                    onChange={handleFilter}
                />
            </label>
        </div >
    )
}

const mapStateToProps = state => ({
    filter: contactsSelector.filterSelector(state),
});

const mapDispatchToProps = {
    handleFilter: contactAction.handleFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            id: PropTypes.string,
            number: PropTypes.string,
        }).isRequired,
    ),
    filter: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
};