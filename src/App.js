import { useState } from 'react';
import './App.css';

function App() {

    let [s1,sets1] = useState('');
    let [s2,sets2] = useState('');
    let [ar,setar] = useState([]);

    
    let arr=[];

    let slot = () => {
       
        let time,slt,t1=[],t2=[],h1,h2,gap,a1,a2,g1;

        time=parseInt(s2)-parseInt(s1);
        t1=s1.split(":");
        t2=s2.split(":");
        alert(t1);
        h1=t1[0];
        h2=t2[0];
        a1=t1[1];
        a2=t2[1];
        gap=(parseInt(h2)-parseInt(h1))*6;
        for(let i=0;i<=gap;i++)
        {
            a1=parseInt(a1)+10;
            if(t1[1]>60)
            {
                g1=(50-a1)+10;
                g1=10-a1;
                h1++; 
            }
            slt=h1+" : "+t1[1];
            arr.push(slt);
        }
        setar(arr);
    }

    return (
        <div className="App">
            <div className="slot">
                <div className="screen">
                    <input type="text" onChange={(a) => {sets1(a.target.value)}}></input>
                    <input type="text" onChange={(a) => {sets2(a.target.value)}}></input>
                </div>
                <div className="result">
                    <input type="button" value={"calc"} onClick={slot}></input>
                </div>

                <div>
                    <table>
                        {
                            ar.map((ele,ind)=>{
                                return(
                                    <tr>
                                        <td>{ele} {" ind=" +ind}</td>
                                    </tr>
                                )
                            })
                        }
                    </table> 
                </div>
                
            </div>
        </div>
    );
}

export default App;
