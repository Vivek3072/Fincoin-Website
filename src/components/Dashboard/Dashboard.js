import React from 'react'
import graph from '../Assets/graph.png'
import DashboardNav from './DashboardNav'
import './dashboard.css'
function Dashboard() {
    return (
        <>
            <DashboardNav />
            <div className="container">
                <div className="graphbox">
                    <img style={{width:"45vw"}}src={graph} alt="" />
                </div>
            </div>
        </>
    )
}

export default Dashboard
