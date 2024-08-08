export default defineAppConfig({
  ui: {
    primary: 'lime',
    gray: 'zinc',
    table: {
      divide: 'divide-y divide-primary-300 dark:divide-primary-700',
      tbody: 'divide-y divide-primary-200 dark:divide-primary-800',
      tr: {
        selected: 'bg-primary-50 dark:bg-primary-800/50',
        active: 'hover:bg-primary-50 dark:hover:bg-primary-800/50 cursor-pointer',
      },
      th: {
        color: 'text-primary-900 dark:text-primary-500',
      },
      td: {
        color: 'text-gray-500 dark:text-gray-400',
      },
    }
  },

})