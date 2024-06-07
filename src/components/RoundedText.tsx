import Rounded from "./svgs/Rounded"

interface RoundedTextProps {
  children: React.ReactNode
  className?: string
  roundedClassName?: string
  strokeWidth?: number
}

const RoundedText: React.FC<RoundedTextProps> = ({
  children,
  className,
  roundedClassName,
  strokeWidth,
}) => {
  return (
    <div className={`${className} relative w-fit`}>
      <Rounded
        strokeWidth={strokeWidth}
        className={`absolute top-1/2 -translate-y-1/2 -left-[16%] -right-[16%] w-[132%] max-w-max z-0 ${roundedClassName}`}
      />
      <span className="relative z-[1] whitespace-nowrap">{children}</span>
    </div>
  )
}

export default RoundedText
