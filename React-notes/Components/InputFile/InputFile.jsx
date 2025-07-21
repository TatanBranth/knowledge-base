import React from 'react'
import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
/* components */
import Helper from '@/components/shared/helper/helper'
/* components prime react */
import { FileUpload } from 'primereact/fileupload'
import { Toast } from 'primereact/toast'
/* components mui */
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
/* styles */
import styles from './inputFile.module.css'
import '@/styles/toast.css'
import '@/styles/input-file-soporte.css'

/**
 * InputFileSoporte component for file upload with helper message and validation
 * @param {helper} helper - Object containing helper properties
 * @param {inputProps} inputProps - Object containing input properties
 * @param {function} setFile - Function to set the file in the parent component
 * @typedef {Object} helper
 * * @property {boolean} showHelper - Whether to show the helper message
 * * @property {string} helperMessage - The message to display in the helper
 * @typedef {Object} inputProps
 * * @property {string} inputId - The ID of the input element
 * * @property {string} labelText - The label text for the input
 * * @property {string} chooseLabelText - The text for the file chooser button
 * * @property {string} name - The name attribute for the input
 * * @property {boolean} required - Whether the input is required
 * * @property {boolean} disabled - Whether the input is disabled
 * * @property {string} accept - The accepted file types (e.g., 'image/*, .pdf')
 * * @property {number} maxFileSize - The maximum file size in bytes
 * @returns {JSX.Element} - Rendered InputFileSoporte component
 */
function InputFileSoporte({ helper, inputProps, setFile }) {
    /* props destructuring */
    const { showHelper, helperMessage } = helper
    const {
        inputId,
        labelText,
        name,
        required,
        disabled,
        chooseLabelText,
        accept,
        maxFileSize
    } = inputProps
    /* input ref */
    const fileUploadRef = useRef(null)
    /* useStates */
    const [fileName, setFileName] = useState('')
    /* toast shooter */
    const toastMessageRef = useRef(null)
    const toastMessageShoot = (severity, message) => {
        toastMessageRef.current.show(
            {
                severity: severity,
                summary: 'Información!',
                detail: message,
                life: 5000,
                className: styles['toast']
            })
    }
    /* when upload fail */
    const onErrorUpload = (event) => {
        const errorMsg = event.error.message || 'Error al subir el archivo'
        setFileName('')
        toastMessageShoot('error', errorMsg)
    }
    /* validator */
    const validateFileType = (file) => {
        const allowedTypes = accept.toLowerCase().replace(/\s/g, '').split(',')
        return allowedTypes.some(type => {
            // Validar por tipo MIME (ej: "image/png")
            if (file.type === type) return true
            // Validar por categoría (ej: "image/*")
            if (type.endsWith('/*') && file.type.startsWith(type.split('/')[0])) return true
            // Validar por extensión (ej: ".pdf")
            if (type.startsWith('.') && file.name.toLowerCase().endsWith(type)) return true
            return false
        })
    }
    const cutFaleName = (fileName, maxLength) => {
        if (fileName.length > maxLength) {
            return fileName.substring(0, maxLength - 3) + '...'
        }
        return fileName
    }
    /* handle upload file, fills the useState variable from father view */
    const onFileSelect = (event)=> {
        if (event.files.length > 0) {
            setFileName(cutFaleName(event.files[0].name, 28))
            const file = event.files[0]
            if (!validateFileType(file)) {
                toastMessageShoot('error', `Tipo de archivo no permitido: ${file.type}`)
                fileUploadRef.current.clear()
                setFileName('')
                setFile(null)
                return
            }
            const maxSizeMB = maxFileSize / 1024 / 1024
            if (file.size > maxFileSize) {
                toastMessageShoot('error', `Tamaño excede ${maxSizeMB.toFixed(1)} MB`)
                fileUploadRef.current.clear()
                setFileName('')
                setFile(null)
                return
            }
            setFile(file)
            toastMessageShoot('success', `Archivo seleccionado: ${file.name}`)
        }
    }
    /* when user wants to upload another file */
    const handleCleanSupportingFile = () => {
        fileUploadRef.current.clear()
        setFileName('')
        setFile(null)
    }
    return (
        <div className={styles['input-file-container']}>
            <Toast ref={toastMessageRef} position="top-right" />
            <div className={styles['input-file-helper-container']}>
                {
                    labelText &&
                    <label htmlFor={inputId}>
                        {labelText}
                        {required &&
                            <span
                                className={styles['required']}
                                aria-hidden="true"
                            >
                                *
                            </span>}
                    </label>
                }
                {
                    showHelper &&
                    <Helper message={helperMessage} id={`${inputId}-helper`}/>
                }
            </div>
            <FileUpload
                className='inputFileContainer'
                key={inputId}
                id={inputId}
                required={required}
                disabled={disabled}
                ref={fileUploadRef}
                mode='basic'
                name={name}
                customUpload
                accept={accept}
                chooseLabel={chooseLabelText}
                auto={false}
                onSelect={onFileSelect}
                onError={onErrorUpload}
                onClick={handleCleanSupportingFile}
                aria-labelledby={inputId}
                aria-describedby={showHelper ? `${inputId}-helper` : null}
                aria-required={required}
            />
            {
                fileName &&
                <div className={styles['selected-file-content']}>
                    <span
                        className={styles['file-label']}
                    >
                        {fileName}
                    </span>
                    <button
                        onClick={handleCleanSupportingFile}
                        className={styles['clear-button']}
                        type='button'
                    >
                        {<CancelRoundedIcon color='error'/>}
                    </button>
                </div>
            }
        </div>
    )
}
/* props required to work this component */
InputFileSoporte.propTypes = {
    helper: PropTypes.shape({
        showHelper: PropTypes.bool,
        helperMessage: PropTypes.string
    }),
    inputProps: PropTypes.shape({
        inputId: PropTypes.string,
        labelText: PropTypes.string,
        chooseLabelText: PropTypes.string,
        name: PropTypes.string,
        required: PropTypes.bool,
        disabled: PropTypes.bool,
        accept: PropTypes.string,
        maxFileSize: PropTypes.number,
    }),
    setFile: PropTypes.func.isRequired
}

export default InputFileSoporte