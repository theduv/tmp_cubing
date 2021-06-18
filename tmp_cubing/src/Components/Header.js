import { useHistory } from 'react-router-dom'
import '../Styles/Header.scss'

const Header = () => {
  const history = useHistory()
  return (
    <div className='header-main' onClick={() => history.push('/')}>
      tmp_cubing
    </div>
  )
}

export default Header
