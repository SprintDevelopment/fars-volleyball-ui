import { Main } from '@/components/dashboard-layout/main'
import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { PlayersDialogs } from './components/players-dialogs'
import { TasksPrimaryButtons } from './components/tasks-primary-buttons'
import TasksProvider from './context/tasks-context'
import { players } from './data/players'

export default function Tasks() {
  return (
    <TasksProvider>
      <Main>
        <div className='mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Tasks</h2>
            <p className='text-muted-foreground'>
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <TasksPrimaryButtons />
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <DataTable data={tasks} columns={columns} />
        </div>
      </Main>

      <TasksDialogs />
    </TasksProvider>
  )
}