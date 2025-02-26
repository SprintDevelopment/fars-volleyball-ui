import React, { useState } from 'react'
import useDialogState from '@/hooks/use-dialog-state'
import { PlayerSummary } from '@/lib/schemas/player-schemas'

type PlayersDialogType = 'create' | 'update' | 'delete' | 'import'

interface PlayersContextType {
  open: PlayersDialogType | null
  setOpen: (str: PlayersDialogType | null) => void
  currentRow: PlayerSummary | null
  setCurrentRow: React.Dispatch<React.SetStateAction<PlayerSummary | null>>
}

const PlayersContext = React.createContext<PlayersContextType | null>(null)

interface Props {
  children: React.ReactNode
}

export default function PlayersProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<PlayersDialogType>(null)
  const [currentRow, setCurrentRow] = useState<PlayerSummary | null>(null)
  return (
    <PlayersContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </PlayersContext>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePlayers = () => {
  const playersContext = React.useContext(PlayersContext)

  if (!playersContext) {
    throw new Error('usePlayers has to be used within <PlayersContext>')
  }

  return playersContext
}