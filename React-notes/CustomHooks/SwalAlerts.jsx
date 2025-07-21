import Swal from 'sweetalert2'


/**
 * Hook personalizado para manejar alertas de SweetAlert2.
 * Proporciona funciones para mostrar diferentes tipos de alertas como éxito, error, advertencia, información y cargando.
 */
export function useSwalAlerts() {
    /**
     * Función para mostrar una alerta de éxito.
     * Por lo general, se usa para notificar al usuario que una acción se ha completado con éxito.
     * @param {string} text - Texto de la alerta.
     * @param {string} title - Título de la alerta.
     * @param {string} confirmButtonText - Texto del botón de confirmación.
     * @param {boolean} showCancelButton - Si se debe mostrar el botón de cancelar.
     */
    const showSuccessAlert = (
        text,
        title='Éxito',
        confirmButtonText='Aceptar',
        showCancelButton=false
    ) => {
        Swal.fire({
            text: text,
            icon: 'success',
            title: title,
            confirmButtonText: confirmButtonText,
            showCancelButton: showCancelButton,
        })
    }

    /**
     * Función para mostrar una alerta de error.
     * Por lo general, se usa para notificar al usuario que ha ocurrido un error.
     * @param {string} text - Texto de la alerta.
     * @param {string} title - Título de la alerta.
     * @param {string} confirmButtonText - Texto del botón de confirmación.
     * @param {boolean} showCancelButton - Si se debe mostrar el botón de cancelar.
     */
    const showErrorAlert = (
        text,
        title='Error',
        confirmButtonText='Aceptar',
        showCancelButton=false
    ) => {
        Swal.fire({
            icon: 'error',
            title: title,
            text: text,
            confirmButtonText: confirmButtonText,
            showCancelButton: showCancelButton,
        })
    }

    /**
     * Función para mostrar una alerta de cargando
     * Por lo general, se usa para notificar al usuario que una acción está en progreso.
     * @param {string} text - Texto de la alerta.
     * @param {string} title - Título de la alerta.
     * */
    const showLoadingAlert = (
        title = 'Cargando',
        text = 'Por favor espere...'
    ) => {
        Swal.fire({
            title: title,
            text: text,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            },
        })
    }
    /**
     * Función para mostrar una alerta de advertencia.
     * @param {string} text - Texto de la alerta.
     * @param {string} title - Título de la alerta.
     * @param {string} confirmButtonText - Texto del botón de confirmación.
     * @param {boolean} showCancelButton - Si se debe mostrar el botón de cancelar.
     */
    const showWarningAlert = (
        text,
        title='Advertencia',
        confirmButtonText = 'Aceptar',
    ) => {
        return Swal.fire({
            icon: 'warning',
            title,
            text,
            confirmButtonText,
        })
    }
    /**
     * Función para mostrar una alerta de información.
     * @param {string} text - Texto de la alerta.
     * @param {string} title - Título de la alerta.
     * @param {string} confirmButtonText - Texto del botón de confirmación.
     * @param {boolean} showCancelButton - Si se debe mostrar el botón de cancelar.
     */
    const showInfoAlert = (
        text,
        title='Información',
        confirmButtonText = 'Aceptar',
        showCancelButton = false
    ) => {
        return Swal.fire({
            icon: 'info',
            title,
            text,
            confirmButtonText,
            showCancelButton,
        })
    }
    /**
     * Función para mostrar una alerta personalizada.
     * Permite personalizar el contenido de la alerta, incluyendo iconos, botones y más.
     * @param {Object} options - Opciones de configuración de la alerta.
     */
    const showCustomAlert = (options) => Swal.fire(options)
    /**
     * Función para cerrar la alerta actual.
     * Útil para cerrar alertas de tipo cargando o para limpiar alertas después de una acción.
     * @returns {void}
     */
    const closeAlert = () => {
        Swal.close()
    }

    return { showSuccessAlert, showErrorAlert, showWarningAlert, showLoadingAlert, showCustomAlert, closeAlert, showInfoAlert }
}