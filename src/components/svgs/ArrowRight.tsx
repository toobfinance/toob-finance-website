interface ArrowRightProps {
  className?: string
}

const ArrowRight: React.FC<ArrowRightProps> = ({ className }) => (
  <svg
    width="18"
    height="14"
    viewBox="0 0 18 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M1 7L17 7M17 7L11 13M17 7L11 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ArrowRight
