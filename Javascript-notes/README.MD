# Indice

- Función autoinvocada
- Operador de fusión de nullos
- Operador de nullidad
- Promesas
- Configuración archivos EMS y CSJ
- Configurar formatter en un proyecto node
- Consultar eventos suscritos en navegador


# Función autoinvocada

Se puede usar en funciones que son anonimas y se necesita una ejecución inmediata después de su creación

` (() => {
	const A1 = 1
	const A2 = 2

	return A1+A2
})()
`