export const initialState = {
    basket: [],
    
    orders:[],
    
    storedetails:{}

    
};

export const getBasketTotal = (basket)=>basket?.reduce((amount, item)=> item.Count*(item.price)+amount, 0);

export const getTotalDuration = (basket)=>basket?.reduce((duration, item) =>item.Count*(item.duration)+duration, 0);

function reducer(state, action){
   
    switch(action.type){
      
        
        case "ADD_TO_BASKET" : 
                  
                   return {
                       ...state,
                       basket: [...state.basket, action.item]
                   };

                   
        case "ADD_THE_DETAILS" : 
                  
                   return {
                       ...state,
                       storedetails: action.data
                   };

                              
        case  "REMOVE_FROM_BASKET" :
           let newBasket = [...state.basket];
           const index = state.basket.findIndex((basketItem)=> basketItem.ProductId === action.id )
             
           if(index>=0){
              
               newBasket.splice(index, 1);
               
           }
              return {...state,
            basket: newBasket,
        };  
        
        case  "ADD_ITEM" :
            
            return {
                ...state,
                basket: state.basket.map(basketItem =>
                  basketItem.ProductId === action.id
                    ? {...basketItem, Count: basketItem.Count + 1}
                    : basketItem,
                ),
              }; 
             
        
         case  "DELETE_ITEM" :
      
            
            
            return {
                ...state,
                basket: state.basket.map(basketItem =>
                  basketItem.ProductId === action.id
                    ? (basketItem.Count > 1 ? {...basketItem, Count: basketItem.Count - 1} : state.basket.splice(state.basket.findIndex((basketItem)=> basketItem.ProductId === action.id ),1) )
                    : basketItem,
                ),
              };

            
       

        case "CONFIRM_ORDER" :
            return {
                ...state,
                orders: [...state.orders, action.order]
            };
                      
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }

        case "CLEAR_BASKET":

                return{
                    ...state,
                    basket : []
                }    
              
        default: 
            return state;         
    
    }          


}

export default reducer;