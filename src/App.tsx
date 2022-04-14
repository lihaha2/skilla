import './App.css'
import Calls from './components/Calls'
import CallsHeader from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
    return (
        <div className='App'>
            <Sidebar />
            <main className='Content'>
                <CallsHeader />
                <Calls />
            </main>
        </div>
    )
}

export default App
