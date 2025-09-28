import React, {useState, useEffect, useMemo} from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DetailNotePage from '../pages/DetailNotePage';
import ArchivedNotesPage from '../pages/ArchivedNotesPage';
import NotesAppHeader from './NotesAppHeader';
import AddNotePage from '../pages/AddNotePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import {getUserLogged, putAccessToken} from '../utils/network-data';
import NotFoundPage from '../pages/NotFoundPage';
import LocaleContext from '../context/LocaleContext';
import ThemeContext from '../context/ThemeContext';

function NotesApp() {
    const [authedUser, setAuthedUser] = useState(null);
    const [initializing, setInitializing] = useState(true);
    const [locale, setLocale] = useState('id');
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        async function fetchUser() {
            const {data} = await getUserLogged();
            setAuthedUser(data);

            const storedLocale = localStorage.getItem('locale');
            if (storedLocale) {
                setLocale(storedLocale);
            }

            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) {
                setTheme(storedTheme);
            }

            setInitializing(false);
        }
        fetchUser();
    }, []);


    const toggleLocale = () => {
        setLocale((prevLocale) => {
            const newLocale = prevLocale ===  'id' ? 'en' : 'id';
            localStorage.setItem('locale', newLocale);
            return newLocale;

        });
    }

    const toggleTheme = () => {
    setTheme((prevTheme) => {
        const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme); 
        return newTheme;
    });
}

    const localeContextValue = useMemo(() => {
        return {
            locale,
            toggleLocale
        };
    }, [locale]);

    const themeContextValue = useMemo(() => {
        return {
            theme,
            toggleTheme
        }
    }, [theme]);

    async function onLoginSuccess({accessToken}) {
        putAccessToken(accessToken);
        const {data} = await getUserLogged();
        setAuthedUser(data);
    }

    function onLogout() {
        setAuthedUser(null);
        putAccessToken('');
    }

    if (initializing) {
        return <p>Loading ...</p>;
    }

    if (authedUser === null) {
        return (
            <>
                <ThemeContext.Provider value={themeContextValue}>
                    <LocaleContext.Provider value={localeContextValue}>
                        <div className={`notes-app ${theme}`}>
                            <main>
                                <Routes>
                                    <Route path='/*' element={<LoginPage loginSuccess={onLoginSuccess}/>}/>
                                    <Route path='/register' element={<RegisterPage/>}/>
                                </Routes>
                            </main>
                        </div>
                    </LocaleContext.Provider>
                </ThemeContext.Provider>
            </>
        );
    }

    return (
        <>
            <ThemeContext.Provider value={themeContextValue}>
                <LocaleContext.Provider value={localeContextValue}>
                    <div className={`notes-app ${theme}`}>
                        <NotesAppHeader authedUser={authedUser} onLogout={onLogout}/>
                        <main>
                            <Routes>
                                <Route path='/' element={<HomePage/>}/>
                                <Route path='/add' element={<AddNotePage/>}/>
                                <Route path='/archive' element={<ArchivedNotesPage/>}/>
                                <Route path='/notes/:id' element={<DetailNotePage/>}/>
                                <Route path='*' element={<NotFoundPage/>}/>
                            </Routes>
                        </main>
                    </div>
                </LocaleContext.Provider>
            </ThemeContext.Provider>
        </>
        );
}

export default NotesApp;