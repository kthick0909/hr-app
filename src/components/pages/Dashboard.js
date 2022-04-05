import React from "react";
import Navbar from '../layout/Navbar'

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <div class="height-100 bg-light">
            <div class="row">
                <div class="col">
                    <h4 class="p-2">Welcome to the HR React App</h4>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/HEf_xrgmuRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/fTr89ENLZPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard