import axios from 'axios';

//can be provided how many changes must be loaded
//changesLimit
//{{url}}/users/me?changesLimit=1

const api_getUserWithToken = async (token, changesLimit) => {
    let url = `${process.env.REACT_APP_API_URL}/users/me`;
    if (changesLimit) url = url + `?changesLimit=${changesLimit}`

      const response = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      return response;

  }

  export default api_getUserWithToken


//   //Get user info
// router.get('/users/me', auth, async (req, res) => {
//     if (!req.user) return res.status(404).send('User is not found')
//     try{
//         let user = req.user;
//         await user.populate('articles').
//         populate({
//             path: 'changes',
//             options: {
//                 limit: parseInt(req.query.changesLimit)
//             }
//         }).execPopulate()
//         user.tokens = []
//         res.send(user)
//     } catch(e) {
//         res.status(500).send(e.message)
//     } 
    
// })