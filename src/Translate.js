import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Chinese (Simplified)',
        value: 'zh'
    },
    {
        label: 'French',
        value: 'fr'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Khmer',
        value: 'km'
    },
    {
        label: 'Korean',
        value: 'ko'
    },
    {
        label: 'Spanish',
        value: 'es'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className='ui form translate'>
                <div className='field'>
                <label>Enter Text to Translate</label>
                <input value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown 
                label='Select a Language'
                selected={language}
                onSelectedChange={setLanguage}
                options={options}
            />
            <div id='convert'>
                <label className='label'>Output</label>
                <Convert text={text} language={language}/>
            </div>
        </div>
    );
};

export default Translate;
