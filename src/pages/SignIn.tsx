import { Envelope, Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { CheckBox } from "../components/CheckBox";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../Logo";
import { FormEvent, useState } from "react";

import axios from 'axios'

export function SignIn() {

  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function handleSignIn(event: FormEvent) {
    event.preventDefault()

    await axios.post('/sessions', {
      email: 'femendesf@gmail.com',
      password: '12345',
    })

    setIsUserSignedIn(true)
  }

    return(
      <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100 mt-4'>

        <header className='flex flex-col items-center'>
          <Logo/>

          <Heading size='lg' className='mt-4'>
            Ignite Lab
          </Heading>

          <Text 
            size='lg' className='text-gray-400 mt-1'>
              Faça login e comece a usar!
          </Text>

        </header>

        <form onSubmit={handleSignIn} className='flex flex-col w-full gap-4 max-w-sm mt-10'>

          {isUserSignedIn && <Text>Login realizado!</Text>}

          <label htmlFor="email" className='flex flex-col gap-3'>

            <Text size='lg' className='font-semibold'>Endereço de e-mail</Text>

            <TextInput.Root>

              <TextInput.Icon>
                <Envelope/>
              </TextInput.Icon>

              <TextInput.Input type='email' id='email' placeholder='Digite seu email'/>

            </TextInput.Root>

          </label>

          <label htmlFor="password" className='flex flex-col gap-3'>

            <Text size='lg' className='font-semibold'>Sua senha</Text>

            <TextInput.Root>

              <TextInput.Icon>
                <Lock/>
              </TextInput.Icon>

              <TextInput.Input  type="password" id='password' placeholder='* * * * * * *'/>

            </TextInput.Root>

          </label>


          <label htmlFor="remember" className='flex items-center gap-2'>
            <CheckBox id='remember'/>
            <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
          </label>
          
          <Button type='submit' className='mt-4'> Entrar na plataforma</Button>

          <footer className='flex flex-col items-center gap-4 mt-8 mb-2'>

            <Text asChild size='sm'>
              <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
            </Text>

            <Text asChild size='sm'>
              <a href=""className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora mesmo!</a>
            </Text>

          </footer>

        </form>
      
    </div>
    )
    
}