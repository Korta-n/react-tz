import React, { useRef, useState } from 'react'
import { useDrag } from 'react-dnd'
import {
    Card,
    CardContent,
    Typography,
    Avatar,
    Modal,
    IconButton,
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

const CardItem = ({ card }) => {
    const ref = useRef(null)
    const [{ isDragging }, drag] = useDrag({
        type: 'card',
        item: { ...card },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })
    drag(ref)
    const [open, setOpen] = useState(false)
    const HandleOpen = () => {
        setOpen(true)
    }
    const HandleClose = () => {
        setOpen(false)
    }
    return (
        <>
            <Card
                ref={ref}
                onClick={() => HandleOpen()}
                style={{
                    background: isDragging ? '#ccc' : '',
                    opacity: isDragging ? '0.6' : '1',
                }}
            >
                <CardContent
                    style={{
                        minHeight: 100,
                        visibility: isDragging ? 'hidden' : 'visible',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                    }}
                >
                    <Typography
                        variant="h6"
                        display="block"
                        paragraph
                        component="div"
                        style={{ fontSize: 14, wordWrap: 'wrap' }}
                    >
                        {card.text}
                    </Typography>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: card.icon
                                ? 'space-between'
                                : 'flex-end',
                            alignItems: 'center',
                        }}
                    >
                        {card.icon ? card.icon : <></>}
                        <Avatar src={card.avatar}></Avatar>
                    </div>
                </CardContent>
            </Card>
            <Modal
                open={open}
                onClose={() => HandleClose()}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div
                    style={{
                        width: '80%',
                        height: '80%',
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        border: '2px solid #e7e7e7',
                        outline: 'none',
                        padding: 40,
                        paddingTop: 40,
                        boxSizing: 'border-box',
                        overflow: 'auto',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 20,
                        }}
                    >
                        <Typography variant="h3">{card.text}</Typography>
                        <IconButton onClick={() => HandleClose()}>
                            <CloseIcon fontSize="large"></CloseIcon>
                        </IconButton>
                    </div>
                    <Typography variant="body1">
                        {' '}
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Autem deleniti sapiente eveniet, tempora totam
                        voluptate consectetur nihil eaque commodi? Quasi nostrum
                        vel totam voluptatum delectus? Nulla, mollitia
                        doloremque. Error, amet! Maxime veniam dolores dolore
                        eligendi hic nobis quidem a earum tempore fugiat,
                        perspiciatis quam animi, ipsam asperiores illum
                    </Typography>
                    <Typography variant="subtitle2" style={{ marginTop: 50 }}>
                        {card.text}
                    </Typography>
                </div>
            </Modal>
        </>
    )
}

export default CardItem
