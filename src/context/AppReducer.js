export default (state, action) => {
     switch (action.type){
         case 'update':
             return{
                 ...state,
                 transactions: [action.payload]
             }        
         default:
             return state;
     }
}