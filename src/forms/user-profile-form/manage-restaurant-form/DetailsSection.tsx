import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const { control } = useFormContext();
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">
          Details
          <FormDescription>Enter the details about your restaurant</FormDescription>
        </h2>
      </div>
      <FormField
        control={control}
        name="restaurantName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Restaurant Name</FormLabel>
            <FormControl>
              <Input placeholder="Name" className="bg-white" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex gap-4">
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel> City</FormLabel>
              <FormControl>
                <Input placeholder="City" className="bg-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel> Country</FormLabel>
              <FormControl>
                <Input placeholder=" Country" className="bg-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={control}
        name="deliveryPrice"
        render={({ field }) => (
          <FormItem className="max-w-[25%]">
            <FormLabel>Delivery Price (£)</FormLabel>
            <FormControl>
              <Input placeholder="1.50" className="bg-white" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="estimatedDeliveryTime"
        render={({ field }) => (
          <FormItem className="max-w-[25%]">
            <FormLabel>Estimated Delivery Time (minutes)</FormLabel>
            <FormControl>
              <Input placeholder="30" className="bg-white" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default DetailsSection;
