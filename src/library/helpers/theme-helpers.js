export const themeSelector = styles => {
  const themeStyles = {...styles};

  return (theme, selector) => {
    return themeStyles[theme][selector];
  };
};
