import { useMutation, useQuery , gql } from "@apollo/client";
export const GET_EXPIRATION_DATES = gql`
	 query getExpirationDates{
		expirationDates{
		 data { 
		  id,
		  attributes{
			reminder,
			data,
			amount,
			commission,
			status{
			  data{
				attributes{
				  sigle
				}
			  }
			}
			payment{
			  data{
				attributes{
				  method,
				}
			  }
			}
			costumer{
			  data{
				attributes{
				  businessName
				}
			  }
			}
		  }
		}
		}
	  }
	 `


      /* const fromStrapiToNormal = (arrayOfObjects)=>{
			for(let i = 0 ; i < arrayOfObjects.lenth ; i++){
				setProvaArray({
					...provaArray,
					costumer:arrayOfObjects[i].attributes.costumer.data.attributes.businessName,
					amount:arrayOfObjects[i].attributes.amount,
					commission:arrayOfObjects[i].attributes.commission,
					payment:arrayOfObjects[i].attributes.payment.data.attributes.method,
					status:arrayOfObjects[i].attributes.status.data.attributes.sigle,
					reminder:arrayOfObjects[i].attributes.reminder,
					date:arrayOfObjects[i].attributes.data,
				})
			}
		}  */

       /*  const example = [
            {
                costumer:"Gerry Scotti",
                amount:100,
                commission:5,
                payment:"carta",
                status:"e",
                reminder:new Date('December 17, 1995').toString().slice(0, 15),
                date:new Date('December 17, 1995').toString().slice(0, 15),
               },
        ] */