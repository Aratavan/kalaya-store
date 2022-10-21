import { getPercentageDiff } from "@lib/util/get-precentage-diff"
import { LineItem, Region } from "@medusajs/medusa"
import clsx from "clsx"
import { formatAmount } from "medusa-react"
import { CalculatedVariant } from "types/medusa"

type LineItemPriceProps = {
  variant: CalculatedVariant
  region: Region
  quantity: number
  style?: "default" | "tight"
  price:number
}

const LineItemPrice = ({
  variant,
  region,
  quantity,
  style = "default",
  price
}: LineItemPriceProps) => {
  const hasReducedPrice = variant.calculated_price < variant.original_price
  return (
  <>
      <span
        className={clsx("text-base-regular", {
          "text-rose-600": hasReducedPrice,
        })}
      >
        {formatAmount({
          amount: price,
          region: region,
          includeTaxes: false,
        })}
      </span>
      {hasReducedPrice && (
        <>
          <p>
            {style === "default" && (
              <span className="text-gray-500">Original: </span>
            )}
            <span className="line-through">
              {formatAmount({
                amount: price,
                region: region,
                includeTaxes: false,
              })}
            </span>
          </p>
          {style === "default" && (
            <span className="text-rose-600">
              -
              {getPercentageDiff(
                variant.original_price,
                variant.calculated_price
              )}
              %
            </span>
          )}
        </>
      )}
   </>
  )
}

export default LineItemPrice
