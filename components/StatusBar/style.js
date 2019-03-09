export default (status) => {
  const style = {
    borderRadius: '10px',
    color: 'white',
    width: '100%',
    height: '100%',
    background: '#60bc6d',
    fontFamily: 'Roboto, arial, sans-serif',
    fontSize: '1rem',
    padding: '1em',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    boxSizing: 'border-box',
  };

  switch (status) {
    case 'waiting':
      style.background = '#60bc6d';
      break;
    case 'uploading':
      style.background = 'darkyellow';
      break;
    case 'done':
      style.background = '#60bc6d';
      break;
    case 'error':
      style.background = 'darkred';
      break;
    default:
      style.background = '#9cffbc';
  }
  return style;
};
