import React from 'react'
import { useDrop } from 'react-dnd'
import {
    Grid,
    Typography,
    Card,
    CardContent,
    CardActions,
    IconButton,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
export const Column = ({
    columnName,
    ys,
    PinColor,
    onDrop,
    children,
    columnID,
    addCard,
}) => {
    const [{ isOver, target }, drop] = useDrop({
        accept: 'card',
        drop: (item, monitor) => {
            onDrop(item, monitor, columnID)
        },
        canDrop: (item) => {
            if (item.column.columnID === columnID) return
            return (
                item.column.columnID >= columnID - 1 &&
                item.column.columnID <= columnID + 1
            )
        },
        collect: (monitor) => ({
            target: monitor.getItem(),
            isOver: monitor.isOver() && target.column.columnID !== columnID,
        }),
    })
    const CardForAdding = ys ? (
        <>
            <IconButton
                onClick={() => addCard(columnID)}
                style={{ display: 'inline-block' }}
            >
                <AddIcon
                    style={{ color: PinColor === '#000' ? '#fff' : '' }}
                ></AddIcon>
            </IconButton>
        </>
    ) : null
    return (
        <>
            <Grid
                justify="flex-start"
                direction="column"
                ref={drop}
                container
                style={{
                    transition: '0.1s',
                    backgroundColor: isOver ? '#ccccc8' : '#e8e8e4',
                    borderRadius: 10,
                }}
                spacing={2}
            >
                <Grid item style={{ minHeight: 50, width: 300 }}>
                    <Card
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            background: PinColor || '',
                            color: PinColor === '#000' ? '#fff' : '#000',
                        }}
                    >
                        <CardContent>
                            <Typography variant="h6">{columnName}</Typography>
                        </CardContent>
                        <CardActions>{CardForAdding}</CardActions>
                    </Card>
                </Grid>
                {children}
            </Grid>
        </>
    )
}
