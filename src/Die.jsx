import React from "react"

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
       
    }
    
    
   function createDiceDots() {
    if (props.value === 1) {
        return (
            <div className="dice first-face">
                <span className="dot"> </span>
            </div>)
    } else if (props.value === 2) {
        return (
            <div className="dice second-face">
                <span className="dot"> </span>
                <span className="dot"> </span>
            </div>
        )
    } else if (props.value === 3) {
        return (
            <div className="dice third-face">
                <span className="dot"> </span>
                <span className="dot"> </span>
                <span className="dot"> </span>
            </div>
        )
    }  else if (props.value === 4) {
        return (
            <div className="dice fourth-face">
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>
        )
    }  else if (props.value === 5) {
        return (
            <div className="dice fifth-face">
                <div className="column">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                
                <div className="column">
                  <span className="dot"></span>
                </div>
                
                <div className="column">
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
            </div>
        ) 
    } else if (props.value === 6) {
        return (
            <div className="fourth-face dice">
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                 </div>
            </div>
        )
    }
  }
    
    return (
           <div 
            className="dice-radius"
            style={styles}
            onClick={props.holdDice}
        >
           
              {createDiceDots()}
            
        </div>
    )
}