import {useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductByIdAction } from "../actions/get-product-by-id.action";
import { createUpdateProductAction } from "../actions/create-update-product.action";
import type { Product } from '../../interfaces/product.interface';

export const useProduct = (id: string) => {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["product", { id }],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });

  //TODO Mutacion

  const mutation = useMutation({
    mutationFn: createUpdateProductAction,
    onSuccess:(product:Product)=>{
        //Invalidar cache
        queryClient.invalidateQueries({queryKey:['products']});
        queryClient.invalidateQueries({queryKey:['product',{id:product.id}]});


        //Actualizar query data
        queryClient.setQueryData(['products',{id:product.id}],product)
    }
  });

  /* const handleSubmitForm = async (productLike: Partial<Product>) => {
    console.log({ productLike });
  }; */

  return {
    ...query,
    mutation,
  };
};
