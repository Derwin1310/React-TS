import { useState } from 'react'

// interface User {
//   id: number,
//   name: string
// }

//Parametros opcionales para setear user a un objeto vacio
interface User {
  id?: number,
  name?: string
}

export const User = () => {
	const [user, setUser] = useState<User>()

	const login = () => setUser({ id: 1, name: 'Derwin Romero' })

	const logout = () => setUser({ })

	return (
		<div className='mt-5'>
			<h3>User: useState</h3>

			<button onClick={login} className='btn btn-outline-primary m-2'>Login</button>

			<button onClick={logout} className='btn btn-outline-primary m-2'>Logout</button>

      <pre>{JSON.stringify(user)}</pre>
		</div>
	)
}
