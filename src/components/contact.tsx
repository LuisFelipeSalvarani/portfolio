import { useState } from 'react'
import { SectionTitle } from './section-title'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = {
      name,
      email,
      message,
    }

    await fetch(`${import.meta.env.VITE_LINK_EMAIL}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
  }
  return (
    <div
      className="flex min-h-screen flex-col gap-10 bg-white py-10 text-zinc-900"
      id="contact"
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 xl:mx-40 2xl:mx-72"
      >
        <SectionTitle
          title="Contato"
          description="Sinta-se à vontade para entrar em contato comigo enviando o formulário abaixo e entrarei em contato com você o mais breve possível."
        />

        <div className="m-auto flex w-1/2 flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-semibold text-zinc-700">
              Nome
            </label>
            <div className="rounded-lg border border-zinc-300 px-3.5 py-2.5">
              <input
                id="name"
                type="text"
                placeholder="Nome..."
                className="w-full outline-none"
                onChange={e => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold text-zinc-700">
              E-mail
            </label>
            <div className="rounded-lg border border-zinc-300 px-3.5 py-2.5">
              <input
                id="email"
                type="email"
                placeholder="E-mail..."
                className="w-full outline-none"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="font-semibold text-zinc-700">
              Mensagem
            </label>
            <textarea
              id="message"
              className="h-80 resize-none rounded-lg border border-zinc-300 px-3.5 py-2.5 outline-none"
              placeholder="Mensagem..."
              onChange={e => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="hover:-translate-y-1 mt-4 rounded-md bg-zinc-900 px-16 py-3 font-bold text-zinc-50 uppercase transition-all"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
