import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './loginPage'
import { AboutPage } from './AboutPage'
import { Navbar } from './Navbar'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
    return (
        <UserProvider>
            <h1>MainApp</h1>
            <Navbar />
            <hr />
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='about' element={ <AboutPage /> } />
                <Route path='login' element={ <LoginPage /> } />

                {/* <Route path='/*' element= { <LoginPage /> } /> */}
                <Route path='/*' element= { <Navigate to="about" /> } />
            </Routes>
        </UserProvider>
    )
}
