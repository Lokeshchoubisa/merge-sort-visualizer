import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Algo visualizer</a>
  {/* <a class="navbar-brand" href="#">MergeSort</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    
    <span class="navbar-text">
      MergeSort
    </span>
  </div>
</nav>
        </div>
    )
}
