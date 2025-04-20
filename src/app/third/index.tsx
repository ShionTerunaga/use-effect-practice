import { useState } from 'react'
import { users } from './users'
import { EditContact } from './edit-contact'
import type { User } from './users'

export function Third() {
  const [currentUser, setCurrentUser] = useState<User>(users[0])
  const [whole, setWhole] = useState<Array<User>>(users)

  const handleClick = (user: User) => {
    setCurrentUser(user)
  }

  const onSave = ({ name, email }: { name: string; email: string }) => {
    const newUser: User = {
      id: currentUser.id,
      name,
      email,
    }

    setCurrentUser(newUser)

    const newUsers: Array<User> = whole.map((user) => {
      if (user.id === currentUser.id) {
        return newUser
      }

      return user
    })

    setWhole(newUsers)
  }

  return (
    <div style={{ margin: 10 }}>
      <section
        style={{
          display: 'flex',
        }}
      >
        {users.map((user, index) => (
          <button
            onClick={() => handleClick(whole[index])}
            style={{
              height: 40,
              width: 80,
              fontSize: 20,
              margin: 8,
            }}
          >
            {user.name}
          </button>
        ))}
      </section>
      <hr />

      <EditContact savedContact={currentUser} onSave={onSave} />
    </div>
  )
}
