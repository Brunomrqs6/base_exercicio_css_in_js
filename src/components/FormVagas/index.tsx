import { FormEvent, useState } from 'react'

import { FormularioStyle, BotaoStyled } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
  children?: string
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormularioStyle onSubmit={aoEnviarForm}>
      <input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoStyled type="submit">Pesquisar</BotaoStyled>
    </FormularioStyle>
  )
}
export default FormVagas
