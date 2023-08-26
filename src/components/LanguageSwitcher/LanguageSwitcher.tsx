/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import classes from './LanguageSwitcher.module.scss';
import { changeLanguage } from 'i18next';
import cookies from 'js-cookie';

interface LanguageSwitcherProps {
  languages: string[];
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ languages }) => {
  const currentLanguageCode = cookies.get('i18next') ?? 'en';
  const [selectedLanguage, setSelectedLanguage] = useState<string>(currentLanguageCode);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    toggleDropdown();
  };

  const handleSelectLanguage = (language: string) => {
    selectLanguage(language);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    changeLanguage(language);
  };

  return (
    <div className={classes.languageSwitcher}>
      <div
        className={
          isDropdownOpen
            ? [classes.selectedLanguage, classes.activeSelected].join(' ')
            : classes.selectedLanguage
        }
        onClick={toggleDropdown}>
        {selectedLanguage}
      </div>

      <ul
        className={
          isDropdownOpen
            ? [classes.languageDropdown, classes.active].join(' ')
            : classes.languageDropdown
        }>
        {languages.map((language, index) => (
          <li
            key={index}
            className={classes.languageOption}
            onClick={() => handleSelectLanguage(language)}>
            {language}
          </li>
        ))}
      </ul>
    </div>
  );
};
