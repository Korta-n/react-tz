import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { orange, green, red, blue } from '@material-ui/core/colors'
export const CardsList = [
    {
        id: 0,
        column: {
            columnID: 0,
            index: 0,
        },
        text: '1    , Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',

        avatar:
            'https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg',
        icon: <ArrowUpwardIcon style={{ color: blue[500] }} />,
    },
    {
        id: 1,
        column: {
            columnID: 1,
            index: 0,
        },
        text: '2    , Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',

        avatar:
            'https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg',
        icon: <ArrowUpwardIcon style={{ color: green[500] }} />,
    },
    {
        id: 2,
        column: {
            columnID: 1,
            index: 1,
        },
        text: '3    , Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',

        avatar:
            'https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg',
        icon: <ArrowUpwardIcon style={{ color: orange[500] }} />,
    },
    {
        id: 3,
        column: {
            columnID: 3,
            index: 0,
        },
        text: '4    , Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',

        avatar:
            'https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg',
        icon: <ArrowUpwardIcon style={{ color: red[500] }} />,
    },
]
export const Columns = [
    { ys: true, columnName: 'Waiting', PinColor: '#8d99ae' },
    { columnName: 'In Progress', PinColor: green[400] },
    { ys: true, columnName: 'Completed', PinColor: orange[400] },
    { columnName: 'Deployed', PinColor: blue[500] },
]
export const DefaultCard = {
    id: 0,
    column: {
        columnID: 0,
        index: 0,
    },
    text: 'Custom card',
    avatar:
        'https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg',
    icon: (
        <ArrowUpwardIcon
            style={{ color: '#000', transform: 'rotate(180deg)' }}
        />
    ),
}
