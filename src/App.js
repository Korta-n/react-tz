import React from 'react'
import Board from './components/Board'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
const App = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <Board></Board>
        </DndProvider>
    )
}
export default App
