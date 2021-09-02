import { createMachine, assign } from './deps.js'

const increment = (context) => context.count + 1
const decrement = (context) => context.count - 1

export const counterMachine = createMachine({
    initial: 'active',
    context: {
      count: 0
    },
    states: {
      active: {
        on: {
          INC: { actions: assign({ count: increment }) },
          DEC: { actions: assign({ count: decrement }) }
        }
      }
    }
  });
