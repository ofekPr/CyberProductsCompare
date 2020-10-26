import React from 'react'
import { SideSheet, Paragraph, Menu, HomeIcon, CornerDialog, LogInIcon, ShoppingCartIcon, CogIcon, toaster } from 'evergreen-ui'
import Component from "@reactions/component";
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Box from '@material-ui/core/Box';
import products from '../sources/products'
import useStyles from '../sources/useStyles'

export default () => {
    const classes = useStyles()
    return(
        <div className="header">
            <Component initialState={{ isShown: false}}>
                {({ state, setState }) => {
                    return (
                        <React.Fragment>
                            <Box className={classes.root} width="100%">
                                <AppBar className={classes.customWidth} position="static" width="100%">
                                    <Toolbar width="100%">
                                        <IconButton
                                            edge="start"
                                            className={classes.menuButton}
                                            color="inherit"
                                            aria-label="open drawer"
                                            onClick={() => setState({ isShown: true })}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Typography className={classes.title} variant="h4" noWrap>
                                            News
                                        </Typography>
                                        <div className={classes.search}>
                                            <Autocomplete
                                                freeSolo
                                                disableClearable
                                                id="combo-box-demo"
                                                options={products}
                                                getOptionLabel={(option) => option.label}
                                                style={{ width: 300, left: 100 }}
                                                renderInput={(params) => <TextField {...params} label="products" color="secondary" variant="outlined" />} />
                                        </div>
                                    </Toolbar>
                                </AppBar>
                            </Box>
                            <SideSheet
                                isShown={state.isShown}
                                onCloseComplete={() => setState({ isShown: false })}
                                width="300px"
                                position="left"
                            >
                                <Paragraph margin={40}>Menu</Paragraph>
                                <Menu className="menu">
                                    <Menu.Group>
                                        <Link className="toLink" to="/"><Menu.Item 
                                            icon={HomeIcon}
                                            onSelect={() => setState({ isShown: false })}>home</Menu.Item></Link>
                                        <Link className="toLink" to="/Products">
                                            <Menu.Item 
                                                icon={ShoppingCartIcon}
                                                onSelect={() => setState({ isShown: false })}>cart</Menu.Item>
                                        </Link>
                                        <Link className="toLink" to="/logIn">
                                            <Menu.Item
                                                icon={LogInIcon}
                                                onSelect={() => setState({ isShown: false })}>log in
                                            </Menu.Item>
                                        </Link>
                                    </Menu.Group>
                                    <Menu.Divider />
                                    <Menu.Group>
                                        <Menu.Item icon={CogIcon} intent="danger">settings</Menu.Item>
                                    </Menu.Group>
                                </Menu>
                            </SideSheet>
                        </React.Fragment>
                    );
                }}
            </Component>
        </div>
    )
}
