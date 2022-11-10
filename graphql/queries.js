import { gql } from "@apollo/client";

export const GET_POPULATION = gql`
{
getAllPopulations {
     id
     Area
     Country
     TotalPopulation
     Year
   }
}
`;
