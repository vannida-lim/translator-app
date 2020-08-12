import React, { useState, useEffect, useRef} from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    

    return (
        <div>
            <div className='ui form' ref={ref}>
                <div className='field'>
                    <label className='label'>{label}</label>
                    <div
                        onClick={() => setOpen(!open)}
                        className={`ui seleciton dropdown ${open ? 'visible active' : ''}`}
                    >
                        <i className='dropdown icon'></i>
                        <div className='text'>{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>{null}</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dropdown;