"use client";

import { removeCartItemAction, updateCartItemAction } from "@/utils/actions";
import { useState } from "react";
import { Submitbutton } from "../form/Buttons";
import FormContainer from "../form/FormContainer";
import SelectProductAmount, {
  Mode,
} from "../single-product/SelectProductAmount";
import { useToast } from "../ui/use-toast";

const ThirdColumn = ({ id, quantity }: { id: string; quantity: number }) => {
  const [amount, setAmount] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false)
  const {toast} = useToast()

  const handleAmountChange = async (value: number) => {
    setIsLoading(true)
    toast({description: 'Calculating...'})
    const result = await updateCartItemAction({
      amount: value,
      cartItemId: id
    })
    setAmount(value)
    toast({description: result.message})
    setIsLoading(false)
  };

  return (
    <div className="md:ml-8">
      <SelectProductAmount
        amount={amount}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={isLoading}
      />
      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <Submitbutton size="sm" className="mt-4" text="remove" />
      </FormContainer>
    </div>
  );
};
export default ThirdColumn;
