import React from 'react';

const Icons = {

  Edit: function() {
    return  (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 19.9998H9L19.5 9.49981C20.0304 8.96938 20.3284 8.24996 20.3284 7.49981C20.3284 6.74967 20.0304 6.03025 19.5 5.49981C18.9696 4.96938 18.2501 4.67139 17.5 4.67139C16.7499 4.67139 16.0304 4.96938 15.5 5.49981L5 15.9998V19.9998Z" stroke="#A4A4A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.5 6.49982L18.5 10.4998" stroke="#A4A4A4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  Back: function() {
    return (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.6665 16L14.6665 24" stroke="#111111" strokeWidth="5" strokeLinecap="square"/>
      <path d="M6.6665 16L14.6665 8" stroke="#111111" strokeWidth="5" strokeLinecap="square"/>
      </svg>
    )
  },
  Delete: function() {
    return (
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5H17" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 9V15" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 9V15" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 5L3 17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19H13C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L16 5" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 5V2C6 1.73478 6.10536 1.48043 6.29289 1.29289C6.48043 1.10536 6.73478 1 7 1H11C11.2652 1 11.5196 1.10536 11.7071 1.29289C11.8946 1.48043 12 1.73478 12 2V5" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  ArrowsSort: function() {
    return (
      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 6L6 2M6 2L10 6M6 2V16" stroke="#888888" strokeWidth="1.5" strokeLinecap="square"/>
      <path d="M20 12L16 16M16 16L12 12M16 16V2" stroke="#888888" strokeWidth="1.5" strokeLinecap="square"/>
      </svg>
    )
  },
  Add: function() {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0.999878V14.9999" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
      <path d="M1 8H15" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
      </svg>
    )
  },
  checkSort: function() {
    return (
      <svg width="13" height="10" id="checkdropdown" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.75 5L4.5 8.75L12 1.25" stroke="#4A4A4A" strokeLinecap="square"/>
      </svg>
    )
  },
  sortLatest: function() {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 4.5H9.75" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      <path d="M3 9H8.25" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      <path d="M3 13.5H8.25" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      <path d="M11.25 11.25L13.5 13.5L15.75 11.25" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      <path d="M13.5 4.5V13.5" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      </svg>
    )
  },
  sortOldest: function() {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 4.5H8.25" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      <path d="M3 9H8.25" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      <path d="M3 13.5H9.75" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      <path d="M11.25 6.75L13.5 4.5L15.75 6.75" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      <path d="M13.5 4.5V13.5" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      </svg>
    )
  },
  sort_az: function() {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.25 7.5V3.75C11.25 2.715 11.715 2.25 12.75 2.25C13.785 2.25 14.25 2.715 14.25 3.75V7.5M14.25 5.25H11.25" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      <path d="M14.25 15.75H11.25L14.25 10.5H11.25" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      <path d="M3 11.25L5.25 13.5L7.5 11.25" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      <path d="M5.25 4.5V13.5" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      </svg>
    )
  },
  sort_za: function() {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.25 15.75V12C11.25 10.965 11.715 10.5 12.75 10.5C13.785 10.5 14.25 10.965 14.25 12V15.75M14.25 13.5H11.25" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      <path d="M14.25 7.5H11.25L14.25 2.25H11.25" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      <path d="M3 11.25L5.25 13.5L7.5 11.25" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      <path d="M5.25 4.5V13.5" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      </svg>
    )
  },
  sortUnfinished: function() {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.25 6.75L5.25 3.75M5.25 3.75L8.25 6.75M5.25 3.75V14.25" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      <path d="M15.75 11.25L12.75 14.25M12.75 14.25L9.75 11.25M12.75 14.25V3.75" stroke="#16ABF8" strokeLinecap="round" stroke-linejoin="round"/>
      </svg>
    )
  },
  high: function() {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="7" fill="#F8A541"/>
      </svg>
    )
  },
  veryHigh: function() {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="7" fill="#ED4C5C"/>
      </svg>
    )
  },
  low: function() {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="7" fill="#428BC1"/>
      </svg>
    )
  },
  veryLow: function() {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="7" fill="#8942C1"/>
      </svg>
    )
  },
  medium: function() {
    return (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="7" r="7" fill="#00A790"/>
      </svg>
    )
  },
  tablerChevronDown: function() {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9L12 15L18 9" stroke="#111111" strokeLinecap="square"/>
      </svg>
    )
  }


}

export default Icons;
