import React, { useState } from 'react';

const useInitialState = () => {
  const [onMode, setOnMode] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const hero = React.useRef(null);
  const education = React.useRef(null);
  const skills = React.useRef(null);
  const projects = React.useRef(null);
  const contact = React.useRef(null);

  return {
    onMode,
    setOnMode,
    openModal,
    setOpenModal,
    hero,
    education,
    skills,
    projects,
    contact
  };
};

export { useInitialState };
