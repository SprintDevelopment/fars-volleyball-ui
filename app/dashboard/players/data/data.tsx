import {
    ArrowDown,
    ArrowRight,
    ArrowUp,
    Circle,
    CircleCheck,
    CircleX,
  } from 'lucide-react'
  
  export const labels = [
    {
      value: 'bug',
      label: 'Bug',
    },
    {
      value: 'feature',
      label: 'Feature',
    },
    {
      value: 'documentation',
      label: 'Documentation',
    },
  ]
  
  export const statuses = [
    {
      value: 'backlog',
      label: 'Backlog',
      icon: CircleCheck,
    },
    {
      value: 'todo',
      label: 'Todo',
      icon: CircleCheck,
    },
    {
      value: 'in progress',
      label: 'In Progress',
      icon: CircleCheck,
    },
    {
      value: 'done',
      label: 'Done',
      icon: CircleCheck,
    },
    {
      value: 'canceled',
      label: 'Canceled',
      icon: CircleCheck,
    },
  ]
  
  export const priorities = [
    {
      label: 'Low',
      value: 'low',
      icon: CircleCheck,
    },
    {
      label: 'Medium',
      value: 'medium',
      icon: CircleCheck,
    },
    {
      label: 'High',
      value: 'high',
      icon: CircleCheck,
    },
  ]