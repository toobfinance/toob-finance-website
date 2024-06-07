interface RoundedProps {
  strokeWidth?: number
  className?: string
}

const Rounded: React.FC<RoundedProps> = ({ strokeWidth, className }) => (
  <svg
    width="799"
    height="140"
    viewBox="0 0 799 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M100.85 8.89744C257.644 5.49846 596.522 12.5734 738.909 41.9565C892.264 73.6031 707.89 117.634 505.401 131.426C295.903 145.695 61.8205 128.003 15.8485 95.382C-61.7615 40.3111 236.995 2.66038 471.853 3.78442"
      stroke="#FB7901"
      strokeWidth={strokeWidth ?? "6"}
      strokeLinecap="round"
    />
  </svg>
)

export default Rounded
