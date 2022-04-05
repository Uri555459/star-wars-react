import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './PeopleNavigation.module.css'

const PeopleNavigation = ({ getResource, nextPage, prevPage, counterPage }) => {

  const buttonNextHandler = () => getResource(nextPage)
  const buttonPrevHandler = () => getResource(prevPage)

  return (
    <div className={styles.container}>
      <Link
        className={styles.link}
        to={`/people/?page=${counterPage - 1}`}>
        <button
          className={styles.buttons}
          onClick={buttonPrevHandler}
          disabled={!prevPage}
        >
          Previous
        </button>
      </Link>
      <Link
        className={styles.link}
        to={`/people/?page=${counterPage + 1}`}>
        <button
          className={styles.buttons}
          onClick={buttonNextHandler}
          disabled={!nextPage}
        >
          Next
        </button>
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