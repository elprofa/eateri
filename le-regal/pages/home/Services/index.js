import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Container, Card, Grid, Box } from '@theme-ui/components'
import { Heading, Text } from '~@/typography'
import { Icon, Reveal, grow } from '~@/general'
import { WaveDecoration } from '~@/other'
import { Linkable } from '~@/navigation'
import { RouteModal } from '~@/display'
import useScrollTo from '~/hooks/useScrollTo'

import { HASH_ID_RESERVATIONS } from '~/constants'

import CateringSvg from '~/public/inlineSvg/catering.svg'
import DeliverySvg from '~/public/inlineSvg/delivery.svg'
import DineSvg from '~/public/inlineSvg/dine.svg'
import TakeawaySvg from '~/public/inlineSvg/takeouts.svg'

import styles from './style'

const ServiceMap = dynamic(() => import('~@/services/ServiceMap'), {
    // TODO: Make loading placeholder
    loading: () => (
        <Box p={7} bg="primary.base">
            <p>LOADING...</p>
        </Box>
    ),
})

function Services() {
    const { linkScroll } = useScrollTo({ offset: 20 })
    const router = useRouter()
    const { service } = router.query

    return (
        <>
            <section id="homepage-services" sx={styles.section}>
                <Container variant="loose">
                    <Reveal as={Container} forwardAs="header" variant="content" cascade whenInView>
                        <Text as="h2" variant="badgeLink" mb={2} bg="primary.pale" color="primary.base">
                            <Link href="/services" passHref>
                                <a>Our Services</a>
                            </Link>
                        </Text>
                        <Heading as="p" variant="headline" color="text" title>
                            Why We Are The Top Faves!
                        </Heading>
                        <Text color="textLight" spacing="wider" size={3}>
                            Whether you're planning the party of the year, a cocktail masterclass or a simple but
                            stylish dinner with friends, you're in expert hands.
                        </Text>
                    </Reveal>
                    <Reveal motion={grow} threshold={0.3} cascade whenInView>
                        <Grid gap={4} sx={styles.grid}>
                            <Linkable
                                href="/?service=dining"
                                as="/services/dining"
                                accessibilityText="Dining & Buffet: Join us at the table"
                                shallow
                                scroll={false}
                                hover
                            >
                                <Card variant="services" sx={styles.cardDine}>
                                    <Text variant="title" sx={styles.cardText}>
                                        Join Us
                                        <span>At The</span>
                                        Table
                                    </Text>
                                    <DineSvg sx={styles.svgDine} />
                                </Card>
                            </Linkable>
                            <Linkable
                                href="/?service=takeaway"
                                as="/services/takeaway"
                                accessibilityText="Order Takeaway: The Perfect Grab-n-go!"
                                shallow
                                scroll={false}
                                hover
                            >
                                <Card variant="services" sx={styles.cardTakeaway}>
                                    <Text variant="title" sx={styles.cardText}>
                                        The
                                        <span>Perfect</span>
                                        Grab-n-go!
                                    </Text>
                                    <TakeawaySvg sx={styles.svgTakeaway} />
                                </Card>
                            </Linkable>
                            <Linkable
                                href="/?service=delivery"
                                as="/services/delivery"
                                accessibilityText="Food Delivery: Speedy delivery to your doorsteps"
                                shallow
                                scroll={false}
                                hover
                                sx={styles.gridItem}
                            >
                                <Card variant="services" sx={styles.cardDelivery}>
                                    <Text variant="title" size={5}>
                                        Speedy
                                        <span>DELIVERY</span>
                                        To your doorsteps
                                    </Text>
                                    <DeliverySvg sx={styles.svgDelivery} />
                                </Card>
                            </Linkable>
                            <div sx={styles.gridRowFlex}>
                                <Linkable
                                    href={`#${HASH_ID_RESERVATIONS}`}
                                    onClick={linkScroll}
                                    accessibilityText="Make dinner reservations"
                                    hyperlink
                                    hover
                                >
                                    <Card variant="services" sx={styles.cardReserve}>
                                        <div>
                                            <Text variant="title" size={4}>
                                                Reservations
                                            </Text>
                                            <hr sx={styles.divider} />
                                            <Text variant="title" size={4}>
                                                17:00 - 23:00 PM
                                            </Text>
                                        </div>
                                        <Icon name="arrowgofill" />
                                    </Card>
                                </Linkable>
                                <Linkable
                                    href="/?service=catering"
                                    as="/services/catering"
                                    accessibilityText="Event Catering"
                                    shallow
                                    scroll={false}
                                    hover
                                >
                                    <Card variant="services" title="Event Catering" sx={styles.cardCatering}>
                                        <CateringSvg sx={styles.svgCatering} />
                                        Catering
                                    </Card>
                                </Linkable>
                            </div>
                        </Grid>
                    </Reveal>
                </Container>
                <WaveDecoration color="primary.base" />
            </section>
            <RouteModal isOpen={!!service}>
                <ServiceMap service={service} />
            </RouteModal>
        </>
    )
}

export default Services
