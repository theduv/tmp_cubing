import Header from './Header'
import '../Styles/Home.scss'
import { useHistory } from 'react-router'

const Home = () => {
  const history = useHistory()
  return (
    <div className='home-main'>
      <Header />
      <div className='home-timer' onClick={() => history.push('/timer')}>
        Timer
      </div>
    </div>
  )
}

export default Home
