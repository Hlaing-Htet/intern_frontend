import { Select, SelectItem, TextInput, Textarea, Button } from "@tremor/react";
import { useState } from "react";
import { useFetchCategories } from "../../hooks/useCategoryApi";
import { useCreateProduct } from "../../hooks/useProductsApi";
// import { useNavigate } from "react-router-dom";

const CreateNewProductPage = () => {
  //   const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [createData, setCreateData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });
  const { data: Categories, isLoading } = useFetchCategories();
  const createProductMutation = useCreateProduct();

  if (isLoading) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = { ...createData, price: Number(createData.price), category };
    createProductMutation.mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center w-1/2 gap-4 mx-auto mt-14"
    >
      <TextInput
        value={createData.title}
        onChange={(e) =>
          setCreateData((prev) => ({ ...prev, title: e.target.value }))
        }
        placeholder="enter title"
      />
      <TextInput
        value={createData.price}
        onChange={(e) =>
          setCreateData((prev) => ({ ...prev, price: e.target.value }))
        }
        placeholder="enter price"
      />
      <Textarea
        value={createData.description}
        onChange={(e) =>
          setCreateData((prev) => ({ ...prev, description: e.target.value }))
        }
        id="description"
        placeholder="description"
        rows={6}
      />
      <TextInput
        value={createData.image}
        onChange={(e) =>
          setCreateData((prev) => ({ ...prev, image: e.target.value }))
        }
        placeholder="enter image url"
      />

      <Select
        id="distance"
        name="distance"
        value={category}
        onValueChange={setCategory}
        className="mt-2"
      >
        {Categories?.map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </Select>
      <Button loading={createProductMutation.isPending} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CreateNewProductPage;
