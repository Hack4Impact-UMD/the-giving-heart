import React from 'react';



export default function IndexPage() {
  // Your component logic can go here, but make sure it's inside the functional component

  return (
    <div>
      <main style = {{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <div style={{ display: 'flex', alignItems: 'center',flexDirection: 'row', justifyContent: 'center', gap: '10px', backgroundColor: 'white'}}>
            <div className="column"><img src="link" alt="Background Image"/> </div>
            <div className="column"><h2 style = {{color: 'black'}}>Est. 2002</h2> </div>
            <div className="column"><img src="link" alt="Background Image"/> </div>
        </div>

        <div>
            <h2 style = {{display: 'flex', justifyContent: 'center'}}>Who We Are</h2>
            <p style = {{display: 'flex', justifyContent: 'center'}}>This is the content for the section.</p>
        </div>

        <div>
            <div>
            <h2 style = {{display: 'flex', justifyContent: 'center'}}>Ways We Help Others</h2>
            <div style={{ display: 'flex', alignItems: 'center',flexDirection: 'row', justifyContent: 'center', gap: '10px'}}>
                <img src="link" alt=" Image"/>
                <img src="link" alt=" Image"/>
                <img src="link" alt=" Image"/>
            </div>
            </div>
        </div>

      </main>
    </div>
  );
}
