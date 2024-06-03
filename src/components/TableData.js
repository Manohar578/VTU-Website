// import React, { useEffect, useState } from "react";
// import { Table, Container } from 'react-bootstrap'
// import axios from "axios";
// import { ToWords } from 'to-words';
// const TableData = ({ studentId }) => {
//     const [studentResult, setStudentResult] = useState([]);

//     const toWords = new ToWords();
//     useEffect(() => {
//         axios.get('http://localhost:3002/resultInfo')
//             .then((response) => {
//                 var temp = response.data.filter((data) =>
//                     data.registerId === studentId)
//                 setStudentResult(temp)
//             })
//     }, [studentId])

//     const getTotalMarks = (value) => {
//         var sum = 0;
//         studentResult.map((data) => {
//             sum += parseInt(data[value])
//         })
//         return (sum)
//     }


//     const scoreHandler = () => {
//         var sum = 0;
//         studentResult.map((data) => {
//             sum += parseInt(data.obtained)
//         })
//         if (sum >= 250) {
//             return "Distinction"
//         }
//         else if (sum >= 200 && sum < 250) {
//             return "First Class"
//         }
//         else if (sum > 170 && sum < 200) {
//             return 'Second Class'
//         } else {
//             return 'FAIL'
//         }
//     }

//     const TotalMarksInWords = () => {
//         let a = getTotalMarks('obtained')
//         let text = toWords.convert(a)
//         return text
//     }
//     const finalResult = () => {
//         var count = 0;
//         studentResult.map((d) => {
//             if (d.result === 'PASS') {
//                 count++
//             }
//         })
//         console.log("count is", count)
//         if (count <= 3) {
//             return 'FAIL'
//         } else {
//             return 'PASS'
//         }
//     }

//     const totalPercentage = () => {
//         let max_marks = getTotalMarks('max_marks')
//         console.log("max_marks", max_marks)
//         let obtained_marks = getTotalMarks('obtained')
//         console.log("obtained_marks", obtained_marks)

//         let x = '%',
//             percent = Math.floor((obtained_marks / max_marks) * 100)
//         console.log("percent is", percent, x)
//         return [percent, x]
//     }



//     return (
//         <>
//             <Container>
//                 <Table bordered responsive striped>
//                     <thead>
//                         <tr>
//                             <th>Sl No</th>
//                             <th colSpan={2}>Subject
//                                 <th>code</th>
//                                 <th>Subject</th>
//                             </th>
//                             <th colSpan={3}>Examination Marks Obtained
//                                 <th>Max</th>
//                                 <th>Min</th>
//                                 <th>Obtained</th>
//                             </th>
//                             <th>Subject Result</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             studentResult.map((res, index) => (
//                                 <tr key={index}>
//                                     <td>{res.slNo}</td>
//                                     <td>{res.code}</td>
//                                     <td>{res.subject}</td>
//                                     <td>{res.max_marks}</td>
//                                     <td>{res.min_marks}</td>
//                                     <td>{res.obtained}</td>
//                                     <td>{res.result}</td>
//                                 </tr>
//                             ))
//                         }

//                     </tbody>
//                     <thead>
//                         <tr>
//                             <th colSpan={3}>Grand Total</th>
//                             <td>{getTotalMarks('max_marks')}</td>
//                             <td>{getTotalMarks('min_marks')}</td>
//                             <td>{getTotalMarks('obtained')}</td>
//                             <td>{finalResult()}</td>
//                         </tr>
//                     </thead>
//                 </Table><br />
//                 <p><b>Total Marks Obtained [In Words]:</b>{TotalMarksInWords()}</p>
//                 <p><b>Result of Semester:</b>{scoreHandler()}</p>
//                 <p><b>Percentage:</b>{totalPercentage()}</p>
//                 <p>Date: 15 Sept 2023</p>
//             </Container>
//         </>
//     );
// }
// export default TableData;





import React, { useState, useEffect } from "react";
import { Container, Table } from 'react-bootstrap';
import axios from "axios";
import { ToWords } from 'to-words';

const TableData = ({ studentId }) => {
    //console.log("regid", studentId)

    const [studentResult, setStudentResult] = useState([])

    const toWords = new ToWords()

    useEffect(() => {
        axios.get('http://localhost:3001/resultInfo')
            .then((response) => {
                //console.log("res", response.data)
                var temp = response.data.filter((data) => data.registerId === studentId)
                setStudentResult(temp)
                //console.log("temp", temp)
            })
    }, [studentId])
    //console.log("student",studentResult)

    const getTotalMarks = (value) => {
        var sum = 0;
        studentResult.map((data) => {
            sum += parseInt(data[value])
        })
        return (sum)
    }

    const scoreHandler = () => {
        var sum = 0;
        studentResult.map((data) => {
            sum += parseInt(data.obtained)
        })
        if (sum >= 250) {
            return "Distinction"
        }
        else if (sum >= 200 && sum < 250) {
            return "First Class"
        }
        else if (sum > 170 && sum < 200) {
            return 'Second Class'
        } else {
            return 'FAIL'
        }
    }

    const TotalMarksInWords = () => {
        let a = getTotalMarks('obtained')
        let text = toWords.convert(a)
        return text
    }

    const finalResult = () => {
        var count = 0;
        studentResult.map((d) => {
            if (d.result === 'PASS') {
                count++
            }
        })
        console.log("count is", count)
        if (count <= 2) {
            return 'FAIL'
        } else {
            return 'PASS'
        }
    }

    const totalPercentage = () => {
        let max_marks = getTotalMarks('max_marks')
        console.log("max_marks", max_marks)
        let obtained_marks = getTotalMarks('obtained')
        console.log("obtained_marks", obtained_marks)

        let x = '%',
            percent = Math.floor((obtained_marks / max_marks) * 100)
        console.log("percent is", percent, x)
        return [percent, x]
    }

    return (
        <Container>
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th colSpan={2}>Subject
                            <th>Code</th>
                            <th>Subject</th>
                        </th>
                        <th colSpan={3}>Examination Marks Obtained
                            <th>Max</th>
                            <th>Min</th>
                            <th>Obtained</th>
                        </th>
                        <th>Subject Result</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentResult.map((res, index) => (
                            <tr key={index}>
                                <td>{res.slNo}</td>
                                <td>{res.code}</td>
                                <td>{res.subject}</td>
                                <td>{res.max_marks}</td>
                                <td>{res.min_marks}</td>
                                <td>{res.obtained}</td>
                                <td>{res.result}</td>
                            </tr>
                        ))
                    }
                </tbody>
                <thead>
                    <tr>
                        <th colSpan={3}>GrandTotal</th>
                        <td>{getTotalMarks('max_marks')}</td>
                        <td>{getTotalMarks('min_marks')}</td>
                        <td>{getTotalMarks('obtained')}</td>
                        <td>{finalResult()}</td>
                    </tr>
                </thead>
            </Table><br />

            <p><b>Total Marks Obtained[In Words]:{TotalMarksInWords()}</b></p>
            <p><b>Result of Semester:{scoreHandler()}</b></p>
            <p><b>Percentage:{totalPercentage()}</b></p>
            <p><b>Date:05 Dec 2023</b></p>
        </Container>
    )
}

export default TableData