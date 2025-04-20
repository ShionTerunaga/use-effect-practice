import { useState } from 'react'
import type { FormEvent } from 'react'

export function Fourth() {
  const [showForm, setShowForm] = useState<boolean>(true)
  const [message, setMessage] = useState<string>('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setShowForm(false)
    sendMessage(message)
  }

  if (!showForm) {
    return (
      <>
        <h1>Thanks for using our services!</h1>
        <button
          onClick={() => {
            setMessage('')
            setShowForm(true)
          }}
        >
          Open chat
        </button>
      </>
    )
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button type="submit" disabled={message === ''}>
        Send
      </button>
    </form>
  )
}

function sendMessage(message: string) {
  console.log('Sending message: ' + message)
}
