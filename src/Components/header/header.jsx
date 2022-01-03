import React, { useRef } from 'react';
import styles from './header.module.css'

const Header = ({onSearch}) => {
    const inputRef = useRef()

    const handleSearch = () => {
        const value = inputRef.current.value
        value && onSearch(value)
        inputRef.current.value = ''
    }
    const onClick = () => {
        handleSearch()
    }
    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }
    return (
        <header className={styles.header}>
            <div className={ styles.logo}>
                <img className={ styles.img } src="/images/logo.png" alt="logo" />
                <h1 className={ styles.title }>Youtube</h1>
            </div>
            <input className={ styles.input } type="text" placeholder='search..' ref={ inputRef } onKeyPress={onKeyPress}/>
            <button className={ styles.button } type='submit' onClick={onClick}>
                <img src="/images/search.png" alt="search" />
            </button>
        </header>
    )
}

export default Header;