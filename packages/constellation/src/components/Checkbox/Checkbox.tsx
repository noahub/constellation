import { styled } from '@linaria/react'
import { blackA, violet } from '@radix-ui/colors'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import React from 'react'

const StyledCheckbox = styled(CheckboxPrimitive.Root)`
  all: unset;
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 4px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px ${blackA.blackA7};
  &:hover {
    background-color: ${violet.violet3};
  }
  &:focus {
    box-shadow: 0 0 0 2px black;
  }
`

const StyledIndicator = styled(CheckboxPrimitive.Indicator)`
  color: ${violet.violet11};
`

// Exports
export const CheckboxRoot = StyledCheckbox
export const CheckboxIndicator = StyledIndicator

// Your app...
const Flex = styled('div')`
  display: flex;
  align-items: center;
`
const Label = styled('label')`
  color: ${violet.violet11};
  font-size: 15px;
  line-height: 1;
  user-select: none;
  padding-left: 15px;
  font-family: 'Inter';
`

export const Checkbox = () => (
  <form>
    <Flex>
      <CheckboxRoot defaultChecked id='c1'>
        <CheckboxIndicator asChild>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxRoot>
      <Label htmlFor='c1'>Accept terms and conditions.</Label>
    </Flex>
  </form>
)

export default Checkbox
