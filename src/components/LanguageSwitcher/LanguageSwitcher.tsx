import { changeLanguage } from 'i18next';
import cookies from 'js-cookie';
import React, { useState } from 'react';
import classes from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  languages: string[];
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ languages }) => {
  const currentLanguageCode = cookies.get('i18next') ?? 'en';
  const [selectedLanguage, setSelectedLanguage] = useState<string>(currentLanguageCode);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const handleSelectLanguage = (language: string) => {
    selectLanguage(language);
    void changeLanguage(language);
  };

  return (
    <div
      className={classes.languageSwitcher}
      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      onMouseEnter={() => setIsDropdownOpen(true)}
      onMouseLeave={() => setIsDropdownOpen(false)}>
      <div
        className={
          isDropdownOpen
            ? [classes.selectedLanguage, classes.activeSelected].join(' ')
            : classes.selectedLanguage
        }>
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
