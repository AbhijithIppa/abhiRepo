// src/components/Counter.test.jsx
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './Counter'

describe('Counter Component', () => {
  it('renders initial count', () => {
    render(<Counter initialCount={0} />)
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument()
  })

  it('increments count when increment button is clicked', async () => {
    render(<Counter initialCount={0} />)
    
    const incrementButton = screen.getByRole('button', { name: /increment/i })
    await fireEvent.click(incrementButton)
    
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument()
  })

  it('decrements count when decrement button is clicked', async () => {
    render(<Counter initialCount={5} />)
    
    const decrementButton = screen.getByRole('button', { name: /decrement/i })
    await fireEvent.click(decrementButton)
    
    expect(screen.getByText(/count: 4/i)).toBeInTheDocument()
  })

  it('does not allow count to go below zero', async () => {
    render(<Counter initialCount={0} />)
    
    const decrementButton = screen.getByRole('button', { name: /decrement/i })
    await fireEvent.click(decrementButton)
    
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument()
  })
})