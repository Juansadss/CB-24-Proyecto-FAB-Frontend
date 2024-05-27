import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from "react-icons/fa6";
import '../guard-management/guard-management.css'; 
import './dropdown-input-search.css'
import '../search-bar-styles.css'

interface Option {
  value: string;
  label: string;
}

interface DropdownInputSearchProps {
  options: Option[];
  onOptionSelect?: (option: Option) => void;
}

function DropdownInputSearch({ options, onOptionSelect }:DropdownInputSearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleIconClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionSelect!(option);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-Input-search" ref={selectRef}>
        <div className='sar-search-bar-item'>
            <div className="selected-option sar-search-input" onClick={() => setIsOpen(!isOpen)}>
              {selectedOption ? selectedOption.label : "Seleccione una opción"}
            </div>
            <button className="sar-search-button" onClick={handleIconClick}>
              <FaChevronDown />
            </button>
        </div>      
        {isOpen && (
            <div className="options">
            {options.map(option => (
                <div key={option.value} className="option" onClick={() => handleOptionClick(option)} >
                  {option.label}
                </div>
            ))}
            </div>
        )}
    </div>
  );
};

export default DropdownInputSearch;
