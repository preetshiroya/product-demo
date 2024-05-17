import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear()
        navigate("/")
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )

}

export default Dashboard;