import { css } from '@linaria/core'
import { styled } from '@linaria/react'
import { blackA, mauve, violet } from '@radix-ui/colors'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import React from 'react'

const slideDown = css`
  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: 'var(--radix-accordion-content-height)';
    }
  }
`

const slideUp = css`
  @keyframes slideDown {
    from {
      height: 'var(--radix-accordion-content-height)';
    }
    to {
      height: 0;
    }
  }
`

const StyledAccordion = styled(AccordionPrimitive.Root)`
  font-family: 'Inter';
  border-radius: 6px;
  width: 300px;
  background-color: ${mauve.mauve6};
  box-shadow: 0 2px 10px ${blackA.blackA4};
`

const StyledItem = styled(AccordionPrimitive.Item)`
  overflow: hidden;
  margin-top: 1px;

  &:first-child {
    margin-top: 0px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 2px ${mauve.mauve12};
  }
`

const StyledHeader = styled(AccordionPrimitive.Header)`
  all: unset;
  display: flex;
`

const StyledTrigger = styled(AccordionPrimitive.Trigger)`
  all: unset;
  font-family: inherit;
  background-color: transparent;
  padding: 0 20px;
  height: 45px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  line-height: 1;
  color: ${violet.violet11};
  box-shadow: 0 1px 0 ${mauve.mauve6};
  &[data-state='closed'] {
    background-color: white;
  }
  &[data-state='open'] {
    background-color: white;
  }
  &:hover {
    background-color: ${mauve.mauve2};
  }
`

const StyledContent = styled(AccordionPrimitive.Content)`
  overflow: hidden;
  font-size: 15px;
  color: ${mauve.mauve11};
  background-color: ${mauve.mauve2};

  &[data-state='open'] {
    animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }
  &[data-state='closed'] {
    animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards;
  }
  @keyframes slideDown {
    from {
      height: 0;
    }
    to {
      height: 'var(--radix-accordion-content-height)';
    }
  }
  @keyframes slideUp {
    from {
      height: 'var(--radix-accordion-content-height)';
    }
    to {
      height: 0;
    }
  }
`

const StyledContentText = styled('div')`
  padding: 15px 20px;
`

const StyledChevron = styled(ChevronDownIcon)`
  [data-state='open'] & {
    transform: rotate(180deg);
  }
  color: ${violet.violet10};
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
`

// Exports
export const Accordion = StyledAccordion
export const AccordionItem = StyledItem
export const AccordionTrigger = React.forwardRef<any, any>(
  ({ children, ...props }, forwardedRef) => (
    <StyledHeader>
      <StyledTrigger {...props} ref={forwardedRef}>
        {children}
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  ),
)
export const AccordionContent = React.forwardRef<any, any>(
  ({ children, ...props }, forwardedRef) => (
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  ),
)

// Your app...
export const AccordionDemo = () => (
  <Accordion type='single' defaultValue='item-1' collapsible>
    <AccordionItem value='item-1'>
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>

    <AccordionItem value='item-2'>
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. Its unstyled by default, giving you freedom over the look and feel.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value='item-3'>
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)

export default AccordionDemo
