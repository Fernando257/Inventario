import { Box } from '@mui/material'
import { NavBar } from '../../components'
import styles from './styles'

export const ProductsScreen = () => {
  var total = [1,2,3,4,5,6,7,8,9,10,11,12,13]

  return (
    <Box sx={styles.container}>
      <NavBar />

      <Box sx={{ border: '1px solid red', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
        {total.map(() => (
          <Box
          sx={{
            width: '15rem',
            height: '20rem',
            border: '1px solid blue',
            margin: '1rem',
            cursor: 'pointer'
          }}
          >

          </Box>
        ))}

      </Box>
    </Box>
  )
}
