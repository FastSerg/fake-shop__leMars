import * as React from 'react'
import { Box, Grid, Tab, Tabs } from '@mui/material/'
import {
    arrMainPageLeft,
    arrMainPageProps,
} from '../../../../Main/CardMainContent/arrGridContainerMain'
import ItemHeaderMenu from '../CategoryImgList/ItemHeaderMenu'

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box
                    sx={{ p: 3, display: 'flex', gap: '20px', width: '850px' }}
                >
                    {children}
                </Box>
            )}
        </div>
    )
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    }
}

export default function CategoryTab() {
    const [value, setValue] = React.useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: 'background.paper',
                display: 'flex',
                height: '260px',
                maxWidth: '960px',
                width: '100%',
            }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="All" {...a11yProps(0)} />
                <Tab label="BEAUTY" {...a11yProps(1)} />
                <Tab label="FASHION" {...a11yProps(2)} />
                <Tab label="LIFESTYLE" {...a11yProps(3)} />
                <Tab label="TRAVEL" {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                {arrMainPageLeft
                    // .filter(
                    //     ({ nameCategory }: arrMainPageProps) =>
                    //         nameCategory === 'FASHION'
                    // )
                    .map(
                        ({
                            img,
                            alt,
                            nameCategory,
                            title,
                            id,
                        }: arrMainPageProps) => (
                            <Grid
                                key={id}
                                container
                                spacing={1}
                                sx={{
                                    textAlign: 'center',
                                    display: 'flex',
                                }}
                            >
                                <Grid item md={12}>
                                    <ItemHeaderMenu
                                        img={img}
                                        alt={alt}
                                        nameCategory={nameCategory}
                                        title={title}
                                        id={id}
                                    />
                                </Grid>
                            </Grid>
                        )
                    )}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {arrMainPageLeft
                    .filter(
                        ({ nameCategory }: arrMainPageProps) =>
                            nameCategory === 'FASHION'
                    )
                    .map(
                        ({
                            img,
                            alt,
                            nameCategory,
                            title,
                            id,
                        }: arrMainPageProps) => (
                            <Grid
                                key={id}
                                container
                                spacing={1}
                                sx={{
                                    textAlign: 'center',
                                    display: 'flex',
                                }}
                            >
                                <Grid item md={12}>
                                    <ItemHeaderMenu
                                        img={img}
                                        alt={alt}
                                        nameCategory={nameCategory}
                                        title={title}
                                        id={id}
                                    />
                                </Grid>
                            </Grid>
                        )
                    )}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {arrMainPageLeft
                    // .filter(
                    //     ({ nameCategory }: arrMainPageProps) =>
                    //         nameCategory === 'FASHION'
                    // )
                    .map(
                        ({
                            img,
                            alt,
                            nameCategory,
                            title,
                            id,
                        }: arrMainPageProps) => (
                            <Grid
                                key={id}
                                container
                                spacing={1}
                                sx={{
                                    textAlign: 'center',
                                    display: 'flex',
                                }}
                            >
                                <Grid item md={12}>
                                    <ItemHeaderMenu
                                        img={img}
                                        alt={alt}
                                        nameCategory={nameCategory}
                                        title={title}
                                        id={id}
                                    />
                                </Grid>
                            </Grid>
                        )
                    )}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {arrMainPageLeft
                    .filter(
                        ({ nameCategory }: arrMainPageProps) =>
                            nameCategory === 'TRAVEL'
                    )
                    .map(
                        ({
                            img,
                            alt,
                            nameCategory,
                            title,
                            id,
                        }: arrMainPageProps) => (
                            <Grid
                                key={id}
                                container
                                spacing={1}
                                sx={{
                                    textAlign: 'center',
                                    display: 'flex',
                                }}
                            >
                                <Grid item md={12}>
                                    <ItemHeaderMenu
                                        img={img}
                                        alt={alt}
                                        nameCategory={nameCategory}
                                        title={title}
                                        id={id}
                                    />
                                </Grid>
                            </Grid>
                        )
                    )}
            </TabPanel>
            <TabPanel value={value} index={4}>
                {arrMainPageLeft
                    .filter(
                        ({ nameCategory }: arrMainPageProps) =>
                            nameCategory === 'FASHION'
                    )
                    .map(
                        ({
                            img,
                            alt,
                            nameCategory,
                            title,
                            id,
                        }: arrMainPageProps) => (
                            <Grid
                                key={id}
                                container
                                spacing={1}
                                sx={{
                                    textAlign: 'center',
                                    display: 'flex',
                                }}
                            >
                                <Grid item md={12}>
                                    <ItemHeaderMenu
                                        img={img}
                                        alt={alt}
                                        nameCategory={nameCategory}
                                        title={title}
                                        id={id}
                                    />
                                </Grid>
                            </Grid>
                        )
                    )}
            </TabPanel>
        </Box>
    )
}
