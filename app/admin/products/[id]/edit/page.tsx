import { Submitbutton } from "@/components/form/Buttons"
import CheckboxInput from "@/components/form/CheckboxInput"
import FormContainer from "@/components/form/FormContainer"
import FormInput from "@/components/form/FormInput"
import ImageInputContainer from "@/components/form/ImageInputContainer"
import PriceInput from "@/components/form/PriceInput"
import TextAreaInput from "@/components/form/TextAreaInput"
import { fetchAdminProductDetails, updateProcutAction, updateProductImageAction } from "@/utils/actions"

const EditProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params
  const product = await fetchAdminProductDetails(id)
  const { name, company, description, featured, price } = product
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">update product</h1>
      <div className="border p-8 rounded-md">
        {/* image input container */}
        <ImageInputContainer action={updateProductImageAction} name={name} image={product.image} text="update image">
          <input type="hidden" name="id" value={id} />
          <input type="hidden" name="url" value={product.image} />
        </ImageInputContainer>

        <FormContainer action={updateProcutAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput type="text" name="name" label="product name" defaultValue={name} />
            <FormInput type="text" name="company" label="company" defaultValue={company} />
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput name="description" labelText="product description" defaultValue={description} />
          <div className="mt-6">
            <CheckboxInput name="featured" label="featured" defaultChecked={featured} />
          </div>
          <Submitbutton text="update product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  )
}
export default EditProductPage