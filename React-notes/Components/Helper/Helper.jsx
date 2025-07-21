import styles from './helper.module.css'
import PropTypes from 'prop-types'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

/**
 * Helper component that displays a help icon with a tooltip message on hover
 * !IMPORTANT, you should use "." to separate each phrase
 * @param {string} message - The message to display in the tooltip
 * @returns {JSX.Element} A help icon with hover tooltip
 */
function Helper({message}) {
    const splitMessage = (text) => {
        let phrases = []
        phrases = text.split('.')
        return phrases
    }
    return (
        <div className={styles['helper-container']}>
            <ContactSupportIcon
                fontSize='small'
                color='info'
                sx={{
                    fontSize: 20,
                }}
            />
            <div className={styles['helper-panel']}>
                <h1>Información:</h1>
                <p>{
                    splitMessage(message).map((phrase, index) => (
                        phrase &&
                        <span key={index}>
                            {phrase}
                            {<br/>}
                            {<br/>}
                        </span>
                    ))
                }</p>
            </div>
        </div>
    )
}

Helper.propTypes = {
    message: PropTypes.string.isRequired
}

export default Helper
