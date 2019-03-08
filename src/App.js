import React, { Component } from 'react';
import Pict1 from './IMG/up1.png';
import logo1 from './IMG/git3.png';
import logo2 from './IMG/pf1.png';
import './style.css';


class Math1 extends Component{

    sum(){
        var data1 = parseInt(document.getElementById("in1").value);
        var data2 = parseInt(document.getElementById("in2").value);
        var data3 = parseInt(document.getElementById("in3").value)/1200;
        //var total = data1 * data2 * data3 /100;
        var nem = data1 * data3;
        var dem = 1 - 1/Math.pow(1+data3,data2);
        var total = nem/dem;
        

        if (isNaN(total)){
            if(isNaN(data1) && Number.isInteger(data2)){console.log("First Empty"); total = data2;}
            if(isNaN(data2) && Number.isInteger(data1)){console.log("Second Empty"); total = data1;}
            if(isNaN(data1) && isNaN(data2)){console.log("Both Empty"); total = 0;}
            console.log(" ");
        }

        document.getElementById("in4").innerHTML = total;
    }

    render(){
        return(
            <div className="m-cont">

                <div className="app-cont">
                    <h1>INTEREST CALCULATOR</h1>
                    <p className="sub-t">A  ReactJs  Application</p>

                    <img className="pic1" src={Pict1} alt="image" />

                    <div className="data-cont">

                        <div className="indata">
                            <label>Enter Amount</label>
                            <input type="text" name="perc" id="in1" className="in1" />
                        </div><br/>


                        <div className="indata">
                            <label>Enter duration in months</label>
                            <input type="text" name="perc" id="in2" className="in1" />
                        </div><br/>

                        <div className="indata">
                            <label>Enter Interset Rate</label>
                            <input type="text" name="perc" id="in3" className="in1" />
                        </div><br/>


                        <input className="button1" type="submit" onClick={() => this.sum()} value="Calculate Monthly Installment"></input><br/><br/>


                        <div className="indata">
                            <label>Installment</label>
                            <div id="in4" className="answ1"></div>permonth
                        </div><br/>

                    </div>


                </div>

            </div>
        )
    }
}

export default Math1;