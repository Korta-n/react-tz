import React, { useState } from 'react'
import { Grid, IconButton, Card, CardActions } from '@material-ui/core'
import { Column } from './Column.jsx'
import AddIcon from '@material-ui/icons/Add'
import { Columns, CardsList, DefaultCard } from '../data/data'
import CardItem from './Card.jsx'
const Board = () => {
    const [columns, setColumns] = useState(Columns)
    const [cards, setCards] = useState(CardsList)
    const onDrop = (item, monitor, columnID) => {
        setCards((prev) => {
            const column = {
                columnID: columnID,
                index:
                    item.column.columnID === columnID
                        ? item.column.index
                        : prev.filter(
                              (cards) => cards.column.columnID === columnID
                          ).length,
            }
            const Cards = prev
                .filter((elem) => elem.id !== item.id)
                .concat({ ...item, column })
            return [...Cards]
        })
    }
    const addNewCard = (columnID) => {
        setCards((prev) => {
            const column = {
                columnID: columnID,
                index: cards.length + 1,
            }
            const NewCards = prev.concat({
                ...DefaultCard,
                column,
                id: cards.length,
            })
            return [...NewCards]
        })
    }
    const addNewColumn = () => {
        setColumns((prev) => {
            return [
                ...prev,
                { ys: true, columnName: 'custom column', PinColor: '#000' },
            ]
        })
    }
    const RenderColumns = () => {
        return columns.map((column, columnIndex) => {
            return (
                <Grid
                    item
                    key={column.columnName + Math.random() * 10000}
                    style={{ minHeight: '80vh' }}
                >
                    <Column
                        ys={column.ys ? column.ys : null}
                        columnName={column.columnName}
                        PinColor={column.PinColor}
                        onDrop={onDrop}
                        columnID={columnIndex}
                        addCard={addNewCard}
                    >
                        {cards
                            .filter((card) => {
                                return card.column.columnID === columnIndex
                            })
                            .sort((card1, card2) => {
                                return card1.column.index - card2.column.index
                            })
                            .map((card) => {
                                return (
                                    <Grid
                                        item
                                        style={{ minHeight: 50, width: 300 }}
                                        key={
                                            card.id.toString() +
                                            Math.random() * 10000
                                        }
                                    >
                                        <CardItem card={card} />
                                    </Grid>
                                )
                            })}
                    </Column>
                </Grid>
            )
        })
    }
    return (
        <>
            <Grid
                container
                spacing={4}
                style={{
                    width: `calc(100% + ${(columns.length - 3) * 316 - 150}px)`,
                    height: '100%',
                    margin: 0,
                }}
            >
                {RenderColumns()}
                <Grid item style={{ width: 300, minHeight: '80vh' }}>
                    <Card
                        style={{
                            minHeight: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <CardActions>
                            <IconButton onClick={() => addNewColumn()}>
                                <AddIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

export default Board
