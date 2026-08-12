import Link from "next/link"
import { type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface LinkButtonProps
  extends React.ComponentPropsWithoutRef<typeof Link>,
    VariantProps<typeof buttonVariants> {
  className?: string
}

export function LinkButton({
  className,
  variant = "default",
  size = "default",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
