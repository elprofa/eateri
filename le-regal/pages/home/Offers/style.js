import { alpha } from '@theme-ui/color'
import logobgUrl from '~/public/logo-bg.svg'

const styles = {
    section: {
        position: 'relative',
        zIndex: 1,
        pt: [7, null, 13],
        bg: ['background', null, 'secondary.pale'],
        backgroundImage: [null, null, `url('${logobgUrl}')`],
        backgroundSize: '170%',
        backgroundAttachment: 'fixed',
        borderTopLeftRadius: [40, null, 'none'],
        borderTopRightRadius: [40, null, 'none'],
        '.wave-decoration': {
            display: ['none', null, 'block'],
        },
        '.scrollable': {
            flexWrap: ['nowrap', null, 'wrap'],
            justifyContent: [null, null, 'center'],
            textAlign: 'center',
            mt: '-1.5em',
            mb: [null, null, 8],
            mx: ['-1.5em', null, 'auto'],
            pb: [6, null, 1],
            minWidth: 0,
            maxWidth: 'container',
        },
    },
    container: {
        maxWidth: 'maxContainer',
    },
    stackContext: {
        position: 'relative',
        zIndex: 1,
    },
    header: {
        display: [null, null, 'none'],
        mb: 7, // '1.75em',
        mx: [null, null, 3],
    },
    topOffer: {
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        columnGap: [4, null, 7],
        placeContent: 'center',
        textAlign: 'center',
        px: 4,
        py: [4, null, null, 7],
        lineHeight: 'tight',
        bg: ['heroStripe3', null, null, 'primary.base'],
        color: ['white', null, null, 'textOnPrimary'],
        borderTop: [null, null, null, '20px solid'],
        borderBottom: [null, null, null, '21px solid'],
        borderColor: [null, null, null, 'secondary.hover'],
        borderRadius: ['30', null, null, '20'],
        boxShadow: t => [
            `0 15px 20px -5px ${alpha('heroStripe3', 0.5)(t)}`,
            null,
            null,
            `0 25px 25px -20px ${alpha('heroStripe3', 0.95)(t)}`,
        ],
        '::before,::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            borderRadius: 'inherit',
            zIndex: -1,
            placeSelf: 'center',
            display: [null, null, null, 'none'],
        },
        '&:before': {
            width: '85%', // null, null, '15%'],
            height: '112%', //  null, null, '5px'],
            // left: [null, null, null, '5%'],
            bg: t => alpha('accent.base', 0.3)(t),
        },
        '&:after': {
            width: '92%', // null, null, '15%'],
            height: '107%', // null, null, '5px'],
            // right: [null, null, null, '5%'],
            bg: t => alpha('accent.base', 0.5)(t),
        },
        p: {
            zIndex: 1,
        },
    },
    iconGift: {
        gridRow: 'span 3',
        placeSelf: 'center',
        color: ['primary.base', null, null, 'secondary.hover'],
        svg: {
            display: 'block',
            fontSize: ['3.5em', null, '5em'],
            transform: 'rotate(15deg)',
        },
    },
    textDiscount: {
        fontSize: [6, null, 8],
        color: ['primary.base', null, null, 'white'],
        fontWeight: 'bold',
    },
    textSkew: {
        transform: 'skewX(-5deg)',
    },
    doodleBg: {
        position: 'absolute',
        size: 'fluid',
        borderRadius: 'inherit',
    },
    offersCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: '0 0 auto',
        maxWidth: '9em',
        mt: 4,
        mx: 2,
        padding: ['1.25em', null, 4],
        bg: 'primary.base',
        border: t => [null, null, `1px solid ${t.colors.primary.hover}`],
        borderRadius: ['circle', null, 'tiny'],
        boxShadow: t => [`0 15px 20px -5px ${alpha('primary.base', 0.5)(t)}`, null, 'none'],
        cursor: 'pointer',
        transition: 'background-color 0.4s ease-out, transform 0.4s ease-out',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        ':hover': {
            bg: 'primary.hover',
            transform: 'scale(1.05)',
        },
        p: {
            fontSize: [null, null, 1],
        },
        'p span': {
            display: 'block',
            fontSize: [null, null, 3],
        },
    },
}
export default styles
