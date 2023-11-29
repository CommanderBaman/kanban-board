export type User = {
  id: string
  name: string
  available: boolean
}

export type Ticket = {
  id: string
  title: string 
  tag: string[]
  userId: string 
  status: Status
  priority: number 
}

export type Status = 'Todo' | 'In progress' | 'Backlog' | 'Done' | 'Canceled'

export type WebData = {
  tickets: Ticket[]
  users: User[]
}

export type GroupingOption = 'Status' | 'Users' | 'Priority'
export type SortingOption = 'Title' | 'Priority'