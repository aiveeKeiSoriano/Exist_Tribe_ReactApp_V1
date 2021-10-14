import { makeStyles } from '@material-ui/core'
import { containerBlockWidth } from '../../constants'

export const useStyles = makeStyles((theme) => ({
    appBar: {
        width: containerBlockWidth,
        margin: `80px auto ${theme.spacing(2)}px auto`,
        borderRadius: '999vmin',
        padding: '4px',
        backgroundColor: theme.palette.secondary.dark,
    },

    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))