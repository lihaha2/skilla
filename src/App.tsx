import './App.css'
import CallsHeader from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
    return (
        <div className='App'>
            <Sidebar />
            <main className='Content'>
                <CallsHeader />
            </main>
        </div>
    )
}

export default App
