import './style.css'
import Trash from '../../assets/trash.svg'

function Home() {

  const users = [
    {
      id: '213235asdasda',
      name: 'Rodolfo',
      age: 33,
      email: 'rod@gmail.com',
    },
    {
      id: '21335452ga2342342ds',
      name: 'Aline',
      age: 28,
      email: 'aline@gmail.com',
    },
    {
      id: '21335452asdaasd',
      name: 'Jalim Habbey',
      age: 28,
      email: 'Jalim@gmail.com',
    },
  ]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' name='nome' type='text'></input>
        <input placeholder='Idade' name='idade' type='number'></input>
        <input placeholder='Email' name='email' type='email'></input>
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span> </p>
            <p>Idade: <span>{user.age}</span> </p>
            <p>Email: <span>{user.email}</span> </p>
          </div>

          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}



    </div>
  )
}

export default Home
