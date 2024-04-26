import { useState,useRef } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const options=['상품 관리','상품 수정','상품 삭제'];

function Search() {
    const [open, setOpen]=useState(false);
    const anchorRef=useRef(null);
    const [selectedIndex, setSelectedIndex]=useState(1);

    const handleClick = () => {
        console.info(`You clicked ${options[selectedIndex]}`);
    };
    const handleMenuItemClick = (event,index)=> {
        setSelectedIndex(index);
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen((prevOpen)=>!prevOpen);
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    return (
        <>
            <ButtonGroup
                variant="contained"
                ref={anchorRef}
                aria-label="Button group with a nested menu"
            >
                <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                <Button 
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select merge strategy"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <ArrowDropDownIcon />
                </Button>
            </ButtonGroup>
            <Popper
                sx={{
                    zIndex:1,
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({TransitionProps,placement})=> (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                            placement==='bottom' ? 'center-top' :'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    {options.map((option,index)=> (
                                        <MenuItem
                                            key={option}
                                            //disabled={index===2}
                                            selected={index===selectedIndex}
                                            onClick={(event)=>handleMenuItemClick(event,index)}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    )
}
export default Search;