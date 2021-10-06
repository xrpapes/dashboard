import Card from 'components/UI/Card';
import Panel from 'components/UI/Panel';
import SearchInput from 'components/UI/SearchInput';

export default function InputPanel({
  totalDividendsDistributed,
  address,
  setAddress,
  isValidAddress,
}) {
  const inputChangeHandler = event => {
    setAddress(event.target.value);
  };

  return (
    <Card>
      <h3>Input Your Address</h3>
      <Panel>
        Our dashboard allows you to see your XRP and dividend balance information that you have made
        by holding XRP Apes
      </Panel>
      <Panel>
        <span>Total XRP Paid</span>
        <span> {(totalDividendsDistributed ?? 0) / 1e18}</span>
      </Panel>
      <Panel>
        <div style={{ width: '100%' }}>
          <div>Connect Wallet to see more info</div>
          <br />
          <SearchInput
            placeholder='Paste Wallet Address Here'
            value={address}
            onChange={inputChangeHandler}
          />
          {isValidAddress && <div style={{ color: 'red', marginTop: 4 }}>Invalid Address</div>}
        </div>
      </Panel>
    </Card>
  );
}
