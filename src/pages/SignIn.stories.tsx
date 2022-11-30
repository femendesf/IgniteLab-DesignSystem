import { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import {rest} from 'msw'
import { SignIn} from './SignIn'

export default{
    title: 'Pages/Sign in',
    component: SignIn,
    args:{},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login realizado!'
                    }))
                })
            ]
        }
    }
    
} as Meta

export const Default: StoryObj = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu email'), 'femendes@gmail.com')   
        userEvent.type(canvas.getByPlaceholderText('* * * * * * *'), 'teste123')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
        })
        
    }
}
