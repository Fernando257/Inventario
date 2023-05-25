const container = {
  height: '100vh',
  width: '100%',
  background: 'linear-gradient(to bottom right, #286b87, #00063c)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const loginContainer = {
  backgroundColor: '#fff',
  width: '25rem',
  height: '35rem',
  boxShadow: '8px 8px 0 #4B93B2'
}

const titleContainer = {
  width: '100%',
  height: '15%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#01202d',
}

const title = {
  color: 'white',
  fontFamily: 'Poppins',
  fontSize: '35px',
}

const formContainer = {
  height: '55%', 
  padding: '8%',
}

const input = {
  mt:'15%',
  width: '100%',
}

const btnContainer = {
  height: '20%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const btn = {
  fontFamily: 'Poppins',
  textTransform: 'capitalize',
  padding: '5px 25%',
  backgroundColor: '#0aa8c2',
  borderRadius: '10rem',
  boxShadow: 'none',
  fontSize: '22px',
  '&:hover': {
    backgroundColor: '#0aa8c2',
    opacity: '0.9',
    boxShadow: 'none',
  }
}

const styles = {
  container,
  loginContainer,
  titleContainer,
  title,
  formContainer,
  input,
  btnContainer,
  btn
}

export default styles