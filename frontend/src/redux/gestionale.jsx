import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:{
    clients:[
      {
        name:"totti",
        id:23322222222
      },
      {
        name:"gerry scotti",
        id:23322323232323232
      },
    ],
    payments:[
      {
        name:"contanti",
        id:"233222222ssss22"
      },
      {
        name:"carta",
        id:"233223232323erere23232"
      },
    ],
    expirations:[
     {
      costumer:"Gerry Scotti",
      amount:100,
      commission:5,
      payment:"carta",
      status:"e",
      reminder:new Date('December 17, 1995').toString().slice(0, 15),
      date:new Date('December 17, 1995').toString().slice(0, 15),
     },
    ],
  }
  ,
}
export const gestionaleSlice = createSlice({
  name: 'gestionale',
  initialState,
  reducers: {
    addClient:(state, action)=>{
        state.value.clients = [
            ...state.value.clients,
              {
                "name":action.payload,
                "id":+ Math.random().toFixed(3)
              }
        ]
    },
    removeClient:(state,action) => {
      state.value.clients = state.value.clients.filter(item => item.id !== action.payload)
    },
    addPaymentMethod:(state, action)=>{
      state.value.payments = [
          ...state.value.payments,
            {
              "name":action.payload,
              "id":+ Math.random().toFixed(3)
            }
      ]
  },
  removePaymentMethod:(state,action) => {
    state.value.payments = state.value.payments.filter(item => item.id !== action.payload)
  },
  addExpiration:(state,action)=>{
    state.value.expirations = [
      ...state.value.expirations,
      {
        "title":action.payload.client + " - " + action.payload.payment,
        "start":action.payload.start,
        "end":action.payload.end
      }
    ]
  },
  removeExpiration:(state,action)=>{
    state.value.expirations = state.value.expirations.filter(item => item.title !== action.payload)
  }
  },
})

export const { addClient , removeClient , addPaymentMethod, removePaymentMethod, addExpiration ,removeExpiration } = gestionaleSlice.actions

export default gestionaleSlice.reducer