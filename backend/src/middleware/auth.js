/**
 * Valida el header Authorization contra API_KEY (variable de entorno).
 * Formato esperado: Authorization: <valor-de-API_KEY> (texto plano, como en clase).
 */
export function authMiddleware(req, res, next) {
  const expected = process.env.API_KEY
  if (!expected) {
    console.error('API_KEY no está definida en .env')
    return res.status(500).json({
      error: 'Configuración del servidor incompleta (API_KEY)',
    })
  }

  const sent = req.headers.authorization
  if (!sent || sent !== expected) {
    return res.status(401).json({
      error: 'No autorizado',
      message: 'Incluye el header Authorization con tu API key.',
    })
  }

  next()
}
