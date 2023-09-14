import React, { type FC, useState } from 'react';
import classes from './RadioButton.module.scss';

interface RadioButtonProps {
  options: string[];
  onChange: (selectedOption: string) => void;
}

export const RadioButton: FC<RadioButtonProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(options[0]);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className={classes.radioButton}>
      {options.map((option) => (
        <button
          key={option}
          className={`${classes.radioButtonButton} ${
            selectedOption === option ? classes.selected : ''
          }`}
          onClick={() => handleOptionChange(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};
