export default (status) => {
  const style = {
    borderRadius: '10px',
    color: '#9cffbc',
    width: '100%',
    height: '100%',
    background: 'repeating-linear-gradient( 45deg, #60bc6d, #60bc6d 10px, #469852 10px, #469852 20px)',
    fontFamily: 'Roboto, arial, sans-serif',
    fontSize: '3rem',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  switch (status) {
    case 'waiting':
      style.color = '#b0cfb0';
      break;
    case 'uploading':
      style.color = 'khaki';
      break;
    case 'done':
      style.color = '#9cffbc';
      break;
    case 'error':
      style.color = 'red';
      break;
    default:
      style.color = '#9cffbc';
  }

  return style;
};
