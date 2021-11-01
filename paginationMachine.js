import { assign, createMachine } from './deps.js';

const infiniteScrollMachine = createMachine({
  id: 'infiniteScroll',
  initial: 'fetchingRowOfData',
  context: {
    totalEntries: Infinity,
    data: []
  },
  states: {
    fetchingRowOfData: {
      on: {
        RECEIVED_DATA: {
          target: 'checkingIfThereIsMoreData',
          actions: ['assignDataToContext']
        }
      },
      invoke: {
        src: 'fetchRowOfData',
        onError: {
          target: 'idle',
          actions: 'assignErrorMessageToContext'
        }
      }
    },
    idle: {
      exit: ['clearErrorMessage'],
      on: {
        SCROLL_TO_BOTTOM: 'fetchingRowOfData'
      }
    },
    checkingIfThereIsMoreData: {
      always: [{
        cond: 'thereIsMoreData',
        target: 'idle'
      }, {
        target: 'noMoreDataToFetch'
      }]
    },
    noMoreDataToFetch: {
      type: 'final'
    }
  }
}, {
  guards: {
    thereIsMoreData: context => {
      return context.totalEntries > context.data.length;
    }
  },
  services: {
    fetchRowOfData: () => send => {}
  },
  actions: {
    assignDataToContext: assign((context, event) => {
      if (event.type !== 'RECEIVED_DATA') return {};
      return {
        data: [...context.data, ...event.data],
        totalEntries: event.totalEntries
      };
    }),
    clearErrorMessage: assign(context => ({
      errorMessage: undefined
    })),
    assignErrorMessageToContext: assign((context, event) => {
      return {
        errorMessage: event.data?.message || 'An unknown error occurred'
      };
    })
  }
});
export default infiniteScrollMachine;
