const options = {
    plugins:{
     legend:{
        labels:{
          usePointStyle:true,
          pointStyle:`cricle`,
          font: {
            size: 18
        },
        },
     },
      tooltip:{
        fontSize: 18,
        padding: 10,
        backgroundColor: 'black',
     
      
       bodyFont:{
        "weight": "bold",
        "size": 18
       },
        titleFont: {
          "weight": "bold",
          "size": 20
        }
      }
    },
      scales: {
        y: {
          ticks: {
            color: 'black',
            font: {
              size: 19,
            }
          }
        },
        x: {
          ticks: {
            color: 'black',
            font: {
              size: 19
            }
          }
        }
      },
 
  }

  export default options