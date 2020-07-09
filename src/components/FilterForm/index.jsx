import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useRef } from 'react';

FilterForm.propTypes = {
    onFilter: PropTypes.func,
};

FilterForm.default = {
    onFilter: null
};

function FilterForm(props) {
    const [searchKey, setSearchKey] = useState('');
    const { onFilter } = props;
    const typingTimeoutRef = useRef(null);

    function onFilterForm(e) {
        const { value } = e.target;

        if (value) {
            setSearchKey(value);

            if(typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

            if (onFilter) {
                typingTimeoutRef.current = setTimeout(() => {
                    const formValues = {
                        searchKey: value
                    }
    
                    onFilter(formValues);
                }, 500);
            }
        }
    }

    return (
        <form>
            <input
                type="text"
                onChange={onFilterForm}
            />
        </form>
    );
}

export default FilterForm;