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
    users:[
      {
        title:"Albano - Contanti",
        start: new Date(2021,6,0),
        end: new Date(2021,6,0)
      },
      {
        title:"Giggi d'alessio - Carta",
        start: new Date(2021,6,0),
        end: new Date(2021,6,0)
      },
      {
        title:"Enrico Papi - Carta",
        start: new Date(2021,6,0),
        end: new Date(2021,6,0)
      },
      {
        title:"Gennaros - Contanti ",
        describe:"CIAOCIAO",
        start: new Date(2022,11,0),
        end: new Date(2022,11,0)
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
  addUser:(state,action)=>{
    state.value.users = [
      ...state.value.users,
      {
        "title":action.payload.client + " - " + action.payload.payment,
        "start":action.payload.start,
        "end":action.payload.end
      }
    ]
  },
  removeUser:(state,action)=>{
    state.value.users = state.value.users.filter(item => item.title !== action.payload)
  }
  },
})

export const { addClient , removeClient , addPaymentMethod, removePaymentMethod, addUser ,removeUser } = gestionaleSlice.actions

export default gestionaleSlice.reducer