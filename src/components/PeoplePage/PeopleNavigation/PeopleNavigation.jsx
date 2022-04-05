import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import UiButton from '@ui/UiButton/UiButton'

import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({ getResource, nextPage, prevPage, counterPage }) => {

  const buttonNextHandler = () => getResource(nextPage)
  const buttonPrevHandler = () => getResource(prevPage)

  return (
    <div className={styles.container}>
      <Link
        className={styles.buttons}
        to={`/people/?page=${counterPage - 1}`}>
        <UiButton
          text='Previous'
          onClick={buttonPrevHandler}
          disabled={!prevPage}
        />
      </Link>
      <Link
        className={styles.buttons}
        to={`/people/?page=${counterPage + 1}`}>
        <UiButton
          text='Next'
          onClick={buttonNextHandler}
          disabled={!nextPage}
        />
      </Link>
    </div>
  )
}

PeopleNavigation.propTypes = {
  getResource: PropTypes.func,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
  counterPage: PropTypes.number,
}

export default PeopleNavigation