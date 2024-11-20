export default function Price(props) {
  const { value, decimals = 0 } = props;
  return <>₹{Number(value).toFixed(decimals)}</>;
}
