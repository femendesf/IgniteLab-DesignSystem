import * as CheckBoxPrimitive from '@radix-ui/react-checkbox'
import {Check} from 'phosphor-react'


export interface CheckBoxProps{

}

export function CheckBox({}:CheckBoxProps) {
    


    return(
        <CheckBoxPrimitive.Root 
            className='w-6 h-6 p-[2px] bg-gray-800 rounded'
        >
            <CheckBoxPrimitive.Indicator asChild>

                <Check weight='bold' className='h-5 w-5 text-cyan-500'/>

            </CheckBoxPrimitive.Indicator>

        </CheckBoxPrimitive.Root>
    )
}