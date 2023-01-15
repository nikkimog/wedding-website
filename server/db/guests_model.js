const Pool = require('pg').Pool

const pool = new Pool({
  user: 'newuser',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5432,
});

const  getGuests =  async (guestName) => {

  let coupleId
  let result 

    return new Promise(function(resolve, reject) {
    pool.query(`SELECT * FROM guests WHERE name ILIKE '${guestName}'`, (error, results) => {
      if (error) {
        reject(error)
      }
      // resolve(results)
      console.log('results.length', results.length)
      if (results.length === 0){
        return []
      }
      console.log('results', results.rows)
      // coupleId = results.rows[0].coupleId
      // console.log('coupleId', coupleId)
      //  resolve(results.rows)
      if (results.rows.length){
      coupleId = results.rows[0].coupleId
      if(coupleId){
        console.log('inside coupleid')
        resolve(getCouple(coupleId))
      } 
      }
     else {
        resolve(results.rows)

      }
       
      
       resolve(results.rows)
      }
    )
  })
}

  const getCouple = (coupleId) => {
    return new Promise(function(resolve,reject){
      pool.query(`SELECT *
    FROM couples
    INNER JOIN guests ON guests."coupleId" = couples.id
    WHERE guests."coupleId"=${coupleId}`, (error,results)=>{
      if (error){
        reject(error)
      } 
       resolve(results.rows)
    })
  })
  }

const updateGuest = async (guestId, RSVPResponse, RSVPMessage) => {
  console.log('RSVPResponse', RSVPResponse )
  console.log('id', guestId)
  const RSVPstatus=  new Promise(function(resolve, reject){
    pool.query(`UPDATE guests
    SET "RSVPstatus"=${RSVPResponse} 
    WHERE "id"=${guestId}`, (error, results)=> {
      if (error){
        reject(error)
      }
      resolve(results)
    }
  )
  })
  console.log('rsvpmessage', RSVPMessage)
  const messageForCouple = new Promise(function(resolve,reject){
    pool.query(`UPDATE guests
  SET "messageForCouple"='${RSVPMessage}' 
  WHERE id=${guestId}`, (error, results)=> {
    if (error){
      reject(error)
    }
    resolve(results)
  }
)
})
const both= await Promise.all([RSVPstatus, messageForCouple])
return both
}


// const createMerchant = (body) => {
//   return new Promise(function(resolve, reject) {
//     const { name, email } = body

//     pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(`A new merchant has been added added: ${JSON.stringify(results.rows[0])}`)
//     })
//   })
// }

// const deleteMerchant = (merchantId) => {
//   return new Promise(function(resolve, reject) {
//     const id = parseInt(merchantId)

//     pool.query('DELETE FROM merchants WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         reject(error)
//       }
//       resolve(`Merchant deleted with ID: ${id}`)
//     })
//   })
// }

module.exports = {
  getGuests,
  updateGuest
  // createMerchant,
  // deleteMerchant,
}