import Subheading from "components/heading/Subheading";
import { DescriptionList, DescriptionDetails, DescriptionTerm } from "@/components/description-list";

export default function ExampleDescriptionList() {
  return (
    <div className="-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8">
      <div className="-mt-2 -mb-6 w-full">
        <Subheading>Order #1011</Subheading>
        <DescriptionList>
          <DescriptionTerm>Customer</DescriptionTerm>
          <DescriptionDetails>Michael Foster</DescriptionDetails>

          <DescriptionTerm>Event</DescriptionTerm>
          <DescriptionDetails>Bear Hug: Live in Concert</DescriptionDetails>

          <DescriptionTerm>Amount</DescriptionTerm>
          <DescriptionDetails>$150.00 USD</DescriptionDetails>

          <DescriptionTerm>Amount after exchange rate</DescriptionTerm>
          <DescriptionDetails>US$150.00 &rarr; CA$199.79</DescriptionDetails>

          <DescriptionTerm>Fee</DescriptionTerm>
          <DescriptionDetails>$4.79 USD</DescriptionDetails>

          <DescriptionTerm>Net</DescriptionTerm>
          <DescriptionDetails>$1,955.00</DescriptionDetails>
        </DescriptionList>
      </div>
    </div>
  )
}
