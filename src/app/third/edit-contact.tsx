import { useState } from 'react'
import type { User } from './users'

interface EditContactProps {
  savedContact: User
  onSave: (update: { name: string; email: string }) => void
}

function EditForm({ savedContact, onSave }: EditContactProps) {
  const [name, setName] = useState(savedContact.name)
  const [email, setEmail] = useState(savedContact.email)

  return (
    <section>
      <label>
        Name:{' '}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:{' '}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button
        onClick={() => {
          const updatedData: User = {
            id: savedContact.id,
            name: name,
            email: email,
          }
          onSave(updatedData)
        }}
      >
        Save
      </button>
      <button
        onClick={() => {
          setName(savedContact.name)
          setEmail(savedContact.email)
        }}
      >
        Reset
      </button>
    </section>
  )
}

export function EditContact(props: EditContactProps) {
  return <EditForm {...props} key={props.savedContact.id} />
}
